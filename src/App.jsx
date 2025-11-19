import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Showreel />
      <Services />

      {/* About */}
      <section id="about" className="relative py-24 bg-slate-950/90">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold">Between Deadlines</h2>
              <p className="text-white/70 mt-4">We are a creative ad agency and production studio. We turn strategic insights into cinematic stories that perform across platforms. Our in-house team covers concepting, directing, cinematography, edit, VFX and delivery — so ideas stay sharp from pitch to publish.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-bold">120+</p>
                  <p className="text-white/70 text-sm">Campaign assets shipped</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-bold">18</p>
                  <p className="text-white/70 text-sm">Brands partnered</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-amber-300/10 p-[1px]">
                <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.25),transparent_40%)]" />
                <img src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW98ZW58MHwwfHx8MTc2MzUzMTc5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Studio" className="relative h-full w-full rounded-[calc(theme(borderRadius.3xl)-1px)] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/90 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70">© {new Date().getFullYear()} Between Deadlines. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/70">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
