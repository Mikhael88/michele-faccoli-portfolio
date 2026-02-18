'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { blogPosts, BlogPost } from '@/data/blogPosts'
import { cn } from '@/lib/utils'

const categoryColors = {
  tecnico: 'text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10',
  business: 'text-[var(--brand-accent)] bg-[var(--brand-accent)]/10',
  'case-study': 'text-[var(--brand-accent)] bg-[var(--brand-accent)]/10',
}

const categoryLabels = {
  tecnico: 'Tecnico',
  business: 'Business',
  'case-study': 'Case Study',
}

interface BlogSectionProps {
  title?: string
  subtitle?: string
}

export function BlogSection({ 
  title = 'Blog & Insights',
  subtitle = 'Condivido conoscenze tecniche e strategie per massimizzare il valore dei tuoi asset 3D'
}: BlogSectionProps) {
  return (
    <section className="py-24 px-8 md:px-16 bg-site-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Blog Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[350px] snap-start group cursor-pointer"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-slate-800 hover:border-[var(--brand-accent)]/30 transition-all duration-300">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn(
                      'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
                      categoryColors[post.category]
                    )}>
                      {categoryLabels[post.category]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-accent)] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('it-IT', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime} min
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--brand-accent)]" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[var(--brand-accent)] hover:text-[var(--brand-accent)] transition-colors font-medium"
          >
            Vedi tutti gli articoli
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
