import { MOCK_JOBS } from "@/data/jobs";
import OffresClient from "./OffresClient";

export default function OffresPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <OffresClient jobs={MOCK_JOBS} />
    </main>
  );
}
