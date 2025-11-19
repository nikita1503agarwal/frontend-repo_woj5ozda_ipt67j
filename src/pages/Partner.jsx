const Partner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold">Partner & Sponsoring</h1>
        <p className="mt-4 text-white/80">Du möchtest mit uns zusammenarbeiten? Wir sind offen für spannende Kooperationen und Partnerschaften!</p>
        <div className="mt-6 space-y-2">
          <p>E-Mail: <a className="underline" href="mailto:hi@un-bequem.de">hi@un-bequem.de</a></p>
          <p>Schreib uns eine Nachricht und lass uns gemeinsam etwas Großartiges schaffen!</p>
        </div>
        <a href="/" className="inline-block mt-10 text-white/70 hover:text-white">← Zurück</a>
      </div>
    </div>
  )
}

export default Partner
