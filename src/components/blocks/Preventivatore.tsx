'use client'

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTimerDrawer } from '@/hooks/useTimerDrawer'
import { cn } from '@/lib/utils'

// SSR-safe check for browser environment
const emptySubscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

const projectTypes = [
  { value: 'modellazione', label: 'Modellazione 3D' },
  { value: '3d-scan', label: '3D Scan & Retopology' },
  { value: 'cad-to-3d', label: 'CAD to 3D' },
  { value: 'ai-generation', label: 'AI Generation' },
  { value: 'animazione', label: 'Animazione Industriale' },
  { value: 'export-glb', label: 'Export GLB/Configuratore' },
  { value: 'stampa-3d', label: 'Stampa 3D' },
  { value: 'altro', label: 'Altro' },
]

const budgetRanges = [
  { min: 500, max: 1000, label: '€500 - €1.000' },
  { min: 1000, max: 2500, label: '€1.000 - €2.500' },
  { min: 2500, max: 5000, label: '€2.500 - €5.000' },
  { min: 5000, max: 10000, label: '€5.000 - €10.000' },
  { min: 10000, max: 25000, label: '€10.000+' },
]

interface PreventivatoreProps {
  currentPage?: 'agenzie' | 'aziende'
}

export function Preventivatore({ currentPage = 'aziende' }: PreventivatoreProps) {
  const { isDrawerOpen, closeDrawer } = useTimerDrawer()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // SSR-safe mount check using useSyncExternalStore
  const mounted = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot)

  const [formData, setFormData] = useState({
    projectType: '',
    budget: 2500,
    description: '',
    email: '',
  })

  // Handle ESC key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeDrawer()
    }
  }, [closeDrawer])

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isDrawerOpen, handleKeyDown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Close after showing success
    setTimeout(() => {
      closeDrawer()
      setIsSubmitted(false)
    }, 2000)
  }

  const getBudgetLabel = (value: number) => {
    const range = budgetRanges.find(r => value >= r.min && value <= r.max)
    return range?.label || '€2.500 - €5.000'
  }

  // Dynamic colors - Preventivatore usa variabili semantiche (data-theme viene dal layout padre)
  const isOrange = currentPage === 'agenzie'
  const neonColor = isOrange ? 'var(--neon-orange)' : 'var(--neon-blue)'
  const borderColor = 'border-[var(--brand-accent)]/50'
  const glowClass = 'glow-brand'

  // Modal content
  const modalContent = (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Overlay - backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal - centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-[95%] max-w-lg max-h-[90vh] overflow-hidden"
            data-theme={currentPage === 'agenzie' ? 'orange' : 'blue'}
          >
            <div 
              className={cn(
                'relative bg-site-bg rounded-2xl border-2 overflow-hidden',
                borderColor,
                glowClass
              )}
            >
              {/* Neon top border glow effect */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, var(--brand-accent), transparent)',
                  boxShadow: '0 0 20px var(--brand-accent)'
                }}
              />

              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-site-bg/95 backdrop-blur border-b border-[var(--ui-border)]">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Richiedi Preventivo
                  </h2>
                  <p className="text-sm text-slate-400">
                    Ti rispondo entro 24h
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeDrawer}
                  className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content - scrollable */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)] custom-scrollbar">
                {isSubmitted ? (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[var(--brand-accent)]/20">
                      <CheckCircle className="w-8 h-8 text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Richiesta inviata!
                    </h3>
                    <p className="text-slate-400">
                      Ti contatterò presto con un preventivo personalizzato.
                    </p>
                  </motion.div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Type */}
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-white">
                        Tipo di progetto *
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => 
                          setFormData(prev => ({ ...prev, projectType: value }))
                        }
                      >
                        <SelectTrigger 
                          className={cn(
                            'bg-slate-900/50 text-white',
                            borderColor
                          )}
                        >
                          <SelectValue placeholder="Seleziona il tipo" />
                        </SelectTrigger>
                        <SelectContent 
                          className="bg-card border-[var(--ui-border)] z-[200]"
                          position="popper"
                          sideOffset={5}
                        >
                          {projectTypes.map((type) => (
                            <SelectItem
                              key={type.value}
                              value={type.value}
                              className="text-white hover:bg-slate-800 focus:bg-slate-800"
                            >
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget Slider */}
                    <div className="space-y-4">
                      <Label className="text-white">
                        Budget indicativo
                      </Label>
                      <div className="px-2">
                        <Slider
                          value={[formData.budget]}
                          onValueChange={([value]) => 
                            setFormData(prev => ({ ...prev, budget: value }))
                          }
                          min={500}
                          max={15000}
                          step={100}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>€500</span>
                        <span 
                          className="font-medium"
                          style={{ color: neonColor }}
                        >
                          {getBudgetLabel(formData.budget)}
                        </span>
                        <span>€10.000+</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-white">
                        Descrizione del progetto *
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Descrivi brevemente il tuo progetto, obiettivi e tempistiche..."
                        value={formData.description}
                        onChange={(e) => 
                          setFormData(prev => ({ ...prev, description: e.target.value }))
                        }
                        className="min-h-[120px] bg-slate-900/50 border-[var(--brand-accent)]/30 text-white placeholder:text-slate-500 resize-none focus-visible:ring-0"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tua@email.com"
                        value={formData.email}
                        onChange={(e) => 
                          setFormData(prev => ({ ...prev, email: e.target.value }))
                        }
                        className="bg-slate-900/50 border-[var(--brand-accent)]/30 text-white placeholder:text-slate-500 focus-visible:ring-0"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.projectType || !formData.description || !formData.email}
                      className="w-full text-white font-semibold transition-all bg-[var(--brand-accent)] hover:opacity-90"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Invia Richiesta
                        </>
                      )}
                    </Button>

                    {/* Privacy Note */}
                    <p className="text-xs text-slate-500 text-center">
                      I tuoi dati sono al sicuro e non saranno condivisi con terze parti.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  // Render via Portal to escape transform context
  if (!mounted) return null
  
  return createPortal(modalContent, document.body)
}
