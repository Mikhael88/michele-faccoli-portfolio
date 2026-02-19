import { Metadata } from 'next'
import { BusinessPage } from '@/components/pages/BusinessPage'

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Digitalizzazione Industriale e Visualizzazione 3D | Michele Faccoli',
  description: 'Digitalizzazione industriale: render fotorealistici, prototipazione 3D, animazioni prodotto. Comunico il valore dei tuoi prodotti con visualizzazioni ad alto impatto.',
  keywords: ['digitalizzazione industriale', 'render 3D', 'visualizzazione prodotto', 'stampa 3D', 'animazioni industriali', 'prototipazione rapida', 'marketing 3D'],
}

export default function SoluzioniIndustriali() {
  return <BusinessPage />
}
