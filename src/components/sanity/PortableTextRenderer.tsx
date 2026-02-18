/**
 * PortableText Renderer Component
 * 
 * Componente per renderizzare il contenuto PortableText di Sanity
 * con stili personalizzati per il design system del sito.
 */

'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { cn } from '@/lib/utils'

// Componenti personalizzati per PortableText
const components: PortableTextComponents = {
  block: {
    // Paragrafi normali
    normal: ({ children }) => (
      <p className="text-slate-300 leading-relaxed mb-3">{children}</p>
    ),
    // Heading levels
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mb-4 mt-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-white mb-3 mt-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-[var(--brand-accent)] mb-2 mt-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-slate-200 mb-2 mt-3">{children}</h4>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--brand-accent)] pl-4 py-2 my-4 italic text-slate-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Lista non ordinata
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
        {children}
      </ul>
    ),
    // Lista ordinata
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
  },
  marks: {
    // Testo in grassetto
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    // Testo in corsivo
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    // Codice inline
    code: ({ children }) => (
      <code className="px-2 py-1 rounded bg-slate-800 text-[var(--brand-accent)] font-mono text-sm">
        {children}
      </code>
    ),
    // Link
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value?.href}
          rel={rel}
          target={value?.blank ? '_blank' : undefined}
          className="text-[var(--brand-accent)] hover:underline transition-colors"
        >
          {children}
        </a>
      )
    },
  },
}

interface PortableTextRendererProps {
  value: any
  className?: string
}

/**
 * Componente per renderizzare PortableText con stili personalizzati
 * 
 * @example
 * ```tsx
 * <PortableTextRenderer value={step.extraText} />
 * ```
 */
export function PortableTextRenderer({ value, className }: PortableTextRendererProps) {
  if (!value) return null

  return (
    <div className={cn('portable-text space-y-4', className)}>
      <PortableText value={value} components={components} />
    </div>
  )
}
