import { DifficultyLevel, DifficultyConfig } from '../types/game';

export const DIFFICULTY_CONFIG: Record<DifficultyLevel, DifficultyConfig> = {
  classic: {
    maxPicks: 10,
    description: 'Traditional gameplay with balanced odds'
  },
  low: {
    maxPicks: 10,
    description: 'Reasonable risk with reasonable reward',
  },
  medium: {
    maxPicks: 10,
    description: 'Increased risk with higher rewards'
  },
  high: {
    maxPicks: 10,
    description: 'Maximum risk for maximum rewards'
  },
};