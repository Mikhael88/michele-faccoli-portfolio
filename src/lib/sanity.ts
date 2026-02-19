import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { PortableTextBlock } from '@portabletext/types'

import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'published',
  // Se usi Next.js 13+, il caching viene gestito a livello di fetch, 
  // non serve configurarlo qui globalmente.
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// --- FRAGMENTS (DRY) ---

const IMAGE_FIELDS = `
  image,
  "imageAlt": image.alt
`

const SERVICE_FIELDS = `
  _id,
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  cluster,
  theme,
  title,
  subtitle,
  description,
  "metadata": { "title": metaTitle, "description": metaDescription, "keywords": keywords },
  "problem": { "title": problemTitle, "description": problemDescription, "painPoints": painPoints },
  "solution": { "title": solutionTitle, "description": solutionDescription, "benefits": benefits },
  pipeline[] { id, title, description, duration, extraText, ${IMAGE_FIELDS} },
  caseHistory[] { title, category, description, metrics, image },
  deliverables,
  order
`

// --- INTERFACES ---

export interface WorkflowStep {
  id: string
  title: string
  description: string
  duration?: string
  extraText?: PortableTextBlock[]
  image?: any 
  imageAlt?: string
}

export interface CaseStudy {
  title: string
  category: string
  description: string
  metrics?: string
  image?: any
}

export interface ServiceData {
  _id: string
  _createdAt: string
  _updatedAt: string
  slug: string
  cluster: 'servizi-agenzie' | 'soluzioni-industriali'
  theme: 'orange' | 'blue'
  title: string
  subtitle: string
  description: string
  metadata: { title: string; description: string; keywords: string[] }
  problem: { title: string; description: string; painPoints: string[] }
  solution: { title: string; description: string; benefits: string[] }
  pipeline: WorkflowStep[]
  caseHistory: CaseStudy[]
  deliverables: string[]
  order: number
}

export interface AllServiceSlug {
  slug: string
  cluster: 'servizi-agenzie' | 'soluzioni-industriali'
}

export interface HeroSectionData {
  badge: string
  headline: string
  headlineHighlight: string
  headlineEnd: string
  subheadline: string
  primaryCTA: string
  secondaryCTA: string
  calendlyUrl: string
  heroImage?: {
    asset?: {
      _ref?: string
      _type?: string
    }
    alt?: string
  }
  caseStudyBadge?: {
    label?: string
    title?: string
    metric?: string
  }
}

export interface BivioPathCard {
  key: 'agenzie' | 'aziende'
  icon: string
  title: string
  subtitle: string
  description: string
  features: string[]
  href: string
}

export interface BivioSectionData {
  title: string
  titleHighlight: string
  description: string
  paths: BivioPathCard[]
}

// --- FETCH FUNCTIONS CON TAGGING ---

/**
 * Helper interno per gestire fetch con tag e revalidation di sicurezza
 */
async function sanityFetch<T>(query: string, params: Record<string, any> = {}, tags: string[] = []): Promise<T> {
  // Modalità "sempre fresco": nessuna cache, ogni richiesta legge direttamente da Sanity.
  // Così, quando clicchi Publish in Studio, basta ricaricare la pagina e vedi subito il contenuto aggiornato.
  return client.fetch<T>(query, params, {
    cache: 'no-store',
  })
}

export async function getAllServices(): Promise<ServiceData[]> {
  const query = `*[_type == "service" && published == true] | order(cluster asc, order asc) { ${SERVICE_FIELDS} }`
  return sanityFetch(query, {}, ['service', 'all-services'])
}

export async function getAllServiceSlugs(): Promise<AllServiceSlug[]> {
  const query = `*[_type == "service" && defined(slug.current)]{
    "slug": slug.current,
    cluster
  }`
  return sanityFetch(query)
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  const query = `*[_type == "service" && slug.current == $slug && published == true][0] { ${SERVICE_FIELDS} }`
  return sanityFetch(query, { slug }, [`service:${slug}`])
}

export async function getHeroSection(): Promise<HeroSectionData | null> {
  const query = `*[_type == "heroSection"][0]`
  return sanityFetch(query, {}, ['hero'])
}

export async function getBivioSection(): Promise<BivioSectionData | null> {
  const query = `*[_type == "bivioSection"][0]`
  return sanityFetch(query)
}