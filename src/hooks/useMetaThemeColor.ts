import { useEffect } from 'react';

export default function useMetaThemeColor(color: string | undefined) {
  useEffect(() => {
    if (!color) return;

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = color;
  }, [color]);
}
