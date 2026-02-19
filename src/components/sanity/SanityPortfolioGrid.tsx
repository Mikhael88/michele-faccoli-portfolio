'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { Badge } from '@/components/ui/badge'

type ClusterType = 'servizi-agenzie' | 'soluzioni-industriali'

interface SanityImage {
  _key?: string
  asset?: {
    _id: string
    url: string
  }
  alt?: string
}

export interface PortfolioProject {
  _id: string
  title: string
  description: string
  category: string
  client: string
  year: number
  tags: string[]
  cluster: ClusterType
  order: number
  image?: {
    url: string
    alt?: string
  }
  images?: SanityImage[]
}

interface SanityPortfolioGridProps {
  cluster: ClusterType
  title: string
  subtitle: string
}

const PORTFOLIO_BY_CLUSTER_QUERY = `
  *[_type == "portfolioProject" && published == true && cluster == $cluster]
  | order(order asc) {
    _id,
    title,
    description,
    category,
    client,
    year,
    tags,
    cluster,
    order,
    "image": {
      "url": coalesce(image.asset->url, images[0].asset->url),
      "alt": coalesce(image.alt, images[0].alt)
    },
    images[]{
      _key,
      alt,
      asset->{
        _id,
        url
      }
    }
  }
`

export function SanityPortfolioGrid({ cluster, title, subtitle }: SanityPortfolioGridProps) {
  const [projects, setProjects] = useState<PortfolioProject[]>([])

  useEffect(() => {
    let cancelled = false

    async function fetchProjects() {
      const data = await client.fetch<PortfolioProject[]>(PORTFOLIO_BY_CLUSTER_QUERY, { cluster })
      if (!cancelled) {
        setProjects(data ?? [])
      }
    }

    fetchProjects()

    return () => {
      cancelled = true
    }
  }, [cluster])

  if (!projects.length) {
    return null
  }

  return (
    <section className="py-20 px-8 md:px-16 bg-site-bg" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-slate-400">{subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const firstImage =
              project.images?.find((img) => img.asset?.url) ?? undefined

            return (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-[var(--card)] border border-slate-800 hover:border-[var(--brand-accent)]/40 transition-all"
              >
                {firstImage?.asset?.url && (
                  <div className="absolute inset-0">
                    <img
                      src={firstImage.asset.url}
                      alt={firstImage.alt || project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-6 w-full space-y-2">
                  <span className="text-[var(--brand-accent)] text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[var(--brand-accent)] transition-colors" />
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    {project.client} • {project.year}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-300 bg-black/40 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

