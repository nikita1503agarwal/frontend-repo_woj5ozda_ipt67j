const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white/80 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-2">Kontakt</h4>
          <p>E-Mail: <a className="underline" href="mailto:hi@un-bequem.de">hi@un-bequem.de</a></p>
          <p>Management: Netzfundament</p>
          <p>Telefon: 069 – 40791489 (Mo–Fr, 16–19 Uhr, nur Deutschland)</p>
          <p>Management E-Mail: <a className="underline" href="mailto:hi@netzfundament.de">hi@netzfundament.de</a></p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Links</h4>
          <ul className="space-y-1">
            <li><a className="hover:text-white" href="https://netzfundament.de/impressum" target="_blank" rel="noreferrer">Impressum</a></li>
            <li><a className="hover:text-white" href="https://netzfundament.de/agb" target="_blank" rel="noreferrer">AGB</a></li>
            <li><a className="hover:text-white" href="https://netzfundament.de/datenschutz" target="_blank" rel="noreferrer">Datenschutz</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Newsletter</h4>
          <p className="text-sm mb-3">Bleib dran und abonniere unsere Kanäle, um nichts zu verpassen!</p>
          <div className="flex gap-2">
            <a href="https://www.youtube.com/@UNBEQUEM-o2w" target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-sm">UNBEQUEM abonnieren</a>
            <a href="https://www.youtube.com/@BEQUEM-g" target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm">BEQUEM abonnieren</a>
          </div>
        </div>
      </div>
      <p className="text-center text-white/60 mt-8 text-sm">© {new Date().getFullYear()} UNBEQUEM & BEQUEM · Eine Marke von Netzfundament</p>
    </footer>
  )
}

export default Footer
