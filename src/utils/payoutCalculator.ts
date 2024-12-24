import { GAME_COST } from '../config/constants';
import { DifficultyLevel } from '../types/game';
import { PAYOUT_TABLES } from '../config/payoutTables';

export const calculatePayout = (
  selectedCount: number,
  matchCount: number,
  difficulty: DifficultyLevel
): number => {
  // Adjust for zero-based array index
  const selectedIndex = selectedCount - 1;
  
  // Get payout multiplier table for selected number count
  const payoutTable = PAYOUT_TABLES[difficulty][selectedIndex];
  
  // Get multiplier for match count
  const multiplier = payoutTable[matchCount];
  
  // Calculate final payout
  return Math.floor(multiplier * GAME_COST);
};