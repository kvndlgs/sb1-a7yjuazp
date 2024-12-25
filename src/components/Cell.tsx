import React from 'react';
import { CellProps } from '../types/game';

const Cell: React.FC<CellProps> = ({ number, isSelected, isDrawn, onClick, disabled }) => {
  const baseStyle = "w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg flex items-center justify-center  text-md sm:text-lg font-semibold transition-all duration-200";
  
  let cellStyle = "bg-bread-200 text-bread-500 border-1 sm:border-2 border-bread-500 drop-shadow-bread";
  
  if (isSelected && isDrawn) {
    cellStyle = "bg-success text-success-500 border-2 border-success-500 drop-shadow-success";
  } else if (isSelected) {
    cellStyle = "bg-mauve text-mauve-500 drop-shadow-mauve border-2 border-mauve-500";
  } else if (isDrawn) {
    cellStyle = "bg-error text-error-500 border-error-500 border-2 drop-shadow-error";
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