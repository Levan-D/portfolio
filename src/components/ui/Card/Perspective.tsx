'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import useTilt from './useTilt';

const WRAPPER_PADDING_PX = 30;

type Props = {
  children: React.ReactNode;
};

export default function Perspective({ children }: Props) {
  const isEnabled = useMediaQuery(
    '(min-width: 33.75rem) and (hover: hover) and (prefers-reduced-motion: no-preference)',
  );
  const { cardRef, onMouseMove, onMouseLeave } = useTilt(isEnabled);

  return (
    <div
      className="relative"
      style={{ padding: WRAPPER_PADDING_PX, margin: -WRAPPER_PADDING_PX }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div ref={cardRef} className="relative rounded-xl">
        {children}
      </div>
    </div>
  );
}
