
import React from 'react';
import { X, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameCellProps {
  value: string | null;
  onClick: () => void;
  isWinningCell: boolean;
}

const GameCell: React.FC<GameCellProps> = ({ value, onClick, isWinningCell }) => {
  return (
    <div 
      className={cn(
        "game-cell",
        isWinningCell && "win-cell"
      )}
      onClick={value ? undefined : onClick}
    >
      {value && (
        <div className="fade-in">
          {value === 'X' ? (
            <X className="x-mark" strokeWidth={3} />
          ) : (
            <Circle className="o-mark" strokeWidth={3} />
          )}
        </div>
      )}
    </div>
  );
};

export default GameCell;
