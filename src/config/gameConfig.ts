import { Difficulty, GameConfig } from '../types/game';

export const TOTAL_NUMBERS = 40;
export const INITIAL_CREDITS = 1000;
export const GAME_COST = 10;

export const DIFFICULTY_CONFIG: Record<Difficulty, GameConfig> = {
  easy: {
    maxPicks: 10,
    winProbability: 0.4,
    payoutMultiplier: 1.5,
  },
  medium: {
    maxPicks: 10,
    winProbability: 0.3,
    payoutMultiplier: 2,
  },
  hard: {
    maxPicks: 10,
    winProbability: 0.2,
    payoutMultiplier: 3,
  },
};
