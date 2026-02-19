import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return new NextResponse('Missing environment variable SANITY_REVALIDATE_SECRET', {
      status: 500,
    })
  }

  try {
    const { isValidSignature, body } = await parseBody(req, secret)

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    // Firma valida: distruggiamo la cache dell'intero sito per recepire la modifica
    revalidatePath('/', 'layout')

    return NextResponse.json(
      {
        success: true,
        revalidated: true,
        type: body?._type ?? 'unknown',
      },
      { status: 200 }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error during revalidation'
    return NextResponse.json(
      {
        success: false,
        revalidated: false,
        error: message,
      },
      { status: 500 }
    )
  }
}