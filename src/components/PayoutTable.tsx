import React from 'react';
import { DIFFICULTY_CONFIG } from '../config/gameConfig';
import { Difficulty } from '../types/game';

interface PayoutTableProps {
  difficulty: Difficulty;
}

const PayoutTable: React.FC<PayoutTableProps> = ({ difficulty }) => {
  const config = DIFFICULTY_CONFIG[difficulty];
  const maxPicks = config.maxPicks;
  const multiplier = config.payoutMultiplier;

  return (
    <div className="bg-[hsla(256,13%,23%,100%)] p-2 rounded-lg">
      <h3 className="text-white font-semibold mb-2">Payout Table</h3>
      <div className="space-y-1 text-sm">
        {Array.from({ length: maxPicks + 1 }).map((_, i) => (
          <div key={i} className="flex justify-around text-white/90">
            <span>{i} X:</span>
            <span>{Math.floor(i * multiplier * 10)}x</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayoutTable;
