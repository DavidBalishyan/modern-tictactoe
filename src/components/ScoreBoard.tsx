
import React from 'react';
import { X, Circle } from 'lucide-react';

interface ScoreBoardProps {
  scores: {
    x: number;
    o: number;
    ties: number;
  };
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores }) => {
  return (
    <div className="flex justify-center gap-6 mb-6 mt-2">
      <div className="bg-blue-50 rounded-lg p-3 shadow-sm text-center w-24">
        <div className="flex items-center justify-center mb-1">
          <X className="text-blue-600" size={20} />
          <span className="ml-1 font-semibold">Player</span>
        </div>
        <p className="text-2xl font-bold text-blue-600">{scores.x}</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-3 shadow-sm text-center w-24">
        <div className="font-semibold mb-1">Ties</div>
        <p className="text-2xl font-bold text-gray-600">{scores.ties}</p>
      </div>
      
      <div className="bg-rose-50 rounded-lg p-3 shadow-sm text-center w-24">
        <div className="flex items-center justify-center mb-1">
          <Circle className="text-rose-500" size={20} />
          <span className="ml-1 font-semibold">Player</span>
        </div>
        <p className="text-2xl font-bold text-rose-500">{scores.o}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
