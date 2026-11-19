import styles from './textBounce.module.css';

type Props = {
  text: string;
};

export default function TextBounce({ text }: Props) {
  return (
    <span className="flex">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="flex">
        {text.split('').map((letter, i) =>
          letter === ' ' ? (
            <span key={i} className="inline-block w-[0.25em]" />
          ) : (
            <span
              key={i}
              style={{ animationDelay: `${0.1 * i}s` }}
              className={styles.waveText}
            >
              {letter}
            </span>
          ),
        )}
      </span>
    </span>
  );
}
