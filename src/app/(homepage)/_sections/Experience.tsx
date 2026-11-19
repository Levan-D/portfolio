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
      className="mt-16 justify-items-center gap-12 overflow-x-clip md:mx-4 md:mt-40 md:min-h-screen md:py-20 lg:flex"
    >
      <div
        className={twMerge(
          'top-0 mx-auto h-fit w-fit max-w-2xl basis-1/2 pb-12 text-center duration-700 ease-out md:-translate-x-24 md:py-20 md:opacity-0 lg:sticky lg:text-left',
          isInView && 'md:translate-x-0 md:opacity-100',
        )}
      >
        <h2 className="text-2xl font-bold textSecondary md:text-3xl lg:text-4xl">
          Experience
        </h2>
        <div className="mt-4 space-y-6 font-semibold textTertiary xl:text-lg">
          <p>
            Frontend engineer with 6+ years of React and TypeScript, most
            recently acting frontend lead at a US company (team of ~6 developers
            + PM).
          </p>
          <p>
            Relaunched a codebase dormant for 2+ years on TypeScript, Redux
            Toolkit and Next.js, cut first-load JavaScript ~50% and eliminated
            layout shift, and built an 82-brand landing platform with its own
            admin CMS.
          </p>
          <p>
            Alongside that, I&apos;ve built Redflag&apos;s frontend end to end
            since 2024, turning static AI reports into editable, commentable
            documents.
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

        <h3 className="mx-auto mt-16 mb-8 max-w-2xl text-xl font-bold textSecondary md:text-2xl">
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
