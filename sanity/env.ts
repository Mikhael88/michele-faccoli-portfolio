/**
 * Sanity Environment Configuration
 * 
 * Configurazione centralizzata per il client Sanity.
 * Assicurati di impostare le variabili d'ambiente nel file .env.local:
 * 
 * NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 * NEXT_PUBLIC_SANITY_DATASET=production
 * NEXT_PUBLIC_SANITY_API_VERSION=2024-02-17
 * SANITY_API_TOKEN=your_token (opzionale, per preview/draft)
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = process.env.NODE_ENV === 'production'

// Token per preview/draft mode (opzionale)
export const token = process.env.SANITY_API_TOKEN || ''

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
