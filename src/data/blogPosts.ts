export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: 'tecnico' | 'business' | 'case-study'
  readTime: number
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Ottimizzazione GLB per Web: Guida Completa',
    excerpt: 'Come ridurre il peso dei tuoi modelli 3D del 70% mantenendo la qualità visiva.',
    date: '2025-01-15',
    category: 'tecnico',
    readTime: 5,
  },
  {
    id: '2',
    title: 'ROI della Visualizzazione 3D nel B2B',
    excerpt: 'I numeri che dimostrano come il 3D aumenti le conversioni del 45% in media.',
    date: '2025-01-10',
    category: 'business',
    readTime: 4,
  },
  {
    id: '3',
    title: 'Case Study: Configuratore Automotive',
    excerpt: 'Come abbiamo creato un configuratore con 50+ varianti per un brand automotive.',
    date: '2025-01-05',
    category: 'case-study',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Pipeline Git per Asset 3D',
    excerpt: 'Best practices per versionare e collaborare su progetti 3D complessi.',
    date: '2024-12-28',
    category: 'tecnico',
    readTime: 5,
  },
  {
    id: '5',
    title: '3D Scan vs Modellazione Manuale',
    excerpt: 'Quando usare il 3D scan e quando la modellazione tradizionale.',
    date: '2024-12-20',
    category: 'tecnico',
    readTime: 4,
  },
  {
    id: '6',
    title: 'Case Study: E-commerce Furniture',
    excerpt: 'Catalogo AR-ready per 50+ pezzi di mobili di design.',
    date: '2024-12-15',
    category: 'case-study',
    readTime: 5,
  },
]

export const getBlogPostsByCategory = (category: BlogPost['category']) => {
  return blogPosts.filter(post => post.category === category)
}
