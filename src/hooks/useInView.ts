import { useEffect, useRef, useState } from 'react';

export default function useInView<T extends Element>(threshold: number) {
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
      { threshold },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
