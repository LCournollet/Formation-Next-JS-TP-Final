const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Mentions Légales</h1>
      <div className="w-16 h-0.5 bg-blue-600 mb-1" />
      <div className="w-full h-px bg-gray-200 mb-10" />

      <section className="mb-10">
        <h2 className="text-lg font-bold text-blue-600 mb-6">Lorem Ipsum</h2>
        <div className="flex flex-col gap-4 text-gray-700 text-sm leading-relaxed">
          <p>{LOREM}</p>
          <p>{LOREM}</p>
          <p>{LOREM}</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-blue-600 mb-6">Lorem Ipsum</h2>
        <div className="flex flex-col gap-4 text-gray-700 text-sm leading-relaxed">
          <p>{LOREM}</p>
          <p>{LOREM}</p>
          <p>{LOREM}</p>
        </div>
      </section>
    </main>
  );
}
