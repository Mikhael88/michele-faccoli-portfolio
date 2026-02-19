# Sanity CMS Integration

Questa cartella contiene la configurazione per l'integrazione di Sanity CMS nel progetto.

## Setup Iniziale

### 1. Installa Sanity Studio (opzionale)

Se vuoi gestire i contenuti con Sanity Studio locale:

```bash
npm install -g @sanity/cli
sanity init
```

Oppure usa Sanity Studio hosted su `https://your-project.sanity.studio`

### 2. Configura le variabili d'ambiente

Copia `.env.local.example` in `.env.local` e inserisci i tuoi valori:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-17
```

### 3. Importa lo schema

Lo schema è definito in `sanity/schema.ts`. Per usarlo:

**Opzione A: Sanity Studio V3 (consigliato)**

Crea un file `sanity.config.ts` nella root del progetto:

```typescript
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Michele Faccoli Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
```

Poi aggiungi lo script in `package.json`:

```json
{
  "scripts": {
    "sanity": "sanity dev"
  }
}
```

E avvia Sanity Studio con:

```bash
npm run sanity
```

**Opzione B: Sanity Studio Hosted**

Carica lo schema tramite il CLI:

```bash
sanity schema deploy
```

## Struttura Schema

### Service Document

Il documento principale per i servizi include:

- **Metadata**: slug, cluster, theme, title, subtitle, description
- **SEO**: metaTitle, metaDescription, keywords
- **Problem/Solution**: problemTitle, problemDescription, painPoints, solutionTitle, solutionDescription, benefits
- **Pipeline**: array di workflowStep con id, title, description, duration, extraText (PortableText), image
- **Case History**: array di caseStudy con title, category, description, metrics, image
- **Deliverables**: array di stringhe
- **Settings**: order, published

### WorkflowStep Object

Ogni step della pipeline include:

- `id`: identificatore unico
- `title`: titolo dello step
- `description`: descrizione breve
- `duration`: durata stimata
- `extraText`: contenuto dettagliato in PortableText
- `image`: immagine esempio (con hotspot)

### CaseStudy Object

Ogni case study include:

- `title`: titolo del caso
- `category`: categoria
- `description`: descrizione
- `metrics`: metriche di successo
- `image`: immagine del progetto

## Migrazione Dati

Per migrare i dati esistenti da `servicesData.ts` a Sanity:

1. Accedi a Sanity Studio
2. Crea manualmente i documenti Service
3. Copia i contenuti da `servicesData.ts`
4. Per `extraText`, converti il testo in blocchi PortableText

Esempio di conversione:

```typescript
// Da servicesData.ts
extraText: "Paragrafo 1.\n\nParagrafo 2."

// In Sanity (PortableText)
extraText: [
  {
    _type: 'block',
    children: [{ _type: 'span', text: 'Paragrafo 1.' }]
  },
  {
    _type: 'block',
    children: [{ _type: 'span', text: 'Paragrafo 2.' }]
  }
]
```

## API Usage

### Fetch tutti i servizi

```typescript
import { getAllServices } from '@/lib/sanity'

const services = await getAllServices()
```

### Fetch servizio per slug

```typescript
import { getServiceBySlug } from '@/lib/sanity'

const service = await getServiceBySlug('modellazione-render-3d')
```

### Fetch servizi per cluster

```typescript
import { getServicesByCluster } from '@/lib/sanity'

const agenzieServices = await getServicesByCluster('servizi-agenzie')
```

### Ottimizzare immagini

```typescript
import { urlFor } from '@/lib/sanity'

<img 
  src={urlFor(image).width(800).height(600).url()} 
  alt="..." 
/>
```

### Renderizzare PortableText

```typescript
import { PortableTextRenderer } from '@/components/sanity/PortableTextRenderer'

<PortableTextRenderer value={step.extraText} />
```

## GROQ Queries

Le query GROQ sono definite in `src/lib/sanity.ts`:

- `SERVICES_QUERY`: tutti i servizi pubblicati
- `SERVICE_BY_SLUG_QUERY`: servizio singolo per slug
- `SERVICES_BY_CLUSTER_QUERY`: servizi per cluster
- `ALL_SERVICE_SLUGS_QUERY`: tutti gli slug (per generateStaticParams)

## Caching & Revalidation

Next.js 15 usa automaticamente il caching per le fetch. Per revalidare:

```typescript
// Revalidate ogni ora
export const revalidate = 3600

// O usa on-demand revalidation
import { revalidatePath } from 'next/cache'
revalidatePath('/servizi-agenzie/[slug]')
```

## Best Practices

1. **Usa PortableText per contenuti ricchi**: permette formattazione, link, liste
2. **Ottimizza le immagini**: usa sempre `urlFor()` con width/height
3. **Valida i dati**: lo schema Sanity include validazioni, usale
4. **Cache intelligente**: configura `revalidate` in base alla frequenza di update
5. **Preview mode**: implementa draft mode per vedere contenuti non pubblicati

## Troubleshooting

### "Missing environment variable"

Assicurati che `.env.local` esista e contenga tutte le variabili necessarie.

### "Failed to fetch"

Verifica che:
- Il Project ID sia corretto
- Il dataset esista
- Le API di Sanity siano raggiungibili

### Immagini non si caricano

Verifica che:
- L'asset immagine esista in Sanity
- Il riferimento immagine sia corretto
- Usi `urlFor()` per generare l'URL

## Risorse

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [PortableText](https://www.sanity.io/docs/presenting-block-text)
- [Next.js Integration](https://www.sanity.io/plugins/next-sanity)
