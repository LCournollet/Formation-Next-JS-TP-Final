import Link from "next/link";
import type { Job } from "@/types/job";
import BookmarkButton from "./BookmarkButton";

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  const formattedDate = job.date
    ? new Date(job.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  const href = `/${job.uid ?? job.id}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <Link href={href} className="font-bold text-gray-900 text-base hover:underline">
          {job.title}
        </Link>
        <BookmarkButton />
      </div>

      {formattedDate && (
        <div className="flex items-center gap-1.5 text-blue-600 text-sm mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <span>{formattedDate}</span>
        </div>
      )}

      {job.technologies.length > 0 && (
        <div className="flex items-center gap-1.5 text-blue-600 text-sm mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <span className="flex flex-wrap gap-x-1">
            {job.technologies.map((tech, i) => (
              <Link
                key={tech}
                href={`/techno/${encodeURIComponent(tech)}`}
                className="hover:underline"
              >
                {tech}{i < job.technologies.length - 1 ? "," : ""}
              </Link>
            ))}
          </span>
        </div>
      )}

      <Link href={href} className="text-gray-600 text-sm leading-relaxed line-clamp-3 mt-auto">
        {job.description}
      </Link>
    </div>
  );
}
