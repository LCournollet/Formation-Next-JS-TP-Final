import { FC } from "react";
import { Content, isFilled, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import { parseTechnos } from "@/lib/parseTechnos";

export type LastJobsProps = SliceComponentProps<Content.LastJobsSlice>;

const LastJobs: FC<LastJobsProps> = ({ slice }) => {
  const title = Array.isArray(slice.primary.title)
    ? asText(slice.primary.title as unknown as Parameters<typeof asText>[0])
    : slice.primary.title;

  const jobs = slice.primary.joblist.flatMap((item) => {
    if (!isFilled.contentRelationship(item.job)) return [];
    const job = item.job;
    const data = job.data as {
      titre?: string | null;
      description?: string | null;
      date?: string | null;
      technos?: string | null;
    };
    return [{
      id: job.id,
      uid: job.uid ?? null,
      title: data?.titre ?? "Offre d'emploi",
      date: data?.date ?? "",
      technologies: parseTechnos(data?.technos),
      description: data?.description ?? "",
      available: true,
    }];
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="w-16 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
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
