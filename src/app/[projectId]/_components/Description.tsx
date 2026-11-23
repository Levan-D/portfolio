import { mdiDownload, mdiGithub, mdiWeb } from '@mdi/js';
import Icon from '@/components/ui/Icon';
import type { ProjectsDataType } from '@/data/projectData';

type Props = Pick<ProjectsDataType, 'title' | 'tech' | 'links' | 'desc'>;

const LINK_CLASSES = 'flex w-fit items-center gap-2 btnTertiary lg:mb-2';

export default function Description({ title, tech, links, desc }: Props) {
  return (
    <div className="mx-auto mb-6 basis-2/5 md:my-8 lg:mt-0 lg:w-full">
      <h1 className="text-center text-2xl font-bold textSecondary md:text-3xl lg:text-left lg:text-4xl">
        {title}
      </h1>
      <p className="mt-4 font-semibold textTertiary xl:text-lg">{desc}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <li
            key={item}
            className="rounded-full bg-teal-100 px-3 py-0.5 text-xs font-semibold text-teal-800 xl:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 textTertiary lg:block">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSES}
          >
            <Icon path={mdiGithub} size={1.2} />
            <span className="sr-only lg:not-sr-only">GitHub</span>
          </a>
        )}
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSES}
          >
            <Icon path={mdiWeb} size={1.2} />
            <span className="sr-only lg:not-sr-only">{title}</span>
          </a>
        )}
        {links.download && (
          <a
            href={links.download}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSES}
          >
            <Icon path={mdiDownload} size={1.2} />
            <span className="sr-only lg:not-sr-only">Download</span>
          </a>
        )}
      </div>
    </div>
  );
}
