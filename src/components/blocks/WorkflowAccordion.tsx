'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Clock, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PortableTextRenderer } from '@/components/sanity/PortableTextRenderer'

export interface WorkflowStep {
  id: string
  title: string
  description: string
  duration?: string
  extraText?: string | any // string per legacy, any per PortableText blocks
  image?: string
  imageAlt?: string
}

interface WorkflowAccordionProps {
  steps: WorkflowStep[]
  theme: 'orange' | 'blue'
}

export function WorkflowAccordion({ steps, theme }: WorkflowAccordionProps) {
  const glowClass = theme === 'blue' ? 'glow-blue' : 'glow-brand'
  const [activeStep, setActiveStep] = useState<string | null>(null)
  const activeRef = useRef<HTMLDivElement>(null)

  // Auto-scroll when accordion opens
  useEffect(() => {
    if (activeStep && activeRef.current) {
      setTimeout(() => {
        activeRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' 
        })
      }, 300)
    }
  }, [activeStep])

  const toggleStep = (stepId: string) => {
    setActiveStep(prev => prev === stepId ? null : stepId)
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block bg-[var(--brand-accent)]/20" />

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id
          
          return (
            <motion.div
              key={step.id}
              ref={isActive ? activeRef : undefined}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step number circle on timeline */}
              <div 
                className={cn(
                  'absolute left-0 w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl z-10 cursor-pointer transition-all duration-300',
                  isActive 
                    ? `bg-[var(--brand-accent)] ${glowClass}` 
                    : 'bg-[var(--brand-accent)]/20 hover:bg-[var(--brand-accent)]/40'
                )}
                onClick={() => toggleStep(step.id)}
              >
                {index + 1}
              </div>

              {/* Step content container */}
              <div 
                className={cn(
                  'ml-20 md:ml-24 rounded-xl transition-all duration-300 overflow-hidden',
                  isActive 
                    ? `border-2 border-[var(--brand-accent)]/50 bg-[var(--card)] ${glowClass}` 
                    : 'border border-slate-700 bg-[var(--card)] hover:border-[var(--brand-accent)]/30'
                )}
              >
                {/* Header - always visible */}
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full p-6 flex items-center justify-between text-left bg-[var(--card)] text-white"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      {step.duration && (
                        <span className="flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                          <Clock className="w-3.5 h-3.5" />
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 line-clamp-2">{step.description}</p>
                  </div>
                  
                  {/* Expand/collapse icon */}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 p-2 rounded-full transition-colors text-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/10"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t p-6 border-[var(--brand-accent)]/20 bg-[var(--card)]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Left: Extra text (SEO optimized) */}
                          {step.extraText && (
                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold text-[var(--brand-accent)]">
                                Dettagli del Processo
                              </h4>
                              {typeof step.extraText === 'string' ? (
                                <div className="text-slate-300 leading-relaxed space-y-3">
                                  {step.extraText.split('\n\n').map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                  ))}
                                </div>
                              ) : (
                                <PortableTextRenderer value={step.extraText} />
                              )}
                            </div>
                          )}

                          {/* Right: Visual/Example image */}
                          {step.image && (
                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold flex items-center gap-2 text-[var(--brand-accent)]">
                                <ImageIcon className="w-5 h-5" />
                                Esempio Visivo
                              </h4>
                              <div className="relative aspect-video rounded-xl overflow-hidden border border-[var(--brand-accent)]/20 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent">
                                {/* Lazy loaded image placeholder */}
                                <img
                                  src={step.image}
                                  alt={step.imageAlt || step.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          )}

                          {/* Fallback if no extra content */}
                          {!step.extraText && !step.image && (
                            <div className="col-span-full text-slate-500 italic">
                              Dettagli aggiuntivi disponibili a breve.
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
