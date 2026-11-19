import { scrollToElement, scrollToTop } from '@/utils/scroll';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'experience', label: 'Experience' },
] as const;

export type SectionIdType = (typeof SECTIONS)[number]['id'];

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
