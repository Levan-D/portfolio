'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mdiGithub, mdiLinkedin } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import ContactBtn from '@/components/contact/ContactBtn';
import Icon from '@/components/ui/Icon';
import DarkModeBtn from './DarkModeBtn';
import { SECTIONS, scrollToSection, type SectionIdType } from './sections';
import useActiveSection from './useActiveSection';

export default function DesktopNavbar() {
  const pathname = usePathname();
  const { activeSection, setActiveSection } = useActiveSection();

  const handleSectionClick = (id: SectionIdType) => {
    setActiveSection(id);
    scrollToSection(id);
  };

  return (
    <nav
      aria-label="Main"
      className="mx-auto hidden w-full max-w-(--breakpoint-2xl) p-6 select-none md:block"
    >
      <ul className="flex items-center justify-end">
        {pathname === '/' ? (
          SECTIONS.slice(1).map(({ id, label }) => (
            <li
              key={id}
              className={twMerge(
                'mx-4 text-center text-xl btnTertiary md:text-base',
                activeSection === id && 'text-teal-800! dark:text-teal-400!',
              )}
            >
              <button
                type="button"
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => handleSectionClick(id)}
                className="w-2/5 p-2 md:w-full"
              >
                {label}
              </button>
            </li>
          ))
        ) : (
          <li className="mx-4 btnTertiary">
            <Link href="/">Home</Link>
          </li>
        )}

        <li className="border-x-2 border-slate-400/70 px-4 dark:border-slate-600/70">
          <DarkModeBtn />
        </li>
        <li className="pl-4">
          <a
            href="https://www.linkedin.com/in/levan-dolidze"
            target="_blank"
            rel="noopener noreferrer"
            className="btnTertiary"
            aria-label="LinkedIn profile"
          >
            <Icon path={mdiLinkedin} size={1.1} />
          </a>
        </li>
        <li className="mr-24 border-r-2 border-slate-400/70 px-4 lg:mr-[210px] dark:border-slate-600/70">
          <a
            href="https://github.com/Levan-D"
            target="_blank"
            rel="noopener noreferrer"
            className="btnTertiary"
            aria-label="GitHub profile"
          >
            <Icon path={mdiGithub} size={1.1} />
          </a>
        </li>
        <li className="fixed z-30">
          <ContactBtn collapseLabel />
        </li>
      </ul>
    </nav>
  );
}
