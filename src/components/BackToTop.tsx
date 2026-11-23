'use client';

import { mdiChevronUp } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import Icon from '@/components/ui/Icon';
import useScrolledPast from '@/hooks/useScrolledPast';
import { scrollToTop } from '@/utils/scroll';

const SHOW_AFTER_PX = 600;

export default function BackToTop() {
  const isVisible = useScrolledPast(SHOW_AFTER_PX);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      // hidden at the top of the page, where there's nothing to go back to
      inert={!isVisible}
      className={twMerge(
        'pointer-events-none fixed right-4 bottom-4 z-30 hidden translate-y-4 rounded-full bg-slate-700 p-1.5 opacity-0 duration-300 sm:hover:-translate-y-[5px] md:block 8xl:right-[calc(50%-1240px)]',
        isVisible && 'pointer-events-auto translate-y-0 opacity-100',
      )}
    >
      <Icon path={mdiChevronUp} size={1.5} className="text-slate-300" />
    </button>
  );
}
