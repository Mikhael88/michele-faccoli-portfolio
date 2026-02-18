import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // Il '!' risolve l'errore TypeScript che bloccava GitHub
  token: process.env.SANITY_API_READ_TOKEN!, 
})