import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 py-6 px-8 text-center text-sm text-gray-500">
      <Link href="/mentions-legales" className="hover:text-blue-600 transition-colors">
        Mentions légales
      </Link>
    </footer>
  );
}
