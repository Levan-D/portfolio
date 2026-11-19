'use client';

import { mdiChevronUp } from '@mdi/js';
import Icon from '@/components/ui/Icon';
import { scrollToTop } from '@/utils/scroll';

export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed right-4 bottom-4 z-20 hidden rounded-full bg-slate-700 p-1.5 duration-300 sm:hover:-translate-y-[5px] md:block 8xl:right-[calc(50%-1240px)]"
    >
      <Icon path={mdiChevronUp} size={1.5} className="text-slate-300" />
    </button>
  );
}
