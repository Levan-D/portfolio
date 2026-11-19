'use client';

import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import Card from '@/components/ui/Card/Card';
import Icon from '@/components/ui/Icon';
import useScrollOverflow from '@/hooks/useScrollOverflow';
import { getScrollBehavior } from '@/utils/scroll';

const SCROLL_STEP = 300;
const ARROW_CLASSES =
  'absolute top-1/2 -translate-y-1/2 rounded-full bg-gray-700 p-2 duration-300 hover:bg-gray-600';

type Props = {
  children: React.ReactNode;
};

export default function Carousel({ children }: Props) {
  const { ref, canScrollLeft, canScrollRight } =
    useScrollOverflow<HTMLDivElement>();

  const scrollBy = (left: number) => {
    ref.current?.scrollBy({ left, behavior: getScrollBehavior() });
  };

  return (
    <div className="relative">
      <Card flashLight>
        <div
          ref={ref}
          className="flex h-full w-full gap-4 overflow-x-auto overflow-y-hidden"
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
