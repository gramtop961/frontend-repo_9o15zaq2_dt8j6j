import { useState } from 'react'
import { Menu, X, Play, Camera, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3 shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400/30 via-fuchsia-400/30 to-amber-300/30 rounded-xl blur-md" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-amber-400 text-white shadow-lg">
                <Sparkles size={18} />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">Between Deadlines</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition">
              <Play size={16} /> Reel
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold hover:bg-slate-100 transition">
              <Camera size={16} /> Book a Shoot
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-slate-200/90 hover:text-white hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-lg px-3 py-2 bg-white text-slate-900 text-center font-semibold">Book a Shoot</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
