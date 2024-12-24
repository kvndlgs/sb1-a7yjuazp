import React, { useState, useCallback } from 'react';
import { Play, RefreshCw } from 'lucide-react';
import { DifficultyLevel, GameState } from './types/game';
import { DIFFICULTY_CONFIG } from './config/difficultyConfig';
import { INITIAL_CREDITS, GAME_COST, DRAWN_NUMBERS } from './config/constants';
import Grid from './components/Grid';
import DifficultySelector from './components/DifficultySelector';
import { PayoutTable } from './components/PayoutTable';
import { useAudio } from './hooks/useAudio';
import { calculatePayout } from './utils/payoutCalculator';


const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    difficulty: 'classic',
    selectedNumbers: [],
    drawnNumbers: [],
    credits: INITIAL_CREDITS,
    isPlaying: false,
    gameResult: null,
  });

  const { playSound } = useAudio();

  const handleDifficultyChange = (difficulty: DifficultyLevel) => {
    setGameState((prev) => ({
      ...prev,
      difficulty,
      selectedNumbers: [],
      drawnNumbers: [],
      gameResult: null,
    }));
  };

  const handleCellClick = (number: number) => {
    if (gameState.isPlaying) return;

    setGameState((prev) => {
      const config = DIFFICULTY_CONFIG[prev.difficulty];
      const isSelected = prev.selectedNumbers.includes(number);

      if (isSelected) {
        return {
          ...prev,
          selectedNumbers: prev.selectedNumbers.filter((n) => n !== number),
        };
      }

      if (prev.selectedNumbers.length >= config.maxPicks) return prev;

      return {
        ...prev,
        selectedNumbers: [...prev.selectedNumbers, number],
      };
    });
  };

  const generateDrawnNumbers = useCallback(() => {
    const numbers = new Set<number>();
    while (numbers.size < DRAWN_NUMBERS) {
      numbers.add(Math.floor(Math.random() * 40) + 1);
    }
    return Array.from(numbers);
  }, []);

  const handlePlay = () => {
    if (gameState.credits < GAME_COST) return;

    setGameState((prev) => ({
      ...prev,
      isPlaying: true,
      credits: prev.credits - GAME_COST,
    }));

    const drawnNumbers = generateDrawnNumbers();
    const matches = gameState.selectedNumbers.filter((n) =>
      drawnNumbers.includes(n)
    ).length;
    
    const winnings = calculatePayout(
      gameState.selectedNumbers.length,
      matches,
      gameState.difficulty
    );

    setTimeout(() => {
      setGameState((prev) => {
        const won = winnings > 0;
        playSound(won ? 'success' : 'failure');

        return {
          ...prev,
          drawnNumbers,
          credits: prev.credits + winnings,
          isPlaying: false,
          gameResult: won ? 'won' : 'lost',
        };
      });
    }, 1000);
  };

  const handleReset = () => {
    setGameState((prev) => ({
      ...prev,
      selectedNumbers: [],
      drawnNumbers: [],
      gameResult: null,
    }));
  };

  const config = DIFFICULTY_CONFIG[gameState.difficulty];

  return (
    <div className="min-h-screen bg-[hsla(256,13%,23%,100%)] text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <DifficultySelector
              selectedDifficulty={gameState.difficulty}
              onSelect={handleDifficultyChange}
              disabled={gameState.isPlaying}
            />
            <div className="space-y-2">
              <p className="text-lg">Balance {gameState.credits}</p>
              <p>
                Picks: {gameState.selectedNumbers.length}/{config.maxPicks}
              </p>
            </div>
          </div>
        </div>

        <Grid
          selectedNumbers={gameState.selectedNumbers}
          drawnNumbers={gameState.drawnNumbers}
          onCellClick={handleCellClick}
          disabled={gameState.isPlaying}
          maxPicks={config.maxPicks}
        />
        <div>
        <PayoutTable
            difficulty={gameState.difficulty}
            selectedCount={gameState.selectedNumbers.length}
            matchCount={
              gameState.drawnNumbers.length > 0
                ? gameState.selectedNumbers.filter((n) =>
                    gameState.drawnNumbers.includes(n)
                  ).length
                : undefined
            }
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2
              ${
                gameState.selectedNumbers.length > 0 && !gameState.isPlaying
                  ? 'bg-[hsla(256,67%,70%,100%)] hover:bg-[hsla(256,67%,70%,90%)]'
                  : 'bg-[hsla(256,13%,23%,100%)] opacity-50 cursor-not-allowed'
              }`}
            onClick={handlePlay}
            disabled={
              gameState.selectedNumbers.length === 0 ||
              gameState.isPlaying ||
              gameState.credits < GAME_COST
            }
          >
            <Play size={20} />
            Play ({GAME_COST} credits)
          </button>
          <button
            className="px-6 py-2 rounded-lg font-semibold flex items-center gap-2 bg-[hsla(256,13%,23%,100%)] hover:bg-[hsla(256,13%,28%,100%)]"
            onClick={handleReset}
            disabled={gameState.isPlaying}
          >
            <RefreshCw size={20} />
            Clear
          </button>
        </div>

        {gameState.gameResult && (
          <div className="text-center text-xl font-semibold">
            {gameState.gameResult === 'won' ? (
              <p className="text-green-400">Won!</p>
            ) : (
              <p className="text-red-400">Lost!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;