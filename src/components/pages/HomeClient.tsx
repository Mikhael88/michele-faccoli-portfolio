/**
 * HomeClient - Client Component per la Homepage
 * 
 * Gestisce lo stato della view (hero/bivio) e le animazioni.
 * Riceve i dati da Sanity come props dal Server Component.
 */

'use client'

import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { HeroSection } from '@/components/hero/HeroSection'
import { BivioSection } from '@/components/navigation/BivioSection'
import { Preventivatore } from '@/components/blocks/Preventivatore'
import { PreventivatoreFAB } from '@/components/blocks/PreventivatoreFAB'
import type { HeroSectionData, BivioSectionData } from '@/lib/sanity'

const ParticleField = dynamic(
  () => import('@/components/three/ParticleField').then(mod => mod.ParticleField),
  { ssr: false }
)

interface HomeClientProps {
  heroData: HeroSectionData | null
  bivioData: BivioSectionData | null
}

export function HomeClient({ heroData, bivioData }: HomeClientProps) {
  const { currentView } = useStore()

  return (
    <main className="relative min-h-screen bg-site-bg overflow-x-hidden">
      {/* Three.js Background */}
      <AnimatePresence>
        {currentView === 'hero' && (
          <motion.div
            key="particles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0"
          >
            <ParticleField />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.015]">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Content: Hero + Bivio - navigazione verso pagine cluster */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentView === 'hero' && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection data={heroData} />
            </motion.div>
          )}

          {currentView === 'bivio' && (
            <motion.div
              key="bivio"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <BivioSection data={bivioData} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Preventivatore Drawer */}
      <Preventivatore />
      
      {/* Preventivatore FAB - Icona flottante */}
      <PreventivatoreFAB />
    </main>
  )
}
