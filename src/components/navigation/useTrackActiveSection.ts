import { useEffect } from 'react';
import { LAST_SECTION, SECTIONS, isSectionId } from './sections';
import useActiveSection from './useActiveSection';

export default function useTrackActiveSection() {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        let largestRatio = 0;
        let largestId = '';

        entries.forEach((entry) => {
          if (entry.intersectionRatio > largestRatio) {
            largestRatio = entry.intersectionRatio;
            largestId = entry.target.id;
          }
        });

        if (largestRatio > 0.2 && isSectionId(largestId)) {
          setActiveSection(largestId);
        }
      },
      { threshold: 0.2 },
    );

    SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    // the last section is often too short to pass the ratio check above
    const lastSection = document.getElementById(LAST_SECTION);
    const lastSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection(LAST_SECTION);
      },
      { threshold: 0 },
    );
    if (lastSection) lastSectionObserver.observe(lastSection);

    return () => {
      sectionObserver.disconnect();
      lastSectionObserver.disconnect();
    };
  }, [setActiveSection]);
}
