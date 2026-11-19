import { useEffect, useRef, useState } from 'react';

export default function useScrollOverflow<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [overflow, setOverflow] = useState({ left: false, right: false });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      setOverflow({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth - 1,
      });
    };

    // ResizeObserver also fires once on observe, which covers the initial check
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(element);
    element.addEventListener('scroll', update, { passive: true });

    return () => {
      resizeObserver.disconnect();
      element.removeEventListener('scroll', update);
    };
  }, []);

  return { ref, canScrollLeft: overflow.left, canScrollRight: overflow.right };
}
