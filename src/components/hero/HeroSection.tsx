'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Calendar, MousePointer2 } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import type { HeroSectionData } from '@/lib/sanity'
import Image from 'next/image'

interface HeroSectionProps {
  data: HeroSectionData | null
}

export function HeroSection({ data }: HeroSectionProps) {
  const { setCurrentView } = useStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  
  // Fallback ai valori di default se non ci sono dati da Sanity
  const heroData = data || {
    badge: 'Disponibilità Q1 2025',
    headline: 'Soluzioni 3D',
    headlineHighlight: 'Strategiche',
    headlineEnd: 'per il tuo Business',
    subheadline: 'Trasformo prodotti in asset visivi ad alto impatto. Focus su ROI, riduzione del time-to-market e scalabilità dei contenuti.',
    primaryCTA: 'Scopri i Percorsi',
    secondaryCTA: 'Prenota una Call',
    calendlyUrl: 'https://calendly.com/faccoli-michele/tredo-meeting',
    caseStudyBadge: {
      label: 'Case Study Highlight',
      title: 'TechCorp Product Launch',
      metric: '+45% CTR'
    }
  }
  
  // Auto-scroll to bivio on first scroll attempt
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!hasScrolled && e.deltaY > 0) {
        setHasScrolled(true)
        setCurrentView('bivio')
      }
    }
    
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [hasScrolled, setCurrentView])

  return (
    <section
      ref={containerRef}
      className="relative h-screen"
    >
      <motion.div 
        className="sticky top-0 h-screen flex items-center overflow-hidden bg-site-bg"
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-bold uppercase tracking-wider border border-[var(--brand-accent)]/20">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-accent)] animate-pulse" />
                {heroData.badge}
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-white">
                {heroData.headline} <br />
                <span className="neon-text-orange">
                  {heroData.headlineHighlight}
                </span>{' '}
                {heroData.headlineEnd}
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed">
                {heroData.subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5 pt-6">
                <Button
                  onClick={() => setCurrentView('bivio')}
                  className="px-10 py-7 bg-[var(--brand-accent)] text-white rounded-xl font-semibold hover:opacity-90 transition-colors text-xl glow-brand"
                >
                  {heroData.primaryCTA}
                </Button>
                <a
                  href={heroData.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-7 border border-slate-700 rounded-xl font-semibold hover:bg-slate-800 transition-colors flex items-center gap-3 text-white text-xl"
                >
                  <Calendar className="w-6 h-6 text-[var(--brand-accent)]" />
                  {heroData.secondaryCTA}
                </a>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group"
            >
              {/* Hero Image o Placeholder */}
              {heroData.heroImage ? (
                <Image
                  src={heroData.heroImage}
                  alt={heroData.heroImageAlt || 'Hero image'}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[var(--brand-accent)]/20 to-[var(--neon-cyan)]/10 flex items-center justify-center">
                  <Sparkles className="w-32 h-32 text-[var(--brand-accent)]/30" />
                </div>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Case Study Badge */}
              {heroData.caseStudyBadge && (
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase mb-2">
                        {heroData.caseStudyBadge.label}
                      </p>
                      <h3 className="font-bold text-white text-xl">
                        {heroData.caseStudyBadge.title}
                      </h3>
                    </div>
                    <span className="text-[var(--brand-accent)] font-bold text-2xl">
                      {heroData.caseStudyBadge.metric}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Più visibile */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => setCurrentView('bivio')}
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-lg"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <MousePointer2 className="w-5 h-5 text-[var(--brand-accent)]" />
            <span>Scorri per scoprire</span>
            <ChevronDown className="w-5 h-5 text-[var(--brand-accent)]" />
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
