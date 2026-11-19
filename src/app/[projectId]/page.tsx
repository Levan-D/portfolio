import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mdiArrowTopRight } from '@mdi/js';
import Carousel from '@/components/ui/Carousel';
import Icon from '@/components/ui/Icon';
import {
  findProjectBySlug,
  getProjectSlug,
  projectData,
} from '@/data/projectData';
import Description from './_components/Description';
import ImageDisplay from './_components/ImageDisplay';

type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectData.map((project) => ({
    projectId: getProjectSlug(project),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = findProjectBySlug(projectId);
  if (!project) notFound();

  return {
    title: project.title,
    description: project.pitch,
    keywords: project.tech,
    authors: [{ name: 'Levan Dolidze' }],
    creator: 'Levan Dolidze',
    publisher: 'Levan Dolidze',

    openGraph: {
      title: `Levan Dolidze - ${project.title}`,
      description: project.pitch,
      url: `https://levandolidze.com/${projectId}`,
      siteName: 'Levan Dolidze - Web Developer',
      images: [
        {
          url: 'https://i.imgur.com/pKweUJY.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  const project = findProjectBySlug(projectId);
  if (!project) notFound();

  const { title, desc, tech, images, links } = project;

  return (
    <div className="my-16">
      <div className="items-center justify-center gap-12 select-none lg:flex">
        <div className="basis-2/5">
          <Description title={title} tech={tech} links={links} desc={desc} />
        </div>
        <div className="basis-3/5">
          <ImageDisplay title={title} images={images} />
        </div>
      </div>

      <div className="my-16 select-none md:my-28">
        <Carousel>
          {projectData.map((otherProject) => {
            const slug = getProjectSlug(otherProject);

            return (
              <Link
                key={slug}
                href={`/${slug}`}
                aria-current={slug === projectId ? 'page' : undefined}
                className="group/title mb-2 flex aspect-square max-h-[120px] shrink-0 flex-col rounded-lg bg-slate-400/50 p-2 duration-300 active:bg-slate-500/50 sm:hover:bg-slate-400/50 md:max-h-[200px] lg:max-h-[250px] dark:bg-slate-700/50 dark:active:bg-slate-700/50 dark:sm:hover:bg-slate-600/50"
              >
                <Image
                  src={otherProject.images.coverWeb}
                  alt=""
                  className="aspect-4/3 rounded-sm object-cover"
                />

                <div className="mx-1 mt-2 flex grow items-center gap-1">
                  <h3 className="line-clamp-1 text-xs font-semibold duration-300 group-hover/title:text-white md:text-sm xl:text-lg dark:group-hover/title:text-teal-300 dark:group-active/title:text-teal-400">
                    {otherProject.title}
                  </h3>
                  <Icon
                    path={mdiArrowTopRight}
                    size={0.6}
                    className="duration-300 ease-in group-hover/title:translate-x-1 group-hover/title:-translate-y-1 group-hover/title:text-white dark:group-hover/title:text-teal-300 dark:group-active/title:text-teal-400"
                  />
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
