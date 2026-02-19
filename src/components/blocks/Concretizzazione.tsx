'use client'

import { motion } from 'framer-motion'
import { FileOutput, Clapperboard, Printer, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'export-glb',
    title: 'Export GLB per Configuratori',
    description: 'Preparo modelli 3D ottimizzati per configuratori di prodotto e piattaforme e-commerce, garantendo performance fluide.',
    icon: FileOutput,
    features: ['Ottimizzazione mesh', 'Compressione texture', 'Ready per web/viewer'],
  },
  {
    id: 'animazioni',
    title: 'Animazioni Industriali',
    description: 'Creo animazioni tecniche per presentare prodotti, processi produttivi e macchinari in modo chiaro e coinvolgente.',
    icon: Clapperboard,
    features: ['Exploded views', 'Sezioni animate', 'Video tecnici HD'],
  },
  {
    id: 'stampa-3d',
    title: 'Stampa 3D Tecnica',
    description: 'Stampo prototipi e pezzi funzionali con Creality K2, materiali tecnici e precisione millimetrica.',
    icon: Printer,
    features: ['Creality K2 Combo', 'Materiali tecnici', 'Post-processing incluso'],
  },
]

export function Concretizzazione() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[var(--neon-green)]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--neon-green)]/10 text-[var(--neon-green)] text-sm font-medium mb-4">
            Concretizzazione
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dal digitale al{' '}
            <span className="gradient-text">mondo reale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I modelli 3D prendono vita attraverso export ottimizzati, animazioni coinvolgenti 
            e prototipi stampati in 3D.
          </p>
        </motion.div>

        {/* Services - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-[var(--card)] border border-[var(--neon-green)]/10 hover:border-[var(--neon-green)]/30 transition-all duration-300 overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--neon-green)]/20 to-[var(--neon-green)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[var(--neon-green)]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[var(--neon-green)] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-[var(--neon-green)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-[var(--neon-green)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Scopri di pi\u00F9</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
