'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Settings, Heart, Megaphone, Check } from 'lucide-react'

interface TabItem {
  id: string
  label: string
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  useCases: string[]
}

const tabs: TabItem[] = [
  {
    id: 'tecniche',
    label: 'Tecniche',
    icon: Settings,
    title: 'Animazioni Tecniche',
    description: 'Video esplicativi che mostrano il funzionamento interno, l\'assemblaggio o le caratteristiche tecniche del prodotto.',
    features: ['Exploded views dettagliati', 'Sezioni animate di componenti', 'Demo funzionamento meccanismi', 'Istruzioni di montaggio interattive'],
    useCases: ['Manuali utente digitali', 'Formazione tecnica', 'Presentazioni B2B', 'Documentazione prodotto'],
  },
  {
    id: 'emozionali',
    label: 'Emozionali',
    icon: Heart,
    title: 'Animazioni Emozionali',
    description: 'Contenuti che evocano sensazioni e creano connessione emotiva con il brand e il prodotto.',
    features: ['Product reveal cinematografici', 'Ambientazioni photorealistic', 'Storytelling visivo', 'Mood e atmosfere su misura'],
    useCases: ['Lanci prodotto premium', 'Campagne brand awareness', 'Eventi e fiere', 'Content marketing'],
  },
  {
    id: 'adv',
    label: 'ADV',
    icon: Megaphone,
    title: 'Animazioni Pubblicitarie',
    description: 'Spot e contenuti ottimizzati per campagne advertising su tutti i canali digitali.',
    features: ['Spot TV e digital', 'Video per social ads', 'Motion graphics integrate', 'Formati multi-piattaforma'],
    useCases: ['Campagne Facebook/Instagram Ads', 'YouTube pre-roll', 'Programmatic advertising', 'Digital signage'],
  },
]

interface AnimationsTabsProps {
  theme: 'orange' | 'blue'
}

export function AnimationsTabs({ theme }: AnimationsTabsProps) {
  const [activeTab, setActiveTab] = useState('tecniche')
  const isOrange = theme === 'orange'

  return (
    <section className="py-20 px-8 md:px-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Tipologie di Animazione</h2>
        <p className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto">
          Ogni progetto richiede un approccio diverso. Scegli la tipologia più adatta alle tue esigenze.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all',
                  activeTab === tab.id
                    ? isOrange ? 'bg-[var(--brand-accent)] text-white' : 'bg-[var(--brand-accent)] text-white'
                    : 'bg-site-bg text-slate-400 hover:text-white border border-slate-800'
                )}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          {tabs.map((tab) => {
            if (tab.id !== activeTab) return null
            const Icon = tab.icon
            
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  'p-8 md:p-12 rounded-2xl border',
                  isOrange 
                    ? 'bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent border-[var(--brand-accent)]/20' 
                    : 'bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent border-[var(--brand-accent)]/20'
                )}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className={cn(
                      'w-16 h-16 rounded-xl flex items-center justify-center mb-6',
                      isOrange 
                        ? 'bg-gradient-to-br from-[var(--brand-accent)] to-[var(--neon-amber)]' 
                        : 'bg-gradient-to-br from-[var(--brand-accent)] to-[var(--neon-blue-dark)]'
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{tab.title}</h3>
                    <p className="text-lg text-slate-400 mb-8">{tab.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Cosa include</h4>
                      {tab.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={cn(
                            'w-5 h-5 rounded-full flex items-center justify-center',
                            isOrange ? 'bg-[var(--brand-accent)]/20' : 'bg-[var(--brand-accent)]/20'
                          )}>
                            <Check className={cn('w-3 h-3', isOrange ? 'text-[var(--brand-accent)]' : 'text-[var(--brand-accent)]')} />
                          </div>
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-8 rounded-xl bg-black/30">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Casi d'uso ideali</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {tab.useCases.map((useCase, index) => (
                        <div
                          key={index}
                          className={cn(
                            'p-4 rounded-lg border transition-colors',
                            isOrange 
                              ? 'bg-[var(--brand-accent)]/5 border-[var(--brand-accent)]/20 hover:border-[var(--brand-accent)]/40' 
                              : 'bg-[var(--brand-accent)]/5 border-[var(--brand-accent)]/20 hover:border-[var(--brand-accent)]/40'
                          )}
                        >
                          <span className="text-white font-medium">{useCase}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={cn(
                      'mt-8 aspect-video rounded-xl flex items-center justify-center',
                      isOrange 
                        ? 'bg-gradient-to-br from-[var(--brand-accent)]/10 to-[var(--neon-amber)]/5' 
                        : 'bg-gradient-to-br from-[var(--brand-accent)]/10 to-[var(--neon-blue-dark)]/5'
                    )}>
                      <Icon className={cn('w-16 h-16', isOrange ? 'text-[var(--brand-accent)]/30' : 'text-[var(--brand-accent)]/30')} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}
