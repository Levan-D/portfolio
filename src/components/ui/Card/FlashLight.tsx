'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import { useMousePosition } from '@/hooks/useMousePosition';

type Props = {
  children: React.ReactNode;
};

export default function FlashLight({ children }: Props) {
  const { ref, mousePos } = useMousePosition();
  const isEnabled = useMediaQuery('(min-width: 33.75rem)');

  const glimmer = (color: string, fadeAt: string) => ({
    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${color}, transparent ${fadeAt})`,
  });

  return (
    <div ref={ref} className="relative rounded-xl">
      {isEnabled && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-1 rounded-xl"
            style={glimmer('rgba(203, 213, 225, 0.3)', '40%')}
          />
          <div
            className="pointer-events-none absolute inset-0 z-2 rounded-xl"
            style={glimmer('rgba(100, 116, 139, 0.2)', '30%')}
          />
        </>
      )}
      {children}
    </div>
  );
}
