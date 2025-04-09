
import React, { useEffect } from 'react';
import TicTacToe from '@/components/TicTacToe';
import { Grid2X2 } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = "A modern game of Tic Tac Toe";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-100 dark:from-background dark:to-slate-900 py-8 px-4">
      <div className="max-w-lg mx-auto pb-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2">
            <Grid2X2 className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">A modern game of Tic Tac Toe</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-2">A classic game with a modern twist</p>
        </header>
        
        <TicTacToe />
        
        <footer className="text-center mt-10 text-sm text-slate-500 dark:text-slate-400">
          <p>Take turns to place X and O marks on the board</p>
          <p className="mt-1">First player to get 3 in a row wins!</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
