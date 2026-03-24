import { createClient } from "@/prismicio";
import { parseTechnos } from "@/lib/parseTechnos";
import OffresClient from "./OffresClient";

export default async function OffresPage() {
  const client = createClient();
  const prismicJobs = await client.getAllByType("job", {
    orderings: [{ field: "my.job.date", direction: "desc" }],
  });

  const jobs = prismicJobs.map((doc) => ({
    id: doc.id,
    uid: doc.uid,
    title: doc.data.titre ?? "Offre d'emploi",
    date: doc.data.date ?? "",
    technologies: parseTechnos(doc.data.technos),
    description: doc.data.description ?? "",
    available: true,
  }));

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <OffresClient jobs={jobs} />
    </main>
  );
}
