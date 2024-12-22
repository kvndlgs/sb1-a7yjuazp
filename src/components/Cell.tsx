import React from 'react';
import { CellProps } from '../types/game';

const Cell: React.FC<CellProps> = ({ number, isSelected, isDrawn, onClick, disabled }) => {
  const baseStyle = "w-12 h-12 rounded-lg flex items-center justify-center text-lg font-semibold transition-all duration-200";
  
  let cellStyle = "bg-[#F4ECDF] text-[#DAC095] border-b-4 border-[#DAC095]";
  
  if (isSelected && isDrawn) {
    cellStyle = "bg-[hsla(120,70%,50%,100%)] text-[hsla(0,0%,100%,100%)]";
  } else if (isSelected) {
    cellStyle = "bg-[hsla(256,67%,70%,100%)] text-[hsla(0,0%,100%,100%)]";
  } else if (isDrawn) {
    cellStyle = "bg-[#DAC095] text-[#F4ECDF] border-b-4 border-[#F4ECDF]";
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