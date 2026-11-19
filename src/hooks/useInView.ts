import { useEffect, useRef, useState } from 'react';

// Fires once the element's top edge rises past `bottomOffset` of the viewport.
// Unlike a visibility-ratio threshold, this works for elements taller than the screen.
export default function useInView<T extends Element>(bottomOffset = '10%') {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { rootMargin: `0px 0px -${bottomOffset} 0px` },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [bottomOffset]);

  return { ref, isInView };
}
