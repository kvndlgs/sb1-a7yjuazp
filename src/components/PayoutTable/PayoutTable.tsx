import React from 'react';
import { DifficultyLevel } from '../../types/game';
import { PAYOUT_TABLES } from '../../config/payoutTables';
import { PayoutRow } from './PayoutRow';
import { CurrentWinnings } from './CurrentWinnings';

interface PayoutTableProps {
  difficulty: DifficultyLevel;
  selectedCount: number;
  matchCount?: number;
}

export const PayoutTable: React.FC<PayoutTableProps> = ({
  difficulty,
  selectedCount,
  matchCount,
}) => {
  // Get payout table for current selection count
  const payoutTable = selectedCount > 0 
    ? PAYOUT_TABLES[difficulty][selectedCount - 1]
    : [];

  return (
    <div className="w-full flex-row flex-start bg-neutral-700 p-4 rounded-lg shadow-lg">
      <h3 className="text-white font-semibold mb-3">Payouts</h3>
      
      {selectedCount === 0 ? (
        <p className="text-white/70 text-sm">Select numbers to see potential payouts</p>
      ) : (
        <div className="flex items-center justify-around">
          {payoutTable.map((multiplier, index) => (
            multiplier > 0 && (
              <PayoutRow
                key={index}
                matches={index}
                multiplier={multiplier}
                isActive={matchCount === index}
              />
            )
          ))}
        </div>
      )}

      {matchCount !== undefined && selectedCount > 0 && (
        <CurrentWinnings
          selectedCount={selectedCount}
          matchCount={matchCount}
          difficulty={difficulty}
        />
      )}
    </div>
  );
};