import Card from '@/components/ui/Card/Card';
import type { ExperienceType } from '@/data/expData';

type Props = {
  role: ExperienceType;
  headingLevel?: 'h3' | 'h4';
};

export default function RoleCard({ role, headingLevel = 'h3' }: Props) {
  const Heading = headingLevel;

  return (
    <Card perspective className="mx-auto mb-4 max-w-2xl md:mb-8">
      <div className="p-1 md:px-4 md:py-2">
        <Heading className="text-lg font-semibold">{role.title}</Heading>
        <p className="text-sm textTertiary italic">{role.subtitle}</p>
        <p className="mb-2 text-sm textTertiary">{role.date}</p>

        {role.summary && <p className="mb-2 textTertiary">{role.summary}</p>}
        <ul className="list-disc space-y-2 pl-5 textTertiary">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {role.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-teal-100 px-3 py-0.5 text-xs font-semibold text-teal-800 xl:text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
