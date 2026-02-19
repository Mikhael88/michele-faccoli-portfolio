import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      )
    }

    // Qui puoi integrare un servizio di email come Resend, SendGrid, o Nodemailer
    // Per ora restituiamo successo (puoi implementare l'invio reale dopo)
    
    // Esempio con Resend (da configurare):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'info@michelefaccoli.com',
    //   subject: `Nuovo contatto da ${name}`,
    //   html: `<p>Email: ${email}</p><p>Messaggio: ${message}</p>`,
    // })

    // Per ora loggiamo e restituiamo successo
    console.log('Nuovo contatto:', { name, email, message })

    return NextResponse.json(
      { success: true, message: 'Messaggio ricevuto' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Errore invio contatto:', error)
    return NextResponse.json(
      { error: 'Errore nel server' },
      { status: 500 }
    )
  }
}
