# Migrazione Sanity v2 → v4 (e next-sanity 11)

## Cosa è stato fatto

### 1. Pacchetti aggiornati
- **sanity**: `^2.36.6` → `^4.22.0`
- **next-sanity**: `^0.8.5` → `^11.6.0`
- **@sanity/vision**: `^4.21.1` → `^4.22.0` (allineato a sanity 4)
- **Rimosso**: `@sanity/client` (il client si usa da `next-sanity`: `createClient` da `next-sanity`)

### 2. Configurazione
- **sanity.config.ts** (root): `defineConfig`, `structureTool`, `visionTool`; **projectId** e **dataset** letti da env (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`) con fallback.
- **basePath**: `'/studio'` per l’embedded studio.
- **sanity.json**: non presente (v2); non necessario, si usa solo `sanity.config.ts`.

### 3. Studio embedded in Next.js
- Route: **`/studio`** → `src/app/studio/[[...tool]]/page.tsx`
- Lo Studio viene caricato **solo lato client** (`'use client'` + `dynamic(..., { ssr: false })` + config via `import()` in `useEffect`) per evitare l’errore `createContext is not a function` con React 19 in SSR.
- Re-export della config in `src/sanity.config.ts` (punta a `../sanity.config`) così il bundler Next risolve da `src`.

### 4. Schema
- Gli schemi in **sanity/schema.ts** usano già **defineType**, **defineField**, **defineArrayMember**; nessuna modifica necessaria.

### 5. Environment variables
- In **.env.local** (e su Vercel) servono:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_SANITY_API_VERSION` (opzionale, default in codice)

---

## Plugin v2 → v4 (equivalenti)

| v2 (deprecato)     | v4 (attuale)           | Note                          |
|--------------------|------------------------|-------------------------------|
| `@sanity/desk-tool`| `sanity/structure` → `structureTool()` | Struttura documenti e liste |
| `@sanity/vision`   | `@sanity/vision` → `visionTool()`      | GROQ Vision, invariato       |
| `@sanity/client`   | `next-sanity` → `createClient()`       | Client per fetch in Next     |

Non sono stati usati altri plugin v2; se in futuro aggiungi plugin, usa solo quelli compatibili con **sanity@4** (vedi [sanity.io/docs](https://www.sanity.io/docs)).

---

## Come usare

- **Studio standalone**: `npm run sanity` → apre lo studio (es. `http://localhost:3333`).
- **Studio embedded**: con l’app Next in esecuzione, apri `http://localhost:3000/studio` (o il tuo dominio + `/studio`).

Build: `npm run build` completa senza errori; la route `/studio` è dinamica e non fa SSR dello Studio.
