"use client";

import { useBookmarkStore } from "@/lib/bookmarkStore";
import type { Job } from "@/types/job";

type Props = {
  job: Job;
};

export default function BookmarkButton({ job }: Props) {
  const { toggle, isBookmarked } = useBookmarkStore();
  const saved = isBookmarked(job.id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(job);
      }}
      aria-label={saved ? "Retirer" : "Sauvegarder"}
      className={`transition-colors ml-2 shrink-0 cursor-pointer ${
        saved ? "text-blue-600" : "text-gray-400 hover:text-blue-600"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill={saved ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
    </button>
  );
}
