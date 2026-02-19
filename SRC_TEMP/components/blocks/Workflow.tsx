'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileSearch, Wrench, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Briefing',
    description: 'Analizziamo insieme le tue esigenze, obiettivi e tempistiche per definire il progetto perfetto.',
    icon: MessageSquare,
    color: 'var(--cyber-blue)',
  },
  {
    id: 2,
    title: 'Analisi',
    description: 'Valuto i materiali disponibili, studio le referenze e pianifico il workflow ottimale.',
    icon: FileSearch,
    color: 'var(--neon-green)',
  },
  {
    id: 3,
    title: 'Produzione',
    description: 'Realizzo il progetto con aggiornamenti costanti e milestone concordate.',
    icon: Wrench,
    color: 'var(--cyber-blue)',
  },
  {
    id: 4,
    title: 'Consegna',
    description: 'Rivediamo insieme il risultato finale e consegno i file nei formati richiesti.',
    icon: Rocket,
    color: 'var(--neon-green)',
  },
]

const values = [
  'Comunicazione trasparente',
  'Orientamento ai risultati',
  'Rispetto delle deadline',
  'Cura maniacale dei dettagli',
  'Supporto post-consegna',
]

export function Workflow() {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[var(--cyber-blue)]/5 rounded-full blur-[100px]" />

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
            Chi Sono
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Un processo{' '}
            <span className="gradient-text">senza attrito</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Credo in una collaborazione semplice e trasparente. Ecco come lavoro per garantire 
            risultati eccellenti con il minimo sforzo per te.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--cyber-blue)]/20 via-[var(--cyber-blue)]/50 to-[var(--neon-green)]/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[var(--card)] border-2"
                      style={{ borderColor: step.color }}
                    >
                      <step.icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                    {/* Number Badge */}
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-[var(--carbon)]"
                      style={{ background: step.color }}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 lg:p-8 rounded-2xl bg-[var(--card)] border border-[var(--cyber-blue)]/10"
        >
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">
            I miei valori in ogni progetto
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--steel-gray)]/30 text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-[var(--neon-green)]" />
                <span className="text-sm">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
