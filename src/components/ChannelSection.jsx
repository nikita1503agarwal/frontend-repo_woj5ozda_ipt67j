import { useEffect, useState } from 'react'

const formatViews = (n) => {
  if (n == null) return '-'
  const num = Number(n)
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + ' Mio'
  if (num >= 1_000) return (num / 1_000).toFixed(1) + ' Tsd'
  return String(num)
}

const VideoCard = ({ v }) => {
  const vid = v.id
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
      <div className="aspect-video w-full bg-black/40 overflow-hidden">
        {vid && (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${vid}`}
            title={v.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-white/90 line-clamp-2">{v.title}</p>
        {v.viewCount != null && (
          <p className="text-xs text-white/60 mt-1">{formatViews(v.viewCount)} Aufrufe</p>
        )}
        {vid && (
          <a
            href={`https://www.youtube.com/watch?v=${vid}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            Auf YouTube ansehen
          </a>
        )}
      </div>
    </div>
  )
}

const ChannelSection = ({ id, theme = 'outdoor', handle, title, tagline, primaryColor, subscribeUrl }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState({ stats: {}, latest: [], popular: [] })

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL('/api/youtube/overview', base)
        url.searchParams.set('handle', handle)
        url.searchParams.set('maxResults', '6')
        const res = await fetch(url.toString())
        if (!res.ok) throw new Error(`API ${res.status}`)
        const j = await res.json()
        setData(j)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [handle])

  const bgOutdoor = 'from-emerald-900 via-emerald-800 to-stone-900'
  const bgGaming = 'from-indigo-900 via-fuchsia-900 to-slate-900'

  return (
    <section id={id} className={`relative py-16 sm:py-24 bg-gradient-to-b ${theme === 'outdoor' ? bgOutdoor : bgGaming}`}>
      {/* decorative transition shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl ${theme==='outdoor' ? 'bg-emerald-500' : 'bg-fuchsia-500'}`} />
        <div className={`absolute -bottom-20 -right-10 w-72 h-72 rounded-full blur-3xl ${theme==='outdoor' ? 'bg-amber-500' : 'bg-cyan-400'}`} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">{title}</h2>
            <p className="mt-2 text-white/80">{tagline}</p>
          </div>
          <div className="text-right">
            <p className="text-white/70 text-sm">Abonnenten</p>
            <p className="text-3xl font-bold text-white">{data?.stats?.subscriberCount ?? '–'}</p>
            <a href={subscribeUrl} target="_blank" rel="noreferrer" className="inline-block mt-3 px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: primaryColor }}>
              Kanal abonnieren
            </a>
          </div>
        </div>

        {/* tabs: Neueste / Beliebteste */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white/90 font-semibold mb-3">Neueste Videos</h3>
            {loading ? (
              <p className="text-white/70">Lade...</p>
            ) : error ? (
              <p className="text-red-300">Fehler: {error}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.latest.map(v => (
                  <VideoCard key={v.id} v={v} />
                ))}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-white/90 font-semibold mb-3">Beliebteste Videos</h3>
            {loading ? (
              <p className="text-white/70">Lade...</p>
            ) : error ? (
              <p className="text-red-300">Fehler: {error}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.popular.map(v => (
                  <VideoCard key={v.id} v={v} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChannelSection
