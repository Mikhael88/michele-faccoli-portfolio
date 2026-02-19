'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Calendar, ExternalLink, Sparkles, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { BohemeBackground } from '@/components/ui/BohemeBackground'

export function MaintenanceLanding() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Invia email tramite API route o servizio esterno
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Sfondo Bohème */}
      <div className="fixed inset-0 -z-10">
        <BohemeBackground />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenuto principale */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl mx-auto text-center space-y-12">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--brand-accent)] to-purple-500 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Michele <span className="text-[var(--brand-accent)]">Faccoli</span>
            </h1>
            <p className="text-lg text-slate-400">3D Artist</p>
          </motion.div>

          {/* Messaggio principale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-medium border border-[var(--brand-accent)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)] animate-pulse" />
              Lavori in corso
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stiamo migliorando il sito
            </h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto">
              Il sito tornerà presto online con nuove funzionalità e contenuti aggiornati.
              Nel frattempo, puoi contattarmi o vedere il mio portfolio.
            </p>
          </motion.div>

          {/* CTA Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white"
            >
              <a
                href="https://www.behance.net/faccolimichele"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                Vedi Portfolio su Behance
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[var(--brand-accent)]/30 text-white hover:bg-[var(--brand-accent)]/10"
            >
              <a
                href="https://www.linkedin.com/in/michelefaccoli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[var(--brand-accent)]/30 text-white hover:bg-[var(--brand-accent)]/10"
            >
              <a
                href="https://calendly.com/faccoli-michele/tredo-meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5" />
                Prenota una Call
              </a>
            </Button>
          </motion.div>

          {/* Form Contatti */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[var(--brand-accent)]" />
                Contattami
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Il tuo nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-[var(--brand-accent)]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="La tua email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-[var(--brand-accent)]"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Il tuo messaggio"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-[var(--brand-accent)] resize-none"
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                    Messaggio inviato! Ti risponderò presto.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                    Errore nell'invio. Prova a scrivermi direttamente a{' '}
                    <a href="mailto:info@michelefaccoli.com" className="underline">
                      info@michelefaccoli.com
                    </a>
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Footer minimale */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-sm text-slate-500">
              Oppure scrivimi direttamente a{' '}
              <a
                href="mailto:info@michelefaccoli.com"
                className="text-[var(--brand-accent)] hover:underline"
              >
                info@michelefaccoli.com
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
