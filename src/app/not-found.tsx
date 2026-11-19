import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto mt-[30vh] w-fit">
      <h1 className="mb-4 text-center text-xl font-semibold">Not Found</h1>
      <p>Whoopsie, can&apos;t find the page you&apos;re looking for</p>
      <Link href="/" className="mt-8 btnSecondary text-center">
        Return Home
      </Link>
    </div>
  );
}
