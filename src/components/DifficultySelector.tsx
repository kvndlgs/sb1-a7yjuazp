import React from 'react';
import { Difficulty } from '../types/game';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
//  disabled: boolean;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelect,
//  disabled,
}) => {
  const difficulties: Difficulty[] = ['classic', 'medium', 'high'];

  return (
    /*
    <div className="flex gap-4 mb-6">
      {difficulties.map((difficulty) => (
        <button
          key={difficulty}
          className={`px-6 py-2 rounded-lg font-semibold capitalize transition-all
            ${selectedDifficulty === difficulty
              ? 'bg-[hsla(256,67%,70%,100%)] text-white'
              : 'bg-[hsla(256,13%,23%,100%)] text-white/90 hover:bg-[hsla(256,67%,70%,80%)]'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !disabled && onSelect(difficulty)}
          disabled={disabled}
        >
          {difficulty}
        </button>
      
      ))}
      </div>
      */
      <div className='grid p-4'>
        <select name='difficulty' className='appearance-none row-start-1 col-start-1 sm:py-2 sm:px-2 py-[5px]  rounded-sm bg-mauve text-mauve-500 drop-shadow-mauve text-center border-1 sm:border-2 border-mauve-500 text-mauve-500 focus-none outline-none active-none cursor-pointer'>
          <option value=''>{selectedDifficulty}</option>
          {
            difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty} onClick={() => onSelect(difficulty)}> {difficulty}</option>
            ))
          }
        </select>
      </div>
  );
};

export default DifficultySelector;