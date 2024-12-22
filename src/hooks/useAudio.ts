import { useCallback } from 'react';
import SuccessFx from '../../src/success.mp3';
import FailureFx from '../../src/failure.mp3';

export const useAudio = () => {
  const playSound = useCallback((type: 'success' | 'failure') => {
    const audio = new Audio(
      type === 'success'
        ? SuccessFx
        : FailureFx
    );
    audio.volume = 0.3;
    audio.play();
  }, []);

  return { playSound };
};