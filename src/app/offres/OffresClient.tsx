"use client";

import { useState } from "react";
import JobCard from "@/components/JobCard";
import type { Job } from "@/types/job";

type Props = {
  jobs: Job[];
};

export default function OffresClient({ jobs }: Props) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const allTechnologies = [
    "Next.js", "React", "TypeScript", "Tailwind", "JavaScript",
    "Redux", "CSS", "Node.js", "Express", "MongoDB",
    "Vue.js", "Vuex", "SCSS", "Python", "Django",
    "PostgreSQL", "REST", "Angular", "RxJS", "HTML",
    "React Native", "Expo", "API", "Docker", "Kubernetes",
    "AWS", "CI/CD", "PHP", "Laravel", "MySQL",
    "Blade", "Java", "Spring Boot", "Hibernate", "SQL",
  ];

  const toggleFilter = (tech: string) => {
    setActiveFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredJobs =
    activeFilters.length === 0
      ? jobs
      : jobs.filter((job) =>
          activeFilters.every((tech) => job.technologies.includes(tech))
        );

  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Offres d&apos;emploi
          </h1>
          <div className="w-16 h-0.5 bg-blue-600" />
        </div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mt-1">
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
          <span>{filteredJobs.length} offres</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mt-4 mb-8">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleFilter(tech)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
              activeFilters.includes(tech)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
