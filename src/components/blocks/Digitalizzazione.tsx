'use client'

import { motion } from 'framer-motion'
import { Box, Scan, FileCode, Sparkles, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'modellazione-3d',
    title: 'Modellazione 3D',
    description: 'Creo modelli 3D dettagliati e ottimizzati per qualsiasi applicazione: render, animazioni, configuratori e realt\u00E0 virtuale.',
    icon: Box,
    features: ['High-poly & Low-poly', 'UV Mapping professionale', 'Texturing PBR'],
  },
  {
    id: '3d-scan',
    title: '3D Scan & Retopology',
    description: 'Digitalizzo oggetti fisici con scanner 3D professionali e ottimizzo le mesh per utilizzi in tempo reale.',
    icon: Scan,
    features: ['Scansione ad alta precisione', 'Retopology pulita', 'Ottimizzazione game-ready'],
  },
  {
    id: 'cad-to-3d',
    title: 'CAD to 3D',
    description: 'Converto file CAD tecnici in modelli 3D visualizzabili, mantenendo la precisione geometrica del progetto originale.',
    icon: FileCode,
    features: ['Conversione STEP/IGES', 'Semantic cleanup', 'Visualizzazione tecnica'],
  },
  {
    id: 'ai-generation',
    title: 'AI Generation',
    description: 'Utilizzo strumenti AI per accelerare la creazione di texture, concept e varianti, riducendo i tempi di produzione.',
    icon: Sparkles,
    features: ['Generazione texture', 'Concept art assistita', 'Varianti automatiche'],
  },
]

export function Digitalizzazione() {
  return (
    <section id="servizi" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--cyber-blue)]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--cyber-blue)]/10 text-[var(--cyber-blue)] text-sm font-medium mb-4">
            Digitalizzazione
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trasformo il{' '}
            <span className="gradient-text">reale in digitale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Da oggetti fisici a modelli 3D perfetti. Ogni progetto inizia con una digitalizzazione 
            precisa e curata in ogni dettaglio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-[var(--card)] border border-[var(--cyber-blue)]/10 hover:border-[var(--cyber-blue)]/30 transition-all duration-300 overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyber-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--cyber-blue)]/20 to-[var(--cyber-blue)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[var(--cyber-blue)]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[var(--cyber-blue)] transition-colors">
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
                        <div className="w-1 h-1 rounded-full bg-[var(--cyber-blue)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-[var(--cyber-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
