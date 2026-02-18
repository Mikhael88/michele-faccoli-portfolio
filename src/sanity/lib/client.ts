import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabilitato per avere dati sempre freschi (non cacheati dalla CDN)
  token: process.env.SANITY_API_READ_TOKEN, // <--- AGGIUNGI QUESTA RIGA
})