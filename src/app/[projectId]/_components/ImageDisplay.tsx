'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mdiCellphone, mdiLaptop } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import Card from '@/components/ui/Card/Card';
import Carousel from '@/components/ui/Carousel';
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
  'collapse absolute top-0 left-1/2 z-10 mx-auto aspect-9/16 -translate-x-1/2 rounded-3xl bg-slate-400 p-2 transition-transform duration-500 ease-in-out md:h-full dark:bg-slate-600';
const THUMB_CLASSES =
  'aspect-video h-14 shrink-0 rounded-md border-2 border-transparent p-0.5 opacity-60 duration-300 sm:hover:opacity-100 md:h-16';
const THUMB_ACTIVE_CLASSES = 'border-teal-500 opacity-100';
const THUMB_KEY_STEPS: Record<string, number | undefined> = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

export default function ImageDisplay({
  title,
  images: { web, coverMobile, leftMobile, rightMobile },
}: Props) {
  const [view, setView] = useState<ViewType>('web');
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobileView = view === 'mobile';
  const mainImage =
    isMobileView && coverMobile ? coverMobile : web[activeIndex];
  const coverRatio = web[0].width / web[0].height;

  const handleThumbKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = THUMB_KEY_STEPS[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (activeIndex + step + web.length) % web.length;
    setActiveIndex(next);
    event.currentTarget
      .querySelectorAll<HTMLButtonElement>('[data-thumb]')
      [next]?.focus();
  };

  return (
    <Card sideLine>
      <div className="md:p-1 lg:p-2">
        {coverMobile && (
          <div className="mb-6 hidden justify-center gap-4 md:flex">
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
          </div>
        )}

        {/* sized from the cover's ratio, capped at --stage-h: the whole shot always fits, and
            switching desktop/mobile changes only the frame's width, never moving the page */}
        <div
          style={{
            aspectRatio: coverRatio,
            maxWidth: `calc(var(--stage-h) * ${coverRatio})`,
          }}
          className="relative isolate mx-auto w-full [--stage-h:500px] md:flex md:justify-center md:[--stage-h:400px] xl:[--stage-h:420px]"
        >
          {leftMobile && (
            <div
              className={twMerge(
                PHONE_CLASSES,
                isMobileView &&
                  '-translate-x-56! translate-y-4 rotate-[-15deg] md:visible! md:-translate-x-72! lg:-translate-x-60! lg:translate-y-2 xl:-translate-x-80! xl:translate-y-6',
              )}
            >
              <Image
                src={leftMobile}
                alt={`${title} on mobile, secondary screen`}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          )}

          {rightMobile && (
            <div
              className={twMerge(
                PHONE_CLASSES,
                isMobileView &&
                  'translate-x-14! translate-y-4 rotate-15 md:visible! md:translate-x-16! lg:translate-x-10! lg:translate-y-2 xl:translate-x-20! xl:translate-y-6',
              )}
            >
              <Image
                src={rightMobile}
                alt={`${title} on mobile, another screen`}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          )}

          {/* desktop: no bezel, so the frame is exactly the shot's shape and nothing letterboxes */}
          <div
            className={twMerge(
              'relative z-20 mx-auto h-full w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-slate-900/15 duration-300 ease-in-out dark:ring-white/10',
              isMobileView &&
                'rounded-3xl bg-slate-400 shadow-none ring-0 md:aspect-9/16 md:w-auto md:p-2 dark:bg-slate-600',
            )}
          >
            <Image
              src={mainImage}
              alt={`${title} ${isMobileView ? 'mobile' : 'desktop'} screenshot`}
              className={twMerge(
                'h-full w-full object-contain',
                isMobileView && 'rounded-2xl object-cover',
              )}
            />
          </div>
        </div>

        {web.length > 1 && (
          // faded and inert, not removed, so toggling to mobile never moves the page;
          // `invisible` waited out every thumb's 300ms transition before hiding
          <div
            onKeyDown={handleThumbKeyDown}
            inert={isMobileView}
            className={twMerge(
              'mt-2 transition-opacity duration-150 md:mt-4',
              isMobileView && 'opacity-0',
            )}
          >
            <Carousel compact>
              {web.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  data-thumb
                  aria-label={`Show screenshot ${index + 1} of ${web.length}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={twMerge(
                    THUMB_CLASSES,
                    index === activeIndex && THUMB_ACTIVE_CLASSES,
                  )}
                >
                  <Image
                    src={image}
                    alt=""
                    sizes="128px"
                    className="h-full w-full rounded-sm object-cover"
                  />
                </button>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </Card>
  );
}
