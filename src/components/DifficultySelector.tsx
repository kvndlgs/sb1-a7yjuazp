import React from 'react';
import { Difficulty } from '../types/game';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
  disabled: boolean;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelect,
  disabled,
}) => {
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
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
  );
};

export default DifficultySelector;