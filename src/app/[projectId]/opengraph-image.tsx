import { ImageResponse } from 'next/og';
import {
  findProjectBySlug,
  getProjectSlug,
  projectData,
} from '@/data/projectData';
import { OG_COLORS, OG_SIZE, ogFonts, ogImageDataUrl } from '@/lib/og';

export const alt = 'Project by Levan Dolidze';
export const size = OG_SIZE;
export const contentType = 'image/png';

type Props = {
  params: Promise<{ projectId: string }>;
};

export function generateStaticParams() {
  return projectData.map((project) => ({ projectId: getProjectSlug(project) }));
}

export default async function Image({ params }: Props) {
  const { projectId } = await params;
  const project = findProjectBySlug(projectId);
  if (!project) throw new Error(`No project "${projectId}"`);

  const cover = await ogImageDataUrl(project.images.web[0], 620);

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
          width: 520,
          padding: '0 40px 0 72px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: OG_COLORS.accent,
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: 600,
            color: OG_COLORS.muted,
            lineHeight: 1.3,
          }}
        >
          {project.pitch}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            fontWeight: 600,
            color: OG_COLORS.faint,
          }}
        >
          Levan Dolidze · levandolidze.dev
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          paddingRight: 56,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered to a PNG, not the page */}
        <img
          src={cover}
          width={600}
          height={338}
          alt=""
          style={{
            borderRadius: 16,
            border: '2px solid rgba(148, 163, 184, 0.25)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>,
    { ...size, fonts: await ogFonts() },
  );
}
