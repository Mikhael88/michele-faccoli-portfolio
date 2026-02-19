'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

// Mock Portfolio Data
const projects = [
  {
    id: '1',
    title: 'Sedia Design Eames',
    description: 'Modellazione 3D ad alta fedelt\u00E0 della celebre sedia Eames, con texture PBR fotorealistiche e setup di illuminazione studio.',
    category: 'modellazione-3d',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
    tags: ['Furniture', 'High-poly', 'PBR'],
    client: 'Studio Design Italia',
    year: 2024,
  },
  {
    id: '2',
    title: 'Turbina Industriale',
    description: 'Conversione CAD di turbina industriale in modello 3D visualizzabile per configuratore prodotto interattivo.',
    category: 'cad-to-3d',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    tags: ['Industrial', 'CAD Conversion', 'GLB'],
    client: 'TechFlow Industries',
    year: 2024,
  },
  {
    id: '3',
    title: 'Scultura Archeologica',
    description: 'Scansione 3D e retopology di reperto archeologico per museo virtuale interattivo con texture ad alta risoluzione.',
    category: '3d-scan',
    image: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=600&q=80',
    tags: ['Heritage', '3D Scan', 'Retopology'],
    client: 'Museo Nazionale',
    year: 2023,
  },
  {
    id: '4',
    title: 'Orologio Meccanico',
    description: 'Animazione esplode-view di movimento orologio meccanico per comunicazione tecnica e formazione.',
    category: 'animazioni',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&q=80',
    tags: ['Animation', 'Exploded View', 'Technical'],
    client: 'Orologeria Svizzera',
    year: 2024,
  },
  {
    id: '5',
    title: 'Protesi Biomedica',
    description: 'Stampa 3D di prototipo protesico con materiali tecnici biocompatibili per test funzionali.',
    category: 'stampa-3d',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
    tags: ['Biomedical', 'Prototype', 'Technical Print'],
    client: 'MedTech Solutions',
    year: 2024,
  },
  {
    id: '6',
    title: 'Sneaker Collection',
    description: 'Generazione AI-assistita di varianti colorway per collezione sneakers con rendering studio automatizzato.',
    category: 'ai-generation',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    tags: ['Fashion', 'AI Generated', 'Variants'],
    client: 'Brand Streetwear',
    year: 2024,
  },
]

const categories = [
  { id: 'all', label: 'Tutti' },
  { id: 'modellazione-3d', label: 'Modellazione' },
  { id: 'cad-to-3d', label: 'CAD to 3D' },
  { id: '3d-scan', label: '3D Scan' },
  { id: 'animazioni', label: 'Animazioni' },
  { id: 'stampa-3d', label: 'Stampa 3D' },
  { id: 'ai-generation', label: 'AI Generation' },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--cyber-blue)]/10 text-[var(--cyber-blue)] text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Progetti{' '}
            <span className="gradient-text">selezionati</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selezione dei miei lavori pi\u00F9 recenti, dalla digitalizzazione alla concretizzazione.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--neon-green)] text-[var(--carbon)]'
                  : 'bg-[var(--card)] text-muted-foreground hover:text-foreground border border-[var(--cyber-blue)]/10 hover:border-[var(--cyber-blue)]/30'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--cyber-blue)]/10 hover:border-[var(--cyber-blue)]/30 transition-all duration-300">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--carbon)] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-[var(--cyber-blue)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                      {project.client} \u2022 {project.year}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0.5 bg-[var(--steel-gray)]/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--cyber-blue)]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-[var(--cyber-blue)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-[var(--card)] border-[var(--cyber-blue)]/20">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-foreground">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} className="bg-[var(--cyber-blue)]/10 text-[var(--cyber-blue)]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Cliente: {selectedProject.client}</span>
                <span>Anno: {selectedProject.year}</span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
