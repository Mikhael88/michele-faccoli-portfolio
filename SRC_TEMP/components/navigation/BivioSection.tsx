'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Palette, ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BivioSectionData } from '@/lib/sanity'
import * as LucideIcons from 'lucide-react'

interface BivioSectionProps {
  data: BivioSectionData | null
}

// Mappa per le icone Lucide
const iconMap: Record<string, LucideIcon> = {
  Palette: Palette,
  Building2: Building2,
}

// Funzione per ottenere l'icona dal nome
function getIconComponent(iconName: string): LucideIcon {
  return iconMap[iconName] || (LucideIcons as any)[iconName] || Palette
}

// Stili per i path basati sulla key (come nello stile originale)
const pathStyles = {
  agenzie: {
    borderHover: 'hover:border-[var(--neon-orange)]/50',
    iconBg: 'bg-gradient-to-br from-[var(--neon-orange)] to-[var(--neon-amber)]',
    textColor: 'text-[var(--neon-orange)]',
    bulletColor: 'bg-[var(--neon-orange)]',
    glow: 'group-hover:glow-orange',
  },
  aziende: {
    borderHover: 'hover:border-[var(--neon-cyan)]/50',
    iconBg: 'bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-blue)]',
    textColor: 'text-[var(--neon-cyan)]',
    bulletColor: 'bg-[var(--neon-cyan)]',
    glow: 'group-hover:glow-cyan',
  },
}

export function BivioSection({ data }: BivioSectionProps) {
  // Fallback ai valori di default
  const bivioData = data || {
    title: 'Scegli il tuo',
    titleHighlight: 'Percorso',
    description: 'Ogni cliente ha esigenze diverse. Seleziona il profilo che meglio ti rappresenta per scoprire servizi su misura.',
    paths: [
      {
        key: 'agenzie' as const,
        icon: 'Palette',
        title: 'Per Agenzie Creative',
        subtitle: 'Collaborazioni tecniche per progetti complessi',
        description: 'Partner tecnico per agenzie che necessitano di asset 3D ottimizzati per web, AR/VR e configuratori interattivi.',
        features: ['Retopology da CAD', 'GLB ottimizzati', 'Pipeline Git', 'Documentazione tecnica'],
        href: '/servizi-agenzie',
      },
      {
        key: 'aziende' as const,
        icon: 'Building2',
        title: 'Per Aziende Industriali',
        subtitle: 'Soluzioni visuali per il tuo business',
        description: 'Da idea a prodotto tangibile: render fotorealistici, stampa 3D e animazioni emozionali per il marketing.',
        features: ['Render fotorealistici', 'Stampa 3D K2', 'Animazioni prodotto', 'Prototipazione rapida'],
        href: '/soluzioni-industriali',
      },
    ],
  }
  return (
    <section className="min-h-screen bg-site-bg flex items-center py-24 px-8 md:px-16 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {bivioData.title}{' '}
            <span className="neon-text-orange">
              {bivioData.titleHighlight}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
            {bivioData.description}
          </p>
        </motion.div>

        {/* Path Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {bivioData.paths.map((path, index) => {
            const Icon = getIconComponent(path.icon)
            const styles = pathStyles[path.key] || pathStyles.agenzie
            
            return (
              <motion.div
                key={path.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={path.href} className="block">
                  <div
                    className={cn(
                      'relative p-10 rounded-2xl border border-slate-800 transition-all duration-300 bg-[#141414]/50',
                      styles.borderHover,
                      styles.glow
                    )}
                  >
                    {/* Icon */}
                    <div className={cn(
                      'w-20 h-20 rounded-xl flex items-center justify-center mb-8',
                      styles.iconBg
                    )}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {path.title}
                    </h3>
                    <p className={cn(
                      'text-lg font-medium mb-6',
                      styles.textColor
                    )}>
                      {path.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-lg text-slate-400 mb-8">
                      {path.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {path.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-lg text-slate-300">
                          <span className={cn(
                            'w-2 h-2 rounded-full',
                            styles.bulletColor
                          )} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-3 text-white text-lg font-medium group-hover:gap-5 transition-all">
                      <span>Esplora percorsi</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
