'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useStore, PathType } from '@/store/useStore'
import { Building2, Palette, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pathData = {
  agenzie: {
    title: 'Agenzie Creative',
    subtitle: 'Per chi crea esperienze',
    description: 'Collaboro con agenzie per portare progetti 3D di alta qualità a life. Dal concept alla consegna, con attenzione ai dettagli e rispetto delle deadline.',
    icon: Palette,
    features: [
      'Modellazione 3D artistica',
      'Render fotorealistici',
      'Animazioni creative',
      'Asset per configuratori',
    ],
    gradient: 'from-[var(--cyber-blue)] to-[#0066ff]',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  aziende: {
    title: 'Aziende Industriali',
    subtitle: 'Per chi innova',
    description: 'Trasformo prodotti fisici in modelli 3D digitali perfetti. Dal CAD alla stampa 3D, per prototipazione rapida e visualizzazione tecnica.',
    icon: Building2,
    features: [
      'CAD to 3D conversion',
      '3D Scan & Retopology',
      'Export GLB/GLTF',
      'Stampa 3D tecnica',
    ],
    gradient: 'from-[var(--neon-green)] to-[#00ff88]',
    bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
}

export function DualPathCards() {
  const { activePath, setActivePath } = useStore()

  const handlePathSelect = (path: PathType) => {
    // Toggle: if already selected, switch to the other path
    if (activePath === path) {
      setActivePath(path === 'agenzie' ? 'aziende' : 'agenzie')
    } else {
      setActivePath(path)
    }
  }

  const handleReset = () => {
    setActivePath('agenzie') // Reset to default
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="dual-path" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Scegli il tuo{' '}
            <span className="gradient-text">percorso</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ogni cliente ha esigenze diverse. Seleziona il profilo che meglio ti rappresenta 
            per scoprire servizi su misura.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Agenzie Card */}
          <motion.div
            key="agenzie"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: activePath === 'agenzie' ? 1.02 : 1,
            }}
            transition={{ duration: 0.4 }}
            className={`relative flex-1 ${
              activePath === 'agenzie' ? 'lg:flex-[2]' : ''
            }`}
          >
            <PathCard
              path="agenzie"
              data={pathData.agenzie}
              isActive={activePath === 'agenzie'}
              onSelect={handlePathSelect}
              onReset={handleReset}
            />
          </motion.div>

          {/* Aziende Card */}
          <motion.div
            key="aziende"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: activePath === 'aziende' ? 1.02 : 1,
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`relative flex-1 ${
              activePath === 'aziende' ? 'lg:flex-[2]' : ''
            }`}
          >
            <PathCard
              path="aziende"
              data={pathData.aziende}
              isActive={activePath === 'aziende'}
              onSelect={handlePathSelect}
              onReset={handleReset}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface PathCardProps {
  path: PathType
  data: typeof pathData.agenzie
  isActive: boolean
  onSelect: (path: PathType) => void
  onReset: () => void
}

function PathCard({ path, data, isActive, onSelect, onReset }: PathCardProps) {
  const Icon = data.icon

  return (
    <motion.div
      layout
      onClick={() => !isActive && onSelect(path)}
      className={`
        relative group cursor-pointer rounded-2xl overflow-hidden
        h-[400px] lg:h-[500px]
        ${isActive ? 'cursor-default' : 'hover:scale-[1.01]'}
        transition-transform duration-300
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.bgImage}
          alt={data.title}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--carbon)] via-[var(--carbon)]/80 to-transparent" />
      </div>

      {/* Border Glow */}
      <div className={`
        absolute inset-0 rounded-2xl transition-all duration-500
        ${isActive 
          ? 'border-2 border-[var(--cyber-blue)] shadow-lg shadow-[var(--cyber-blue)]/20' 
          : 'border border-[var(--cyber-blue)]/20 hover:border-[var(--cyber-blue)]/50'
        }
      `} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              bg-gradient-to-br ${data.gradient}
            `}>
              <Icon className="w-6 h-6 text-[var(--carbon)]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {data.subtitle}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {data.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {data.description}
        </p>

        {/* Features (shown when active) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            height: isActive ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="space-y-2 mb-4">
            {data.features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${data.gradient}`} />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation()
              if (isActive) {
                const element = document.querySelector('#servizi')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              } else {
                onSelect(path)
              }
            }}
            className={`
              w-full sm:w-auto
              bg-gradient-to-r ${data.gradient}
              text-[var(--carbon)] font-semibold
              hover:opacity-90 transition-opacity
              group/btn
            `}
          >
            {isActive ? 'Scopri i servizi' : 'Seleziona percorso'}
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
