import { twMerge } from 'tailwind-merge';
import Perspective from './Perspective';
import styles from './Card.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  sideLine?: boolean;
  glow?: boolean;
  perspective?: boolean;
};

export default function Card({
  children,
  className,
  bodyClassName,
  sideLine = false,
  glow = false,
  perspective = false,
}: Props) {
  let card = (
    <div
      className={twMerge(
        'h-full w-full rounded-xl bg-gradient-border-light p-0.5 duration-300 dark:bg-gradient-border-dark',
        sideLine && ['relative', styles.sideLine],
        glow && styles.glow,
        className,
      )}
    >
      <div
        className={twMerge(
          'h-full w-full rounded-xl bg-gradient-card-body-light p-2 sm:p-4 dark:bg-gradient-card-body-dark',
          bodyClassName,
        )}
      >
        {children}
      </div>
    </div>
  );

  if (perspective) card = <Perspective>{card}</Perspective>;

  return card;
}
