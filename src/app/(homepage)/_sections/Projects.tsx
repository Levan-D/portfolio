'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Card from '@/components/ui/Card/Card';
import StaggeredGrid from '@/components/ui/StaggeredGrid';
import {
  getProjectSlug,
  projectData,
  type ProjectsDataType,
} from '@/data/projectData';
import useInView from '@/hooks/useInView';

const INITIAL_MOBILE_COUNT = 4;
const MOBILE_COUNT_STEP = 3;

export default function Projects() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [mobileCount, setMobileCount] = useState(INITIAL_MOBILE_COUNT);

  const handleMoreClick = () => {
    setMobileCount((count) =>
      Math.min(count + MOBILE_COUNT_STEP, projectData.length),
    );
  };

  const renderCard = (card: ProjectsDataType, showIcon = false) => {
    const {
      title,
      pitch,
      images: { coverWeb, icon },
    } = card;
    const useIconLayout = showIcon && icon !== undefined;

    return (
      <Card glow className="active:scale-[0.99] sm:hover:scale-[1.01]">
        <Link
          href={`/${getProjectSlug(card)}`}
          className="flex h-full flex-col gap-4"
        >
          <div
            className={twMerge(
              'flex flex-col gap-2',
              useIconLayout && 'flex-row gap-4',
            )}
          >
            <Image
              src={useIconLayout ? icon : coverWeb}
              alt={`Cover picture for the ${title} project`}
              className={twMerge(
                'mx-auto w-fit rounded-lg',
                useIconLayout && 'h-20 w-20',
              )}
            />

            <div className="overflow-hidden">
              <h3 className="font-semibold">{title}</h3>
              <p className="line-clamp-4 text-sm textTertiary md:line-clamp-none">
                {pitch}
              </p>
            </div>
          </div>
        </Link>
      </Card>
    );
  };

  return (
    <div
      id="projects"
      ref={ref}
      className={twMerge(
        'mt-40 p-20 px-0 duration-700 ease-out md:translate-y-24 md:px-20 md:opacity-0',
        isInView && 'md:translate-y-0 md:opacity-100',
      )}
    >
      <div className="mx-auto mb-12 w-fit text-center">
        <h2 className="text-2xl font-bold textSecondary md:text-3xl lg:text-4xl">
          Projects
        </h2>
        <p className="mt-4 font-semibold textTertiary lg:text-xl">
          Some of my works
        </p>
      </div>

      <div className="mx-auto w-fit">
        <div className="md:hidden">
          <StaggeredGrid
            columns={1}
            items={projectData.slice(0, mobileCount)}
            renderItem={(card) => renderCard(card)}
          />
          {mobileCount < projectData.length && (
            <button
              type="button"
              onClick={handleMoreClick}
              className="mx-auto mt-8 btnSecondary"
            >
              Show More
            </button>
          )}
        </div>

        <div className="hidden md:block lg:hidden">
          <StaggeredGrid
            staggered
            columns={2}
            items={projectData}
            renderItem={(card) => renderCard(card)}
          />
        </div>

        <div className="hidden lg:block">
          <StaggeredGrid
            staggered
            columns={3}
            items={projectData}
            renderItem={(card) => renderCard(card, true)}
          />
        </div>
      </div>
    </div>
  );
}
