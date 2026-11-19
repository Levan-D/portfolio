'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import {
  mdiCircleDouble,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
} from '@mdi/js';
import Icon from '@/components/ui/Icon';

type Props = {
  withLabel?: boolean;
};

const noopSubscribe = () => () => {};

export default function DarkModeBtn({ withLabel = false }: Props) {
  // the theme is only known on the client, so render a placeholder until then
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const { setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="translate-y-0.5 btnTertiary"
      >
        <Icon path={mdiCircleDouble} size={1} />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Light mode' : 'Dark mode';
  const iconPath = isDark ? mdiWhiteBalanceSunny : mdiWeatherNight;
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className="mx-auto mb-4 btnSecondary flex translate-y-0.5 gap-4"
      >
        <span>{label}</span>
        <Icon path={iconPath} size={1} />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${label.toLowerCase()}`}
      onClick={toggleTheme}
      className="translate-y-0.5 btnTertiary"
    >
      <Icon path={iconPath} size={1} />
    </button>
  );
}
