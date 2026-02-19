# Gestione Pagine Cluster e Portfolio con Sanity CMS

## 📋 Panoramica

Oltre alla homepage e ai servizi, ora puoi gestire da Sanity CMS:

1. **Pagine Cluster** - Le pagine "madre" per Servizi Agenzie e Soluzioni Industriali
2. **Portfolio** - I progetti del portfolio con filtri per categoria

## 🎯 Struttura dei Contenuti

### Cluster Pages (Pagine Madre)

Le Cluster Pages sono le pagine principali che presentano i servizi di ogni cluster:
- `/servizi-agenzie` - Pagina per le agenzie creative
- `/soluzioni-industriali` - Pagina per le aziende industriali

Ogni Cluster Page contiene:

#### Header Section
- **Badge**: Testo del badge (es: "Focus Tecnico & Pipeline")
- **Title**: Prima parte del titolo (es: "Asset 3D Ottimizzati per")
- **TitleHighlight**: Parte evidenziata (es: "Agenzie Creative")
- **Subtitle**: Sottotitolo descrittivo
- **Primary CTA**: Testo bottone principale (default: "Vedi Portfolio")
- **Secondary CTA**: Testo bottone secondario (default: "Parliamo del progetto")
- **Hero Image**: Immagine hero (opzionale)

#### Services Section
- **Services Title**: Titolo della sezione servizi
- **Services Description**: Descrizione della sezione
- **Services**: Array di 4 Service Cards con:
  - `icon`: Nome icona Lucide
  - `title`: Titolo del servizio
  - `description`: Descrizione
  - `items`: 3 caratteristiche principali
  - `href`: Link alla pagina di dettaglio

#### Why Me Section
- **Why Me Title**: Titolo della sezione vantaggi
- **Why Me Items**: Array di 4 item con:
  - `title`: Titolo del vantaggio
  - `description`: Descrizione

#### Portfolio Section
- **Portfolio Title**: Titolo della sezione portfolio
- **Portfolio Subtitle**: Sottotitolo (es: "Wireframe, Polycount & Performance Metrics")

#### Testimonials Section
- **Testimonials**: Array di 3 testimonial con:
  - `name`: Nome del cliente
  - `role`: Ruolo e azienda
  - `quote`: Citazione
  - `avatar`: Iniziale del nome

#### Footer Section
- **Footer Title**: Titolo del footer
- **Footer Description**: Descrizione del footer

#### SEO
- **Meta Title**: Titolo SEO (max 60 caratteri)
- **Meta Description**: Descrizione SEO (max 160 caratteri)
- **Keywords**: Array di keywords

### Portfolio Projects

Ogni progetto del portfolio contiene:

- **Title**: Titolo del progetto
- **Description**: Descrizione dettagliata
- **Category**: Categoria del progetto
  - Modellazione 3D
  - CAD to 3D
  - 3D Scan
  - Animazioni
  - Stampa 3D
  - AI Generation
- **Image**: Immagine principale del progetto
- **Tags**: Array di 2-5 tag
- **Client**: Nome del cliente
- **Year**: Anno di realizzazione (2020-2030)
- **Order**: Ordine di visualizzazione
- **Published**: Se pubblicato o meno

## 🚀 Come Modificare i Contenuti

### 1. Accedi a Sanity Studio

```bash
npm run sanity
```

Apri il browser su `http://localhost:3333`

### 2. Naviga alle Sezioni

Nel menu laterale troverai:
- **Pagine Cluster** → **Servizi Agenzie (Pagina Madre)** o **Soluzioni Industriali (Pagina Madre)**
- **Portfolio** → Lista dei progetti

### 3. Modifica le Pagine Cluster

#### Servizi Agenzie

1. Clicca su "Pagine Cluster" → "Servizi Agenzie (Pagina Madre)"
2. Vedrai il documento della pagina
3. Modifica le sezioni:
   - **Header**: Badge, titolo, sottotitolo, CTA
   - **Services**: Le 4 card dei servizi (Animazioni 3D, Configuratori Web, Scan & Stampa, Modellazione & Render)
   - **Why Me**: I 4 vantaggi (Pipeline Integration, Formati Standardizzati, Performance, Supporto)
   - **Portfolio**: Titoli della sezione
   - **Testimonials**: Le 3 recensioni
   - **Footer**: Titolo e descrizione
   - **SEO**: Meta title, description, keywords
4. Clicca "Publish" per salvare

#### Soluzioni Industriali

Stessa procedura, ma per la pagina delle aziende industriali.

### 4. Gestisci il Portfolio

#### Aggiungere un Nuovo Progetto

1. Clicca su "Portfolio"
2. Clicca "Create new" → "Portfolio Project"
3. Compila i campi:
   - Titolo e descrizione
   - Seleziona la categoria
   - Carica un'immagine (formato consigliato: 1200x900px)
   - Aggiungi 2-5 tag
   - Inserisci cliente e anno
   - Imposta l'ordine di visualizzazione
4. Clicca "Publish"

#### Modificare un Progetto Esistente

1. Clicca su "Portfolio"
2. Seleziona il progetto da modificare
3. Modifica i campi desiderati
4. Clicca "Publish"

#### Riordinare i Progetti

1. Modifica il campo "Ordine" di ogni progetto
2. I progetti con ordine più basso appaiono per primi
3. Esempio: Ordine 1, 2, 3, 4, 5, 6

## 📊 Dati Attuali

### Pagina Servizi Agenzie

**Header:**
- Badge: "Focus Tecnico & Pipeline"
- Titolo: "Asset 3D Ottimizzati per **Agenzie Creative**"
- 4 Servizi: Animazioni 3D, Configuratori Web, Scan & Stampa 3D, Modellazione & Render

**Why Me:**
- Pipeline Integration
- Formati Standardizzati
- Performance Ottimizzate
- Supporto Continuo

**Testimonials:**
- Marco Rossi (CEO, TechStart SRL)
- Elena Bianchi (Product Manager, Innova Group)
- Luca Verdi (Creative Director, Luxe Agency)

### Pagina Soluzioni Industriali

**Header:**
- Badge: "Focus Business & Marketing"
- Titolo: "Visualizzazione 3D per **Aziende**"
- 4 Servizi: Campagne Social 3D, Cataloghi Digitali, Scan & Stampa 3D, Configuratori E-commerce

**Why Me:**
- Processo Chiavi in Mano
- Costi Trasparenti
- Licenze Commerciali
- Supporto Post-Consegna

**Testimonials:**
- Alessandro Ferretti (Marketing Director, LuxeBrand)
- Giulia Martini (Product Owner, DesignCo)
- Roberto Neri (CEO, TechGadget Inc.)

### Portfolio (6 Progetti)

1. **Sedia Design Eames** (Modellazione 3D) - Studio Design Italia, 2024
2. **Turbina Industriale** (CAD to 3D) - TechFlow Industries, 2024
3. **Scultura Archeologica** (3D Scan) - Museo Nazionale, 2023
4. **Orologio Meccanico** (Animazioni) - Orologeria Svizzera, 2024
5. **Protesi Biomedica** (Stampa 3D) - MedTech Solutions, 2024
6. **Sneaker Collection** (AI Generation) - Brand Streetwear, 2024

## 🎨 Personalizzazione Avanzata

### Cambiare le Icone dei Servizi

Le icone usano [Lucide Icons](https://lucide.dev/icons/):

1. Vai su https://lucide.dev/icons/
2. Cerca l'icona desiderata
3. Copia il nome esatto (es: "Video", "Globe", "Scan", "Layers")
4. Incollalo nel campo `icon` della Service Card

**Icone Attuali:**
- Servizi Agenzie: Video, Globe, Scan, Layers
- Soluzioni Industriali: Smartphone, Camera, Scan, Globe

### Aggiungere Immagini al Portfolio

1. Prepara immagini in formato JPG/PNG
2. Dimensioni consigliate: 1200x900px (ratio 4:3)
3. Comprimi le immagini (max 500KB) per performance
4. In Sanity Studio, carica l'immagine nel campo "Immagine"
5. Aggiungi sempre un testo alternativo per l'accessibilità

### Modificare i Testimonial

Puoi cambiare:
- Nome e ruolo del cliente
- Citazione (mantienila breve e impattante)
- Avatar (usa l'iniziale del nome)

## 🔄 Workflow di Aggiornamento

### Per Aggiornare i Servizi

1. Modifica la Service Card nella Cluster Page
2. Aggiorna il link `href` se necessario
3. Assicurati che il link punti alla pagina di dettaglio corretta
4. Pubblica le modifiche

### Per Aggiungere un Nuovo Servizio

1. Crea prima il documento Service (sottopagina)
2. Poi aggiungi la Service Card nella Cluster Page
3. Collega i due con il campo `href`

### Per Riorganizzare i Servizi

Le Service Cards sono in un array, quindi l'ordine in Sanity Studio è l'ordine di visualizzazione.

## 🛠️ Troubleshooting

### I servizi non si vedono

1. Verifica che la Cluster Page sia pubblicata
2. Controlla che il campo `published` sia `true`
3. Verifica che ci siano esattamente 4 Service Cards

### Il portfolio non si carica

1. Verifica che i progetti siano pubblicati
2. Controlla che le immagini siano caricate correttamente
3. Verifica che ogni progetto abbia un campo `order` valido

### Le icone non appaiono

1. Verifica che il nome dell'icona sia scritto correttamente
2. Controlla su https://lucide.dev/icons/ che l'icona esista
3. Usa il nome esatto con la capitalizzazione corretta (es: "Video", non "video")

## 📝 Note Tecniche

### Differenza tra Cluster Page e Service

- **Cluster Page**: Pagina "madre" che presenta tutti i servizi di un cluster
- **Service**: Pagina di dettaglio di un singolo servizio

Esempio:
- `/servizi-agenzie` → Cluster Page (presenta 4 servizi)
- `/servizi-agenzie/animazioni-3d` → Service (dettaglio di un servizio)

### Validazioni

- **Service Cards**: Esattamente 4 per cluster
- **Why Me Items**: Esattamente 4 per cluster
- **Testimonials**: Esattamente 3 per cluster
- **Service Items**: Esattamente 3 per servizio
- **Portfolio Tags**: Min 2, Max 5

### Performance

- Le immagini del portfolio usano Sanity CDN per ottimizzazione automatica
- I dati vengono fetchati al build time (SSG)
- Le modifiche in Sanity richiedono un rebuild del sito per essere visibili in produzione

## 🎯 Best Practices

1. **Coerenza**: Mantieni lo stesso stile di scrittura tra Agenzie e Aziende
2. **Immagini**: Usa sempre immagini di alta qualità ma ottimizzate
3. **Testimonials**: Usa citazioni autentiche e specifiche
4. **Portfolio**: Aggiorna regolarmente con i progetti più recenti
5. **SEO**: Ottimizza sempre meta title e description per ogni pagina
6. **Testing**: Testa le modifiche in locale prima di pubblicare

## 🚀 Prossimi Passi

Dopo aver familiarizzato con Cluster Pages e Portfolio:

1. Aggiungi nuovi progetti al portfolio man mano che li completi
2. Aggiorna i testimonial con nuove recensioni
3. Sperimenta con diverse icone per i servizi
4. Ottimizza i testi SEO basandoti sulle analytics
5. Considera di aggiungere case study dettagliati per i progetti più importanti
