'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function BohemeBackground() {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden pointer-events-none -z-10'
      )}
      aria-hidden="true"
    >
      {/* Glow grande in alto a sinistra */}
      <motion.div
        className="absolute -top-64 -left-64 w-[720px] h-[720px] rounded-full bg-primary/35 blur-[140px]"
        style={{ willChange: 'transform' }}
        initial={{ x: -180, y: -100, scale: 1 }}
        animate={{ x: 140, y: 140, scale: 1.18, rotate: 10 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Glow grande in basso a destra */}
      <motion.div
        className="absolute bottom-[-260px] right-[-220px] w-[840px] h-[840px] rounded-full bg-[var(--brand-accent)]/24 blur-[150px]"
        style={{ willChange: 'transform' }}
        initial={{ x: 160, y: 80, scale: 1.05 }}
        animate={{ x: -140, y: -140, scale: 1.22, rotate: -12 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Alone centrale morbido */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-purple-500/22 blur-[160px]"
        style={{ willChange: 'transform' }}
        initial={{ x: -160, y: -40, scale: 0.9 }}
        animate={{ x: 160, y: 80, scale: 1.12, rotate: 8 }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

