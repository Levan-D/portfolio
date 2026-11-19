'use client';

import { useTheme } from 'next-themes';
import useMetaThemeColor from '@/hooks/useMetaThemeColor';

const THEME_COLORS = {
  dark: '#020617',
  light: '#e2e8f0',
} as const;

export default function ThemeColorMeta() {
  const { resolvedTheme } = useTheme();
  useMetaThemeColor(
    resolvedTheme === 'light' ? THEME_COLORS.light : THEME_COLORS.dark,
  );
  return null;
}
