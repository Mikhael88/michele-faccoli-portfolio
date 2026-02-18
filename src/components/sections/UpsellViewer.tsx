'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface UpsellViewerProps {
  theme: 'orange' | 'blue'
}

export function UpsellViewer({ theme }: UpsellViewerProps) {
  const isOrange = theme === 'orange'
  
  return (
    <section className="py-20 px-8 md:px-16 bg-site-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 rounded-2xl border overflow-hidden bg-[var(--card)] border-[var(--brand-accent)]/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 bg-[var(--brand-accent)]/20" />
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center bg-[var(--brand-accent)]">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cerchi un servizio{' '}
              <span className="text-[var(--brand-accent)]">
                chiavi in mano
              </span>
              ?
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Offro pacchetti completi che includono consulenza, produzione e supporto post-consegna. 
              Dalla tua idea al risultato finale, senza pensieri.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://calendly.com/faccoli-michele/tredo-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold text-white transition-all flex items-center gap-3 text-lg bg-[var(--brand-accent)] hover:opacity-90"
              >
                <Calendar className="w-5 h-5" />
                Prenota una Consulenza
              </Link>
              <Link
                href={isOrange ? '/servizi-agenzie' : '/soluzioni-industriali'}
                className="px-8 py-4 border rounded-xl font-semibold transition-colors flex items-center gap-3 text-lg border-[var(--brand-accent)]/30 text-white hover:bg-[var(--brand-accent)]/10"
              >
                Esplora tutti i servizi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-slate-500">
              Consulenza gratuita di 15 minuti • Nessun impegno
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
