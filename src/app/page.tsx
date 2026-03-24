import Link from "next/link";
import Image from "next/image";
import JobCard from "@/components/JobCard";
import { MOCK_JOBS } from "@/data/jobs";

const LATEST_JOBS = MOCK_JOBS.slice(0, 6);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="relative w-full h-52">
        <Image
          src="/hero.jpg"
          alt="Bannière"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Latest offers */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Nos dernières opportunités
          </h2>
          <div className="w-16 h-0.5 bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LATEST_JOBS.map((job) => (
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
      </section>
    </main>
  );
}
