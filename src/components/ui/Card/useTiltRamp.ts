import { useEffect, useRef, useState } from 'react';

const BASE = { x: 0.005, y: 0.008 };
const TARGET = { x: 0.015, y: 0.025 };
const STEP_MS = 10;
const STEPS = 500 / STEP_MS;

export default function useTiltRamp() {
  const [strength, setStrength] = useState(BASE);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => stop, []);

  const startRamp = () => {
    stop();
    let step = 0;
    intervalRef.current = setInterval(() => {
      if (step >= STEPS) {
        stop();
        return;
      }
      setStrength((prev) => ({
        x: prev.x + (TARGET.x - BASE.x) / STEPS,
        y: prev.y + (TARGET.y - BASE.y) / STEPS,
      }));
      step++;
    }, STEP_MS);
  };

  const resetRamp = () => {
    stop();
    setStrength(BASE);
  };

  return { strength, startRamp, resetRamp };
}
