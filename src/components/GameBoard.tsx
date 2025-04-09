
import React from 'react';
import GameCell from './GameCell';
import { X, Circle } from 'lucide-react';

interface GameBoardProps {
  board: (string | null)[];
  winningCombination: number[] | null;
  onCellClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ board, winningCombination, onCellClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      {board.map((cell, index) => (
        <GameCell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          isWinningCell={winningCombination?.includes(index) || false}
        />
      ))}
    </div>
  );
};

export default GameBoard;
