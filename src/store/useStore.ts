 'use client'

import { useMemo } from 'react'

type View = 'hero' | 'bivio'

interface StoreState {
  currentView: View
}

/**
 * Minimal stub store to satisfy imports.
 * Returns a fixed view; logic can be expanded later.
 */
export function useStore(): StoreState {
  return useMemo(() => ({ currentView: 'hero' }), [])
}

