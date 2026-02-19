'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Camera, 
  Sparkles, 
  Printer, 
  Video, 
  Handshake,
  ChevronRight,
  ExternalLink,
  Play,
  Mail,
  Calendar
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

// Mock data for Business portfolio (marketing focus)
const businessProjects = [
  {
    id: '1',
    title: 'Luxury Watch Campaign',
    category: 'Product Rendering',
    thumbnail: '/projects/watch.jpg',
    client: 'Swiss Timepieces',
    deliverables: ['Hero Renders', 'Social Media Pack', 'AR Experience'],
    tags: ['KeyShot', 'Photoshop', 'ARKit'],
    description: 'Photorealistic renders for global advertising campaign',
    ambientazione: 'Studio Luxury',
  },
  {
    id: '2',
    title: 'Consumer Electronics Launch',
    category: 'Marketing Visuals',
    thumbnail: '/projects/electronics.jpg',
    client: 'TechGadget Inc.',
    deliverables: ['Product Shots', 'Exploded Views', 'Animation'],
    tags: ['Blender', 'After Effects', 'Premiere'],
    description: 'Complete visual package for product launch',
    ambientazione: 'Tech Environment',
  },
  {
    id: '3',
    title: 'Furniture Catalog 2024',
    category: '3D Scan Catalog',
    thumbnail: '/projects/furniture.jpg',
    client: 'Design Living',
    deliverables: ['360° Views', 'Multiple Finishes', 'Room Scenes'],
    tags: ['Reality Capture', 'Substance', 'Blender'],
    description: 'Digital catalog with 50+ furniture pieces',
    ambientazione: 'Interior Design',
  },
  {
    id: '4',
    title: 'Food Packaging Prototype',
    category: '3D Print Prototype',
    thumbnail: '/projects/packaging.jpg',
    client: 'Organic Foods Co.',
    deliverables: ['Physical Prototype', 'Digital Renders', 'Production Files'],
    tags: ['Fusion 360', 'Creality K2', 'SLA'],
    description: 'Rapid prototype for focus group testing',
    ambientazione: 'Product Studio',
  },
  {
    id: '5',
    title: 'Automotive Accessories',
    category: 'Social Content',
    thumbnail: '/projects/auto-parts.jpg',
    client: 'AutoElite',
    deliverables: ['Instagram Reels', 'YouTube Shorts', 'Product Renders'],
    tags: ['Blender', 'DaVinci', 'Social Media'],
    description: 'Emotional animations for social media presence',
    ambientazione: 'Dynamic Motion',
  },
  {
    id: '6',
    title: 'Medical Device Training',
    category: 'Animation',
    thumbnail: '/projects/medical-anim.jpg',
    client: 'MedTech Solutions',
    deliverables: ['Training Videos', 'Interactive Guide', 'Web Module'],
    tags: ['Blender', 'After Effects', 'Lottie'],
    description: 'Educational animation series for medical professionals',
    ambientazione: 'Clinical Environment',
  },
]

const visualizzazioneItems = [
  {
    icon: Camera,
    title: 'Render Fotorealistici',
    description: 'Visualizzazioni emozionali che comunicano valore e qualità del prodotto',
  },
  {
    icon: Video,
    title: 'Animazioni Prodotto',
    description: 'Contenuti dinamici che mostrano funzionalità e dettagli unici',
  },
  {
    icon: Sparkles,
    title: 'Visualizzazioni Emozionali',
    description: 'Immagini che raccontano storie e creano desiderio nel cliente',
  },
]

const concretizzazioneItems = [
  {
    icon: Printer,
    title: 'Stampa 3D (Creality K2)',
    description: 'Prototipazione fisica rapida per test e presentazioni tangibili',
  },
  {
    icon: Handshake,
    title: 'Prototipazione Fisica',
    description: 'Dal digitale al tangibile: tocco materiale per validazione',
  },
  {
    icon: Video,
    title: 'Animazioni Social',
    description: 'Contenuti video ottimizzati per Instagram, TikTok e YouTube',
  },
]

export function BusinessView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="h-full bg-site-bg text-white overflow-hidden">
      <ScrollArea className="h-full custom-scrollbar">
        <div className="relative">
          {/* Visualizzazione Section - Horizontal Row */}
          <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0066ff]/5 via-[#ffd700]/3 to-transparent pointer-events-none" />
            
            <div className="w-full max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#ffd700] flex items-center justify-center">
                    <Camera className="w-8 h-8 text-[var(--site-bg)]" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Visualizzazione</h2>
                    <p className="text-[#ffd700] text-sm">Render, Animazioni & Visual Marketing</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visualizzazioneItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group p-6 rounded-xl bg-[#111] border border-[#0066ff]/10 hover:border-[#0066ff]/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-[#0066ff]/20 to-[#ffd700]/10 text-[#0066ff]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-[#888]">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#0066ff]/0 group-hover:text-[#0066ff] transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Portfolio Emozionale Section - Horizontal Row */}
          <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066ff]/3 to-[#ffd700]/3 pointer-events-none" />
            
            <div className="w-full max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#ffd700] flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-[var(--site-bg)]" />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio Emozionale</h2>
                      <p className="text-[#ffd700] text-sm">Ambientazioni Photorealistic & Render Pubblicitari</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="hidden sm:flex border-[#0066ff]/30 text-[#0066ff]">
                    6 Progetti
                  </Badge>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {businessProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group relative rounded-xl overflow-hidden bg-[#111] border border-[#0066ff]/10 hover:border-[#0066ff]/30 transition-all duration-300"
                    >
                      {/* Project Thumbnail Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] flex items-center justify-center relative group/thumb">
                        <Sparkles className="w-12 h-12 text-[#0066ff]/20" />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#0066ff]/80 flex items-center justify-center">
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          </div>
                        </div>
                        {/* Category badge */}
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-[#0066ff]/20 text-[#0066ff] border-0 text-[10px]">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-white">{project.title}</h3>
                          <ExternalLink className="w-4 h-4 text-[#888] group-hover:text-[#ffd700] transition-colors flex-shrink-0" />
                        </div>
                        
                        <p className="text-xs text-[#ffd700] font-medium">{project.client}</p>
                        <p className="text-xs text-[#888] line-clamp-2">{project.description}</p>
                        
                        {/* Ambientazione */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded">
                            📍 {project.ambientazione}
                          </span>
                        </div>
                        
                        {/* Deliverables */}
                        <div className="flex flex-wrap gap-1">
                          {project.deliverables.slice(0, 2).map((del) => (
                            <Badge key={del} variant="secondary" className="text-[10px] bg-[#0066ff]/10 text-[#0066ff] border-0">
                              {del}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Concretizzazione Section - Horizontal Row */}
          <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffd700]/5 to-[#0066ff]/5 pointer-events-none" />
            
            <div className="w-full max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffd700] to-[#0066ff] flex items-center justify-center">
                    <Printer className="w-8 h-8 text-[var(--site-bg)]" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Concretizzazione</h2>
                    <p className="text-[#ffd700] text-sm">Stampa 3D, Prototipazione & Animazioni Social</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {concretizzazioneItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-[#111] border border-[#0066ff]/10 hover:border-[#ffd700]/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-[#0066ff]/20 to-[#ffd700]/10 text-[#ffd700]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                          <p className="text-sm text-[#888]">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Creality K2 Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#0066ff]/10 to-[#ffd700]/10 border border-[#ffd700]/20"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ffd700] to-[#0066ff] flex items-center justify-center flex-shrink-0">
                      <Printer className="w-10 h-10 text-[var(--site-bg)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Creality K2 Plus</h3>
                      <p className="text-[#888]">
                        Stampa 3D professionale per prototipazione rapida. Dimensioni build: 350x350x350mm. 
                        Materiali: PLA, PETG, ABS, TPU.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Contatti Section - CTA */}
          <section className="min-h-[50vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="w-full max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-8 p-8 rounded-2xl bg-gradient-to-br from-[#0066ff]/10 to-[#ffd700]/10 border border-[#ffd700]/20"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Pronto a Trasformare la Tua Visione?
                </h2>
                <p className="text-[#888] max-w-lg mx-auto">
                  Consulenza gratuita per capire come posso aiutarti a comunicare il valore dei tuoi prodotti attraverso il 3D.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-gradient-to-r from-[#0066ff] to-[#ffd700] text-[var(--site-bg)] font-semibold px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] transition-shadow">
                    <Mail className="w-5 h-5 mr-2" />
                    Richiedi Preventivo
                  </Button>
                  <Button variant="outline" className="border-[#ffd700]/30 text-[#ffd700] hover:bg-[#ffd700]/10 px-8 py-6 text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Prenota Call
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  )
}
