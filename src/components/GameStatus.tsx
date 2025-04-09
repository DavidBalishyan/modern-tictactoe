
import React from 'react';
import { X, Circle } from 'lucide-react';

interface GameStatusProps {
  currentPlayer: string;
  winner: string | null;
  isDraw: boolean;
}

const GameStatus: React.FC<GameStatusProps> = ({ currentPlayer, winner, isDraw }) => {
  return (
    <div className="text-center mb-4 h-16 flex items-center justify-center">
      {winner ? (
        <div className="text-2xl font-bold fade-in flex items-center">
          <span className="mr-2">Winner:</span>
          {winner === 'X' ? (
            <X className="x-mark" size={28} />
          ) : (
            <Circle className="o-mark" size={28} />
          )}
        </div>
      ) : isDraw ? (
        <div className="text-2xl font-bold text-gray-700 fade-in">
          Game Draw!
        </div>
      ) : (
        <div className="text-xl fade-in flex items-center justify-center">
          <span className="mr-2">Current turn:</span>
          {currentPlayer === 'X' ? (
            <X className="x-mark" size={24} />
          ) : (
            <Circle className="o-mark" size={24} />
          )}
        </div>
      )}
    </div>
  );
};

export default GameStatus;
