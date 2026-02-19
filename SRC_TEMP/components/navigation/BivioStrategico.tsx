'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Palette, Building2, Box, Sparkles, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useStore, PathType } from '@/store/useStore'

const pathData = {
  agenzie: {
    icon: Box,
    title: 'Agenzie Creative',
    subtitle: 'Focus Tecnico / Pipeline',
    color: '#00d4ff',
    colorDark: '#0099cc',
    gradient: 'from-[#00d4ff] to-[#0088ff]',
    bgGradient: 'from-[#00d4ff]/20 to-[#0088ff]/10',
    description: 'Collaborazione tecnica per agenzie e studi creativi che necessitano di asset 3D ottimizzati.',
    features: [
      'Retopology da CAD',
      'Mesh AR/VR',
      'GLB Performance',
      'Configuratori 3D'
    ]
  },
  aziende: {
    icon: Sparkles,
    title: 'Aziende Industriali',
    subtitle: 'Focus Business / WOW Factor',
    color: '#0066ff',
    colorDark: '#0044cc',
    gradient: 'from-[#0066ff] to-[#ffd700]',
    bgGradient: 'from-[#0066ff]/20 to-[#ffd700]/10',
    description: 'Soluzioni visuali per aziende che vogliono comunicare valore attraverso il 3D.',
    features: [
      'Render Fotorealistici',
      'Animazioni Prodotto',
      'Prototipazione 3D',
      'Stampa 3D'
    ]
  }
}

export function BivioStrategico() {
  const { setActivePath } = useStore()

  const handlePathSelect = (path: PathType) => {
    if (path) {
      setActivePath(path)
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-site-bg">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Center dividing line glow */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
        
        {/* Ambient glows */}
        <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[100px]" />
        <div className="absolute right-[25%] top-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066ff]/5 rounded-full blur-[100px]" />
      </div>

      {/* Two columns */}
      <div className="relative z-10 flex h-full">
        {/* AGENZIE Column */}
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => handlePathSelect('agenzie')}
          className="group relative w-1/2 h-full flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 overflow-hidden transition-all duration-500 hover:bg-white/[0.02]"
        >
          {/* Hover gradient overlay */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            "bg-gradient-to-br from-[#00d4ff]/10 to-transparent"
          )} />
          
          {/* Left border glow on hover */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00d4ff]/0 to-transparent group-hover:via-[#00d4ff]/50 transition-all duration-500" />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#0088ff] flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-shadow duration-500"
            >
              <Box className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--site-bg)]" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors duration-300"
            >
              Agenzie
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-base text-[#00d4ff] mb-6"
            >
              Focus Tecnico / Pipeline
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-md mx-auto text-[#888888] text-sm sm:text-base mb-8"
            >
              {pathData.agenzie.description}
            </motion.p>

            {/* Feature tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {pathData.agenzie.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 text-xs sm:text-sm bg-[#00d4ff]/10 text-[#00d4ff] rounded-full border border-[#00d4ff]/20"
                >
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-2 text-[#00d4ff] group-hover:gap-3 transition-all duration-300"
            >
              <span className="font-medium">Esplora servizi</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#00d4ff]/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>

        {/* Center divider */}
        <div className="relative z-20 w-px flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* AZIENDE Column */}
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => handlePathSelect('aziende')}
          className="group relative w-1/2 h-full flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 overflow-hidden transition-all duration-500 hover:bg-white/[0.02]"
        >
          {/* Hover gradient overlay */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            "bg-gradient-to-bl from-[#0066ff]/10 to-[#ffd700]/5"
          )} />
          
          {/* Right border glow on hover */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#0066ff]/0 to-transparent group-hover:via-[#0066ff]/50 transition-all duration-500" />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#ffd700] flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] transition-shadow duration-500"
            >
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--site-bg)]" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-[#0066ff] transition-colors duration-300"
            >
              Aziende
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-base text-[#ffd700] mb-6"
            >
              Focus Business / WOW Factor
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-md mx-auto text-[#888888] text-sm sm:text-base mb-8"
            >
              {pathData.aziende.description}
            </motion.p>

            {/* Feature tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {pathData.aziende.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 text-xs sm:text-sm bg-[#0066ff]/10 text-[#0066ff] rounded-full border border-[#0066ff]/20"
                >
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-2 text-[#0066ff] group-hover:gap-3 transition-all duration-300"
            >
              <span className="font-medium">Esplora servizi</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>

          {/* Corner accent */}
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#0066ff]/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
      </div>

      {/* Bottom instruction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs text-[#888888] tracking-widest uppercase">
          Scegli il tuo percorso
        </p>
      </motion.div>
    </div>
  )
}
