'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useStore } from '@/store/useStore'

/**
 * Sincronizza activePath di Zustand con il pathname corrente.
 * Usa setActivePathFromRoute per non alterare currentView (importante per homepage).
 * - /servizi-agenzie e /servizi-agenzie/* → activePath = 'agenzie'
 * - /soluzioni-industriali e /soluzioni-industriali/* → activePath = 'aziende'
 * - Altri path (/, /api, etc.) → activePath = null
 */
export function useActivePathSync() {
  const pathname = usePathname()
  const setActivePathFromRoute = useStore((s) => s.setActivePathFromRoute)

  useEffect(() => {
    if (pathname.startsWith('/servizi-agenzie')) {
      setActivePathFromRoute('agenzie')
    } else if (pathname.startsWith('/soluzioni-industriali')) {
      setActivePathFromRoute('aziende')
    } else {
      setActivePathFromRoute(null)
    }
  }, [pathname, setActivePathFromRoute])
}
