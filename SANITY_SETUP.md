# 🚀 Guida Rapida: Setup Sanity CMS

Questa guida ti aiuterà a configurare Sanity CMS per gestire dinamicamente i contenuti del sito.

## 📋 Prerequisiti

- Account Sanity (gratuito): https://www.sanity.io/
- Node.js installato
- Progetto Next.js funzionante

## 🔧 Setup Passo-Passo

### 1. Crea un Progetto Sanity

1. Vai su https://www.sanity.io/manage
2. Clicca "Create project"
3. Scegli un nome (es: "michele-faccoli-portfolio")
4. Copia il **Project ID** (lo userai dopo)

### 2. Configura le Variabili d'Ambiente

Crea il file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-17
```

Sostituisci `abc123xyz` con il tuo Project ID.

### 3. Avvia Sanity Studio

```bash
npm run sanity
```

Questo avvierà Sanity Studio su http://localhost:3333

Al primo avvio ti chiederà di autenticarti:
- Segui le istruzioni nel browser
- Autorizza l'accesso al progetto

### 4. Crea i Contenuti

Una volta in Sanity Studio:

1. **Vai su "Servizi Agenzie"** o **"Soluzioni Industriali"**
2. **Clicca "Create"** per creare un nuovo servizio
3. **Compila tutti i campi richiesti**:
   - Slug (es: `modellazione-render-3d`)
   - Cluster (seleziona il cluster corretto)
   - Theme (orange per agenzie, blue per industriali)
   - Titolo, sottotitolo, descrizione
   - Meta tags per SEO
   - Problema e soluzione
   - Pipeline (aggiungi gli step del workflow)
   - Case history
   - Deliverables
   - Ordine (numero progressivo per ordinamento)
   - Pubblicato (spunta per rendere visibile)

4. **Salva e pubblica** il documento

### 5. Testa il Sito

```bash
npm run dev
```

Vai su:
- http://localhost:3000/servizi-agenzie/[slug]
- http://localhost:3000/soluzioni-industriali/[slug]

Sostituisci `[slug]` con lo slug che hai creato in Sanity.

## 📝 Migrazione Dati Esistenti

Se hai già i dati in `servicesData.ts`, puoi usarli come riferimento:

1. Apri `src/data/servicesData.ts`
2. Per ogni servizio, crea un documento in Sanity Studio
3. Copia i contenuti campo per campo
4. Per `extraText`, usa l'editor PortableText per formattare il testo

### Conversione ExtraText

**Da servicesData.ts:**
```typescript
extraText: "Paragrafo 1.\n\nParagrafo 2."
```

**In Sanity Studio:**
- Usa l'editor PortableText
- Scrivi normalmente i paragrafi
- Usa i pulsanti per formattare (grassetto, corsivo, liste, link)

### Caricamento Immagini

Per ogni step della pipeline e case study:

1. Clicca su "Upload image"
2. Seleziona l'immagine dal tuo computer
3. Aggiungi l'alt text per accessibilità
4. Salva

## 🎨 Gestione Contenuti

### Creare un Nuovo Servizio

1. Vai in Sanity Studio
2. Scegli il cluster (Servizi Agenzie o Soluzioni Industriali)
3. Clicca "Create"
4. Compila tutti i campi
5. Pubblica

### Modificare un Servizio Esistente

1. Trova il servizio nella lista
2. Clicca per aprirlo
3. Modifica i campi
4. Salva le modifiche
5. Il sito si aggiornerà automaticamente*

*Con il caching di Next.js, potrebbe volerci qualche minuto. Per forzare l'aggiornamento, riavvia il server dev.

### Nascondere un Servizio

1. Apri il servizio in Sanity Studio
2. Deseleziona "Pubblicato"
3. Salva

Il servizio non sarà più visibile sul sito.

### Riordinare i Servizi

Cambia il campo "Ordine" (numero). I servizi vengono mostrati in ordine crescente.

## 🖼️ Gestione Immagini

### Ottimizzazione Automatica

Sanity ottimizza automaticamente le immagini:
- Ridimensionamento on-the-fly
- Formato WebP automatico
- Lazy loading
- CDN globale

### Best Practices

- **Carica immagini ad alta risoluzione** (min 1920px larghezza)
- **Usa JPG per foto**, PNG per grafica con trasparenze
- **Compila sempre l'alt text** per SEO e accessibilità
- **Usa hotspot** per controllare il crop su mobile

## 🔍 GROQ Queries

Le query per fetch i dati sono in `src/lib/sanity.ts`:

```typescript
// Tutti i servizi
const services = await getAllServices()

// Servizio singolo
const service = await getServiceBySlug('modellazione-render-3d')

// Servizi per cluster
const agenzieServices = await getServicesByCluster('servizi-agenzie')
```

## 🚨 Troubleshooting

### "Missing environment variable"

→ Verifica che `.env.local` esista e contenga tutte le variabili

### "Failed to fetch from Sanity"

→ Verifica:
- Project ID corretto
- Dataset esistente (di solito "production")
- Connessione internet attiva

### "No services found"

→ Verifica:
- Di aver creato almeno un servizio in Sanity Studio
- Che il servizio sia pubblicato (campo "Pubblicato" = true)
- Che il cluster corrisponda alla route

### Immagini non si caricano

→ Verifica:
- Di aver caricato l'immagine in Sanity
- Che il riferimento immagine sia salvato
- Che usi `urlFor()` nel codice

## 📚 Risorse Utili

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [PortableText Guide](https://www.sanity.io/docs/presenting-block-text)
- [Image Optimization](https://www.sanity.io/docs/image-urls)

## 🎯 Next Steps

1. ✅ Configura `.env.local`
2. ✅ Avvia Sanity Studio
3. ✅ Crea il primo servizio
4. ✅ Testa sul sito
5. ✅ Migra tutti i contenuti
6. ✅ Deploy su Vercel (le env vars vanno aggiunte anche lì!)

## 💡 Tips

- **Usa i draft**: Sanity supporta bozze, puoi lavorare su contenuti senza pubblicarli
- **Versioning**: Sanity tiene traccia di tutte le modifiche, puoi ripristinare versioni precedenti
- **Collaborazione**: Invita altri utenti al progetto per gestire i contenuti insieme
- **API Token**: Per preview mode, genera un token in Sanity e aggiungilo a `.env.local`

---

**Hai domande?** Consulta la documentazione completa in `sanity/README.md`
