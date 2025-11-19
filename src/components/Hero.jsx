import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays that don't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            Between Deadlines — Creative Ad Agency
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            We craft moving stories for brands that move the world
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            From concept to cut, we design, shoot and ship ads that stop thumbs and start conversations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition">Start a Project</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white/15 transition">See our Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
