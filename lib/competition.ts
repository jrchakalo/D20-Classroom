import { getDeck, shuffle } from './game';
import type {
  CompetitionLevelId,
  CompetitionLevelMeta,
  CompetitionPhase,
  DifficultyId,
  ProgressiveRounds,
  Question,
  QuestionTier,
  Student,
  StudentOrder,
} from './types';

const DIFFICULTY_ORDER: DifficultyId[] = ['easy', 'medium', 'hard'];

const TIER_LABELS: Record<QuestionTier, string> = {
  1: 'Starter',
  2: 'Core',
  3: 'Challenge',
};

const DIFFICULTY_LABELS: Record<DifficultyId, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

export const COMPETITION_LEVELS: CompetitionLevelMeta[] = [
  {
    id: 'easy',
    label: 'Easy',
    tagline: 'Gentle start',
    description: 'Easiest questions first, then a small taste of medium.',
    phasesLabel: '5 phases',
  },
  {
    id: 'medium',
    label: 'Medium',
    tagline: 'Balanced climb',
    description: 'Medium questions from starter to challenge, then one hard round.',
    phasesLabel: '4 phases',
  },
  {
    id: 'hard',
    label: 'Hard',
    tagline: 'No mercy',
    description: 'Only hard questions, from starter to the toughest tier.',
    phasesLabel: '3 phases',
  },
  {
    id: 'progressive',
    label: 'Progressive',
    tagline: 'Full journey',
    description: 'Two or three rounds at every difficulty. The ultimate marathon.',
    phasesLabel: '6 or 9 phases',
  },
];

function makePhase(
  difficulty: DifficultyId,
  tier: QuestionTier,
  label: string,
  shortLabel: string,
  index = 0
): CompetitionPhase {
  return {
    id: `${difficulty}-${tier}-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    index,
    difficulty,
    tier,
    label,
    shortLabel,
  };
}

function withIndexes(phases: CompetitionPhase[]): CompetitionPhase[] {
  return phases.map((phase, index) => ({
    ...phase,
    index,
    id: `${phase.id}-${index}`,
  }));
}

function standardPhase(difficulty: DifficultyId, tier: QuestionTier): CompetitionPhase {
  return makePhase(
    difficulty,
    tier,
    `${DIFFICULTY_LABELS[difficulty]} · ${TIER_LABELS[tier]}`,
    `${DIFFICULTY_LABELS[difficulty]} ${TIER_LABELS[tier].toLowerCase()}`
  );
}

/**
 * Builds the phase ladder for a competition.
 *
 * Easy:        easy 1 → easy 2 → easy 3 → medium 1 → medium 2
 * Medium:      medium 1 → medium 2 → medium 3 → hard 1
 * Hard:        hard 1 → hard 2 → hard 3
 * Progressive: 2 or 3 rounds in each difficulty (easy → medium → hard)
 */
export function buildCompetitionPhases(
  level: CompetitionLevelId,
  progressiveRounds: ProgressiveRounds
): CompetitionPhase[] {
  let phases: CompetitionPhase[];

  switch (level) {
    case 'easy':
      phases = [
        standardPhase('easy', 1),
        standardPhase('easy', 2),
        standardPhase('easy', 3),
        standardPhase('medium', 1),
        standardPhase('medium', 2),
      ];
      break;
    case 'medium':
      phases = [
        standardPhase('medium', 1),
        standardPhase('medium', 2),
        standardPhase('medium', 3),
        standardPhase('hard', 1),
      ];
      break;
    case 'hard':
      phases = [
        standardPhase('hard', 1),
        standardPhase('hard', 2),
        standardPhase('hard', 3),
      ];
      break;
    case 'progressive':
      phases = DIFFICULTY_ORDER.flatMap((difficulty) =>
        Array.from({ length: progressiveRounds }, (_, roundIndex) => {
          const tier = (roundIndex + 1) as QuestionTier;
          const round = roundIndex + 1;
          return makePhase(
            difficulty,
            tier,
            `${DIFFICULTY_LABELS[difficulty]} · Round ${round}/${progressiveRounds}`,
            `${DIFFICULTY_LABELS[difficulty]} ${round}/${progressiveRounds}`
          );
        })
      );
      break;
  }

  return withIndexes(phases);
}

export function getCompetitionLevelMeta(level: CompetitionLevelId): CompetitionLevelMeta {
  return (
    COMPETITION_LEVELS.find((item) => item.id === level) ?? COMPETITION_LEVELS[0]
  );
}

export function getPhaseCount(
  level: CompetitionLevelId,
  progressiveRounds: ProgressiveRounds
): number {
  return buildCompetitionPhases(level, progressiveRounds).length;
}

/** Fisher–Yates order for the students in one phase. */
export function orderStudents(students: Student[], order: StudentOrder): Student[] {
  return order === 'random' ? shuffle(students) : [...students];
}

export function normalizeStudentName(name: string): string {
  return name.replace(/\s+/g, ' ').trim();
}

export function createStudent(name: string): Student {
  const normalized = normalizeStudentName(name);
  const randomPart =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return {
    id: `student-${randomPart}`,
    name: normalized,
  };
}

/** Removes duplicates and blank names from a pasted list. */
export function parseStudentNames(input: string): string[] {
  return input
    .split(/[\n,;]+/)
    .map(normalizeStudentName)
    .filter(Boolean);
}

export type PhaseQuestion = {
  studentId: string;
  question: Question;
};

function uniqueQuestions(questions: Question[]): Question[] {
  const seen = new Set<string>();
  return questions.filter((question) => {
    if (seen.has(question.id)) return false;
    seen.add(question.id);
    return true;
  });
}

function unusedQuestions(questions: Question[], usedIds: ReadonlySet<string>): Question[] {
  return shuffle(questions.filter((question) => !usedIds.has(question.id)));
}

/**
 * Draws one question per student for a phase.
 *
 * The primary tier is used first. If a large class needs more questions than a
 * tier has, the draw expands to the rest of the same difficulty and finally to
 * the other difficulties. Already-used questions are only reused when the whole
 * deck has been exhausted.
 *
 * The passed `usedIds` set is updated with every question that is assigned.
 */
export function drawPhaseQuestions(
  phase: CompetitionPhase,
  students: Student[],
  usedIds: Set<string>
): PhaseQuestion[] {
  if (students.length === 0) return [];

  const primary = getDeck('halloween', phase.difficulty).filter(
    (question) => (question.tier ?? 2) === phase.tier
  );
  const sameDifficulty = getDeck('halloween', phase.difficulty).filter(
    (question) => (question.tier ?? 2) !== phase.tier
  );
  const otherDifficulties = DIFFICULTY_ORDER.filter(
    (difficulty) => difficulty !== phase.difficulty
  ).flatMap((difficulty) => getDeck('halloween', difficulty));

  const freshPool = uniqueQuestions([
    ...unusedQuestions(primary, usedIds),
    ...unusedQuestions(sameDifficulty, usedIds),
    ...unusedQuestions(otherDifficulties, usedIds),
  ]);

  const usedFallback = shuffle(uniqueQuestions([...primary, ...sameDifficulty, ...otherDifficulties]));

  const pool = uniqueQuestions([...freshPool, ...usedFallback]);

  return students.map((student, index) => {
    const question = pool[index % pool.length];
    usedIds.add(question.id);
    return { studentId: student.id, question };
  });
}
