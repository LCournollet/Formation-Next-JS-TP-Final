import Link from "next/link";

export default function CandidatureEnvoyeePage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-24 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-3">
        Candidature envoyée !
      </h1>
      <p className="text-gray-500 mb-8">
        Votre candidature a bien été enregistrée. Nous reviendrons vers vous prochainement.
      </p>

      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
