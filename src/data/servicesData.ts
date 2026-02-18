/**
 * Dati per sottopagine dinamiche dei cluster servizi-agenzie e soluzioni-industriali.
 * Usato dal pattern [slug]/page.tsx per entrambi i percorsi.
 */

import type { WorkflowStep } from '@/components/blocks/WorkflowAccordion'

export interface CaseStudy {
  title: string
  category: string
  description: string
  metrics?: string
}

export interface ServicePageData {
  slug: string
  theme: 'orange' | 'blue'
  title: string
  subtitle: string
  description: string
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
  problem: {
    title: string
    description: string
    painPoints: string[]
  }
  solution: {
    title: string
    description: string
    benefits: string[]
  }
  pipeline: WorkflowStep[]
  caseHistory: CaseStudy[]
  deliverables: string[]
  parentPath: string
  parentLabel: string
}

/** Mappa slug -> dati per servizi-agenzie (tema arancione) */
export const serviziAgenzieData: Record<string, Omit<ServicePageData, 'slug'>> = {
  'modellazione-render-3d': {
    theme: 'orange',
    title: 'Modellazione & Render 3D',
    subtitle: 'CAD to Photorealistic',
    description:
      'Trasformazione di dati tecnici in visualizzazioni spettacolari. Da file CAD grezzi a render fotorealistici pronti per campagne pubblicitarie e cataloghi.',
    metadata: {
      title: 'Modellazione & Render 3D per Agenzie | Michele Faccoli',
      description:
        'Modellazione 3D professionale e rendering fotorealistico per agenzie. Da CAD a visual, da sketch a render pubblicitari. Qualità cinema.',
      keywords: [
        'modellazione 3D',
        'render fotorealistico',
        'CAD to 3D',
        'visualization',
        'product rendering',
        'CGI',
        '3D modeling',
      ],
    },
    problem: {
      title: 'Il divario tra tecnico e comunicativo',
      description:
        'I file CAD sono perfetti per la produzione ma inutilizzabili per la comunicazione marketing.',
      painPoints: [
        'File CAD troppo pesanti e complessi per visualizzazione',
        'Geometrie non ottimizzate per rendering',
        'Necessità di ambientazioni e contesti emozionali',
        'Difficoltà nel mantenere coerenza tra asset diversi',
      ],
    },
    solution: {
      title: 'Asset 3D pronti per ogni uso',
      description:
        'Pipeline completa dalla retopology al rendering finale, con ottimizzazione per ogni canale.',
      benefits: [
        'Retopology professionale con edge flow corretto',
        'UV mapping ottimizzato per texturing',
        'Materiali PBR photorealistic',
        'Ottimizzazione multi-export (GLB, FBX, USDZ)',
      ],
    },
    pipeline: [
      {
        id: 'analisi',
        title: 'Analisi & Import',
        description:
          'Import file sorgente, analisi geometria, identificazione problemi e definizione LOD necessari.',
        duration: '1 giorno',
        extraText:
          "Importo i file sorgente (CAD, SketchUp, formati vari) e analizzo la geometria esistente. Identifico problemi strutturali: superfici non manifold, normalli invertite, sovrapposizioni. Definisco i LOD (Level of Detail) necessari in base all'uso finale: visualizzazione web, render fotorealistico, stampa.",
      },
      {
        id: 'retopology',
        title: 'Retopology & UV',
        description:
          'Ricostruzione topologia clean, UV unwrap ottimizzato, organizzazione layer.',
        duration: '3-7 giorni',
        extraText:
          'Ricostruisco la topologia con edge flow corretto per animazioni e deformazioni. Creo UV map ottimizzate che massimizzano lo spazio texture senza distorsioni. Organizzo il modello in layer logici per gestione efficiente: parti mobili, varianti, dettagli. Questo step è fondamentale per asset professionali riutilizzabili.',
      },
      {
        id: 'texturing',
        title: 'Texturing & Shading',
        description:
          'Creazione materiali PBR, texture painting, setup shader per render engine.',
        duration: '2-5 giorni',
        extraText:
          'Creo materiali PBR (Physically Based Rendering) fotorealistici: diffuse, roughness, metallic, normal, displacement. Utilizzo texture painting per dettagli unici e usura realistica. Setup shader ottimizzati per i principali render engine: Cycles, V-Ray, Arnold. Ogni materiale è parametrico per varianti rapide.',
      },
      {
        id: 'rendering',
        title: 'Rendering & Export',
        description:
          'Setup luci e camera, rendering finali, post-production, export multi-formato.',
        duration: '2-4 giorni',
        extraText:
          'Setup illuminazione studio o ambientazioni personalizzate con luci HDRI e cinematic lighting. Composizione camera per highlight prodotto o campagne ADV. Rendering ad alta risoluzione (4K-8K) con pass separate per post-production flessibile. Export in formati ottimizzati: GLB per web, FBX per engine, USDZ per AR.',
      },
    ],
    caseHistory: [
      {
        title: 'Electronics Catalog',
        category: 'Product Visualization',
        description: '50+ modelli ottimizzati per catalogo digitale.',
        metrics: '70% riduzione foto shooting',
      },
      {
        title: 'Jewelry Campaign',
        category: 'Photorealistic Render',
        description: 'Render macro per campagna luxury gioielli.',
        metrics: 'Indistinguibile da foto reale',
      },
      {
        title: 'Industrial Machinery',
        category: 'Technical Visualization',
        description: 'Visualizzazione macchinario industriale complesso.',
        metrics: '+50% lead qualificati',
      },
    ],
    deliverables: [
      'Render 4K/8K in formato richiesto',
      'File 3D ottimizzati (GLB, FBX, OBJ)',
      'Materiali e texture organizzati',
      'Ambientazioni (se richieste)',
      'Varianti colore/versione',
      'File sorgente (.blend)',
    ],
    parentPath: '/servizi-agenzie',
    parentLabel: 'Servizi Agenzie',
  },
  'animazioni-3d': {
    theme: 'orange',
    title: 'Animazioni 3D',
    subtitle: 'Tecniche, Emozionali & ADV',
    description:
      "Contenuti dinamici che raccontano la storia del prodotto. Da exploder view tecnici a reveal emozionali, fino a spot pubblicitari di impatto per campagne multi-piattaforma.",
    metadata: {
      title: 'Animazioni 3D per Agenzie | Michele Faccoli',
      description:
        'Animazioni 3D tecniche, emozionali e ADV per agenzie creative. Exploded views, product reveal, spot pubblicitari e motion graphics per i tuoi clienti.',
      keywords: [
        'animazioni 3D',
        'motion graphics',
        'product animation',
        'video 3D',
        'spot pubblicitari',
        'ADV 3D',
        'agenzie creative',
      ],
    },
    problem: {
      title: 'Le sfide comunicative dei tuoi clienti',
      description:
        'Le agenzie si trovano spesso a dover comunicare prodotti complessi con strumenti limitati.',
      painPoints: [
        'I clienti non capiscono come funziona il prodotto dalle foto statiche',
        'I video tradizionali costano troppo e richiedono tempi lunghi',
        'Difficoltà nel differenziare le campagne dalla concorrenza',
        'Necessità di contenuti per multipli canali con budget limitati',
      ],
    },
    solution: {
      title: 'Animazioni 3D che comunicano e convertono',
      description:
        "Video 3D che combinano tecnica ed emozione per massimizzare l'impatto comunicativo.",
      benefits: [
        'Exploded views che mostrano ogni componente con chiarezza tecnica',
        'Product reveal che creano attesa e coinvolgimento emotivo',
        'Spot ADV ottimizzati per TV, social e digital signage',
        'Riuso degli asset per creare varianti a costo zero',
      ],
    },
    pipeline: [
      {
        id: 'briefing',
        title: 'Briefing & Analisi',
        description:
          'Comprensione del prodotto, target e obiettivi comunicativi. Definizione stile e tono dell\'animazione.',
        duration: '1-2 giorni',
        extraText:
          "In questa fase iniziale, raccolgo tutte le informazioni necessarie dal cliente: documentazione tecnica, reference visive, target audience e obiettivi di marketing. Definiamo insieme lo stile dell'animazione (realistico, stilizzato, tecnico), il tono comunicativo e i key message da trasmettere. Questo step è cruciale per allineare le aspettative e garantire un risultato che soddisfi le esigenze del progetto.",
      },
      {
        id: 'storyboard',
        title: 'Storyboard',
        description:
          'Creazione dello storyboard con le sequenze chiave, timing e note di regia per approvazione.',
        duration: '2-3 giorni',
        extraText:
          "Realizzo uno storyboard dettagliato che visualizza le scene chiave dell'animazione. Ogni frame mostra composizione, movimenti di camera e timing approssimativo. Include note di regia per audio, transizioni ed effetti. Questo documento viene condiviso con il cliente per feedback e approvazione prima di procedere con l'animazione vera e propria, risparmiando tempo e risorse.",
      },
      {
        id: 'animazione',
        title: 'Animazione',
        description:
          'Keyframe animation, motion graphics e effetti. Preview a bassa risoluzione per revisioni.',
        duration: '5-10 giorni',
        extraText:
          "Durante questa fase creo l'animazione utilizzando keyframe precisi e curve di movimento fluide. Implemento motion graphics, effetti particellari e qualsiasi elemento dinamico richiesto. Fornisco preview a bassa risoluzione per revisioni intermedie, permettendo al cliente di verificare timing e flusso narrativo prima del rendering finale.",
      },
      {
        id: 'rendering',
        title: 'Rendering & Post',
        description:
          'Rendering finale in alta definizione, color correction, musica e sound design.',
        duration: '2-4 giorni',
        extraText:
          'Il rendering finale produce il video in alta definizione (4K o 1080p secondo le esigenze). Applico color correction per garantire coerenza cromatica, aggiungo effetti visivi di polimento e integro musica/sound design professionale. Il risultato è un video pronto per la distribuzione su qualsiasi piattaforma: TV, social media, web o eventi live.',
      },
    ],
    caseHistory: [
      {
        title: 'Tech Product Launch',
        category: 'Tecniche',
        description: 'Exploded view animato per presentazione prodotto B2B.',
        metrics: '+60% comprensione feature',
      },
      {
        title: 'Luxury Watch Reveal',
        category: 'Emozionali',
        description: 'Cinematic reveal per campagna premium global.',
        metrics: '2M+ views su YouTube',
      },
      {
        title: 'E-commerce Social Campaign',
        category: 'ADV',
        description: 'Pack di 20 short video per social media ads.',
        metrics: '-40% costo per acquisizione',
      },
    ],
    deliverables: [
      'Video master 4K/1080p',
      'Varianti per social (1:1, 9:16, 16:9)',
      'Versione loop per digital signage',
      'File sorgente animazione',
      'Musica royalty-free inclusa',
      '1 round di revisioni incluso',
    ],
    parentPath: '/servizi-agenzie',
    parentLabel: 'Servizi Agenzie',
  },
  'configuratori-web': {
    theme: 'orange',
    title: 'Configuratori Web 3D',
    subtitle: 'WebGL & AR Interactive',
    description:
      "Esperienze interattive che permettono agli utenti di personalizzare e esplorare i prodotti. Da configuratori di colore ad AR preview, aumenti engagement e conversioni.",
    metadata: {
      title: 'Configuratori Web 3D per Agenzie | Michele Faccoli',
      description:
        'Configuratori 3D interattivi per web e e-commerce. WebGL, Three.js, AR Quick Look. Esperienze immersive che aumentano le conversioni.',
      keywords: [
        'configuratore 3D',
        'WebGL',
        'Three.js',
        'configuratore prodotto',
        'AR Quick Look',
        'e-commerce 3D',
        'interattività',
      ],
    },
    problem: {
      title: "I limiti dell'e-commerce tradizionale",
      description:
        "I clienti non possono toccare o provare i prodotti online, creando incertezza prima dell'acquisto.",
      painPoints: [
        'Alto tasso di abbandono carrello per prodotti complessi',
        'Clienti che chiedono "come sarebbe in blu?" senza risposta visiva',
        'Resi costosi dovuti a aspettative non corrispondenti',
        'Difficoltà nel comunicare varianti e personalizzazioni',
      ],
    },
    solution: {
      title: 'Configuratori che convertono',
      description:
        "Esperienze 3D interattive che riducono l'incertezza e aumentano la confidenza d'acquisto.",
      benefits: [
        'Personalizzazione visuale in tempo reale di colori, materiali e accessori',
        'AR Quick Look per vedere il prodotto nel proprio ambiente',
        'Integrazione nativa con Shopify, WooCommerce e custom',
        'Analytics su preferenze e configurazioni più scelte',
      ],
    },
    pipeline: [
      {
        id: 'analisi',
        title: 'Analisi & Specifiche',
        description:
          'Mappatura delle varianti prodotto, materiali e opzioni. Definizione dei flussi di configurazione.',
        duration: '2-3 giorni',
        extraText:
          "Analizzo il catalogo prodotti e mappo tutte le varianti disponibili: colori, materiali, accessori e opzioni di personalizzazione. Definisco insieme al cliente il flusso utente ottimale per il configuratore, identificando le priorità di visualizzazione e le interazioni chiave. Questo step è fondamentale per garantire un'esperienza utente fluida e intuitiva.",
      },
      {
        id: 'modeling',
        title: 'Modeling & Optimization',
        description:
          'Creazione modelli 3D ottimizzati per web (low-poly con normal maps).',
        duration: '5-8 giorni',
        extraText:
          "Creo modelli 3D ottimizzati per il rendering web in tempo reale. Utilizzo tecniche di low-poly modeling con normal maps per mantenere alto dettaglio visivo con geometrie leggere. Ogni variante (colore, materiale) viene preparata come texture PBR per cambi istantanei nel configuratore. L'ottimizzazione garantisce 60 FPS anche su dispositivi mobile.",
      },
      {
        id: 'sviluppo',
        title: 'Sviluppo Interfaccia',
        description:
          'Build del configuratore con Three.js/React Three Fiber, UI controls, AR integration.',
        duration: '5-10 giorni',
        extraText:
          "Sviluppo il configuratore utilizzando Three.js o React Three Fiber per il rendering 3D. Implemento controlli UI intuitivi per rotazione, zoom e personalizzazione. Integro AR Quick Look per iOS, permettendo agli utenti di visualizzare il prodotto nel proprio ambiente tramite la fotocamera del dispositivo. L'interfaccia è responsive e accessibile.",
      },
      {
        id: 'integrazione',
        title: 'Integrazione & Testing',
        description:
          'Integrazione con e-commerce, test su multipli dispositivi, ottimizzazione performance.',
        duration: '3-5 giorni',
        extraText:
          "Integro il configuratore con la piattaforma e-commerce esistente (Shopify, WooCommerce o custom). Eseguo test approfonditi su desktop, tablet e smartphone per garantire compatibilità universale. Ottimizzo le performance con lazy loading, compression texture e caching. Fornisco documentazione tecnica per la manutenzione futura.",
      },
    ],
    caseHistory: [
      {
        title: 'Furniture Configurator',
        category: 'WebGL',
        description: 'Configuratore divani con 200+ combinazioni tessuto.',
        metrics: '+45% tempo su pagina',
      },
      {
        title: 'Watch AR Preview',
        category: 'AR Quick Look',
        description: 'Preview AR di orologi via browser mobile.',
        metrics: '+30% conversion rate',
      },
      {
        title: 'Automotive Color Lab',
        category: 'Interactive',
        description: 'Configuratore colori e cerchi per concessionaria.',
        metrics: '15K+ configurazioni/mese',
      },
    ],
    deliverables: [
      'Configuratore web responsive',
      'Versione AR Quick Look (iOS)',
      'Integrazione e-commerce',
      'Pannello admin per varianti',
      'Analytics dashboard base',
      'Documentazione tecnica',
    ],
    parentPath: '/servizi-agenzie',
    parentLabel: 'Servizi Agenzie',
  },
  'scan-stampa-3d': {
    theme: 'orange',
    title: 'Scan & Stampa 3D',
    subtitle: 'Digitizzazione & Prototipazione',
    description:
      'Il ponte tra fisico e digitale. Scansione 3D di oggetti esistenti per creare asset digitali, e stampa 3D per portare in realtà i tuoi concept.',
    metadata: {
      title: 'Scan 3D & Stampa per Agenzie | Michele Faccoli',
      description:
        'Scansione 3D professionale e stampa 3D con Creality K2 Plus. Da oggetti fisici a modelli digitali e viceversa. Prototipazione rapida per agenzie.',
      keywords: [
        'scan 3D',
        'stampa 3D',
        'prototipazione rapida',
        'Creality K2',
        'reverse engineering',
        'digitizzazione 3D',
        'modelli 3D',
      ],
    },
    problem: {
      title: 'Quando servono entrambi i mondi',
      description:
        'Spesso i progetti richiedono la conversione tra fisico e digitale o viceversa.',
      painPoints: [
        'Prodotti esistenti senza file 3D originali',
        'Necessità di prototipi fisici per presentazioni o test',
        'Tempi lunghi per produzione campionari',
        'Costi elevati per modifiche su prototipi tradizionali',
      ],
    },
    solution: {
      title: 'Digitalizzazione e prototipazione rapida',
      description:
        'Servizio completo di scansione 3D e stampa professionale con tecnologia Creality K2 Plus.',
      benefits: [
        'Scansione ad alta risoluzione con texture fotorealistica',
        'Modelli ottimizzati per web, render o stampa',
        'Stampa 3D fino a 350x350x350mm con materiali vari',
        'Iterazioni rapide a costi contenuti',
      ],
    },
    pipeline: [
      {
        id: 'analisi',
        title: 'Analisi Oggetto',
        description:
          'Valutazione complessità, materiali e requisiti di output. Definizione risoluzione scansione.',
        duration: '1 giorno',
        extraText:
          "Esamino l'oggetto da scansionare valutando complessità geometrica, superfici riflettenti, dettagli fini e eventuali problematiche. Definisco la risoluzione ottimale in base all'uso finale: visualizzazione web, render fotorealistico o stampa 3D. Preparo un piano di scansione dettagliato con numero di passate e attrezzature necessarie.",
      },
      {
        id: 'scansione',
        title: 'Scansione 3D',
        description:
          'Acquisizione multi-scansione, allineamento e pulizia mesh. Generazione texture.',
        duration: '1-3 giorni',
        extraText:
          "Eseguo multiple scansioni da diverse angolazioni per catturare ogni dettaglio dell'oggetto. Utilizzo tecniche avanzate per superfici riflettenti o trasparenti. Allineo automaticamente le scansioni e creo una mesh unificata. Genero texture fotorealistica tramite fotogrammetria integrata per un risultato di massima qualità.",
      },
      {
        id: 'postprocessing',
        title: 'Post-processing',
        description:
          'Ottimizzazione mesh, retopology se necessario, export in formati richiesti.',
        duration: '2-4 giorni',
        extraText:
          "Pulisco la mesh da artefatti e rumore, chiudo eventuali buchi e ottimizzo la topologia. Se richiesto, eseguo retopology completa per ottenere un modello pulito e leggero. Esporto nei formati richiesti: OBJ per compatibilità universale, FBX per animazioni, GLB per web. Ogni formato viene ottimizzato per il suo caso d'uso specifico.",
      },
      {
        id: 'stampa',
        title: 'Stampa (opzionale)',
        description:
          'Slicing, stampa e finitura superficiale del prototipo.',
        duration: '1-5 giorni',
        extraText:
          "Preparo il modello per la stampa con slicing ottimizzato in base al materiale scelto. Utilizzo la Creality K2 Plus per stampare prototipi fino a 350x350x350mm. Offro vari materiali: PLA per prototipi visuali, PETG per resistenza meccanica, TPU per parti flessibili. Applico finitura superficiale su richiesta: levigatura, verniciatura, assemblaggio.",
      },
    ],
    caseHistory: [
      {
        title: 'Heritage Digitization',
        category: 'Scan 3D',
        description: 'Digitalizzazione reperto museale per visualizzazione VR.',
        metrics: '0.1mm precisione',
      },
      {
        title: 'Product Prototype',
        category: 'Stampa 3D',
        description: 'Prototipo funzionale per test ergonomici.',
        metrics: '3 giorni dal CAD',
      },
      {
        title: 'Reverse Engineering',
        category: 'Conversione',
        description: 'Ricostruzione modello 3D da pezzo esistente.',
        metrics: '100% corrispondenza',
      },
    ],
    deliverables: [
      'File 3D (OBJ, FBX, GLB)',
      'Texture ad alta risoluzione',
      'Prototipo stampato (se richiesto)',
      'Documentazione dimensioni',
      '1 revisione inclusa',
      'Consulenza materiali',
    ],
    parentPath: '/servizi-agenzie',
    parentLabel: 'Servizi Agenzie',
  },
}

/** Mappa slug -> dati per soluzioni-industriali (tema blu) */
export const soluzioniIndustrialiData: Record<string, Omit<ServicePageData, 'slug'>> = {
  cataloghi: {
    theme: 'blue',
    title: 'Cataloghi Digitali',
    subtitle: 'Photorealistic Product Renders',
    description:
      'Sostituisci costosi shooting fotografici con render 3D fotorealistici. Cataloghi completi con varianti illimitate, senza limitazioni fisiche.',
    metadata: {
      title: 'Cataloghi Digitali 3D per Aziende | Michele Faccoli',
      description:
        'Cataloghi digitali con render 3D fotorealistici. Sostituisci la fotografia tradizionale con visualizzazioni 3D per e-commerce e print.',
      keywords: [
        'cataloghi digitali',
        'render catalogo',
        'e-commerce 3D',
        'fotografia 3D',
        'product visualization',
        'catalogo prodotti',
        'digital catalog',
      ],
    },
    problem: {
      title: 'I costi nascosti della fotografia prodotto',
      description:
        'Ogni variante di colore, ogni nuovo prodotto richiede nuovi shooting con costi e tempi che si accumulano.',
      painPoints: [
        'Costi fotografici che lievitano ad ogni nuova variante',
        'Tempi di consegna lunghi per shooting multipli',
        'Impossibilità di modificare ambientazioni post-shooting',
        'Coerenza visiva difficile da mantenere tra prodotti',
      ],
    },
    solution: {
      title: 'Render 3D: una volta, per sempre',
      description:
        'Un modello 3D può generare infinite varianti: colori, ambientazioni, dettagli, senza costi aggiuntivi.',
      benefits: [
        'Un modello = infinite varianti cromatiche e di materiale',
        'Ambientazioni photorealistic personalizzabili',
        'Consistenza visiva perfetta tra tutti i prodotti',
        'Aggiornamenti a costo zero per modifiche future',
      ],
    },
    pipeline: [
      {
        id: 'planning',
        title: 'Catalog Planning',
        description:
          'Analisi prodotti, definizione varianti, style guide e specifiche tecniche per ogni categoria.',
        duration: '2-3 giorni',
        extraText:
          "Analizzo il catalogo prodotti esistente e identifico tutte le varianti necessarie: colori, materiali, configurazioni. Definisco una style guide visiva coerente per tutto il catalogo: angolazioni standard, illuminazione, sfondo. Stabilisco specifiche tecniche per categoria prodotto: risoluzione, formati, nominclatura file.",
      },
      {
        id: 'production',
        title: '3D Production',
        description:
          'Modellazione batch, texturing, setup materiali PBR per coerenza cross-prodotto.',
        duration: '7-14 giorni',
        extraText:
          "Eseguo modellazione batch di tutti i prodotti con topologia ottimizzata. Creo materiali PBR coerenti per categoria: metalli, tessuti, plastica, legno. Setup texture library per varianti rapide colore e materiale. Ogni modello è ottimizzato per render fotorealistici e riuso futuro.",
      },
      {
        id: 'scenes',
        title: 'Scene Setup',
        description:
          'Creazione ambientazioni, setup luci, definizione angolazioni standard per coerenza.',
        duration: '3-5 giorni',
        extraText:
          "Creo ambientazioni photorealistiche coerenti con il brand: studio lighting, ambientazioni lifestyle, white background. Setup luci standardizzate per consistenza tra tutti i render. Definisco 3-5 angolazioni standard per ogni tipologia prodotto. Ogni scena è riutilizzabile per nuovi prodotti.",
      },
      {
        id: 'render',
        title: 'Render & Delivery',
        description:
          'Rendering batch in alta risoluzione, post-production, consegna organizzata per SKU.',
        duration: '3-7 giorni',
        extraText:
          "Eseguo rendering batch automatizzato per tutti i prodotti e varianti. Post-production leggera per coerenza cromatica e polimento. Consegna organizzata per codice SKU con naming convention chiara. Archivio completo di tutti gli asset per aggiornamenti futuri a costo zero.",
      },
    ],
    caseHistory: [
      {
        title: 'Furniture E-commerce',
        category: 'Full Catalog',
        description: 'Catalogo completo 200+ SKU con varianti tessuto.',
        metrics: '-60% vs foto shooting',
      },
      {
        title: 'Fashion Accessories',
        category: 'Seasonal Update',
        description: 'Aggiornamento stagione con 50 nuovi prodotti.',
        metrics: '2 settimane vs 2 mesi',
      },
      {
        title: 'Industrial Components',
        category: 'Technical Catalog',
        description: 'Catalogo tecnico con sezioni esplose.',
        metrics: '+40% riduzione richieste supporto',
      },
    ],
    deliverables: [
      'Render ad alta risoluzione (4K+)',
      'Varianti colore/materiale incluse',
      'White background + ambientate',
      'Organizzazione per SKU/codice',
      'File ottimizzati per web e print',
      'Archivio asset riutilizzabile',
    ],
    parentPath: '/soluzioni-industriali',
    parentLabel: 'Soluzioni Industriali',
  },
  'campagne-social': {
    theme: 'blue',
    title: 'Campagne Social 3D',
    subtitle: 'Video & Visual per Social Media',
    description:
      "Contenuti visivi 3D ottimizzati per ogni piattaforma sociale. Da video product reveal a carousel interattivi, fino a filtri AR per il tuo brand.",
    metadata: {
      title: 'Campagne Social 3D per Aziende | Michele Faccoli',
      description:
        'Contenuti 3D per campagne social: video, carousel, AR filters. Aumenta engagement e conversioni con visual ad alto impatto per Instagram, TikTok, LinkedIn.',
      keywords: [
        'campagne social',
        'contenuti 3D',
        'video social',
        'Instagram marketing',
        'TikTok ads',
        'AR filters',
        'content creation',
      ],
    },
    problem: {
      title: 'La saturazione dei feed social',
      description:
        "I contenuti tradizionali non bastano più per emergere nel mare di post che inondano i social ogni giorno.",
      painPoints: [
        'Engagement in calo nonostante investimenti in ads',
        'Difficoltà nel creare contenuti distintivi per ogni piattaforma',
        'Costi di produzione foto/video sempre più alti',
        'Impossibilità di mostrare prodotti da ogni angolazione',
      ],
    },
    solution: {
      title: 'Contenuti 3D che fermano lo scroll',
      description:
        "Visual ad alto impatto che catturano l'attenzione e comunicano il valore del prodotto in secondi.",
      benefits: [
        'Video 3D ottimizzati per ogni formato social (Reels, TikTok, Stories)',
        'Carousel interattivi che mostrano ogni dettaglio prodotto',
        'Filtri AR brandizzati per engagement virale',
        'Riuso degli asset per creare centinaia di varianti',
      ],
    },
    pipeline: [
      {
        id: 'strategy',
        title: 'Strategy & Planning',
        description:
          'Analisi obiettivi, piattaforme target, definizione formati e style guide coerente con il brand.',
        duration: '2-3 giorni',
        extraText:
          "Analizzo gli obiettivi di marketing e identifico le piattaforme target: Instagram, TikTok, LinkedIn, YouTube. Definisco i formati ottimali per ogni canale (Reels, Stories, carousel, short video). Creo una style guide visiva coerente con l'identità del brand per garantire consistenza tra tutti i contenuti.",
      },
      {
        id: 'production',
        title: 'Asset Production',
        description:
          'Creazione contenuti 3D: video, immagini, animazioni. Preview per approvazione.',
        duration: '5-10 giorni',
        extraText:
          "Produgo contenuti 3D ad alto impatto: video animati, immagini statiche, carousel multi-frame. Utilizzo il modello 3D del prodotto per creare visualizzazioni da ogni angolazione. Fornisco preview a bassa risoluzione per approvazione prima del rendering finale, garantendo allineamento con le aspettative.",
      },
      {
        id: 'adaptation',
        title: 'Format Adaptation',
        description:
          'Adattamento per ogni piattaforma: dimensioni, durata, aspect ratio, caption.',
        duration: '2-3 giorni',
        extraText:
          "Adatto ogni contenuto per le specifiche di ogni piattaforma: 9:16 per Reels/TikTok, 1:1 per feed, 16:9 per YouTube. Ottimizzo durata e ritmo per massimizzare ritenzione. Preparo varianti con e senza testo per flessibilità A/B testing. Inclusi suggerimenti caption e hashtag.",
      },
      {
        id: 'delivery',
        title: 'Delivery & Support',
        description:
          'Consegna organizzata, documentazione, supporto per implementazione.',
        duration: '1-2 giorni',
        extraText:
          "Consegno tutti i contenuti organizzati per piattaforma e data di pubblicazione. Fornisco documentazione tecnica per upload corretto. Offro supporto per implementazione e best practice per scheduling. Disponibile per revisioni post-pubblicazione se necessarie.",
      },
    ],
    caseHistory: [
      {
        title: 'Product Launch Instagram',
        category: 'Reels & Stories',
        description: 'Pack 10 video per lancio prodotto su Instagram.',
        metrics: '+120% engagement rate',
      },
      {
        title: 'LinkedIn B2B Campaign',
        category: 'Professional Video',
        description: 'Video tecnici per awareness campaign B2B.',
        metrics: '3x CTR vs benchmark',
      },
      {
        title: 'TikTok Viral Filter',
        category: 'AR Filter',
        description: 'Filtro AR brandizzato per user generated content.',
        metrics: '500K+ utilizzi',
      },
    ],
    deliverables: [
      'Video ottimizzati per piattaforma',
      'Immagini carousel/album',
      'Stories e Reels ready-to-post',
      'AR Filter (se richiesto)',
      'Caption suggestions',
      'Calendarizzazione consigliata',
    ],
    parentPath: '/soluzioni-industriali',
    parentLabel: 'Soluzioni Industriali',
  },
  'configuratori-ecommerce-3d': {
    theme: 'blue',
    title: 'Configuratori E-commerce 3D',
    subtitle: 'Interactive Product Personalization',
    description:
      "Permetti ai tuoi clienti di personalizzare i prodotti in 3D prima dell'acquisto. Meno resi, più conversioni, clienti più soddisfatti.",
    metadata: {
      title: 'Configuratori E-commerce 3D per Aziende | Michele Faccoli',
      description:
        'Configuratori 3D per e-commerce che aumentano le conversioni. Personalizzazione prodotto, AR preview, integrazione Shopify e WooCommerce.',
      keywords: [
        'configuratore e-commerce',
        '3D product configurator',
        'personalizzazione prodotto',
        'Shopify 3D',
        'WooCommerce 3D',
        'AR commerce',
        'conversion optimization',
      ],
    },
    problem: {
      title: "L'incertezza pre-acquisto online",
      description:
        "I clienti non possono vedere esattamente cosa stanno comprando, specialmente per prodotti personalizzabili.",
      painPoints: [
        'Alti tassi di reso per prodotti personalizzati',
        'Domande ripetitive su varianti e combinazioni',
        'Abbandono carrello per mancanza di fiducia visiva',
        'Impossibilità di mostrare tutte le combinazioni con foto',
      ],
    },
    solution: {
      title: 'Vedi prima di comprare',
      description:
        'Configuratori 3D che mostrano ogni combinazione in tempo reale, con AR preview opzionale.',
      benefits: [
        'Personalizzazione visuale istantanea',
        'AR Quick Look per vedere il prodotto nel proprio spazio',
        'Riduzione resi fino al 40%',
        'Aumento conversioni fino al 50%',
      ],
    },
    pipeline: [
      {
        id: 'requirements',
        title: 'Requirements Analysis',
        description:
          'Mappatura varianti prodotto, regole di configurazione, integrazioni necessarie.',
        duration: '2-3 giorni',
        extraText:
          "Analizzo le esigenze specifiche del catalogo: numero di varianti, regole di compatibilità, opzioni di personalizzazione. Mappo le integrazioni necessarie con Shopify, WooCommerce o piattaforma custom. Definisco KPI di successo: aumento conversioni, riduzione resi, tempo su pagina. Questo step è fondamentale per un configuratore che generi ROI misurabile.",
      },
      {
        id: 'assets',
        title: '3D Asset Creation',
        description:
          'Modellazione ottimizzata web, materiali PBR, setup varianti automatiche.',
        duration: '7-14 giorni',
        extraText:
          "Creo modelli 3D ottimizzati per il rendering web in tempo reale: geometrie low-poly con normal maps per dettaglio. Setup materiali PBR con varianti automatiche per colore, tessuto, finitura. Organizzo gli asset per permettere cambi istantanei nel configuratore. Ogni modello è testato a 60 FPS su dispositivi mid-range.",
      },
      {
        id: 'development',
        title: 'Development',
        description:
          'Sviluppo configuratore con Three.js, UI/UX, integrazione e-commerce.',
        duration: '10-15 giorni',
        extraText:
          "Sviluppo il configuratore utilizzando Three.js/React Three Fiber con rendering ottimizzato. Design UI/UX intuitiva per personalizzazione fluida: selezione varianti, zoom, rotazione 360°. Integrazione con e-commerce per sync varianti e checkout diretto. Setup analytics per tracking configurazioni più popolari.",
      },
      {
        id: 'launch',
        title: 'Testing & Launch',
        description:
          'Test cross-browser/device, ottimizzazione performance, go-live e training.',
        duration: '3-5 giorni',
        extraText:
          "Test approfonditi su desktop, mobile, tablet con diversi browser. Ottimizzazione performance: lazy loading, compression texture, caching. Training del team per gestione varianti e update prodotti. Supporto post-lancio per eventuali ajustmenti e ottimizzazioni basate su dati reali.",
      },
    ],
    caseHistory: [
      {
        title: 'Furniture E-commerce',
        category: 'Shopify Integration',
        description: 'Configuratore divani con 300+ combinazioni.',
        metrics: '+35% conversion rate',
      },
      {
        title: 'Custom Jewelry',
        category: 'WooCommerce',
        description: 'Configuratore anelli con preview 3D in tempo reale.',
        metrics: '-45% resi personalizzati',
      },
      {
        title: 'B2B Equipment',
        category: 'Custom Platform',
        description: 'Configuratore attrezzature industriali con preventivo automatico.',
        metrics: '50% riduzione lead time',
      },
    ],
    deliverables: [
      'Configuratore 3D web-responsive',
      'Integrazione e-commerce (Shopify/WooCommerce)',
      'Pannello gestione varianti',
      'Analytics utilizzo base',
      'AR Quick Look (opzionale)',
      'Supporto post-lancio 30 giorni',
    ],
    parentPath: '/soluzioni-industriali',
    parentLabel: 'Soluzioni Industriali',
  },
  'scan-stampa-3d': {
    theme: 'blue',
    title: 'Scan & Stampa 3D',
    subtitle: 'Prototipazione & Reverse Engineering',
    description:
      'Dal concept al prototipo fisico in giorni, non mesi. Scansione 3D per reverse engineering e stampa professionale per test funzionali e presentazioni.',
    metadata: {
      title: 'Scan & Stampa 3D per Aziende | Michele Faccoli',
      description:
        'Servizio scan 3D e stampa professionale per aziende. Prototipazione rapida, reverse engineering, produzione piccoli lotti con Creality K2 Plus.',
      keywords: [
        'stampa 3D aziendale',
        'prototipazione',
        'scan 3D industriale',
        'reverse engineering',
        'Creality K2',
        'produzione 3D',
        'prototipi',
      ],
    },
    problem: {
      title: 'I tempi della prototipazione tradizionale',
      description:
        'Ogni iterazione di design significa settimane di attesa e costi significativi per prototipi.',
      painPoints: [
        'Cicli di iterazione lenti che rallentano il time-to-market',
        'Costi elevati per ogni modifica al prototipo',
        'Difficoltà nel testare ergonomiche e fitting',
        'Necessità di piccoli lotti non convenienti per produzione',
      ],
    },
    solution: {
      title: 'Prototipazione rapida professionale',
      description:
        'Stampa 3D con Creality K2 Plus: 350x350x350mm di volume, multi-materiale, precisione industriale.',
      benefits: [
        'Prototipi funzionali in 1-3 giorni lavorativi',
        'Multipli materiali: PLA, PETG, ABS, TPU per ogni esigenza',
        'Modifiche e iterazioni a costo contenuto',
        'Piccoli lotti economicamente vantaggiosi',
      ],
    },
    pipeline: [
      {
        id: 'preparation',
        title: 'File Preparation',
        description:
          'Analisi modello, ottimizzazione per stampa, scelta materiale e riempimento.',
        duration: '1 giorno',
        extraText:
          "Analizzo il modello 3D per identificare problematiche di stampa: overhang, bridge, spessori minimi. Ottimizzo la geometria se necessario: aggiunta supporti, thickening, fix mesh. Consiglio il materiale più adatto all'uso finale: PLA per visual, PETG per resistenza, TPU per flessibilità. Definisco riempimento e parametri ottimali.",
      },
      {
        id: 'slicing',
        title: 'Slicing & Setup',
        description:
          'Preparazione G-code, setup stampa, posizionamento ottimale sul piano.',
        duration: '1 giorno',
        extraText:
          "Genero il G-code con slicing ottimizzato per il materiale scelto. Posiziono il modello sul piano di stampa per massimizzare qualità e minimizzare supporti. Configuro parametri avanzati: temperatura, velocità, retrazione, cooling. Simulo la stampa per identificare potenziali problemi prima di iniziare.",
      },
      {
        id: 'printing',
        title: 'Printing',
        description:
          'Stampa 3D con monitoraggio continuo e controllo qualità in tempo reale.',
        duration: '1-5 giorni',
        extraText:
          "Eseguo la stampa con la Creality K2 Plus: volume 350x350x350mm, alta precisione. Monitoraggio continuo durante tutto il processo per intervenire su eventuali anomalie. Controllo qualità in tempo reale: adesione piano, stringing, layer shifting. Ogni pezzo è verificato dimensionalmente prima della consegna.",
      },
      {
        id: 'postprocess',
        title: 'Post-processing',
        description:
          'Rimozione supporti, levigatura, finitura superficiale, consegna.',
        duration: '1-2 giorni',
        extraText:
          "Rimuovo i supporti di stampa con attenzione per non danneggiare il pezzo. Eseguo levigatura per rimuovere layer lines visibili se richiesto. Applico finiture superficiali: priming, verniciatura, assemblaggio componenti. Verifica finale qualità e preparazione per spedizione o ritiro.",
      },
    ],
    caseHistory: [
      {
        title: 'Consumer Product Prototype',
        category: 'Product Design',
        description: 'Iterazione ergonomica maniglia prodotto.',
        metrics: '5 versioni in 2 settimane',
      },
      {
        title: 'Technical Fitting Test',
        category: 'Engineering',
        description: 'Test accoppiamento componenti meccanici.',
        metrics: '100% risoluzione problemi',
      },
      {
        title: 'Presentation Models',
        category: 'Marketing',
        description: 'Modelli per presentazione investitori.',
        metrics: 'Funding round chiuso',
      },
    ],
    deliverables: [
      'Prototipo stampato nel materiale scelto',
      'Finitura superficiale standard',
      'Documentazione dimensioni',
      'Consulenza materiali',
      'Iterazioni successive agevolate',
      'Spedizione inclusa Italia',
    ],
    parentPath: '/soluzioni-industriali',
    parentLabel: 'Soluzioni Industriali',
  },
}

export const serviziAgenzieSlugs = Object.keys(serviziAgenzieData) as string[]
export const soluzioniIndustrialiSlugs = Object.keys(soluzioniIndustrialiData) as string[]
