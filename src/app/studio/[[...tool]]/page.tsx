/**
 * Sanity Studio embedded in Next.js (App Router).
 * Componente forzato lato client (CSR) tramite next/dynamic per prevenire
 * conflitti di idratazione e limitazioni della Context API in React 19 (SSR).
 */

'use client'

import dynamic from 'next/dynamic'
import config from '@/sanity.config' // Importazione diretta, sicura ed efficiente
// Disabilita il Server-Side Rendering solo per l'engine dello Studio
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { 
    ssr: false,
    loading: () => <div style={{ padding: 24, fontFamily: 'system-ui' }}>Caricamento Studio…</div>
  }
)

export default function StudioPage() {
  // Nessun useEffect, nessun useState, nessun re-render inutile.
  return <NextStudio config={config} />
}