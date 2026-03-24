"use client";

import Link from "next/link";
import { useBookmarkStore } from "@/lib/bookmarkStore";
import { useApplicationStore } from "@/lib/applicationStore";
import JobCard from "@/components/JobCard";

export default function ProfileClient() {
  const bookmarks = useBookmarkStore((s) => s.bookmarks);
  const applications = useApplicationStore((s) => s.applications);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenue</h1>
      <div className="w-full h-px bg-gray-200 mb-10" />

      {/* Saved jobs */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-blue-600 mb-6">
          Offres enregistrées
        </h2>

        {bookmarks.length === 0 ? (
          <p className="text-gray-400 text-sm">Aucune offre enregistrée.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookmarks.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>

      {/* Applications history */}
      <section>
        <h2 className="text-xl font-bold text-blue-600 mb-6">
          Historique des candidatures
        </h2>

        {applications.length === 0 ? (
          <p className="text-gray-400 text-sm">Aucune candidature envoyée.</p>
        ) : (
          <div className="flex flex-col divide-y divide-gray-200">
            {applications.map((app, i) => {
              const formattedDate = new Date(app.submittedAt).toLocaleDateString(
                "fr-FR",
                { day: "2-digit", month: "2-digit", year: "numeric" }
              );
              return (
                <div key={i} className="py-5">
                  <div className="flex items-center gap-1.5 text-blue-600 text-sm mb-1">
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

                  <Link
                    href={`/${app.jobUid}`}
                    className="font-bold text-gray-900 text-base hover:underline"
                  >
                    {app.jobTitle}
                  </Link>

                  <p className="text-blue-600 text-sm mt-1 line-clamp-2">
                    {app.message}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
