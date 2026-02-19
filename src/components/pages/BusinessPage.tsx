'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Camera, Printer, Sparkles, Video, Check, Star, Calendar, Play, FileText, Globe, Scan, ArrowRight, Smartphone } from 'lucide-react'
import { BlogSection } from '@/components/sections/BlogSection'
import { PageLayout } from '@/components/layout/PageLayout'
import { useTimerDrawer } from '@/hooks/useTimerDrawer'
import { SanityPortfolioGrid } from '@/components/sanity/SanityPortfolioGrid'

const services = [
  {
    icon: Smartphone,
    title: 'Campagne Social 3D',
    description: 'Contenuti visivi 3D ottimizzati per ogni piattaforma sociale. Da video product reveal a carousel interattivi, fino a filtri AR per il tuo brand.',
    items: ['Reels & TikTok', 'Carousel', 'AR Filters'],
    href: '/soluzioni-industriali/campagne-social',
  },
  {
    icon: Camera,
    title: 'Cataloghi Digitali',
    description: 'Sostituisci costosi shooting fotografici con render 3D fotorealistici. Cataloghi completi con varianti illimitate.',
    items: ['Photorealistic Renders', 'Varianti Illimitate', 'Web & Print Ready'],
    href: '/soluzioni-industriali/cataloghi',
  },
  {
    icon: Scan,
    title: 'Scan & Stampa 3D',
    description: 'Dal concept al prototipo fisico in giorni. Scansione 3D per reverse engineering e stampa professionale Creality K2 Plus.',
    items: ['Prototipazione Rapida', 'Reverse Engineering', 'Piccoli Lotti'],
    href: '/soluzioni-industriali/scan-stampa-3d',
  },
  {
    icon: Globe,
    title: 'Configuratori E-commerce',
    description: 'Configuratori 3D che permettono ai clienti di personalizzare i prodotti prima dell\'acquisto. Meno resi, più conversioni.',
    items: ['Personalizzazione Visiva', 'AR Preview', 'Shopify Integration'],
    href: '/soluzioni-industriali/configuratori-ecommerce-3d',
  },
]

const testimonials = [
  { name: 'Alessandro Ferretti', role: 'Marketing Director, LuxeBrand', quote: 'I render hanno sostituito completamente la fotografia tradizionale. ROI eccezionale.', avatar: 'A' },
  { name: 'Giulia Martini', role: 'Product Owner, DesignCo', quote: 'Il prototipo 3D ci ha permesso di validare il design prima della produzione.', avatar: 'G' },
  { name: 'Roberto Neri', role: 'CEO, TechGadget Inc.', quote: 'Le animazioni prodotto hanno aumentato il tasso di conversione del 35%.', avatar: 'R' },
]

export function BusinessPage() {
  const { openDrawer } = useTimerDrawer()
  
  return (
    <PageLayout currentPage="aziende">
      <div className="min-h-full bg-transparent">
      <nav className="sticky top-0 z-50 w-full bg-site-bg/80 backdrop-blur-md border-b border-[var(--brand-accent)]/20 px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--brand-accent)] rounded-lg flex items-center justify-center text-white font-bold text-lg">MF</div>
          <span className="font-bold text-lg tracking-tight text-white">Michele<span className="text-[var(--brand-accent)]">Faccoli</span></span>
          <span className="ml-4 text-xs text-[var(--brand-accent)] font-medium px-2 py-1 bg-[var(--brand-accent)]/10 rounded-full border border-[var(--brand-accent)]/20">Aziende</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-[var(--brand-accent)] transition-colors">Soluzioni</a>
          <a href="#why-me" className="hover:text-[var(--brand-accent)] transition-colors">Vantaggi</a>
          <a href="#portfolio" className="hover:text-[var(--brand-accent)] transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-[var(--brand-accent)] transition-colors">Clienti</a>
        </div>
        <button onClick={openDrawer} className="px-5 py-2 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)] text-white rounded-full font-medium text-sm transition-colors">
          <FileText className="w-4 h-4 inline mr-2" />Richiedi Preventivo
        </button>
      </nav>

      <header className="relative pt-20 pb-24 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-accent)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)] animate-pulse" />Focus Business & Marketing
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Visualizzazione 3D per{' '}<span className="neon-text-blue">Aziende</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
              Da idea a prodotto tangibile: render fotorealistici, stampa 3D e animazioni emozionali per comunicare il valore dei tuoi prodotti.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#portfolio" className="px-8 py-3.5 bg-[var(--brand-accent)] text-white rounded-lg font-semibold hover:opacity-90 transition-colors glow-blue">Vedi Portfolio</a>
              <a href="#contact" className="px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2 text-white bg-[var(--card)] border border-[var(--brand-accent)]/30 hover:border-[var(--brand-accent)]/50">
                <Calendar className="w-4 h-4 text-[var(--brand-accent)]" />Parliamo del progetto
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--brand-accent)]/20 to-[var(--brand-accent)]/10 flex items-center justify-center group cursor-pointer">
            <Sparkles className="w-24 h-24 text-[var(--brand-accent)]/30" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[var(--brand-accent)]/80 flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-20 px-8 md:px-16 bg-site-bg" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Le Soluzioni per la Tua Azienda</h2>
            <p className="text-slate-400 max-w-2xl">Soluzioni visive progettate per aumentare conversioni e comunicare il valore dei tuoi prodotti.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group/card">
                <Link href={service.href} className="block h-full group">
                  <div className="relative p-6 md:p-8 rounded-2xl bg-[var(--card)] border border-slate-800 hover:border-[var(--brand-accent)]/50 transition-all flex flex-col group-hover/card:glow-blue overflow-hidden">
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
                          <span className="w-1.5 h-1.5 bg-[var(--brand-accent)] rounded-full" />{item}
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

      <section className="py-20 px-8 md:px-16 bg-site-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--brand-accent)]/10 to-[var(--brand-accent)]/5 border border-[var(--brand-accent)]/30 hover:border-[var(--brand-accent)]/50 transition-all group overflow-hidden group-hover:glow-blue">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                <Printer className="w-12 h-12 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Creality K2 Plus</h3>
                <p className="text-slate-400 mb-4">Stampa 3D professionale per prototipazione rapida. Dimensioni build: 350x350x350mm. Materiali: PLA, PETG, ABS, TPU.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-white">Alta Precisione</span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-white">Prototipi Funzionali</span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-white">Consegna Rapida</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-site-bg" id="why-me">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Perché scegliermi come Partner Business</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Processo Chiavi in Mano', desc: 'Dal briefing alla consegna finale, gestisco tutto senza necessità di micro-management.' },
              { title: 'Costi Trasparenti', desc: 'Preventivi chiari basati sul valore del progetto, non sulle ore. Nessuna sorpresa.' },
              { title: 'Licenze Commerciali', desc: 'Tutti gli asset con pieni diritti di utilizzo per i tuoi canali marketing.' },
              { title: 'Supporto Post-Consegna', desc: 'Revisioni incluse e supporto continuo per aggiornamenti futuri.' },
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
        cluster="soluzioni-industriali"
        title="Portfolio Emozionale"
        subtitle="Ambientazioni Photorealistic & Render Pubblicitari"
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
          <h2 className="text-4xl font-bold mb-4">Pronto a trasformare la tua visione?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Consulenza gratuita per capire come posso aiutarti a comunicare il valore dei tuoi prodotti.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/faccoli-michele/tredo-meeting" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[var(--brand-accent)] hover:opacity-90 text-white font-bold rounded-lg transition-colors flex items-center gap-2 glow-blue">Prenota una Call</a>
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
