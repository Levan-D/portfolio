'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mdiCellphone, mdiLaptop } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import Card from '@/components/ui/Card/Card';
import Icon from '@/components/ui/Icon';
import type { ProjectsDataType } from '@/data/projectData';

type ViewType = 'web' | 'mobile';

type Props = {
  title: string;
  images: ProjectsDataType['images'];
};

const TOGGLE_CLASSES =
  'rounded-xl border-2 border-slate-500 text-slate-500 duration-300 sm:hover:border-slate-700 sm:hover:text-slate-700 dark:border-slate-400 dark:text-slate-400 dark:sm:hover:border-slate-300 dark:sm:hover:text-slate-300';
const TOGGLE_ACTIVE_CLASSES =
  'border-slate-900! text-slate-900! dark:border-slate-300! dark:text-slate-300!';
const PHONE_CLASSES =
  'collapse absolute left-1/2 z-10 mx-auto aspect-9/16 -translate-x-1/2 rounded-3xl bg-slate-400 p-2 transition-transform duration-500 ease-in-out md:max-h-[400px] xl:max-h-[420px] dark:bg-slate-600';

export default function ImageDisplay({
  title,
  images: { coverWeb, coverMobile, leftMobile, rightMobile },
}: Props) {
  const [view, setView] = useState<ViewType>('web');
  const isMobileView = view === 'mobile';
  const mainImage = isMobileView && coverMobile ? coverMobile : coverWeb;

  return (
    <Card sideLine>
      <div className="p-2 lg:p-4">
        <div className="mb-12 hidden justify-center gap-6 md:flex">
          <button
            type="button"
            aria-label="Show desktop screenshots"
            aria-pressed={!isMobileView}
            onClick={() => setView('web')}
            className={twMerge(
              TOGGLE_CLASSES,
              'p-2',
              !isMobileView && TOGGLE_ACTIVE_CLASSES,
            )}
          >
            <Icon path={mdiLaptop} size={1} />
          </button>
          {coverMobile && (
            <button
              type="button"
              aria-label="Show mobile screenshots"
              aria-pressed={isMobileView}
              onClick={() => setView('mobile')}
              className={twMerge(
                TOGGLE_CLASSES,
                'px-2.5 py-2',
                isMobileView && TOGGLE_ACTIVE_CLASSES,
              )}
            >
              <Icon path={mdiCellphone} size={0.8} />
            </button>
          )}
        </div>

        <div className="relative">
          <div
            className={twMerge(
              PHONE_CLASSES,
              isMobileView &&
                '-translate-x-56! translate-y-4 rotate-[-15deg] md:visible! md:-translate-x-72! lg:-translate-x-60! lg:translate-y-2 xl:-translate-x-80! xl:translate-y-6',
            )}
          >
            {leftMobile && (
              <Image
                src={leftMobile}
                alt={`${title} on mobile, secondary screen`}
                className="h-full rounded-2xl object-cover"
              />
            )}
          </div>

          <div
            className={twMerge(
              PHONE_CLASSES,
              isMobileView &&
                'translate-x-14! translate-y-4 rotate-15 md:visible! md:translate-x-16! lg:translate-x-10! lg:translate-y-2 xl:translate-x-20! xl:translate-y-6',
            )}
          >
            {rightMobile && (
              <Image
                src={rightMobile}
                alt={`${title} on mobile, another screen`}
                className="h-full rounded-2xl object-cover"
              />
            )}
          </div>

          <div
            className={twMerge(
              'relative z-20 mx-auto aspect-video max-h-[500px] rounded-3xl bg-slate-400 duration-300 ease-in-out md:max-h-[400px] md:p-2 xl:max-h-[420px] dark:bg-slate-600',
              isMobileView && 'md:aspect-9/16',
            )}
          >
            <Image
              src={mainImage}
              alt={`${title} ${isMobileView ? 'mobile' : 'desktop'} screenshot`}
              className="h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
