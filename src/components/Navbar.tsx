import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0f2044] text-white px-8 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-1 font-bold text-lg tracking-wide">
        <span className="border border-white rounded px-1 text-sm mr-1">{"<>"}</span>
        DEV
      </Link>
      <Link href="/profile" aria-label="Profil">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </Link>
    </nav>
  );
}
