import React from 'react';
import { DifficultyLevel } from '../../types/game';
import { PAYOUT_TABLES } from '../../config/payoutTables';
import { PayoutRow } from './PayoutRow';

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
    <div className="w-full h-auto flex-start bg-neutral-700 p-4 rounded-full shadow-lg">

      
      {selectedCount === 0 ? (
      <></>      ) : (
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
    </div>
  );
};