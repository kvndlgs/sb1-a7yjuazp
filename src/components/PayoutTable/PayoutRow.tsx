import React from 'react';
import { GAME_COST } from '../../config/constants';

interface PayoutRowProps {
  matches: number;
  multiplier: number;
  isActive?: boolean;
}

export const PayoutRow: React.FC<PayoutRowProps> = ({ matches, multiplier, isActive = false }) => {
  const payout = Math.floor(multiplier * GAME_COST);
  
  return (
    <div className={`
      flex justify-between py-1 px-2 rounded
      ${isActive ? 'bg-[hsla(256,67%,70%,100%)] text-white' : 'text-white/80'}
    `}>
      <span>{matches} matches</span>
      <span>{payout}x</span>
    </div>
  );
};