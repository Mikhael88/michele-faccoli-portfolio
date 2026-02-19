'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Star, Calendar, FileText, Video, Globe, Scan, Layers, ArrowRight } from 'lucide-react'
import { BlogSection } from '@/components/sections/BlogSection'
import { PageLayout } from '@/components/layout/PageLayout'
import { useTimerDrawer } from '@/hooks/useTimerDrawer'
import { SanityPortfolioGrid } from '@/components/sanity/SanityPortfolioGrid'

const services = [
  {
    icon: Video,
    title: 'Animazioni 3D',
    description: 'Video esplicativi che mostrano il funzionamento interno, l\'assemblaggio o le feature uniche. Tecniche, emozionali e ADV.',
    items: ['Exploded Views', 'Product Reveal', 'Spot ADV'],
    href: '/servizi-agenzie/animazioni-3d',
  },
  {
    icon: Globe,
    title: 'Configuratori Web',
    description: 'Modelli 3D ottimizzati per il web e la realtà aumentata. Permetti ai tuoi clienti di "provare" il prodotto nel loro ambiente.',
    items: ['WebGL / Three.js', 'AR Quick Look', 'E-commerce Integration'],
    href: '/servizi-agenzie/configuratori-web',
  },
  {
    icon: Scan,
    title: 'Scan & Stampa 3D',
    description: 'Il ponte tra fisico e digitale. Scansione 3D di oggetti esistenti e stampa professionale per prototipazione rapida.',
    items: ['Reverse Engineering', 'Prototipazione', 'Creality K2 Plus'],
    href: '/servizi-agenzie/scan-stampa-3d',
  },
  {
    icon: Layers,
    title: 'Modellazione & Render',
    description: 'Render fotorealistici che sostituiscono la fotografia tradizionale. Riduci i costi e ottieni asset pronti prima del prototipo.',
    items: ['CAD to 3D', 'PBR Materials', 'Multi-format Export'],
    href: '/servizi-agenzie/modellazione-render-3d',
  },
]

const testimonials = [
  { name: 'Marco Rossi', role: 'CEO, TechStart SRL', quote: 'Professionalità incredibile. I render hanno superato le aspettative.', avatar: 'M' },
  { name: 'Elena Bianchi', role: 'Product Manager, Innova Group', quote: 'Avevamo bisogno di visualizzazioni tecniche complesse. Il risultato è stato chiarissimo.', avatar: 'E' },
  { name: 'Luca Verdi', role: 'Creative Director, Luxe Agency', quote: 'Un partner affidabile. Tempi rispettati e qualità altissima.', avatar: 'L' },
]

export function AgencyPage() {
  const { openDrawer } = useTimerDrawer()
  
  return (
    <PageLayout currentPage="agenzie">
      <div className="min-h-full bg-site-bg">
      <nav className="sticky top-0 z-50 w-full bg-site-bg/80 backdrop-blur-md border-b border-[var(--brand-accent)]/20 px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--brand-accent)] rounded-lg flex items-center justify-center text-white font-bold text-lg">MF</div>
          <span className="font-bold text-lg tracking-tight text-white">Michele<span className="text-[var(--brand-accent)]">Faccoli</span></span>
          <span className="ml-4 text-xs text-[var(--brand-accent)] font-medium px-2 py-1 bg-[var(--brand-accent)]/10 rounded-full border border-[var(--brand-accent)]/20">Agenzie</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-[var(--brand-accent)] transition-colors">Soluzioni</a>
          <a href="#why-me" className="hover:text-[var(--brand-accent)] transition-colors">Vantaggi</a>
          <a href="#portfolio" className="hover:text-[var(--brand-accent)] transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-[var(--brand-accent)] transition-colors">Clienti</a>
        </div>
        <button onClick={openDrawer} className="px-5 py-2 bg-[var(--brand-accent)] hover:opacity-90 text-white rounded-full font-medium text-sm transition-colors">
          <FileText className="w-4 h-4 inline mr-2" />Richiedi Preventivo
        </button>
      </nav>

      <header className="relative pt-20 pb-24 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-accent)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)] animate-pulse" />Focus Tecnico & Pipeline
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Asset 3D Ottimizzati per{' '}<span className="neon-text-orange">Agenzie Creative</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
              Partner tecnico per agenzie che necessitano di asset 3D performanti. Retopology, ottimizzazione WebGL, pipeline Git integrata.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#portfolio" className="px-8 py-3.5 bg-[var(--brand-accent)] text-white rounded-lg font-semibold hover:opacity-90 transition-colors glow-brand">Vedi Portfolio</a>
              <a href="#contact" className="px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2 text-white bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/20 hover:border-[var(--brand-accent)]/50">
                <Calendar className="w-4 h-4 text-[var(--brand-accent)]" />Parliamo del progetto
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--brand-accent)]/20 to-[var(--brand-accent)]/10 flex items-center justify-center">
            <Layers className="w-24 h-24 text-[var(--brand-accent)]/30" />
          </motion.div>
        </div>
      </header>

      <section className="py-20 px-8 md:px-16 bg-site-bg" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">I Miei Servizi</h2>
            <p className="text-slate-400 max-w-2xl">Non solo "belle immagini". Offro strumenti visivi progettati per risolvere problemi di comunicazione e vendita.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group/card">
                <Link href={service.href} className="block h-full group">
                  <div className="relative p-6 md:p-8 rounded-2xl bg-[var(--card)] border border-slate-800 hover:border-[var(--brand-accent)]/50 transition-all flex flex-col group-hover/card:glow-orange overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                    <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-colors text-[var(--brand-accent)]">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
                    <ul className="text-xs text-slate-500 space-y-2 mb-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[var(--neon-yellow)] rounded-full" />{item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-[var(--brand-accent)] font-medium text-sm group-hover:gap-4 transition-all">
                      Scopri di più<ArrowRight className="w-4 h-4" />
                    </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-site-bg" id="why-me">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Perché scegliermi come Partner Tecnico</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Pipeline Integration', desc: 'Integrazione con repository Git, naming convention e versioning asset.' },
              { title: 'Formati Standardizzati', desc: 'Export multi-piattaforma: GLB, FBX, OBJ, USDZ con documentazione tecnica.' },
              { title: 'Performance Ottimizzate', desc: 'Modelli ottimizzati per 60 FPS su mobile e desktop.' },
              { title: 'Supporto Continuo', desc: 'Assistenza tecnica post-consegna e aggiornamenti inclusi.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-[var(--card)] border border-slate-800"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-accent)] flex items-center justify-center text-white text-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SanityPortfolioGrid
        cluster="servizi-agenzie"
        title="Portfolio Tecnico"
        subtitle="Wireframe, Polycount & Performance Metrics"
      />

      <section className="py-20 px-8 md:px-16 bg-site-bg" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Dicono di Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-xl border border-slate-800 flex flex-col justify-between"
              >
                <p className="text-slate-300 mb-6 leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center text-[var(--brand-accent)] font-bold">
                    {item.avatar}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">{item.name}</h5>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BlogSection />

      <footer className="bg-site-bg text-white pt-24 pb-12 px-8 md:px-16 relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-accent)]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Pronto a iniziare?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Prenota una chiamata conoscitiva di 15 minuti per analizzare le tue esigenze.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/faccoli-michele/tredo-meeting" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[var(--brand-accent)] hover:bg-[var(--neon-amber)] text-white font-bold rounded-lg transition-colors flex items-center gap-2 glow-brand">Prenota una Call</a>
            <a href="mailto:info@michelefaccoli.com" className="px-8 py-4 rounded-xl font-semibold transition-all text-white bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/20 hover:border-[var(--brand-accent)]/50 flex items-center gap-2">Scrivimi direttamente</a>
          </div>

          <div className="mt-12 flex justify-center gap-6 text-slate-400">
            <a href="https://linkedin.com/in/michelefaccoli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://artstation.com/michelefaccoli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ArtStation</a>
            <a href="https://behance.net/michelefaccoli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
          </div>

          <div className="mt-16 pt-8 text-center text-slate-600 text-sm border-t border-slate-800">© 2025 Michele Faccoli - 3D Artist. Tutti i diritti riservati.</div>
        </div>
      </footer>

      </div>
    </PageLayout>
  )
}
