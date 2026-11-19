'use client';

import Link from 'next/link';

type Props = {
  reset: () => void;
};

export default function ErrorPage({ reset }: Props) {
  return (
    <div className="mx-auto mt-[30vh] w-fit text-center">
      <h1 className="mb-4 text-xl font-semibold">Something went wrong</h1>
      <p>Try again, or head back to the homepage.</p>
      <div className="mt-8 flex justify-center gap-4">
        <button type="button" onClick={reset} className="btnSecondary">
          Try again
        </button>
        <Link href="/" className="btnSecondary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
