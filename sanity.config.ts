/**
 * Sanity Studio Configuration
 * 
 * Configurazione per Sanity Studio V3.
 * Per avviare lo studio: npm run sanity
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Michele Faccoli - 3D Portfolio',

  // Per lo Studio usiamo valori fissi (più semplici e affidabili)
  // Il projectId e il dataset sono gli stessi che hai in .env.local
  projectId: 'm4qtg32u',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Homepage
            S.listItem()
              .title('Homepage')
              .child(
                S.list()
                  .title('Sezioni Homepage')
                  .items([
                    S.listItem()
                      .title('Hero Section')
                      .child(
                        S.documentList()
                          .title('Hero Section')
                          .filter('_type == "heroSection"')
                      ),
                    S.listItem()
                      .title('Bivio Section')
                      .child(
                        S.documentList()
                          .title('Bivio Section')
                          .filter('_type == "bivioSection"')
                      ),
                  ])
              ),
            // Divider
            S.divider(),
            // Pagine Cluster
            S.listItem()
              .title('Pagine Cluster')
              .child(
                S.list()
                  .title('Pagine Cluster')
                  .items([
                    S.listItem()
                      .title('Servizi Agenzie (Pagina Madre)')
                      .child(
                        S.documentList()
                          .title('Servizi Agenzie')
                          .filter('_type == "clusterPage" && cluster == "servizi-agenzie"')
                      ),
                    S.listItem()
                      .title('Soluzioni Industriali (Pagina Madre)')
                      .child(
                        S.documentList()
                          .title('Soluzioni Industriali')
                          .filter('_type == "clusterPage" && cluster == "soluzioni-industriali"')
                      ),
                  ])
              ),
            // Servizi (Sottopagine)
            S.listItem()
              .title('Servizi (Sottopagine)')
              .child(
                S.list()
                  .title('Servizi per Cluster')
                  .items([
                    S.listItem()
                      .title('Servizi Agenzie')
                      .child(
                        S.documentList()
                          .title('Servizi Agenzie')
                          .filter('_type == "service" && cluster == "servizi-agenzie"')
                          .defaultOrdering([{ field: 'order', direction: 'asc' }])
                      ),
                    S.listItem()
                      .title('Soluzioni Industriali')
                      .child(
                        S.documentList()
                          .title('Soluzioni Industriali')
                          .filter('_type == "service" && cluster == "soluzioni-industriali"')
                          .defaultOrdering([{ field: 'order', direction: 'asc' }])
                      ),
                    S.divider(),
                    S.listItem()
                      .title('Tutti i Servizi')
                      .child(
                        S.documentList()
                          .title('Tutti i Servizi')
                          .filter('_type == "service"')
                          .defaultOrdering([
                            { field: 'cluster', direction: 'asc' },
                            { field: 'order', direction: 'asc' },
                          ])
                      ),
                  ])
              ),
            // Divider
            S.divider(),
            // Portfolio
            S.listItem()
              .title('Portfolio')
              .child(
                S.documentList()
                  .title('Progetti Portfolio')
                  .filter('_type == "portfolioProject"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
