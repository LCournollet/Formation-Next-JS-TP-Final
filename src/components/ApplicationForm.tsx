"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApplicationStore } from "@/lib/applicationStore";

type Props = {
  jobUid: string;
  jobTitle: string;
};

export default function ApplicationForm({ jobUid, jobTitle }: Props) {
  const [message, setMessage] = useState("");
  const addApplication = useApplicationStore((s) => s.addApplication);
  const router = useRouter();

  const handleSubmit = () => {
    if (!message.trim()) return;
    addApplication({
      jobUid,
      jobTitle,
      message,
      submittedAt: new Date().toISOString(),
    });
    router.push("/candidature-envoyee");
  };

  return (
    <div className="mt-10">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Postuler à cette offre ..."
        className="w-full border border-blue-400 rounded p-4 text-sm text-gray-700 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex justify-end mt-3">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition-colors cursor-pointer"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
