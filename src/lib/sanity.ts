/**
 * Sanity Client Configuration
 * 
 * Client Sanity configurato per fetch dei dati CMS.
 * Supporta sia modalità CDN (production) che API diretta (development).
 */

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'

// Client Sanity per fetch dati
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'published',
})

// Image URL builder per gestire le immagini Sanity
const builder = imageUrlBuilder(client)

/**
 * Helper per generare URL immagini Sanity ottimizzate
 * 
 * @example
 * ```tsx
 * <img src={urlFor(image).width(800).height(600).url()} alt="..." />
 * ```
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * GROQ Query per ottenere tutti i servizi pubblicati
 */
export const SERVICES_QUERY = `*[_type == "service" && published == true] | order(cluster asc, order asc) {
  _id,
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  cluster,
  theme,
  title,
  subtitle,
  description,
  "metadata": {
    "title": metaTitle,
    "description": metaDescription,
    "keywords": keywords
  },
  "problem": {
    "title": problemTitle,
    "description": problemDescription,
    "painPoints": painPoints
  },
  "solution": {
    "title": solutionTitle,
    "description": solutionDescription,
    "benefits": benefits
  },
  pipeline[] {
    id,
    title,
    description,
    duration,
    extraText,
    "image": image.asset->url,
    "imageAlt": image.alt
  },
  caseHistory[] {
    title,
    category,
    description,
    metrics,
    "image": image.asset->url
  },
  deliverables,
  order
}`

/**
 * GROQ Query per ottenere un singolo servizio per slug
 */
export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug && published == true][0] {
  _id,
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  cluster,
  theme,
  title,
  subtitle,
  description,
  "metadata": {
    "title": metaTitle,
    "description": metaDescription,
    "keywords": keywords
  },
  "problem": {
    "title": problemTitle,
    "description": problemDescription,
    "painPoints": painPoints
  },
  "solution": {
    "title": solutionTitle,
    "description": solutionDescription,
    "benefits": benefits
  },
  pipeline[] {
    id,
    title,
    description,
    duration,
    extraText,
    "image": image.asset->url,
    "imageAlt": image.alt
  },
  caseHistory[] {
    title,
    category,
    description,
    metrics,
    "image": image.asset->url
  },
  deliverables,
  order
}`

/**
 * GROQ Query per ottenere servizi di un cluster specifico
 */
export const SERVICES_BY_CLUSTER_QUERY = `*[_type == "service" && cluster == $cluster && published == true] | order(order asc) {
  _id,
  "slug": slug.current,
  title,
  subtitle,
  description,
  theme,
  order
}`

/**
 * GROQ Query per ottenere tutti gli slug (per generateStaticParams)
 */
export const ALL_SERVICE_SLUGS_QUERY = `*[_type == "service" && published == true] {
  "slug": slug.current,
  cluster
}`

/**
 * Type definitions per i dati Sanity
 */
export interface WorkflowStep {
  id: string
  title: string
  description: string
  duration?: string
  extraText?: any // PortableText blocks
  image?: string
  imageAlt?: string
}

export interface CaseStudy {
  title: string
  category: string
  description: string
  metrics?: string
  image?: string
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
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
  problem: {
    title: string
    description: string
    painPoints: string[]
  }
  solution: {
    title: string
    description: string
    benefits: string[]
  }
  pipeline: WorkflowStep[]
  caseHistory: CaseStudy[]
  deliverables: string[]
  order: number
}

export interface ServiceSlug {
  slug: string
  cluster: string
}

/**
 * GROQ Query per Hero Section
 */
export const HERO_SECTION_QUERY = `*[_type == "heroSection" && published == true][0] {
  _id,
  badge,
  headline,
  headlineHighlight,
  headlineEnd,
  subheadline,
  primaryCTA,
  secondaryCTA,
  calendlyUrl,
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  caseStudyBadge {
    label,
    title,
    metric
  }
}`

/**
 * GROQ Query per Bivio Section
 */
export const BIVIO_SECTION_QUERY = `*[_type == "bivioSection" && published == true][0] {
  _id,
  title,
  titleHighlight,
  description,
  paths[] {
    key,
    icon,
    title,
    subtitle,
    description,
    features,
    href
  }
}`

/**
 * Type definitions per Hero e Bivio
 */
export interface HeroSectionData {
  _id: string
  badge: string
  headline: string
  headlineHighlight: string
  headlineEnd: string
  subheadline: string
  primaryCTA: string
  secondaryCTA: string
  calendlyUrl: string
  heroImage?: string
  heroImageAlt?: string
  caseStudyBadge?: {
    label: string
    title: string
    metric: string
  }
}

export interface PathCard {
  key: 'agenzie' | 'aziende'
  icon: string
  title: string
  subtitle: string
  description: string
  features: string[]
  href: string
}

export interface BivioSectionData {
  _id: string
  title: string
  titleHighlight: string
  description: string
  paths: PathCard[]
}

/**
 * Fetch helper functions
 */

export async function getAllServices(): Promise<ServiceData[]> {
  return client.fetch(SERVICES_QUERY)
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  return client.fetch(SERVICE_BY_SLUG_QUERY, { slug })
}

export async function getServicesByCluster(cluster: string): Promise<Partial<ServiceData>[]> {
  return client.fetch(SERVICES_BY_CLUSTER_QUERY, { cluster })
}

export async function getAllServiceSlugs(): Promise<ServiceSlug[]> {
  return client.fetch(ALL_SERVICE_SLUGS_QUERY)
}

export async function getHeroSection(): Promise<HeroSectionData | null> {
  return client.fetch(HERO_SECTION_QUERY)
}

export async function getBivioSection(): Promise<BivioSectionData | null> {
  return client.fetch(BIVIO_SECTION_QUERY)
}
