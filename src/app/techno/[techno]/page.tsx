import Link from "next/link";
import { createClient } from "@/prismicio";
import { parseTechnos } from "@/lib/parseTechnos";
import JobCard from "@/components/JobCard";

export default async function TechnoPage({
  params,
}: {
  params: Promise<{ techno: string }>;
}) {
  const { techno } = await params;
  const technoName = decodeURIComponent(techno);

  const client = createClient();
  const allJobs = await client.getAllByType("job", {
    orderings: [{ field: "my.job.date", direction: "desc" }],
  });

  const jobs = allJobs
    .map((doc) => ({
      id: doc.id,
      uid: doc.uid,
      title: doc.data.titre ?? "Offre d'emploi",
      date: doc.data.date ?? "",
      technologies: parseTechnos(doc.data.technos),
      description: doc.data.description ?? "",
      available: true,
    }))
    .filter((job) =>
      job.technologies.some(
        (t) => t.toLowerCase() === technoName.toLowerCase()
      )
    );

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-6">
        <Link
          href="/offres"
          className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          &lt; Voir toutes les offres
        </Link>
      </div>

      <div className="flex items-end justify-between mb-2">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{technoName}</h1>
          <div className="w-16 h-0.5 bg-blue-600" />
        </div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <span>{jobs.length} offres</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500 col-span-3">Aucune offre pour cette technologie.</p>
        )}
      </div>
    </main>
  );
}
