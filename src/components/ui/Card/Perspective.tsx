'use client';

import { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useMousePosition } from '@/hooks/useMousePosition';
import useTiltRamp from './useTiltRamp';

type Props = {
  children: React.ReactNode;
};

export default function Perspective({ children }: Props) {
  const isEnabled = useMediaQuery(
    '(min-width: 33.75rem) and (prefers-reduced-motion: no-preference)',
  );
  const { ref, mousePos } = useMousePosition();
  const { strength, startRamp, resetRamp } = useTiltRamp();
  const [isHovered, setIsHovered] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const { width, height } = event.currentTarget.getBoundingClientRect();
    setSize({ width, height });
    setIsHovered(true);
    startRamp();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    resetRamp();
  };

  const rotateX = strength.y * (size.height / 2 - mousePos.y);
  const rotateY = -strength.x * (size.width / 2 - mousePos.x);

  const tiltStyle: React.CSSProperties =
    isEnabled && isHovered
      ? {
          transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          backfaceVisibility: 'hidden',
        }
      : { transition: 'transform 0.3s' };

  return (
    <div
      className="relative"
      style={{ padding: '30px', margin: '-30px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={ref} style={tiltStyle} className="relative rounded-xl">
        {children}
      </div>
    </div>
  );
}
