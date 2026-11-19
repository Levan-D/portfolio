'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mdiBackburger, mdiMenu } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import ContactBtn from '@/components/contact/ContactBtn';
import Icon from '@/components/ui/Icon';
import useDialog from '@/hooks/useDialog';
import useDisclosure from '@/hooks/useDisclosure';
import DarkModeBtn from './DarkModeBtn';
import { SECTIONS, scrollToSection, type SectionIdType } from './sections';
import useActiveSection from './useActiveSection';

export default function MobileNavbar() {
  const pathname = usePathname();
  const { activeSection, setActiveSection } = useActiveSection();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dialogRef = useDialog(isOpen);

  const handleSectionClick = (id: SectionIdType) => {
    setActiveSection(id);
    onClose();
    scrollToSection(id);
  };

  return (
    <nav
      aria-label="Main"
      className="fixed z-40 block w-screen p-2 md:hidden dark:[background:linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(2,6,23,1)_80%)]"
    >
      <button
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={onOpen}
        className="textTertiary"
      >
        <Icon path={mdiMenu} size={1.5} />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClose={onClose}
        className="m-0 h-dvh max-h-none w-screen max-w-none -translate-x-full bg-slate-200 px-4 pt-2 text-slate-950 transition-[translate,display,overlay] transition-discrete duration-300 backdrop:bg-black/50 open:translate-x-0 dark:bg-slate-950 dark:text-white starting:open:-translate-x-full"
      >
        <ul className="flex flex-col gap-4">
          <li className="mb-12 flex justify-end textTertiary">
            <button type="button" aria-label="Close menu" onClick={onClose}>
              <Icon path={mdiBackburger} size={1.5} />
            </button>
          </li>

          <li>
            <DarkModeBtn withLabel />
          </li>

          <li className="mx-auto mb-8 w-fit">
            <ContactBtn />
          </li>

          {pathname === '/' ? (
            SECTIONS.map(({ id, label }) => (
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
            <li className="text-center text-xl btnTertiary md:text-base">
              <Link href="/" onClick={onClose}>
                Home
              </Link>
            </li>
          )}
        </ul>
      </dialog>
    </nav>
  );
}
