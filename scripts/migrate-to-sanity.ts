/**
 * Script di migrazione da servicesData.ts a Sanity CMS
 * 
 * ATTENZIONE: Questo è uno script helper per facilitare la migrazione.
 * Dovrai comunque creare manualmente i documenti in Sanity Studio
 * perché PortableText richiede una struttura specifica.
 * 
 * Uso:
 * 1. Configura .env.local con le credenziali Sanity
 * 2. Esegui: npx ts-node scripts/migrate-to-sanity.ts
 */

import { serviziAgenzieData, soluzioniIndustrialiData } from '../src/data/servicesData'

// Funzione per convertire testo in blocchi PortableText base
function textToPortableText(text: string) {
  return text.split('\n\n').map((paragraph) => ({
    _type: 'block',
    _key: Math.random().toString(36).substring(7),
    style: 'normal',
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).substring(7),
        text: paragraph,
        marks: [],
      },
    ],
  }))
}

// Funzione per convertire i dati legacy in formato Sanity
function convertToSanityFormat(slug: string, data: any, cluster: string, order: number) {
  return {
    _type: 'service',
    slug: {
      _type: 'slug',
      current: slug,
    },
    cluster,
    theme: data.theme,
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    metaTitle: data.metadata.title,
    metaDescription: data.metadata.description,
    keywords: data.metadata.keywords,
    problemTitle: data.problem.title,
    problemDescription: data.problem.description,
    painPoints: data.problem.painPoints,
    solutionTitle: data.solution.title,
    solutionDescription: data.solution.description,
    benefits: data.solution.benefits,
    pipeline: data.pipeline.map((step: any) => ({
      _type: 'workflowStep',
      _key: step.id,
      id: step.id,
      title: step.title,
      description: step.description,
      duration: step.duration,
      // extraText deve essere convertito manualmente in PortableText
      extraText: step.extraText ? textToPortableText(step.extraText) : undefined,
      // image deve essere caricata manualmente in Sanity
      // image: undefined,
    })),
    caseHistory: data.caseHistory.map((caseItem: any, index: number) => ({
      _type: 'caseStudy',
      _key: `case-${index}`,
      title: caseItem.title,
      category: caseItem.category,
      description: caseItem.description,
      metrics: caseItem.metrics,
      // image deve essere caricata manualmente in Sanity
      // image: undefined,
    })),
    deliverables: data.deliverables,
    order,
    published: true,
  }
}

// Genera i documenti JSON per l'import
function generateMigrationData() {
  const documents = []

  // Servizi Agenzie
  let order = 0
  for (const [slug, data] of Object.entries(serviziAgenzieData)) {
    documents.push(convertToSanityFormat(slug, data, 'servizi-agenzie', order++))
  }

  // Soluzioni Industriali
  order = 0
  for (const [slug, data] of Object.entries(soluzioniIndustrialiData)) {
    documents.push(convertToSanityFormat(slug, data, 'soluzioni-industriali', order++))
  }

  return documents
}

// Main
const migrationData = generateMigrationData()

console.log('='.repeat(80))
console.log('MIGRATION DATA GENERATED')
console.log('='.repeat(80))
console.log('')
console.log('Total documents:', migrationData.length)
console.log('')
console.log('NEXT STEPS:')
console.log('1. Avvia Sanity Studio: npm run sanity')
console.log('2. Per ogni documento qui sotto:')
console.log('   - Crea un nuovo Service in Sanity Studio')
console.log('   - Copia i campi dal JSON')
console.log('   - Carica manualmente le immagini per pipeline e case history')
console.log('   - Formatta extraText usando l\'editor PortableText')
console.log('')
console.log('='.repeat(80))
console.log('')

// Output JSON per ogni documento
migrationData.forEach((doc, index) => {
  console.log(`\n--- DOCUMENT ${index + 1}: ${doc.title} ---\n`)
  console.log(JSON.stringify(doc, null, 2))
  console.log('\n')
})

console.log('='.repeat(80))
console.log('MIGRATION DATA COMPLETE')
console.log('='.repeat(80))
