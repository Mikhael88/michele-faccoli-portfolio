# 📦 Sanity CMS Integration - Riepilogo Completo

## ✅ Cosa è Stato Fatto

### 1. Installazione Dipendenze

Installate le seguenti librerie:

```json
{
  "@sanity/client": "^6.x",
  "@sanity/image-url": "^1.x",
  "next-sanity": "^9.x",
  "@portabletext/react": "^3.x",
  "sanity": "^3.x",
  "@sanity/vision": "^3.x"
}
```

### 2. Struttura File Creata

```
my-project/
├── sanity/
│   ├── schema.ts              # Schema Sanity completo
│   ├── env.ts                 # Configurazione environment
│   └── README.md              # Documentazione dettagliata
├── src/
│   ├── lib/
│   │   └── sanity.ts          # Client e query GROQ
│   └── components/
│       └── sanity/
│           └── PortableTextRenderer.tsx  # Renderer per contenuti rich text
├── scripts/
│   └── migrate-to-sanity.ts   # Helper per migrazione dati
├── sanity.config.ts           # Configurazione Sanity Studio
├── .env.local.example         # Template variabili d'ambiente
├── SANITY_SETUP.md            # Guida rapida setup
└── SANITY_INTEGRATION_SUMMARY.md  # Questo file
```

### 3. Schema Sanity

Creato schema completo con 3 tipi:

#### `service` (Document)
- **Metadata**: slug, cluster, theme, title, subtitle, description
- **SEO**: metaTitle, metaDescription, keywords
- **Content**: problem, solution, pipeline, caseHistory, deliverables
- **Settings**: order, published

#### `workflowStep` (Object)
- id, title, description, duration
- **extraText**: PortableText per contenuti ricchi
- **image**: Sanity Image con hotspot

#### `caseStudy` (Object)
- title, category, description, metrics
- **image**: Sanity Image

### 4. Client Sanity (`src/lib/sanity.ts`)

Configurato client con:

- **createClient**: client Sanity base
- **urlFor**: helper per ottimizzazione immagini
- **GROQ Queries**: 4 query predefinite
  - `SERVICES_QUERY`: tutti i servizi
  - `SERVICE_BY_SLUG_QUERY`: servizio singolo
  - `SERVICES_BY_CLUSTER_QUERY`: servizi per cluster
  - `ALL_SERVICE_SLUGS_QUERY`: slug per static generation

- **Helper Functions**:
  - `getAllServices()`
  - `getServiceBySlug(slug)`
  - `getServicesByCluster(cluster)`
  - `getAllServiceSlugs()`

### 5. PortableText Renderer

Componente React per renderizzare contenuti PortableText con stili personalizzati:

- Paragrafi, heading (h1-h4), blockquote
- Liste (bullet, numbered)
- Formattazione (bold, italic, code)
- Link con target e rel automatici
- Stili integrati con design system (variabili CSS semantiche)

### 6. Aggiornamento Pagine Dinamiche

Modificate entrambe le route dinamiche:

- `src/app/servizi-agenzie/[slug]/page.tsx`
- `src/app/soluzioni-industriali/[slug]/page.tsx`

**Cambiamenti:**
- ❌ Rimosso import da `servicesData.ts`
- ✅ Aggiunto fetch da Sanity con `getServiceBySlug()`
- ✅ `generateStaticParams()` ora usa `getAllServiceSlugs()`
- ✅ `generateMetadata()` fetch da Sanity
- ✅ Validazione cluster per sicurezza

### 7. WorkflowAccordion Aggiornato

Componente ora supporta:
- ✅ **String** (legacy): testo semplice da `servicesData.ts`
- ✅ **PortableText**: contenuti ricchi da Sanity
- ✅ Rendering condizionale automatico

### 8. Sanity Studio Configurato

File `sanity.config.ts` con:
- Structure personalizzata (Servizi Agenzie / Soluzioni Industriali)
- Vision Tool per testare query GROQ
- Schema types importati

Script npm aggiunto:
```json
"sanity": "sanity dev"
```

### 9. Documentazione

Creati 3 documenti:

1. **SANITY_SETUP.md**: Guida rapida per setup iniziale
2. **sanity/README.md**: Documentazione tecnica completa
3. **SANITY_INTEGRATION_SUMMARY.md**: Questo riepilogo

## 🚀 Come Usare

### Setup Iniziale (Prima Volta)

1. **Crea progetto Sanity**:
   - Vai su https://www.sanity.io/manage
   - Crea nuovo progetto
   - Copia il Project ID

2. **Configura environment**:
   ```bash
   cp .env.local.example .env.local
   # Modifica .env.local con il tuo Project ID
   ```

3. **Avvia Sanity Studio**:
   ```bash
   npm run sanity
   ```
   Vai su http://localhost:3333

4. **Crea contenuti**:
   - Crea almeno un servizio in Sanity Studio
   - Compila tutti i campi richiesti
   - Pubblica

5. **Testa il sito**:
   ```bash
   npm run dev
   ```
   Vai su http://localhost:3000/servizi-agenzie/[slug]

### Workflow Quotidiano

1. **Gestire contenuti**: `npm run sanity` → modifica in Studio
2. **Sviluppare**: `npm run dev` → il sito usa i dati Sanity
3. **Deploy**: Aggiungi env vars su Vercel

## 🔄 Migrazione da servicesData.ts

### Opzione A: Manuale (Consigliata)

1. Apri `src/data/servicesData.ts`
2. Per ogni servizio:
   - Crea documento in Sanity Studio
   - Copia i campi uno per uno
   - Usa editor PortableText per `extraText`
   - Carica immagini manualmente

### Opzione B: Script Helper

```bash
npx ts-node scripts/migrate-to-sanity.ts
```

Genera JSON da copiare in Sanity (richiede comunque lavoro manuale per immagini e PortableText).

## 📊 Confronto: Prima vs Dopo

### Prima (servicesData.ts)

```typescript
// ❌ Dati hardcoded nel codice
export const serviziAgenzieData = {
  'modellazione-render-3d': {
    title: 'Modellazione 3D',
    // ... altri campi
  }
}

// ❌ Modifiche richiedono deploy
// ❌ Nessuna interfaccia visuale
// ❌ Testo semplice, no formattazione
```

### Dopo (Sanity CMS)

```typescript
// ✅ Dati dinamici da CMS
const service = await getServiceBySlug(slug)

// ✅ Modifiche immediate (no deploy)
// ✅ Interfaccia visuale (Sanity Studio)
// ✅ PortableText con formattazione ricca
// ✅ Immagini ottimizzate automaticamente
// ✅ Versioning e collaborazione
```

## 🎯 Vantaggi dell'Integrazione

1. **Gestione Contenuti Semplificata**
   - Interfaccia visuale intuitiva
   - No bisogno di toccare il codice
   - Preview in tempo reale

2. **Performance**
   - Immagini ottimizzate automaticamente
   - CDN globale di Sanity
   - Caching intelligente di Next.js

3. **SEO**
   - Meta tags gestibili da CMS
   - PortableText per contenuti ricchi
   - Structured data ready

4. **Scalabilità**
   - Aggiungi servizi senza deploy
   - Gestione multi-utente
   - API GraphQL disponibile

5. **Developer Experience**
   - Type-safe con TypeScript
   - GROQ query potenti
   - Hot reload in dev

## 🔧 Configurazione Avanzata

### Revalidation

Aggiungi revalidation alle pagine per aggiornamenti automatici:

```typescript
// In page.tsx
export const revalidate = 3600 // Riconvalida ogni ora
```

### Preview Mode

Per vedere bozze non pubblicate:

1. Genera token API in Sanity
2. Aggiungi a `.env.local`:
   ```
   SANITY_API_TOKEN=your_token
   ```
3. Implementa draft mode in Next.js

### Webhooks

Configura webhook in Sanity per revalidation on-demand:

1. Vai su Sanity Manage → API → Webhooks
2. Aggiungi webhook per `service` document
3. URL: `https://your-site.com/api/revalidate`
4. Implementa route handler in Next.js

## 📈 Prossimi Passi

- [ ] Creare tutti i servizi in Sanity Studio
- [ ] Caricare immagini per pipeline e case history
- [ ] Testare tutte le route
- [ ] Configurare revalidation
- [ ] Setup webhook per revalidation automatica
- [ ] Deploy su Vercel con env vars
- [ ] (Opzionale) Implementare preview mode
- [ ] (Opzionale) Aggiungere più tipi di contenuto (blog, portfolio, etc.)

## 🐛 Troubleshooting Comuni

### Build Error: "Missing environment variable"

**Soluzione**: Aggiungi env vars su Vercel:
- Settings → Environment Variables
- Aggiungi `NEXT_PUBLIC_SANITY_PROJECT_ID` e `NEXT_PUBLIC_SANITY_DATASET`

### Immagini non si caricano

**Soluzione**: Verifica che:
- L'immagine sia caricata in Sanity
- Il riferimento sia salvato nel documento
- Usi `urlFor()` per generare l'URL

### "No services found"

**Soluzione**: Verifica che:
- Almeno un servizio sia creato in Sanity
- Il campo "Pubblicato" sia true
- Il cluster corrisponda alla route

### PortableText non renderizza

**Soluzione**: Verifica che:
- `extraText` contenga blocchi PortableText validi
- `PortableTextRenderer` sia importato correttamente
- I componenti custom siano definiti

## 📚 Risorse

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ**: https://www.sanity.io/docs/groq
- **Next.js Integration**: https://www.sanity.io/plugins/next-sanity
- **PortableText**: https://www.sanity.io/docs/presenting-block-text

## ✨ Conclusione

L'integrazione Sanity è completa e pronta all'uso! Ora puoi:

1. ✅ Gestire contenuti visualmente
2. ✅ Aggiornare il sito senza deploy
3. ✅ Usare contenuti ricchi con PortableText
4. ✅ Ottimizzare immagini automaticamente
5. ✅ Scalare facilmente il progetto

**Prossimo step**: Segui `SANITY_SETUP.md` per configurare il tuo progetto Sanity!
