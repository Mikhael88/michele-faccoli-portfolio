import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// Semplice healthcheck per verificare che la route esista in produzione
export async function GET() {
  return NextResponse.json({ ok: true })
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json(
      { success: false, error: 'SANITY_REVALIDATE_SECRET not configured' },
      { status: 500 }
    )
  }

  // Verifica segreto via query string: ?secret=...
  const providedSecret = req.nextUrl.searchParams.get('secret')
  if (providedSecret !== secret) {
    return NextResponse.json(
      { success: false, error: 'Invalid secret' },
      { status: 401 }
    )
  }

  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body' },
      { status: 400 }
    )
  }

  const docType = body?._type as string | undefined
  const slug: string | undefined =
    body?.slug?.current ?? body?.slug ?? undefined

  if (!docType) {
    return NextResponse.json(
      { success: false, error: 'Missing _type in webhook payload' },
      { status: 400 }
    )
  }

  const revalidatedTags: string[] = []

  // Mappa tipi Sanity -> tag usati in lib/sanity.ts
  if (docType === 'service') {
    revalidateTag('service')
    revalidateTag('all-services')
    revalidatedTags.push('service', 'all-services')

    if (slug) {
      const slugTag = `service:${slug}`
      revalidateTag(slugTag)
      revalidatedTags.push(slugTag)
    }
  } else if (docType === 'heroSection') {
    revalidateTag('hero')
    revalidatedTags.push('hero')
  } else if (docType === 'clusterPage') {
    // Placeholder per future fetch con tag specifici di cluster
    revalidateTag('cluster')
    revalidatedTags.push('cluster')
  } else if (docType === 'portfolioProject') {
    // Se in futuro userai tag per il portfolio
    revalidateTag('portfolio')
    revalidatedTags.push('portfolio')
  }

  return NextResponse.json({
    success: true,
    revalidatedTags,
    slug,
    docType,
  })
}

