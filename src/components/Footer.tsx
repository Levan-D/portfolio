export default function Footer() {
  return (
    <footer className="p-8 text-center textTertiary">
      <p>
        &copy;{new Date().getFullYear()} Levan Dolidze. All Rights Reserved.
      </p>
      <a
        href="https://github.com/Levan-D/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm underline-offset-4 hover:underline"
      >
        Source on GitHub
      </a>
    </footer>
  );
}
