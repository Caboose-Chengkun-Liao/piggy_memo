import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-black">
      <Link
        href="/"
        className="justify-self-start text-lg font-semibold tracking-tight text-black dark:text-zinc-50"
      >
        PiggyMemo
      </Link>
      <ul className="flex items-center justify-self-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-black dark:hover:text-zinc-50"
          >
            Home
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-self-end gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <li>
          <Link
            href="/login"
            className="transition-colors hover:text-black dark:hover:text-zinc-50"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
