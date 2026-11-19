'use client';

import { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const MAX_TILT_DEG = 3;

type TiltType = { rotateX: number; rotateY: number };

type Props = {
  children: React.ReactNode;
};

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export default function Perspective({ children }: Props) {
  const isEnabled = useMediaQuery(
    '(min-width: 33.75rem) and (hover: hover) and (prefers-reduced-motion: no-preference)',
  );
  const [tilt, setTilt] = useState<TiltType | null>(null);

  // measure the untransformed wrapper, never the tilted card, or the tilt feeds back on itself
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isEnabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width);
    const y = clamp((event.clientY - rect.top) / rect.height);

    setTilt({
      rotateX: (0.5 - y) * 2 * MAX_TILT_DEG,
      rotateY: (x - 0.5) * 2 * MAX_TILT_DEG,
    });
  };

  const tiltStyle: React.CSSProperties = tilt
    ? {
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 100ms ease-out',
      }
    : { transition: 'transform 300ms ease-out' };

  return (
    <div
      className="relative"
      style={{ padding: '30px', margin: '-30px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt(null)}
    >
      <div style={tiltStyle} className="relative rounded-xl">
        {children}
      </div>
    </div>
  );
}
