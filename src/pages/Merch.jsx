const Merch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold">Merch – Coming Soon</h1>
        <p className="mt-4 text-white/80">Wir sind noch am Anfang unserer Reise. Bald gibt es hier coole Merch-Artikel für Abenteurer und Gamer!</p>
        <p className="mt-6">Bleib dran und abonniere unsere Kanäle, um nichts zu verpassen!</p>
        <div className="mt-8 flex gap-3">
          <a href="https://www.youtube.com/@UNBEQUEM-o2w" target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700">UNBEQUEM abonnieren</a>
          <a href="https://www.youtube.com/@BEQUEM-g" target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700">BEQUEM abonnieren</a>
        </div>
        <a href="/" className="inline-block mt-10 text-white/70 hover:text-white">← Zurück</a>
      </div>
    </div>
  )
}

export default Merch
