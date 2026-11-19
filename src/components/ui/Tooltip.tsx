import { twMerge } from 'tailwind-merge';

const POSITION_CLASSES = {
  top: '-top-10 left-1/2 -translate-x-1/2',
  bottom: '-bottom-10 left-1/2 -translate-x-1/2',
  left: 'top-1/2 right-10 -translate-y-1/2',
  right: 'top-1/2 left-10 -translate-y-1/2',
} as const;

type Props = {
  text: string;
  position?: keyof typeof POSITION_CLASSES;
  children: React.ReactNode;
};

// The bubble is visual only: the trigger must carry its own accessible name.
export default function Tooltip({ text, position = 'top', children }: Props) {
  return (
    <span className="group relative">
      <span
        aria-hidden="true"
        className={twMerge(
          'pointer-events-none absolute z-50 rounded-xl border border-slate-200 bg-slate-900 px-3 py-1 text-sm whitespace-nowrap text-slate-200 opacity-0 duration-200 group-has-focus-visible:opacity-100 sm:group-hover:opacity-100',
          POSITION_CLASSES[position],
        )}
      >
        {text}
      </span>
      {children}
    </span>
  );
}
