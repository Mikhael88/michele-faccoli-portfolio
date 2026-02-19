/**
 * Sanity Studio embedded in Next.js (App Router).
 * Caricato solo lato client per evitare createContext in SSR (React 19 vs Sanity).
 * Disponibile su /studio; config e projectId/dataset da .env.local.
 */

'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  const [config, setConfig] = useState<Awaited<ReturnType<typeof import('@/sanity.config')>> | null>(null)
  useEffect(() => {
    import('@/sanity.config').then((m) => setConfig(m.default))
  }, [])
  if (!config) return <div style={{ padding: 24 }}>Caricamento Studio…</div>
  return <NextStudio config={config} />
}
