import { twMerge } from 'tailwind-merge';

type Props = {
  path: string;
  size?: number;
  className?: string;
};

export default function Icon({ path, size = 1, className }: Props) {
  const dimension = `${size * 1.5}rem`;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{ width: dimension, height: dimension }}
      className={twMerge('fill-current', className)}
    >
      <path d={path} />
    </svg>
  );
}
