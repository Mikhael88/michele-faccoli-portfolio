'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  GitBranch, 
  Cpu, 
  Box, 
  Layers, 
  FileCode, 
  Zap,
  ChevronRight,
  ExternalLink,
  Mail,
  Calendar
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

// Mock data for Agency portfolio (technical focus)
const agencyProjects = [
  {
    id: '1',
    title: 'Automotive Configurator Assets',
    category: 'CAD to 3D',
    thumbnail: '/projects/auto-config.jpg',
    specs: {
      polycount: '125K tris',
      textures: '4K PBR',
      format: 'GLB/GLTF',
    },
    tags: ['Blender', 'Substance', 'Three.js'],
    description: 'Highly optimized car model for WebGL configurator with LOD system',
    wireframe: true,
    performance: '60 FPS on mobile',
  },
  {
    id: '2',
    title: 'Furniture Collection AR',
    category: 'Retopology',
    thumbnail: '/projects/furniture-ar.jpg',
    specs: {
      polycount: '15K tris per model',
      textures: '2K PBR',
      format: 'USDZ/GLB',
    },
    tags: ['ZBrush', 'Maya', 'ARKit'],
    description: 'AR-ready furniture models with optimized UVs for mobile',
    wireframe: true,
    performance: '45MB total package',
  },
  {
    id: '3',
    title: 'Medical Device Pipeline',
    category: 'CAD Conversion',
    thumbnail: '/projects/medical.jpg',
    specs: {
      polycount: '80K tris',
      textures: 'Procedural',
      format: 'FBX/GLB',
    },
    tags: ['Blender', 'CAD', 'Animation'],
    description: 'Complex medical equipment converted from STEP files',
    wireframe: true,
    performance: 'LOD 0-3 included',
  },
  {
    id: '4',
    title: 'Industrial Machinery',
    category: '3D Scan Cleanup',
    thumbnail: '/projects/machinery.jpg',
    specs: {
      polycount: '200K tris',
      textures: '8K Scans',
      format: 'OBJ/FBX',
    },
    tags: ['ZBrush', 'Reality Capture', 'Blender'],
    description: 'Photogrammetry cleanup and retopology for interactive viewer',
    wireframe: true,
    performance: 'WebGL optimized',
  },
  {
    id: '5',
    title: 'Jewelry Collection',
    category: 'Precision Modeling',
    thumbnail: '/projects/jewelry.jpg',
    specs: {
      polycount: '5K tris per piece',
      textures: '4K HDR Materials',
      format: 'GLB',
    },
    tags: ['Rhino', 'Blender', 'Cycles'],
    description: 'Subdivision surface modeling for e-commerce',
    wireframe: true,
    performance: '2MB per piece',
  },
  {
    id: '6',
    title: 'Sporting Goods Configurator',
    category: 'Real-time 3D',
    thumbnail: '/projects/sports.jpg',
    specs: {
      polycount: '45K tris',
      textures: '2K Atlas',
      format: 'GLB + Variants',
    },
    tags: ['Blender', 'Substance', 'WebGL'],
    description: 'Multi-variant product line with material switching',
    wireframe: true,
    performance: '12 color variants',
  },
]

const digitalizzazioneItems = [
  {
    icon: Box,
    title: 'Retopology da CAD',
    description: 'Ottimizzazione mesh per performance real-time, mantenendo precisione dimensionale',
  },
  {
    icon: Layers,
    title: 'Mesh 3D Scan per AR/VR',
    description: 'Modelli calibrati per applicazioni immersive con LOD multipli',
  },
  {
    icon: FileCode,
    title: 'GLB Performance per Web',
    description: 'Export ottimizzati con compressione Draco e materiali PBR',
  },
  {
    icon: Zap,
    title: 'Ottimizzazione Configuratori',
    description: 'Asset strutturati per sistemi di configurazione interattivi',
  },
]

const workflowItems = [
  {
    icon: GitBranch,
    title: 'Pipeline Integration',
    description: 'Integrazione con repository Git, naming convention e versioning asset',
  },
  {
    icon: Cpu,
    title: 'Formati Standardizzati',
    description: 'Export multi-piattaforma: GLB, FBX, OBJ, USDZ con documentazione tecnica',
  },
]

export function AgencyView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="h-full bg-site-bg text-white overflow-hidden">
      <ScrollArea className="h-full custom-scrollbar">
        <div className="relative">
          {/* Digitalizzazione Section - Horizontal Row */}
          <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/5 to-transparent pointer-events-none" />
            
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#0088ff] flex items-center justify-center">
                    <Box className="w-8 h-8 text-[var(--site-bg)]" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Digitalizzazione</h2>
                    <p className="text-[#00d4ff] text-sm">Pipeline Tecnica & Ottimizzazione</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {digitalizzazioneItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group p-6 rounded-xl bg-[#111] border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-[#888]">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#00d4ff]/0 group-hover:text-[#00d4ff] transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Portfolio Tecnico Section - Horizontal Row */}
          <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff]/3 to-transparent pointer-events-none" />
            
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
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#0088ff] flex items-center justify-center">
                      <Layers className="w-8 h-8 text-[var(--site-bg)]" />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio Tecnico</h2>
                      <p className="text-[#00d4ff] text-sm">Wireframe, Polycount & Performance Metrics</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="hidden sm:flex border-[#00d4ff]/30 text-[#00d4ff]">
                    6 Progetti
                  </Badge>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agencyProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group relative rounded-xl overflow-hidden bg-[#111] border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300"
                    >
                      {/* Project Thumbnail Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] flex items-center justify-center relative">
                        <Box className="w-12 h-12 text-[#00d4ff]/20" />
                        {project.wireframe && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-0 text-[10px]">
                              WIREFRAME
                            </Badge>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-white">{project.title}</h3>
                          <ExternalLink className="w-4 h-4 text-[#888] group-hover:text-[#00d4ff] transition-colors flex-shrink-0" />
                        </div>
                        
                        <p className="text-xs text-[#888] line-clamp-2">{project.description}</p>
                        
                        {/* Technical Specs */}
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-[10px] bg-[#00d4ff]/10 text-[#00d4ff] border-0">
                            {project.specs.polycount}
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] bg-[#00d4ff]/10 text-[#00d4ff] border-0">
                            {project.specs.textures}
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] bg-[#00d4ff]/10 text-[#00d4ff] border-0">
                            {project.specs.format}
                          </Badge>
                        </div>
                        
                        {/* Performance */}
                        <div className="pt-2 border-t border-white/5">
                          <p className="text-[10px] text-[#00d4ff]">
                            ⚡ {project.performance}
                          </p>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
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

          {/* Workflow Section - Horizontal Row */}
          <section className="min-h-[60vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00d4ff]/5 pointer-events-none" />
            
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#0088ff] flex items-center justify-center">
                    <GitBranch className="w-8 h-8 text-[var(--site-bg)]" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Workflow Tecnico</h2>
                    <p className="text-[#00d4ff] text-sm">Pipeline Integration & Documentation</p>
                  </div>
                </div>

                {/* Workflow Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {workflowItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-[#111] border border-[#00d4ff]/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
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
                className="text-center space-y-8 p-8 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#0088ff]/5 border border-[#00d4ff]/20"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Pronto a Ottimizzare i Tuoi Asset?
                </h2>
                <p className="text-[#888] max-w-lg mx-auto">
                  Contattami per una consulenza tecnica sulla ottimizzazione dei tuoi asset 3D per Web, AR o configuratori.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[var(--site-bg)] font-semibold px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-shadow">
                    <Mail className="w-5 h-5 mr-2" />
                    Richiedi Preventivo
                  </Button>
                  <Button variant="outline" className="border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 px-8 py-6 text-lg">
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
