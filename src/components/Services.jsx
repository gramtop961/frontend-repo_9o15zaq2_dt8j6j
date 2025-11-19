import { Camera, Palette, Sparkles, Wand2, Megaphone, Clapperboard } from 'lucide-react'

const services = [
  {
    icon: Clapperboard,
    title: 'Concept & Script',
    desc: 'Narrative-first ideas that align with your brand and nail the brief.'
  },
  {
    icon: Camera,
    title: 'Production',
    desc: 'Directing, cinematography, crew, locations — end-to-end shoot management.'
  },
  {
    icon: Wand2,
    title: 'Post & VFX',
    desc: 'Edit, grade, sound, motion graphics and CG to finish strong.'
  },
  {
    icon: Megaphone,
    title: 'Distribution',
    desc: 'Cutdowns for all platforms, performance creative and ad ops support.'
  },
  {
    icon: Palette,
    title: 'Brand Design',
    desc: 'Launch assets, key visuals and design systems that scale.'
  },
  {
    icon: Sparkles,
    title: 'Creative Retainers',
    desc: 'On-going monthly support to keep content fresh and on-brand.'
  },
]

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-400/0 via-fuchsia-400/0 to-amber-300/0 opacity-0 blur transition duration-500 group-hover:opacity-60" />
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Icon size={22} />
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-white/70 mt-2 text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="text-white/70 mt-2">A full-stack creative and production partner for ambitious brands.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
