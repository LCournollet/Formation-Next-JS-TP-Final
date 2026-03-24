import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { parseTechnos } from "@/lib/parseTechnos";

export default async function JobPage({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;
  const client = createClient();

  const job = await client.getByUID("job", uid).catch(() => null);
  if (!job) notFound();

  const title = job.data.titre ?? "Offre d'emploi";
  const technos = parseTechnos(job.data.technos);
  const formattedDate = job.data.date
    ? new Date(job.data.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>

      <div className="flex flex-wrap gap-4 text-blue-600 text-sm mb-6">
        {formattedDate && (
          <div className="flex items-center gap-1.5">
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
          <div className="flex items-center gap-1.5">
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
      </div>

      {job.data.description && (
        <p className="text-gray-700 leading-relaxed">{job.data.description}</p>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const jobs = await client.getAllByType("job");
  return jobs.map((job) => ({ uid: job.uid }));
}
