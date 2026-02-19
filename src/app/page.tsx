import { getHeroSection, getBivioSection } from '@/lib/sanity'
import { HomeClient } from '@/components/pages/HomeClient'

/**
 * Homepage con flusso multi-pagina dinamica.
 * Hero → Bivio (scelta percorso) → navigazione a /servizi-agenzie o /soluzioni-industriali.
 * Contenuti caricati da Sanity CMS.
 */
export default async function Home() {
  // Fetch dati da Sanity
  const [heroData, bivioData] = await Promise.all([
    getHeroSection(),
    getBivioSection(),
  ])

  return (
    <HomeClient
      heroData={heroData}
      bivioData={bivioData}
    />
  )
}
