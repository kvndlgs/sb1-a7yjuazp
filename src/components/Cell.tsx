import React from 'react';
import { CellProps } from '../types/game';

const Cell: React.FC<CellProps> = ({ number, isSelected, isDrawn, onClick, disabled }) => {
  const baseStyle = "w-14 h-14 rounded-lg flex items-center justify-center text-lg font-semibold transition-all duration-200";
  
  let cellStyle = "bg-bread-200 text-bread-500 border-b-4 border-bread-500";
  
  if (isSelected && isDrawn) {
    cellStyle = "bg-success text-success-500 border-success-500 border-b-4";
  } else if (isSelected) {
    cellStyle = "bg-mauve text-mauve-500 border-mauve-500 border-b-4";
  } else if (isDrawn) {
    cellStyle = "bg-error text-error-500 border-error-500 border-b-4";
  }

  return (
    <button
      className={`${baseStyle} ${cellStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
      onClick={() => !disabled && onClick(number)}
      disabled={disabled}
    >
      {number}
    </button>
  );
};

export default Cell;