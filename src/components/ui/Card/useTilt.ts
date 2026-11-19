import { useEffect, useRef } from 'react';

const MAX_TILT_DEG = 4;
const MAX_EDGE_LIFT_PX = 20;
// share of the remaining distance covered per 60Hz frame; scaled by real frame
// time so the ease feels the same on 60Hz, 120Hz or a slow device
const SMOOTHING = 0.15;
const FRAME_MS = 1000 / 60;
const MAX_STEP_MS = 100;
const SETTLE_DEG = 0.01;

type AxisType = { x: number; y: number };

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

// An edge moves by (size / 2) * sin(angle), so big cards get a smaller angle
// to keep every card's edges moving about the same distance.
function maxTiltFor(size: number) {
  if (size <= 0) return 0;
  const radians = Math.asin(Math.min(1, MAX_EDGE_LIFT_PX / (size / 2)));
  return Math.min(MAX_TILT_DEG, (radians * 180) / Math.PI);
}

// Nothing here touches React state: the card's size lives in a ref, and the
// tilt eases in a requestAnimationFrame loop that writes straight to the DOM.
export default function useTilt(enabled: boolean) {
  const cardRef = useRef<HTMLDivElement>(null);
  const maxTilt = useRef<AxisType>({ x: 0, y: 0 });
  const target = useRef<AxisType>({ x: 0, y: 0 });
  const current = useRef<AxisType>({ x: 0, y: 0 });
  const frame = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // fires once on mount, then only when the card's layout size changes
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      maxTilt.current = { x: maxTiltFor(height), y: maxTiltFor(width) };
    });
    observer.observe(card);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, []);

  const step = (time: number) => {
    const card = cardRef.current;
    if (!card) return;

    const elapsed = lastTime.current
      ? Math.min(time - lastTime.current, MAX_STEP_MS)
      : FRAME_MS;
    lastTime.current = time;
    const ease = 1 - (1 - SMOOTHING) ** (elapsed / FRAME_MS);

    const now = current.current;
    const goal = target.current;
    now.x += (goal.x - now.x) * ease;
    now.y += (goal.y - now.y) * ease;

    const settled =
      Math.abs(goal.x - now.x) < SETTLE_DEG &&
      Math.abs(goal.y - now.y) < SETTLE_DEG;

    if (settled && goal.x === 0 && goal.y === 0) {
      now.x = 0;
      now.y = 0;
      card.style.transform = '';
      frame.current = 0;
      lastTime.current = 0;
      return;
    }

    card.style.transform = `perspective(1000px) rotateX(${now.x}deg) rotateY(${now.y}deg)`;
    if (settled) {
      frame.current = 0;
      lastTime.current = 0;
      return;
    }
    frame.current = requestAnimationFrame(step);
  };

  const start = () => {
    if (!frame.current) frame.current = requestAnimationFrame(step);
  };

  // position comes from the untransformed wrapper, never the tilted card, or
  // the tilt feeds back on itself; it's read per move because scrolling moves it
  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width);
    const y = clamp((event.clientY - rect.top) / rect.height);
    target.current = {
      x: (0.5 - y) * 2 * maxTilt.current.x,
      y: (x - 0.5) * 2 * maxTilt.current.y,
    };
    start();
  };

  const onMouseLeave = () => {
    target.current = { x: 0, y: 0 };
    start();
  };

  return { cardRef, onMouseMove, onMouseLeave };
}
