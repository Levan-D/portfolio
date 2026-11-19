import { scrollToElement, scrollToTop } from '@/utils/scroll';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'projects', label: 'Projects' },
] as const;

export type SectionIdType = (typeof SECTIONS)[number]['id'];

export const FIRST_CONTENT_SECTION = SECTIONS[1].id;
export const LAST_SECTION = SECTIONS[SECTIONS.length - 1].id;

export function isSectionId(id: string): id is SectionIdType {
  return SECTIONS.some((section) => section.id === id);
}

export function scrollToSection(id: SectionIdType) {
  if (id === 'about') {
    scrollToTop();
    return;
  }
  scrollToElement(id);
}
