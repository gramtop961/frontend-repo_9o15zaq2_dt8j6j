import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

function TiltCard({ image, title, brand, tag }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [12, -12])
  const rotateY = useTransform(x, [-50, 50], [-12, 12])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    const rx = ((py / rect.height) - 0.5) * 100
    const ry = ((px / rect.width) - 0.5) * 100
    x.set(ry)
    y.set(rx)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className="group relative aspect-[4/5] select-none rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative h-full w-full overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)]"
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70">{brand}</p>
            <h4 className="text-white font-semibold text-lg">{title}</h4>
          </div>
          <div className="rounded-xl bg-white/10 px-2 py-1 text-[10px] text-white/80">{tag}</div>
        </div>
        <div className="absolute -inset-px rounded-[calc(theme(borderRadius.3xl)-1px)] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.35),transparent_30%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </motion.div>
    </motion.div>
  )
}

export default function Showreel() {
  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
      title: 'Launch the Future',
      brand: 'Nebula Tech',
      tag: 'Brand Film'
    },
    {
      image: 'https://images.unsplash.com/photo-1728632286888-04c64f48e506?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYXVuY2glMjB0aGUlMjBGdXR1cmV8ZW58MHwwfHx8MTc2MzUzMTc5M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      title: 'Taste in Color',
      brand: 'Croma Soda',
      tag: 'Social Cutdowns'
    },
    {
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop',
      title: 'Move Your City',
      brand: 'Urban Ride',
      tag: 'Product Ad'
    },
  ]

  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
            <p className="text-white/70 mt-2">Interactive 3D cards showcase a few favorites. Hover to explore.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Request full reel</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <TiltCard key={c.title} image={c.image} title={c.title} brand={c.brand} tag={c.tag} />
          ))}
        </div>
      </div>
    </section>
  )
}
