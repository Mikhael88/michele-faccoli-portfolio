import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DeepPageTemplate } from '@/components/templates/DeepPageTemplate'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/sanity'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const allSlugs = await getAllServiceSlugs()
  // Filtra solo i servizi del cluster soluzioni-industriali
  return allSlugs
    .filter((item) => item.cluster === 'soluzioni-industriali')
    .map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = await getServiceBySlug(slug)
  
  if (!data || data.cluster !== 'soluzioni-industriali') return {}
  
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
  }
}

export default async function SoluzioniIndustrialiSlugPage({ params }: PageProps) {
  const { slug } = await params
  const data = await getServiceBySlug(slug)
  
  // Verifica che il servizio esista e appartenga al cluster corretto
  if (!data || data.cluster !== 'soluzioni-industriali') {
    notFound()
  }

  return (
    <DeepPageTemplate
      theme="blue"
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      problem={data.problem}
      solution={data.solution}
      pipeline={data.pipeline}
      caseHistory={data.caseHistory}
      deliverables={data.deliverables}
      parentPath="/soluzioni-industriali"
      parentLabel="Soluzioni Industriali"
    />
  )
}
