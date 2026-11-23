'use client';

import { twMerge } from 'tailwind-merge';
import Card from '@/components/ui/Card/Card';
import { techData } from '@/data/techData';
import useInView from '@/hooks/useInView';
import TechLogo from './TechLogo';

export default function Technologies() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} id="technologies" className="py-12 md:my-20 md:py-20">
      <div
        className={twMerge(
          'mx-auto mb-20 w-fit max-w-sm text-center duration-700 ease-out md:translate-x-24 md:opacity-0',
          isInView && 'md:translate-x-0 md:opacity-100',
        )}
      >
        <h2 className="text-2xl font-bold textSecondary md:text-3xl lg:text-4xl">
          Technologies & Tools
        </h2>
        <p className="mt-4 font-semibold textTertiary lg:text-xl">
          These are some of the tools I use when building my projects
        </p>
      </div>

      <div
        className={twMerge(
          'mx-auto w-fit duration-700 ease-out md:-translate-x-24 md:opacity-0',
          isInView && 'md:translate-x-0 md:opacity-100',
        )}
      >
        <Card sideLine>
          <ul className="flex flex-wrap justify-center gap-3 rounded-xl px-0 py-4 select-none md:max-w-xl md:py-8 lg:max-w-3xl lg:gap-4 lg:px-8 lg:py-12 xl:max-w-5xl">
            {techData.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-end rounded-xl border border-transparent px-2 pt-2 pb-1.5 duration-300 active:scale-[0.95] sm:hover:-translate-y-2 sm:hover:border-slate-500/50 sm:hover:bg-slate-300/50 sm:active:bg-slate-600 md:px-3 dark:sm:hover:bg-slate-600/50"
                >
                  <TechLogo logo={item.logo} />
                  <span className="mt-1.5 text-center text-xs font-semibold whitespace-nowrap lg:text-sm">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
