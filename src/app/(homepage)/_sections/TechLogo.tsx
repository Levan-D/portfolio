import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { TechLogoType } from '@/data/techData';

const LIGHT_CARD = '#cbd5e1';
const DARK_CARD = '#1e293b';
const MIN_CONTRAST = 2;

function luminance(hex: string) {
  const channels = [1, 3, 5].map(
    (i) => parseInt(hex.slice(i, i + 2), 16) / 255,
  );
  const [r, g, b] = channels.map((value) =>
    value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

type Props = {
  logo: TechLogoType;
  invertInDark?: boolean;
};

export default function TechLogo({ logo, invertInDark }: Props) {
  if (!('path' in logo)) {
    return (
      <Image
        src={logo}
        alt=""
        height={50}
        className={twMerge(
          'h-7 w-auto lg:h-[38px]',
          invertInDark && 'dark:invert',
        )}
      />
    );
  }

  // brand colors that vanish on a theme's card fall back to the text color there
  const color = `#${logo.hex}`;
  const fitsLight = contrast(color, LIGHT_CARD) >= MIN_CONTRAST;
  const fitsDark = contrast(color, DARK_CARD) >= MIN_CONTRAST;

  return (
    <svg
      viewBox={'viewBox' in logo ? logo.viewBox : '0 0 24 24'}
      aria-hidden="true"
      focusable="false"
      style={{ '--logo': color } as React.CSSProperties}
      className={twMerge(
        'h-6 w-6 lg:h-8 lg:w-8',
        fitsLight ? 'fill-(--logo)' : 'fill-current',
        fitsDark ? 'dark:fill-(--logo)' : 'dark:fill-current',
      )}
    >
      <path d={logo.path} />
    </svg>
  );
}
