import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import type { StaticImageData } from 'next/image';

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_COLORS = {
  bg: '#020617',
  bgTop: '#0f172a',
  text: '#f8fafc',
  muted: '#cbd5e1',
  faint: '#64748b',
  accent: '#2dd4bf',
};

const fontFile = (weight: number) =>
  readFile(
    path.join(
      process.cwd(),
      'node_modules/@fontsource/inter/files',
      `inter-latin-${weight}-normal.woff`,
    ),
  );

export async function ogFonts() {
  const [semibold, bold] = await Promise.all([fontFile(600), fontFile(700)]);
  return [
    {
      name: 'Inter',
      data: semibold,
      weight: 600 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: bold,
      weight: 700 as const,
      style: 'normal' as const,
    },
  ];
}

// The image renderer can't read WebP or the bundler's /_next URL, so the source
// file is found by name (the URL keeps it before the hash) and re-encoded.
export async function ogImageDataUrl(image: StaticImageData, width: number) {
  const name = path.basename(image.src).split('.')[0];
  const file = path.join(process.cwd(), 'src/assets/projects', `${name}.webp`);
  const png = await sharp(file).resize({ width }).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}
