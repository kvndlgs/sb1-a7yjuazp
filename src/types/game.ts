export type DifficultyLevel = 'classic' | 'low' | 'medium' | 'high';

export interface DifficultyConfig {
  maxPicks: number;
  description: string;
}

export interface GameState {
  difficulty: DifficultyLevel;
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