'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, X } from 'lucide-react'
import { useTimerDrawer } from '@/hooks/useTimerDrawer'

interface PreventivatoreFABProps {
  /** Offset from right quando c'è la sidebar (es. "calc(10% + 1.5rem)") */
  rightOffset?: string
}

export function PreventivatoreFAB({ rightOffset }: PreventivatoreFABProps = {}) {
  const { isDrawerOpen, openDrawer, closeDrawer } = useTimerDrawer()

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
      onClick={() => isDrawerOpen ? closeDrawer() : openDrawer()}
      className="fixed bottom-6 z-[60] w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent-gold flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow group"
      style={rightOffset ? { right: rightOffset } : { right: '1.5rem' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isDrawerOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-7 h-7 text-slate-900" />
          </motion.div>
        ) : (
          <motion.div
            key="calculator"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Calculator className="w-7 h-7 text-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Pulse animation */}
      {!isDrawerOpen && (
        <motion.span
          className="absolute inset-0 rounded-full bg-primary"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      
      {/* Tooltip */}
      {!isDrawerOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3 }}
          className="absolute right-full mr-3 px-4 py-2 bg-slate-800 rounded-lg text-white text-sm font-medium whitespace-nowrap pointer-events-none"
        >
          Parliamo del progetto
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-slate-800 rotate-45" />
        </motion.div>
      )}
    </motion.button>
  )
}
