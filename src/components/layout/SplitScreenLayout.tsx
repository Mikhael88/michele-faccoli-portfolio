'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useStore, PathType, LAYOUT_CONFIG } from '@/store/useStore'
import { AgencyView } from '@/components/views/AgencyView'
import { BusinessView } from '@/components/views/BusinessView'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const pathColors = {
  agenzie: {
    primary: '#00d4ff',
    secondary: '#0088ff',
    gradient: 'from-[#00d4ff] to-[#0088ff]',
    bgGradient: 'from-[#00d4ff]/10 to-[#0088ff]/5',
  },
  aziende: {
    primary: '#0066ff',
    secondary: '#ffd700',
    gradient: 'from-[#0066ff] to-[#ffd700]',
    bgGradient: 'from-[#0066ff]/10 to-[#ffd700]/5',
  },
}

interface SidebarProps {
  path: PathType
  onClick: () => void
}

function VerticalSidebar({ path, onClick }: SidebarProps) {
  const colors = pathColors[path]
  const labels: Record<PathType, string> = {
    agenzie: 'AGENZIE',
    aziende: 'AZIENDE',
  }
  
  const isAgenzie = path === 'agenzie'
  
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      onClick={onClick}
      className="h-full w-full relative overflow-hidden group cursor-pointer"
    >
      {/* Background gradient */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-b opacity-30 group-hover:opacity-50 transition-opacity',
        colors.bgGradient
      )} />
      
      {/* Border glow */}
      <div className={cn(
        'absolute inset-0 border-l transition-colors',
        isAgenzie 
          ? 'border-[#00d4ff]/20 group-hover:border-[#00d4ff]/50' 
          : 'border-[#0066ff]/20 group-hover:border-[#0066ff]/50'
      )} />
      
      {/* Vertical Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span 
          className={cn(
            'text-xs sm:text-sm font-bold tracking-[0.3em] uppercase whitespace-nowrap',
            'transition-colors duration-300',
            isAgenzie 
              ? 'text-[#00d4ff]/60 group-hover:text-[#00d4ff]' 
              : 'text-[#0066ff]/60 group-hover:text-[#0066ff]'
          )}
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          {labels[path]}
        </span>
      </div>
      
      {/* Hover indicator */}
      <div className={cn(
        'absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity',
        'bg-gradient-to-r',
        colors.gradient
      )} />
    </motion.button>
  )
}

export function SplitScreenLayout() {
  const { activePath, setActivePath, togglePath } = useStore()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Get widths from config
  const expanded = isMobile ? LAYOUT_CONFIG.expandedWidth.mobile : LAYOUT_CONFIG.expandedWidth.desktop
  const collapsed = isMobile ? LAYOUT_CONFIG.collapsedWidth.mobile : LAYOUT_CONFIG.collapsedWidth.desktop
  
  // Calculate widths for each panel
  const agenzieWidth = activePath === 'agenzie' ? expanded : collapsed
  const aziendeWidth = activePath === 'aziende' ? expanded : collapsed
  
  // Determine content visibility
  const showAgenzieContent = activePath === 'agenzie'
  const showAziendeContent = activePath === 'aziende'
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--carbon)]">
      <motion.div 
        className="flex h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* AGENZIE Panel */}
        <motion.div
          animate={{ width: `${agenzieWidth}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {showAgenzieContent ? (
              <motion.div
                key="agenzie-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full"
              >
                <AgencyView />
              </motion.div>
            ) : (
              <motion.div
                key="agenzie-sidebar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full"
              >
                <VerticalSidebar 
                  path="agenzie" 
                  onClick={() => setActivePath('agenzie')} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Divider Line */}
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent flex-shrink-0" />
        
        {/* AZIENDE Panel */}
        <motion.div
          animate={{ width: `${aziendeWidth}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {showAziendeContent ? (
              <motion.div
                key="aziende-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full"
              >
                <BusinessView />
              </motion.div>
            ) : (
              <motion.div
                key="aziende-sidebar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full"
              >
                <VerticalSidebar 
                  path="aziende" 
                  onClick={() => setActivePath('aziende')} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}
