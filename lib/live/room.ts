import { shuffle } from '../game';
import type { DifficultyId, LiveOptionIndex, LiveQuestion } from '../types';
import { LIVE_QUESTIONS } from '../live-questions';
import type { LiveScoreRow } from './protocol';

/**
 * Pure helpers for the Halloween Live room mode: room codes, question runs,
 * option shuffling and the speed-based score.
 */

/** Unambiguous alphabet (no I, O, 0, 1, L). */
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
/** Households type three letters/digits on a phone keyboard. 5 is game-show-like. */
export const CODE_LENGTH = 5;

export function randomRoomCode(): string {
  let code = '';
  for (let i = 0; i < CODE_LENGTH; i += 1) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return code;
}

/** Accepts only alphanumerics, uppercase, 3–6 chars. Returns null otherwise. */
export function sanitizeRoomCode(raw: string): string | null {
  const code = raw.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  return code.length >= 3 && code.length <= 6 ? code : null;
}

export function randomId(prefix: string): string {
  const unique =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10);
  return `${prefix}-${unique}`;
}

export function getLiveDeck(difficulty: DifficultyId): LiveQuestion[] {
  return LIVE_QUESTIONS[difficulty] ?? LIVE_QUESTIONS.easy;
}

/**
 * Builds a run of questions spread across the three tiers (1 → 2 → 3,
 * cycling) so a 8/12/16-question run always mixes all tiers.
 */
export function buildQuestionRun(difficulty: DifficultyId, count: number): LiveQuestion[] {
  const deck = getLiveDeck(difficulty);
  const byTier = [1, 2, 3].map((tier) => shuffle(deck.filter((q) => q.tier === tier)));
  const run: LiveQuestion[] = [];
  let tierPos = 0;

  while (run.length < count) {
    const bucket = byTier[tierPos % 3];
    const next = bucket.shift();
    if (next) run.push(next);
    if (!next) byTier[tierPos % 3] = shuffle(deck.filter((q) => q.tier === tierPos % 3 + 1));
    tierPos += 1;
  }

  return run;
}

export type PreparedLiveQuestion = {
  id: string;
  text: string;
  /** Options already shuffled — ordered exactly as displayed to everyone. */
  options: string[];
  /** Index of the correct option among the shuffled `options`. */
  correctIndex: number;
};

/** Shuffles the four options so the correct answer is never the same slot. */
export function prepareQuestion(question: LiveQuestion): PreparedLiveQuestion {
  const correct = question.options[question.correctIndex];
  const options = shuffle(question.options);

  return {
    id: question.id,
    text: question.text,
    options,
    correctIndex: options.indexOf(correct) as LiveOptionIndex,
  };
}

/** Fast fingers earn more points: 1000 at once down to 100 at the buzzer. */
export function scoreForAnswer(elapsedMs: number, timeoutMs: number): number {
  const ratio = Math.min(Math.max(elapsedMs / timeoutMs, 0), 1);
  const points = 1000 - Math.floor(ratio * 900);
  return Math.max(points, 100);
}

export function formatPoints(points: number): string {
  return `+${points.toLocaleString('pt-BR')}`;
}

/** Sorts the leaderboard like a game-show board: score first, name second. */
export function sortLeaderboard(rows: LiveScoreRow[]): LiveScoreRow[] {
  return [...rows].sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

/**
 * Answer choices shown to the players: shape + color, matching the projector,
 * so reading the screen correlates 1:1 with the phone buttons.
 */
export const ANSWER_BUTTONS = [
  { shape: '▲', bg: '#e21b3c' },
  { shape: '◆', bg: '#1368ce' },
  { shape: '●', bg: '#d89e00' },
  { shape: '■', bg: '#26890c' },
] as const;
