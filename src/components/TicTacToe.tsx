import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';
import ScoreBoard from './ScoreBoard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<string | null>(null);
  const [winningCombination, setWinningCombination] = useState<number[] | null>(null);
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    ties: 0
  });

  const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];
  
  const checkWinner = (currentBoard: (string | null)[]) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] && 
        currentBoard[a] === currentBoard[b] && 
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        setWinningCombination(combination);
        updateScore(currentBoard[a]);
        toast(`${currentBoard[a]} wins the game!`);
        return true;
      }
    }
    return false;
  };

  const updateScore = (player: string | null) => {
    if (player === 'X') {
      setScores(prev => ({ ...prev, x: prev.x + 1 }));
    } else if (player === 'O') {
      setScores(prev => ({ ...prev, o: prev.o + 1 }));
    }
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWon = checkWinner(newBoard);
    
    if (!gameWon) {
      if (newBoard.every(cell => cell !== null)) {
        setScores(prev => ({ ...prev, ties: prev.ties + 1 }));
        toast('Game ended in a draw!');
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningCombination(null);
  };

  const resetScores = () => {
    setScores({ x: 0, o: 0, ties: 0 });
    resetGame();
    toast('Scores have been reset!');
  };

  const isDraw = !winner && board.every(cell => cell !== null);

  return (
    <div className="max-w-md mx-auto p-4">
      <ScoreBoard scores={scores} />
      <GameStatus 
        currentPlayer={currentPlayer} 
        winner={winner} 
        isDraw={isDraw} 
      />
      <GameBoard 
        board={board} 
        winningCombination={winningCombination} 
        onCellClick={handleCellClick} 
      />
      <div className="flex justify-center gap-3 mt-6">
        <Button onClick={resetGame} variant="outline">
          New Game
        </Button>
        <Button onClick={resetScores} variant="secondary">
          Reset Scores
        </Button>
      </div>
    </div>
  );
};

export default TicTacToe;
