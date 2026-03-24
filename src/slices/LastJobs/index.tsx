import { FC } from "react";
import { Content, isFilled, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import BookmarkButton from "@/components/BookmarkButton";
import { parseTechnos } from "@/lib/parseTechnos";

export type LastJobsProps = SliceComponentProps<Content.LastJobsSlice>;

const LastJobs: FC<LastJobsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {Array.isArray(slice.primary.title)
              ? asText(slice.primary.title as unknown as Parameters<typeof asText>[0])
              : slice.primary.title}
          </h2>
          <div className="w-16 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {slice.primary.joblist.map((item, index) => {
            if (!isFilled.contentRelationship(item.job)) return null;

            const job = item.job;
            const data = job.data as {
              titre?: string | null;
              description?: string | null;
              date?: string | null;
              technos?: string | null;
            };

            const title = data?.titre ?? "Offre d'emploi";
            const description = data?.description ?? "";
            const technos = parseTechnos(data?.technos);

            const formattedDate = data?.date
              ? new Date(data.date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "";

            return (
              <Link key={index} href={`/${job.uid}`} className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-base">{title}</h3>
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

                  {technos.length > 0 && (
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
                      <span>{technos.join(", ")}</span>
                    </div>
                  )}

                  {description && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/offres"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Voir toutes les offres
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LastJobs;
