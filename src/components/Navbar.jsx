import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="text-white font-extrabold tracking-tight">UNBEQUEM <span className="text-white/70">&</span> BEQUEM</a>
        <div className="flex items-center gap-4 text-sm">
          <a className="text-white/80 hover:text-white" href="#unbequem">UNBEQUEM</a>
          <a className="text-white/80 hover:text-white" href="#bequem">BEQUEM</a>
          <a className="text-white/80 hover:text-white" href="/merch">Merch</a>
          <a className="text-white/80 hover:text-white" href="/partner">Partner</a>
          <a className="text-white/80 hover:text-white" href="#contact">Kontakt</a>
          <a className="text-white/80 hover:text-white" href="https://netzfundament.de/impressum" target="_blank" rel="noreferrer">Impressum/AGB</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
