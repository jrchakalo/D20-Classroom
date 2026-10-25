export type ModeId = 'classic' | 'halloween';

export type DifficultyId = 'easy' | 'medium' | 'hard';

export type Question = {
  id: string;
  text: string;
  answer: boolean;
};

export type AnswerStatus = 'correct' | 'incorrect' | null;

export type DifficultyMeta = {
  id: DifficultyId;
  label: string;
  tagline: string;
  description: string;
  /** Short hint shown in the game header. */
  audience: string;
};
