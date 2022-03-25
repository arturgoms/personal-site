import Link from "next/link";
const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/arturgoms">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://dk.linkedin.com/in/artur-gomes-a3aa059b">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/arturgoms">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://instagram.com/arturgoms">
            Instagram
          </ExternalLink>
          <ExternalLink href="https://pypi.org/user/arturgomes/">
            Pypi
          </ExternalLink>
        </div>
      </div>
      <p className="flex flex-row text-gray-400">
        Built with{" "}
        <a href="https://nextjs.org" target="__blank">
          <img src="/logos/nextjs.svg" className="h-6 w-6 mx-1" />
        </a>{" "}
        <a href="https://tailwindcss.com" target="__blank">
          <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" />
        </a>{" "}
        and{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="__blank">
          &nbsp; 💛
        </a>
      </p>
    </footer>
  );
}
