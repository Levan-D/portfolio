'use client';

import { twMerge } from 'tailwind-merge';
import Tooltip from '@/components/ui/Tooltip';
import useScrolledPast from '@/hooks/useScrolledPast';
import { SECTIONS, scrollToSection } from './sections';
import useActiveSection from './useActiveSection';
import useTrackActiveSection from './useTrackActiveSection';

export default function SiderNavbar() {
  const { activeSection } = useActiveSection();
  const isVisible = useScrolledPast(800);
  useTrackActiveSection();

  return (
    <nav
      aria-label="Sections"
      className={twMerge(
        'invisible fixed top-1/2 right-10 z-30 hidden opacity-0 duration-500 select-none md:block',
        isVisible && 'visible opacity-100',
      )}
    >
      <ul className="flex -translate-y-1/2 flex-col items-end gap-3 font-semibold">
        {SECTIONS.map(({ id, label }, i) => (
          <li
            key={id}
            className={twMerge(
              'text-xs textTertiary',
              activeSection === id && 'text-teal-800! dark:text-teal-400!',
            )}
          >
            <Tooltip position="left" text={label}>
              <button
                type="button"
                aria-label={`0${i} ${label}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => scrollToSection(id)}
                className="p-2"
              >
                0{i}
              </button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  );
}
