/**
 * Sanity Schema per il CMS del sito Michele Faccoli
 * 
 * Definisce la struttura dei documenti Service per gestire
 * dinamicamente i contenuti delle sottopagine servizi-agenzie
 * e soluzioni-industriali.
 */

import { defineType, defineField, defineArrayMember } from 'sanity'

export const workflowStep = defineType({
  name: 'workflowStep',
  title: 'Workflow Step',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Identificatore unico dello step (es: analisi, modeling, rendering)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      description: 'Titolo dello step (es: Analisi & Import)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione Breve',
      type: 'text',
      rows: 3,
      description: 'Descrizione breve visibile sempre',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Durata',
      type: 'string',
      description: 'Durata stimata (es: 1-2 giorni)',
    }),
    defineField({
      name: 'extraText',
      title: 'Testo Dettagliato',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Contenuto dettagliato visibile quando lo step è espanso (supporta PortableText)',
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      description: 'Immagine esempio per questo step',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Testo alternativo per accessibilità',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'image',
    },
  },
})

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'Metriche',
      type: 'string',
      description: 'Risultati misurabili (es: +35% conversion rate)',
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (es: modellazione-render-3d)',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'cluster',
      title: 'Cluster',
      type: 'string',
      description: 'A quale cluster appartiene questo servizio',
      options: {
        list: [
          { title: 'Servizi Agenzie', value: 'servizi-agenzie' },
          { title: 'Soluzioni Industriali', value: 'soluzioni-industriali' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Tema',
      type: 'string',
      description: 'Tema colore per questo servizio',
      options: {
        list: [
          { title: 'Orange (Agenzie)', value: 'orange' },
          { title: 'Blue (Industriali)', value: 'blue' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      description: 'Titolo principale del servizio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sottotitolo',
      type: 'string',
      description: 'Sottotitolo/tagline breve',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 4,
      description: 'Descrizione principale del servizio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Titolo SEO per <title> tag',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Descrizione SEO per meta tag',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords SEO per questo servizio',
    }),
    defineField({
      name: 'problemTitle',
      title: 'Problema - Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'problemDescription',
      title: 'Problema - Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'painPoints',
      title: 'Pain Points',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista dei problemi/pain points',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'solutionTitle',
      title: 'Soluzione - Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solutionDescription',
      title: 'Soluzione - Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefici',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista dei benefici della soluzione',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'pipeline',
      title: 'Pipeline/Workflow',
      type: 'array',
      of: [{ type: 'workflowStep' }],
      description: 'Steps del processo di lavoro',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'caseHistory',
      title: 'Case History',
      type: 'array',
      of: [{ type: 'caseStudy' }],
      description: 'Casi studio di successo',
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Cosa riceve il cliente',
      validation: (Rule) => Rule.required().min(4),
    }),
    defineField({
      name: 'order',
      title: 'Ordine',
      type: 'number',
      description: 'Ordine di visualizzazione nel cluster',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'published',
      title: 'Pubblicato',
      type: 'boolean',
      description: 'Se false, il servizio non sarà visibile sul sito',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'cluster',
      published: 'published',
    },
    prepare({ title, subtitle, published }) {
      return {
        title: `${title}${!published ? ' (Draft)' : ''}`,
        subtitle: subtitle,
      }
    },
  },
  orderings: [
    {
      title: 'Cluster e Ordine',
      name: 'clusterOrder',
      by: [
        { field: 'cluster', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
})

// Tipi per Hero e Bivio Section
export const pathCard = defineType({
  name: 'pathCard',
  title: 'Path Card',
  type: 'object',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      description: 'Identificatore univoco (agenzie o aziende)',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Agenzie', value: 'agenzie' },
          { title: 'Aziende', value: 'aziende' },
        ],
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icona',
      type: 'string',
      description: 'Nome icona Lucide (es: Palette, Building2)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sottotitolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista delle caratteristiche principali',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'URL della pagina di destinazione (es: /servizi-agenzie)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'key',
    },
  },
})

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Testo del badge in alto (es: Disponibilità Q1 2025)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Titolo principale (es: Soluzioni 3D)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Headline Highlight',
      type: 'string',
      description: 'Parola evidenziata con effetto neon (es: Strategiche)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineEnd',
      title: 'Headline Fine',
      type: 'string',
      description: 'Testo dopo la parola evidenziata (es: per il tuo Business)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
      description: 'Sottotitolo descrittivo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryCTA',
      title: 'CTA Primario',
      type: 'string',
      description: 'Testo del bottone principale (es: Scopri i Percorsi)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'CTA Secondario',
      type: 'string',
      description: 'Testo del bottone secondario (es: Prenota una Call)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'calendlyUrl',
      title: 'URL Calendly',
      type: 'url',
      description: 'Link per la prenotazione call',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Immagine Hero',
      type: 'image',
      description: 'Immagine principale della hero section',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'caseStudyBadge',
      title: 'Case Study Badge',
      type: 'object',
      description: 'Badge case study sovrapposto all\'immagine',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Case Study Highlight',
        },
        {
          name: 'title',
          title: 'Titolo',
          type: 'string',
        },
        {
          name: 'metric',
          title: 'Metrica',
          type: 'string',
          description: 'Es: +45% CTR',
        },
      ],
    }),
    defineField({
      name: 'published',
      title: 'Pubblicato',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subheadline',
      media: 'heroImage',
    },
  },
})

export const bivioSection = defineType({
  name: 'bivioSection',
  title: 'Bivio Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      description: 'Titolo principale (es: Scegli il tuo)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Titolo Highlight',
      type: 'string',
      description: 'Parola evidenziata (es: Percorso)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
      description: 'Testo descrittivo sotto il titolo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paths',
      title: 'Percorsi',
      type: 'array',
      of: [{ type: 'pathCard' }],
      description: 'Card dei due percorsi (agenzie e aziende)',
      validation: (Rule) => Rule.required().length(2),
    }),
    defineField({
      name: 'published',
      title: 'Pubblicato',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})

// Tipi per Cluster Pages (Agenzie/Aziende)
export const serviceCard = defineType({
  name: 'serviceCard',
  title: 'Service Card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icona',
      type: 'string',
      description: 'Nome icona Lucide (es: Video, Globe, Scan, Layers)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista delle caratteristiche (3 items)',
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'URL della pagina di dettaglio',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'icon',
    },
  },
})

export const whyMeItem = defineType({
  name: 'whyMeItem',
  title: 'Why Me Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Ruolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Citazione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'string',
      description: 'Iniziale del nome (es: M, E, L)',
      validation: (Rule) => Rule.required().max(1),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
    },
  },
})

export const clusterPage = defineType({
  name: 'clusterPage',
  title: 'Cluster Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL della pagina (servizi-agenzie o soluzioni-industriali)',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'cluster',
      title: 'Cluster',
      type: 'string',
      description: 'Tipo di cluster',
      options: {
        list: [
          { title: 'Servizi Agenzie', value: 'servizi-agenzie' },
          { title: 'Soluzioni Industriali', value: 'soluzioni-industriali' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Tema',
      type: 'string',
      options: {
        list: [
          { title: 'Orange (Agenzie)', value: 'orange' },
          { title: 'Blue (Industriali)', value: 'blue' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Testo del badge (es: Focus Tecnico & Pipeline)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      description: 'Titolo principale (es: Asset 3D Ottimizzati per)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Titolo Highlight',
      type: 'string',
      description: 'Parte evidenziata (es: Agenzie Creative)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sottotitolo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryCTA',
      title: 'CTA Primario',
      type: 'string',
      initialValue: 'Vedi Portfolio',
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'CTA Secondario',
      type: 'string',
      initialValue: 'Parliamo del progetto',
    }),
    defineField({
      name: 'heroImage',
      title: 'Immagine Hero',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Titolo Sezione Servizi',
      type: 'string',
      initialValue: 'I Miei Servizi',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Descrizione Sezione Servizi',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'services',
      title: 'Servizi',
      type: 'array',
      of: [{ type: 'serviceCard' }],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: 'whyMeTitle',
      title: 'Titolo Why Me',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whyMeItems',
      title: 'Why Me Items',
      type: 'array',
      of: [{ type: 'whyMeItem' }],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: 'portfolioTitle',
      title: 'Titolo Portfolio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portfolioSubtitle',
      title: 'Sottotitolo Portfolio',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }],
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
    defineField({
      name: 'footerTitle',
      title: 'Titolo Footer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerDescription',
      title: 'Descrizione Footer',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'published',
      title: 'Pubblicato',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'cluster',
    },
  },
})

// Portfolio Project
export const portfolioProject = defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Modellazione 3D', value: 'modellazione-3d' },
          { title: 'CAD to 3D', value: 'cad-to-3d' },
          { title: '3D Scan', value: '3d-scan' },
          { title: 'Animazioni', value: 'animazioni' },
          { title: 'Stampa 3D', value: 'stampa-3d' },
          { title: 'AI Generation', value: 'ai-generation' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cluster',
      title: 'Cluster (Macro sezione)',
      type: 'string',
      description: 'In quale macro-sezione compare questo progetto',
      options: {
        list: [
          { title: 'Servizi Agenzie', value: 'servizi-agenzie' },
          { title: 'Soluzioni Industriali', value: 'soluzioni-industriali' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Immagine principale (legacy)',
      type: 'image',
      description: 'Campo originale per una sola immagine. Usa la galleria qui sotto per più immagini.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Galleria immagini',
      type: 'array',
      description: 'Carica più immagini per questo progetto. Verranno mostrate in sequenza sul sito.',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).warning("Aggiungi almeno un'immagine alla galleria per sfruttare lo slideshow."),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(2).max(5),
    }),
    defineField({
      name: 'client',
      title: 'Cliente',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Anno',
      type: 'number',
      validation: (Rule) => Rule.required().min(2020).max(2030),
    }),
    defineField({
      name: 'order',
      title: 'Ordine',
      type: 'number',
      description: 'Ordine di visualizzazione',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'published',
      title: 'Pubblicato',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Ordine',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})

export const schemaTypes = [
  workflowStep,
  caseStudy,
  service,
  pathCard,
  heroSection,
  bivioSection,
  serviceCard,
  whyMeItem,
  testimonial,
  clusterPage,
  portfolioProject,
]
