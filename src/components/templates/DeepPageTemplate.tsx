'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, Calendar, Check, Clock, FileText, 
  Home, Sparkles, Target, TrendingUp, Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { UpsellViewer } from '@/components/sections/UpsellViewer'
import { PageLayout } from '@/components/layout/PageLayout'
import { useTimerDrawer } from '@/hooks/useTimerDrawer'
import { WorkflowAccordion, WorkflowStep } from '@/components/blocks/WorkflowAccordion'

interface CaseStudy {
  title: string
  category: string
  description: string
  metrics?: string
}

interface DeepPageTemplateProps {
  theme: 'orange' | 'blue'
  title: string
  subtitle: string
  description: string
  problem: {
    title: string
    description: string
    painPoints: string[]
  }
  solution: {
    title: string
    description: string
    benefits: string[]
  }
  pipeline: WorkflowStep[]
  caseHistory: CaseStudy[]
  deliverables: string[]
  parentPath: string
  parentLabel: string
}

export function DeepPageTemplate({
  theme,
  title,
  subtitle,
  description,
  problem,
  solution,
  pipeline,
  caseHistory,
  deliverables,
  parentPath,
  parentLabel
}: DeepPageTemplateProps) {
  const isOrange = theme === 'orange'
  const { openDrawer } = useTimerDrawer()
  
  return (
    <PageLayout currentPage={isOrange ? 'agenzie' : 'aziende'}>
      <div className="min-h-full bg-transparent">
        {/* Navbar */}
        <nav
          className={cn(
            'sticky top-0 z-50 w-full bg-transparent backdrop-blur-md border-b px-8 py-4 flex justify-between items-center',
            'border-[var(--brand-accent)]/20'
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg bg-[var(--brand-accent)]">
              MF
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Michele<span className="text-[var(--brand-accent)]">Faccoli</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <Link href={parentPath} className="hover:text-white hover:text-[var(--brand-accent)] transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" />
              {parentLabel}
            </Link>
            <a href="#problema" className="hover:text-white transition-colors">Problema</a>
            <a href="#soluzione" className="hover:text-white transition-colors">Soluzione</a>
            <a href="#pipeline" className="hover:text-white transition-colors">Processo</a>
            <a href="#case-history" className="hover:text-white transition-colors">Casi</a>
          </div>
          <button
            onClick={openDrawer}
            className="px-5 py-2 text-white rounded-full font-medium text-sm transition-colors bg-[var(--brand-accent)] hover:opacity-90"
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Richiedi Preventivo
          </button>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-24 pb-20 px-8 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Link 
                href={parentPath}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-[var(--brand-accent)] hover:opacity-90"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                {parentLabel}
              </Link>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border-[var(--brand-accent)]/20">
                <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--brand-accent)]" />
                {subtitle}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                {title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === title.split(' ').length - 1 ? (
                      <span className={isOrange ? 'neon-text-orange' : 'neon-text-blue'}>
                        {word}{' '}
                      </span>
                    ) : (
                      `${word} `
                    )}
                  </span>
                ))}
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://calendly.com/faccoli-michele/tredo-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-8 py-4 text-white rounded-xl font-semibold transition-colors flex items-center gap-3 bg-[var(--brand-accent)] hover:opacity-90",
                    isOrange ? "glow-brand" : "glow-blue"
                  )}
                >
                  <Calendar className="w-5 h-5" />
                  Prenota una Consulenza
                </a>
                <a
                  href="#pipeline"
                  className="px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-3 text-white bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/20"
                >
                  <Clock className="w-5 h-5" />
                  Vedi il Processo
                </a>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Problem Section */}
        <section id="problema" className="py-20 px-8 md:px-16 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
                <Target className="w-8 h-8 text-[var(--brand-accent)]" />
                {problem.title}
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-3xl">{problem.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problem.painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-red-500/20 hover:border-red-500/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-400 text-xs font-bold">!</span>
                      </div>
                      <p className="text-slate-300">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="soluzione" className="py-20 px-8 md:px-16 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
                <Zap className="w-8 h-8 text-[var(--brand-accent)]" />
                {solution.title}
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-3xl">{solution.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-xl border transition-colors bg-[var(--card)] border-[var(--brand-accent)]/20 hover:border-[var(--brand-accent)]/40"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[var(--brand-accent)]/20">
                        <Check className="w-4 h-4 text-[var(--brand-accent)]" />
                      </div>
                      <p className="text-slate-300">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pipeline Section - Interactive Accordion */}
        <section id="pipeline" className="py-20 px-8 md:px-16 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Il Processo di Lavoro</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Clicca su ogni step per scoprire i dettagli del processo e vedere esempi pratici.
            </p>
            <WorkflowAccordion steps={pipeline} theme={theme} />
          </div>
        </section>

        {/* Case History Section */}
        <section id="case-history" className="py-20 px-8 md:px-16 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Case History</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-[var(--brand-accent)]/20 to-[var(--brand-accent)]/10">
                    <Sparkles className="w-16 h-16 text-[var(--brand-accent)]/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-xs font-bold uppercase tracking-wider mb-2 block text-[var(--brand-accent)]">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.description}
                    </p>
                    {item.metrics && (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-accent)]">
                        <TrendingUp className="w-4 h-4" />
                        {item.metrics}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20 px-8 md:px-16 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className={cn(
              "p-10 rounded-2xl border bg-[var(--card)] border-[var(--brand-accent)]/30 transition-all hover:border-[var(--brand-accent)]/50",
              isOrange ? "group hover:glow-brand" : "group hover:glow-blue"
            )}>
              <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Cosa Ricevi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-black/30 text-slate-200">
                    <Check className="w-5 h-5 text-[var(--brand-accent)]" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <UpsellViewer theme={theme} />

        {/* Footer */}
        <footer className="bg-transparent text-white pt-16 pb-8 px-8 md:px-16 border-t border-[var(--ui-border)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold bg-[var(--brand-accent)]">
                  MF
                </div>
                <span className="font-bold text-lg text-white">
                  Michele<span className="text-[var(--brand-accent)]">Faccoli</span>
                </span>
              </div>
              <div className="flex gap-6 text-sm text-slate-400">
                <a href="https://linkedin.com/in/michelefaccoli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://artstation.com/michelefaccoli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ArtStation</a>
                <a href="https://behance.net/michelefaccoli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
              </div>
            </div>
            <div className="mt-8 pt-8 text-center text-slate-600 text-sm border-t border-[var(--ui-border)]">
              © 2025 Michele Faccoli - 3D Artist. Tutti i diritti riservati.
            </div>
          </div>
        </footer>
      </div>
    </PageLayout>
  )
}
