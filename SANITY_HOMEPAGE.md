# Gestione Homepage con Sanity CMS

## 📋 Panoramica

La homepage del sito è ora completamente gestibile da Sanity CMS. È composta da due sezioni principali:

1. **Hero Section** - La sezione iniziale con titolo, CTA e immagine
2. **Bivio Section** - La sezione di scelta tra i due percorsi (Agenzie/Aziende)

## 🎯 Struttura dei Contenuti

### Hero Section

La Hero Section contiene:

- **Badge**: Testo del badge animato (es: "Disponibilità Q1 2025")
- **Headline**: Titolo principale diviso in 3 parti:
  - `headline`: Prima parte (es: "Soluzioni 3D")
  - `headlineHighlight`: Parte evidenziata con effetto neon (es: "Strategiche")
  - `headlineEnd`: Parte finale (es: "per il tuo Business")
- **Subheadline**: Sottotitolo descrittivo
- **CTA Buttons**:
  - `primaryCTA`: Testo del bottone principale
  - `secondaryCTA`: Testo del bottone secondario
  - `calendlyUrl`: Link per la prenotazione call
- **Hero Image**: Immagine principale (opzionale)
- **Case Study Badge**: Badge sovrapposto all'immagine con:
  - `label`: Etichetta (es: "Case Study Highlight")
  - `title`: Titolo del case study
  - `metric`: Metrica di successo (es: "+45% CTR")

### Bivio Section

La Bivio Section contiene:

- **Title**: Prima parte del titolo (es: "Scegli il tuo")
- **TitleHighlight**: Parte evidenziata (es: "Percorso")
- **Description**: Testo descrittivo sotto il titolo
- **Paths**: Array di 2 card (Agenzie e Aziende) con:
  - `key`: Identificatore ('agenzie' o 'aziende')
  - `icon`: Nome icona Lucide (es: 'Palette', 'Building2')
  - `title`: Titolo della card
  - `subtitle`: Sottotitolo
  - `description`: Descrizione del percorso
  - `features`: Array di caratteristiche (min 3)
  - `href`: Link di destinazione

## 🚀 Come Modificare i Contenuti

### 1. Accedi a Sanity Studio

```bash
npm run sanity
```

Apri il browser su `http://localhost:3333`

### 2. Naviga alla Sezione Homepage

Nel menu laterale troverai:
- **Homepage** → **Hero Section**
- **Homepage** → **Bivio Section**

### 3. Modifica i Contenuti

#### Hero Section

1. Clicca su "Hero Section"
2. Vedrai il documento esistente (se già creato)
3. Modifica i campi desiderati:
   - Cambia il badge per aggiornare la disponibilità
   - Modifica headline/subheadline per nuovi messaggi
   - Aggiorna i testi dei CTA
   - Carica una nuova immagine hero (opzionale)
   - Modifica il case study badge con nuovi risultati
4. Clicca "Publish" per salvare

#### Bivio Section

1. Clicca su "Bivio Section"
2. Vedrai il documento esistente
3. Modifica:
   - Titolo e descrizione principale
   - Per ogni path (Agenzie/Aziende):
     - Titolo, sottotitolo, descrizione
     - Lista delle features
     - Link di destinazione
4. Clicca "Publish" per salvare

## 🎨 Personalizzazione Avanzata

### Cambiare le Icone

Le icone usano la libreria [Lucide Icons](https://lucide.dev/icons/). Per cambiare un'icona:

1. Vai su https://lucide.dev/icons/
2. Cerca l'icona desiderata
3. Copia il nome esatto (es: "Sparkles", "Rocket", "Zap")
4. Incollalo nel campo `icon` della path card in Sanity

### Aggiungere un'Immagine Hero

1. In Hero Section, clicca sul campo "Immagine Hero"
2. Carica un'immagine (formato consigliato: 1200x800px, JPG/PNG)
3. Aggiungi un testo alternativo per l'accessibilità
4. Pubblica le modifiche

L'immagine sostituirà il placeholder gradiente con l'icona Sparkles.

## 📊 Dati Attuali

### Hero Section Attuale

```
Badge: "Disponibilità Q1 2025"
Headline: "Soluzioni 3D Strategiche per il tuo Business"
Subheadline: "Trasformo prodotti in asset visivi ad alto impatto..."
Primary CTA: "Scopri i Percorsi"
Secondary CTA: "Prenota una Call"
Calendly: "https://calendly.com/michelefaccoli"
Case Study: "TechCorp Product Launch - +45% CTR"
```

### Bivio Section Attuale

**Percorso Agenzie:**
- Titolo: "Per Agenzie Creative"
- Sottotitolo: "Collaborazioni tecniche per progetti complessi"
- Features: Retopology da CAD, GLB ottimizzati, Pipeline Git, Documentazione tecnica
- Link: `/servizi-agenzie`

**Percorso Aziende:**
- Titolo: "Per Aziende Industriali"
- Sottotitolo: "Soluzioni visuali per il tuo business"
- Features: Render fotorealistici, Stampa 3D K2, Animazioni prodotto, Prototipazione rapida
- Link: `/soluzioni-industriali`

## 🔄 Aggiornamenti in Tempo Reale

Le modifiche in Sanity sono visibili immediatamente sul sito in sviluppo (`npm run dev`). 

Per il sito in produzione:
1. Modifica i contenuti in Sanity Studio
2. Clicca "Publish"
3. Rideploya il sito (Vercel/Netlify) o attendi il rebuild automatico

## 🛠️ Troubleshooting

### I contenuti non si aggiornano

1. Verifica che il documento sia **pubblicato** (non solo salvato come draft)
2. Controlla che il campo `published` sia `true`
3. Riavvia il server di sviluppo (`npm run dev`)

### Errore "Missing environment variable"

Verifica che `.env.local` contenga:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=m4qtg32u
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### L'immagine non si carica

1. Verifica che l'immagine sia stata caricata correttamente in Sanity
2. Controlla che il campo `alt` sia compilato
3. Verifica che Next.js abbia il dominio Sanity CDN configurato in `next.config.ts`

## 📝 Note Tecniche

### Architettura

- **Server Component** (`src/app/page.tsx`): Fetcha i dati da Sanity al build time
- **Client Component** (`src/components/pages/HomeClient.tsx`): Gestisce le animazioni e lo stato
- **Presentational Components**: 
  - `src/components/hero/HeroSection.tsx`
  - `src/components/navigation/BivioSection.tsx`

### Fallback

Se Sanity non è raggiungibile o non ci sono dati, i componenti usano valori di fallback hardcoded per garantire che il sito funzioni sempre.

### Performance

- I dati vengono fetchati al build time (Static Site Generation)
- Le immagini usano Next.js Image Optimization
- I componenti Three.js sono caricati dinamicamente (code splitting)

## 🎯 Best Practices

1. **Testi Brevi**: Mantieni headline e CTA concisi per massimo impatto
2. **Immagini Ottimizzate**: Usa immagini compresse (max 500KB) per performance
3. **Coerenza**: Mantieni lo stesso tono di voce tra Hero e Bivio
4. **Testing**: Testa sempre le modifiche in locale prima di pubblicare
5. **Backup**: Sanity mantiene uno storico delle versioni, ma fai screenshot dei contenuti importanti

## 🚀 Prossimi Passi

Dopo aver familiarizzato con Hero e Bivio, puoi:

1. Aggiungere più case study alla Hero Section
2. Creare varianti A/B testing dei testi
3. Aggiungere analytics per tracciare i click sui CTA
4. Integrare più immagini hero per rotazione dinamica
