import { CLASSIC_QUESTIONS } from './classic-questions';
import { HALLOWEEN_QUESTIONS } from './halloween-questions';
import type { DifficultyId, DifficultyMeta, ModeId, Question } from './types';

export const DIFFICULTIES: DifficultyMeta[] = [
  {
    id: 'easy',
    label: 'Easy',
    tagline: 'Little monsters',
    description: 'Short, friendly questions for the youngest players.',
    audience: 'Ages 6–9',
  },
  {
    id: 'medium',
    label: 'Medium',
    tagline: 'Brave trick-or-treaters',
    description: 'A mix of spooky facts, movies and games for older kids.',
    audience: 'Ages 9–12',
  },
  {
    id: 'hard',
    label: 'Hard',
    tagline: 'Midnight legends',
    description: 'Trickier lore and pop-culture details for teens.',
    audience: 'Ages 12+',
  },
];

export const MODES: { id: ModeId; label: string; description: string }[] = [
  {
    id: 'halloween',
    label: 'Halloween Mode',
    description:
      'Pumpkins, ghosts, movies, games and Brazilian folklore. Play with a D20 or run a knockout competition.',
  },
  {
    id: 'classic',
    label: 'Classroom Classic',
    description: 'The original mixed-topic deck with games, tech and pop culture.',
  },
];

export function getDeck(mode: ModeId, difficulty: DifficultyId): Question[] {
  return mode === 'classic' ? CLASSIC_QUESTIONS : HALLOWEEN_QUESTIONS[difficulty];
}

/** Fisher–Yates shuffle. Returns a new array, leaving the deck untouched. */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getDifficultyMeta(difficulty: DifficultyId): DifficultyMeta {
  return DIFFICULTIES.find((item) => item.id === difficulty) ?? DIFFICULTIES[0];
}

export const DICE_NUMBERS = Array.from({ length: 20 }, (_, index) => index + 1);
