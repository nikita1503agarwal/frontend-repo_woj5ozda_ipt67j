import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="top" className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
            UNBEQUEM & BEQUEM
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg sm:text-xl">
            Draußen. Abenteuer. Echt. • Drinnen. Chillen. Zocken.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#unbequem" className="px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors">
              Zum UNBEQUEM Kanal
            </a>
            <a href="#bequem" className="px-5 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-colors">
              Zum BEQUEM Kanal
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  )
}

export default Hero
