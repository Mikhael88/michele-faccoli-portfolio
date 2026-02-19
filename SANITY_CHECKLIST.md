# ✅ Sanity CMS - Checklist Setup

Usa questa checklist per verificare che tutto sia configurato correttamente.

## 📋 Pre-Setup

- [ ] Account Sanity creato su https://www.sanity.io/
- [ ] Progetto Sanity creato
- [ ] Project ID copiato

## 🔧 Configurazione Locale

- [ ] File `.env.local` creato nella root
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` configurato
- [ ] `NEXT_PUBLIC_SANITY_DATASET` configurato (solitamente "production")
- [ ] `NEXT_PUBLIC_SANITY_API_VERSION` configurato (2024-02-17)

## 🎨 Sanity Studio

- [ ] Comando `npm run sanity` funziona
- [ ] Sanity Studio si apre su http://localhost:3333
- [ ] Autenticazione completata
- [ ] Vedo le sezioni "Servizi Agenzie" e "Soluzioni Industriali"

## 📝 Contenuti

### Primo Servizio (Test)

- [ ] Creato almeno un servizio di test
- [ ] Slug compilato (es: `test-service`)
- [ ] Cluster selezionato
- [ ] Theme selezionato
- [ ] Titolo e sottotitolo compilati
- [ ] Descrizione compilata
- [ ] Meta tags SEO compilati
- [ ] Problema: titolo, descrizione, pain points (min 3)
- [ ] Soluzione: titolo, descrizione, benefici (min 3)
- [ ] Pipeline: almeno 3 step aggiunti
  - [ ] Ogni step ha id, title, description
  - [ ] Almeno uno step ha extraText (PortableText)
  - [ ] (Opzionale) Almeno uno step ha immagine
- [ ] Case History: almeno 2 casi aggiunti
  - [ ] Ogni caso ha title, category, description
  - [ ] (Opzionale) Metriche aggiunte
- [ ] Deliverables: almeno 4 item aggiunti
- [ ] Ordine impostato (es: 0)
- [ ] "Pubblicato" spuntato ✓
- [ ] Documento salvato e pubblicato

## 🌐 Sito Next.js

- [ ] Comando `npm run dev` funziona
- [ ] Nessun errore di build
- [ ] Pagina http://localhost:3000 si carica
- [ ] Navigazione a `/servizi-agenzie/[slug]` funziona (sostituisci [slug] con il tuo)
- [ ] Contenuti da Sanity vengono visualizzati correttamente
- [ ] Immagini (se caricate) si vedono
- [ ] PortableText (se usato) è formattato correttamente
- [ ] Accordion pipeline funziona (click per espandere)
- [ ] Case history sono visibili
- [ ] Deliverables sono elencati

## 🔍 Test Funzionalità

### Test 1: Modifica Contenuto
- [ ] Modifico il titolo del servizio in Sanity Studio
- [ ] Salvo
- [ ] Riavvio `npm run dev` (o aspetto revalidation)
- [ ] Vedo il nuovo titolo sul sito

### Test 2: Nuovo Servizio
- [ ] Creo un secondo servizio in Sanity
- [ ] Pubblico
- [ ] Riavvio `npm run dev`
- [ ] Posso navigare al nuovo servizio

### Test 3: Nascondere Servizio
- [ ] Deseleziono "Pubblicato" su un servizio
- [ ] Salvo
- [ ] Riavvio `npm run dev`
- [ ] Il servizio non è più accessibile (404)

### Test 4: PortableText
- [ ] Aggiungo testo formattato in extraText di uno step
- [ ] Uso grassetto, corsivo, liste
- [ ] Salvo
- [ ] Verifico che la formattazione sia visibile sul sito

### Test 5: Immagini
- [ ] Carico un'immagine in uno step della pipeline
- [ ] Salvo
- [ ] Verifico che l'immagine sia visibile e ottimizzata

## 🚀 Deploy (Vercel)

- [ ] Progetto pushato su GitHub
- [ ] Progetto importato su Vercel
- [ ] Environment Variables aggiunte su Vercel:
  - [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - [ ] `NEXT_PUBLIC_SANITY_DATASET`
  - [ ] `NEXT_PUBLIC_SANITY_API_VERSION`
- [ ] Deploy completato con successo
- [ ] Sito live funziona
- [ ] Contenuti da Sanity sono visibili

## 📊 Migrazione Completa

Se hai dati esistenti in `servicesData.ts`:

### Servizi Agenzie
- [ ] modellazione-render-3d migrato
- [ ] animazioni-3d migrato
- [ ] configuratori-web migrato
- [ ] scan-stampa-3d migrato

### Soluzioni Industriali
- [ ] cataloghi migrato
- [ ] campagne-social migrato
- [ ] configuratori-ecommerce-3d migrato
- [ ] scan-stampa-3d migrato

## 🎯 Ottimizzazioni (Opzionali)

- [ ] Revalidation configurata nelle pagine
- [ ] Webhook Sanity → Vercel configurato per revalidation automatica
- [ ] Preview mode implementato per vedere bozze
- [ ] Immagini con hotspot configurate
- [ ] Alt text compilato per tutte le immagini
- [ ] SEO keywords ottimizzate

## 📚 Documentazione

- [ ] Letto `SANITY_SETUP.md`
- [ ] Letto `SANITY_INTEGRATION_SUMMARY.md`
- [ ] Consultato `sanity/README.md` per dettagli tecnici

## ✨ Pronto!

Se hai spuntato tutti i checkbox obbligatori, sei pronto! 🎉

Il tuo sito ora:
- ✅ Usa Sanity CMS per contenuti dinamici
- ✅ Supporta PortableText per contenuti ricchi
- ✅ Ottimizza immagini automaticamente
- ✅ È scalabile e facile da gestire

---

**Hai problemi?** Consulta la sezione Troubleshooting in `SANITY_INTEGRATION_SUMMARY.md`
