import React from 'react';
import Cell from './Cell';

interface GridProps {
  selectedNumbers: number[];
  drawnNumbers: number[];
  onCellClick: (number: number) => void;
  disabled: boolean;
  maxPicks: number;
}

const Grid: React.FC<GridProps> = ({
  selectedNumbers,
  drawnNumbers,
  onCellClick,
  disabled,
  maxPicks,
}) => {
  const numbers = Array.from({ length: 40 }, (_, i) => i + 1);
  const rows = Array.from({ length: 5 }, (_, i) =>
    numbers.slice(i * 8, (i + 1) * 8)
  );

  return (
    <div className="grid mx-auto gap-3 mx-auto max-w-4xl p-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2 justify-center">
          {row.map((number) => (
            <Cell
              key={number}
              number={number}
              isSelected={selectedNumbers.includes(number)}
              isDrawn={drawnNumbers.includes(number)}
              onClick={onCellClick}
              disabled={
                disabled ||
                (selectedNumbers.length >= maxPicks &&
                  !selectedNumbers.includes(number))
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
