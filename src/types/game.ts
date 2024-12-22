export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
  maxPicks: number;
  winProbability: number;
  payoutMultiplier: number;
}

export interface GameState {
  difficulty: Difficulty;
  selectedNumbers: number[];
  drawnNumbers: number[];
  credits: number;
  isPlaying: boolean;
  gameResult: 'won' | 'lost' | null;
}

export interface CellProps {
  number: number;
  isSelected: boolean;
  isDrawn: boolean;
  onClick: (number: number) => void;
  disabled: boolean;
}