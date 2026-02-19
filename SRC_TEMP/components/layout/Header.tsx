'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, Palette, Building2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStore, PathType } from '@/store/useStore'
import { cn } from '@/lib/utils'

const pathNavItems = [
  { 
    label: 'Agenzie', 
    path: 'agenzie' as PathType,
    icon: Palette,
    color: '#00d4ff',
    description: 'Focus Tecnico / Pipeline'
  },
  { 
    label: 'Aziende', 
    path: 'aziende' as PathType,
    icon: Building2,
    color: '#0066ff',
    description: 'Focus Business / WOW'
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { activePath, setActivePath, heroVisible, setHeroVisible, setDrawerOpen } = useStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handlePathSelect = (path: PathType) => {
    setActivePath(path)
    setIsMenuOpen(false)
  }

  const handleBackToBivio = () => {
    setActivePath(null)
    setHeroVisible(true)
  }

  // Determine current path color
  const currentColor = activePath === 'aziende' ? '#0066ff' : '#00d4ff'
  const currentGradient = activePath === 'aziende' 
    ? 'from-[#0066ff] to-[#ffd700]' 
    : 'from-[#00d4ff] to-[#0088ff]'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: heroVisible ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled && !heroVisible ? 'glass border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={handleBackToBivio}
              className="relative w-10 h-10 rounded-lg p-[1px] bg-gradient-to-br from-[#00d4ff] to-[#0066ff] hover:opacity-80 transition-opacity"
            >
              <div className="w-full h-full rounded-lg bg-site-bg flex items-center justify-center">
                <span className="text-sm font-bold text-white">MF</span>
              </div>
            </button>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold tracking-tight text-foreground">
                Michele Faccoli
              </h1>
              <p className={cn(
                "text-xs -mt-1 transition-colors duration-500",
                activePath === 'aziende' ? 'text-[#ffd700]' : 'text-[#00d4ff]'
              )}>
                {activePath === 'aziende' ? 'Focus Business / WOW' : 'Focus Tecnico / Pipeline'}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation - Path Switcher */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-2"
          >
            {/* Back button */}
            <button
              onClick={handleBackToBivio}
              className="flex items-center gap-1 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Torna</span>
            </button>

            <div className="w-px h-6 bg-white/10" />

            {/* Path buttons */}
            {pathNavItems.map((item) => {
              const Icon = item.icon
              const isActive = activePath === item.path
              
              return (
                <motion.button
                  key={item.path}
                  onClick={() => handlePathSelect(item.path)}
                  className={cn(
                    "relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300",
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activePathBg"
                      className="absolute inset-0 rounded-lg opacity-20"
                      style={{ backgroundColor: item.color }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Border glow for active */}
                  {isActive && (
                    <motion.div
                      layoutId="activePathBorder"
                      className="absolute inset-0 rounded-lg border"
                      style={{ borderColor: item.color }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <Icon 
                    className="w-4 h-4 relative z-10 transition-colors duration-300"
                    style={{ color: isActive ? item.color : 'currentColor' }}
                  />
                  <span className="text-sm font-medium relative z-10">{item.label}</span>
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activePathDot"
                      className="w-1.5 h-1.5 rounded-full relative z-10"
                      style={{ backgroundColor: item.color }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Button
              onClick={() => setDrawerOpen(true)}
              className={cn(
                "font-semibold hover:opacity-90 transition-all duration-500",
                activePath === 'aziende'
                  ? 'bg-gradient-to-r from-[#0066ff] to-[#ffd700] text-[var(--site-bg)]'
                  : 'bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[var(--site-bg)]'
              )}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contattami
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-foreground hover:text-white transition-colors"
            aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10"
          >
            <nav className="px-4 py-6 space-y-4">
              {/* Back to Bivio */}
              <button
                onClick={handleBackToBivio}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-slate-400"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Torna alla selezione</span>
              </button>

              {/* Path Switcher */}
              <div className="space-y-2 mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Scegli il tuo percorso
                </p>
                {pathNavItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activePath === item.path
                  
                  return (
                    <motion.button
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => handlePathSelect(item.path)}
                      className={cn(
                        "w-full flex items-center gap-3 p-3 rounded-lg transition-all",
                        isActive 
                          ? 'bg-white/5 border border-white/10' 
                          : 'hover:bg-white/5'
                      )}
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: isActive ? `${item.color}20` : 'transparent' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: isActive ? item.color : 'currentColor' }} />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      {isActive && (
                        <div 
                          className="ml-auto w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setDrawerOpen(true)
                  }}
                  className={cn(
                    "w-full mt-4 font-semibold",
                    activePath === 'aziende'
                      ? 'bg-gradient-to-r from-[#0066ff] to-[#ffd700] text-[var(--site-bg)]'
                      : 'bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[var(--site-bg)]'
                  )}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contattami
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
