import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // For now just simulate send
    setTimeout(() => setStatus('We got it! We will reach out within 24h.'), 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tell us about your project</h2>
            <p className="text-white/70 mt-2">Share your goals, timelines and references. We’ll come back with options and a ballpark.</p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80">
              <p className="font-semibold">Prefer email?</p>
              <a href="mailto:hello@betweendeadlines.studio" className="underline">hello@betweendeadlines.studio</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Name" />
              <input required type="email" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Email" />
              <input className="md:col-span-2 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Company" />
              <textarea rows="5" className="md:col-span-2 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="What are you looking to make?" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition" type="submit">Send brief</button>
              <span className="text-white/70 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
