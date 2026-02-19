import { Metadata } from 'next'
import { AgencyPage } from '@/components/pages/AgencyPage'
export const revalidate = 60;
export const metadata: Metadata = {
  title: 'Partner Tecnico Asset 3D per Agenzie | Michele Faccoli',
  description: 'Partner tecnico per agenzie creative: modellazione 3D, retopology CAD, GLB ottimizzati per web, configuratori interattivi. Pipeline Git e documentazione tecnica.',
  keywords: ['partner tecnico 3D', 'asset 3D per agenzie', 'modellazione 3D', 'GLB ottimizzati', 'WebGL', 'configuratori 3D', 'AR VR', 'retopology'],
}

export default function ServiziAgenzie() {
  return <AgencyPage />
}
