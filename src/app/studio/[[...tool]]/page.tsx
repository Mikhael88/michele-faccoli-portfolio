'use client'

/**
 * Placeholder per la route /studio in produzione.
 * Lo Studio viene eseguito localmente tramite `sanity dev`
 * e non fa più parte del bundle Next.js per evitare problemi
 * di compatibilità tra Sanity, Refractor e Turbopack su Vercel.
 */

export default function StudioPage() {
  if (process.env.NODE_ENV === 'development') {
    return (
      <div style={{ padding: 24, fontFamily: 'system-ui', color: 'white' }}>
        Studio embedded disabilitato nel bundle di produzione.
        Esegui <code>npm run sanity</code> per aprire lo Studio localmente.
      </div>
    )
  }

  // In produzione non renderizziamo nulla per questa route.
  return null
}