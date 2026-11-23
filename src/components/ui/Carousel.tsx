'use client';

import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import Card from '@/components/ui/Card/Card';
import Icon from '@/components/ui/Icon';
import useScrollOverflow from '@/hooks/useScrollOverflow';
import { getScrollBehavior } from '@/utils/scroll';

const SCROLL_STEP = 300;
const ARROW_CLASSES =
  // touch screens swipe instead
  'absolute top-1/2 hidden -translate-y-1/2 rounded-full bg-gray-700 p-2 duration-300 hover:bg-gray-600 md:block';

type Props = {
  children: React.ReactNode;
  compact?: boolean;
};

export default function Carousel({ children, compact = false }: Props) {
  const { ref, canScrollLeft, canScrollRight } =
    useScrollOverflow<HTMLDivElement>();

  const scrollBy = (left: number) => {
    ref.current?.scrollBy({ left, behavior: getScrollBehavior() });
  };

  return (
    <div className="relative">
      <Card bodyClassName={compact ? 'p-1.5 sm:p-2' : undefined}>
        <div
          ref={ref}
          className={twMerge(
            'flex h-full w-full [scrollbar-width:none] gap-4 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden',
            compact && 'gap-2',
          )}
        >
          {children}
        </div>
      </Card>
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-SCROLL_STEP)}
          className={`${ARROW_CLASSES} left-2`}
        >
          <Icon path={mdiArrowLeft} size={1} className="text-white" />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(SCROLL_STEP)}
          className={`${ARROW_CLASSES} right-2`}
        >
          <Icon path={mdiArrowRight} size={1} className="text-white" />
        </button>
      )}
    </div>
  );
}
