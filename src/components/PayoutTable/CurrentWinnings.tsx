import React from 'react';
import { calculatePayout } from '../../utils/payoutCalculator';
import { DifficultyLevel } from '../../types/game';

interface CurrentWinningsProps {
  selectedCount: number;
  matchCount: number;
  difficulty: DifficultyLevel;
}

export const CurrentWinnings: React.FC<CurrentWinningsProps> = ({
  selectedCount,
  matchCount,
  difficulty,
}) => {
  const winnings = calculatePayout(selectedCount, matchCount, difficulty);

  return (
    <div className="mt-4 p-3 bg-[hsla(256,67%,70%,100%)] rounded-lg">
      <h4 className="text-white font-semibold mb-2">Current Winnings</h4>
      <div className="text-white text-xl font-bold">
        {winnings} credits
      </div>
    </div>
  );
};