// Portfolio Types
export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  image: string
  tags: string[]
  client?: string
  year: number
  link?: string
}

export type ProjectCategory = 
  | 'modellazione-3d'
  | '3d-scan'
  | 'cad-to-3d'
  | 'ai-generation'
  | 'export-glb'
  | 'animazioni'
  | 'stampa-3d'

// Testimonial Types
export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  image: string
  rating: number
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: 'digitalizzazione' | 'concretizzazione'
  features: string[]
}

// Workflow Step Types
export interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: string
}

// Preventivatore Types
export interface PreventivatoreForm {
  projectType: string
  budget: number
  description: string
  email: string
}

// Navigation
export interface NavItem {
  label: string
  href: string
  isAnchor?: boolean
}

// Path Types
export type PathType = 'agenzie' | 'aziende'

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
}

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}
