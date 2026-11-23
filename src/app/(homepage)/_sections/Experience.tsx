'use client';

import { twMerge } from 'tailwind-merge';
import { expData, projectExpData } from '@/data/expData';
import useInView from '@/hooks/useInView';
import RoleCard from './RoleCard';

export default function Experience() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id="experience"
      className="mt-12 justify-items-center gap-12 overflow-x-clip md:mx-4 md:mt-40 md:min-h-screen md:py-20 lg:flex"
    >
      <div
        className={twMerge(
          'top-0 mx-auto h-fit w-fit max-w-2xl basis-1/2 pb-8 text-center duration-700 ease-out md:-translate-x-24 md:py-20 md:opacity-0 lg:sticky lg:text-left',
          isInView && 'md:translate-x-0 md:opacity-100',
        )}
      >
        <h2 className="text-2xl font-bold textSecondary md:text-3xl lg:text-4xl">
          Experience
        </h2>
        <div className="mt-4 space-y-6 font-semibold textTertiary xl:text-lg">
          <p>
            I&apos;ve spent most of my career at small teams, building the kind
            of web apps people use every day at work, like editors, dashboards
            and admin tools. A lot of the time I&apos;m not just building a
            feature but working out what it should be in the first place, down
            to how it behaves at the edges and what makes it easy to use.
          </p>
          <p>
            On small teams the frontend tends to come with everything around it,
            so I&apos;m as used to talking things through with design and
            backend as I am to writing the code. The part I care about most is
            the person on the other end, and whether the thing actually works
            well for them.
          </p>
        </div>
      </div>

      <div
        className={twMerge(
          'basis-1/2 duration-700 ease-out md:translate-x-24 md:translate-y-24 md:opacity-0 lg:mr-10 lg:pt-20',
          isInView && 'md:translate-x-0 md:translate-y-0 md:opacity-100',
        )}
      >
        {expData.map((role) => (
          <RoleCard key={`${role.title}-${role.date}`} role={role} />
        ))}

        <h3 className="mx-auto mt-10 mb-4 max-w-2xl text-xl font-bold textSecondary md:mt-16 md:mb-8 md:text-2xl">
          Independent work
        </h3>
        {projectExpData.map((project) => (
          <RoleCard
            key={`${project.title}-${project.date}`}
            role={project}
            headingLevel="h4"
          />
        ))}
      </div>
    </div>
  );
}
