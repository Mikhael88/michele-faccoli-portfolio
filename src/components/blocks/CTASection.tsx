'use client'

import { motion } from 'framer-motion'
import { Mail, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contatti" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--carbon)] to-[var(--steel-gray)]" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--cyber-blue)]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--neon-green)]/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto a trasformare{' '}
            <span className="gradient-text">le tue idee?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Che sia un singolo modello 3D o un progetto complesso, sono qui per aiutarti. 
            Contattami per una consulenza gratuita.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Contact Form Button */}
          <Button
            size="lg"
            onClick={() => scrollToSection('#preventivatore')}
            className="group bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--cyber-blue)]/80 text-[var(--carbon)] font-semibold hover:opacity-90 transition-opacity glow-cyber px-8"
          >
            <Mail className="w-5 h-5 mr-2" />
            Modulo Contatto
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Calendly Button */}
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group border-[var(--neon-green)]/30 text-foreground hover:bg-[var(--neon-green)]/10 hover:border-[var(--neon-green)] px-8"
          >
            <a
              href="https://calendly.com/faccoli-michele/tredo-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2 text-[var(--neon-green)]" />
              Prenota Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--cyber-blue)]" />
            Risposta entro 24h
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--neon-green)]" />
            Consulenza gratuita
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--cyber-blue)]" />
            Preventivo personalizzato
          </div>
        </motion.div>
      </div>
    </section>
  )
}
