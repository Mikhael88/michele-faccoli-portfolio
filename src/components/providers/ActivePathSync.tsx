'use client'

import { useActivePathSync } from '@/hooks/useActivePathSync'

/**
 * Provider che sincronizza activePath (Zustand) con la rotta Next.js corrente.
 * Inserire nel layout per garantire coerenza tra navigazione e stato globale.
 */
export function ActivePathSync() {
  useActivePathSync()
  return null
}
