'use client';

import { mdiChevronDown } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import Icon from '@/components/ui/Icon';
import {
  FIRST_CONTENT_SECTION,
  scrollToSection,
} from '@/components/navigation/sections';
import styles from './scrollDownBtn.module.css';

export default function ScrollDownBtn() {
  return (
    <div
      className={twMerge(
        'group mx-auto hidden w-fit translate-y-[40%] rounded-full duration-500 hover:p-14 md:block',
        styles.scrollWrap,
      )}
    >
      <button
        type="button"
        aria-label="Scroll to experience"
        onClick={() => scrollToSection(FIRST_CONTENT_SECTION)}
        className="rounded-full border-2 border-teal-400 p-28 duration-500 group-hover:bg-teal-400 group-hover:p-14"
      >
        <span
          className={twMerge(
            'block transition-opacity group-hover:opacity-0',
            styles.arrow,
          )}
        >
          <Icon path={mdiChevronDown} size={2.5} />
        </span>
        <span className={twMerge('block', styles.arrowDelay)}>
          <Icon path={mdiChevronDown} size={2.5} />
        </span>
        <span className={twMerge('block', styles.arrowDelaySecond)}>
          <Icon path={mdiChevronDown} size={2.5} />
        </span>
      </button>
    </div>
  );
}
