import { ImageResponse } from 'next/og';
import { projectData } from '@/data/projectData';
import { OG_COLORS, OG_SIZE, ogFonts, ogImageDataUrl } from '@/lib/og';

export const alt = 'Levan Dolidze, Senior Frontend Engineer';
export const size = OG_SIZE;
export const contentType = 'image/png';

const SHOWCASE_COUNT = 3;

export default async function Image() {
  const covers = await Promise.all(
    projectData
      .slice(0, SHOWCASE_COUNT)
      .map((project) => ogImageDataUrl(project.images.web[0], 560)),
  );

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: `linear-gradient(225deg, ${OG_COLORS.bgTop} 0%, ${OG_COLORS.bg} 45%)`,
        fontFamily: 'Inter',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 690,
          padding: '0 0 0 72px',
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600, color: OG_COLORS.accent }}>
          Hey! My name is
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 76,
            fontWeight: 700,
            color: OG_COLORS.text,
            lineHeight: 1.05,
          }}
        >
          Levan Dolidze.
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 44,
            fontWeight: 700,
            color: OG_COLORS.muted,
            lineHeight: 1.15,
          }}
        >
          Senior Frontend Engineer.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            fontWeight: 600,
            color: OG_COLORS.faint,
          }}
        >
          levandolidze.dev
        </div>
      </div>

      {/* project covers fanned off the right edge */}
      <div style={{ display: 'flex', position: 'relative', flexGrow: 1 }}>
        {covers.map((cover, index) => (
          // eslint-disable-next-line @next/next/no-img-element -- rendered to a PNG, not the page
          <img
            key={cover.slice(-24)}
            src={cover}
            width={480}
            height={270}
            alt=""
            style={{
              position: 'absolute',
              left: 40 + index * 36,
              top: 70 + index * 150,
              borderRadius: 14,
              objectFit: 'cover',
              border: '2px solid rgba(148, 163, 184, 0.25)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              transform: `rotate(${-6 + index * 4}deg)`,
            }}
          />
        ))}
      </div>
    </div>,
    { ...size, fonts: await ogFonts() },
  );
}
