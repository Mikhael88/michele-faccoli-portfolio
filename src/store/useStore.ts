 'use client'

import { create } from 'zustand'

export type View = 'hero' | 'bivio'
export type PathType = 'agenzie' | 'aziende' | null

interface StoreState {
  // Home hero/bivio navigation
  currentView: View

  // Cluster path state (agenzie / aziende)
  activePath: PathType
  heroVisible: boolean

  // Preventivatore drawer
  isDrawerOpen: boolean
  hasSeenDrawer: boolean
}

interface StoreActions {
  setCurrentView: (view: View) => void

  setActivePath: (path: PathType) => void
  togglePath: () => void
  setHeroVisible: (visible: boolean) => void

  setDrawerOpen: (open: boolean) => void
  setHasSeenDrawer: (seen: boolean) => void
}

export const LAYOUT_CONFIG = {
  expandedWidth: {
    desktop: 70,
    mobile: 100,
  },
  collapsedWidth: {
    desktop: 30,
    mobile: 0,
  },
} as const

type Store = StoreState & StoreActions

const useStoreBase = create<Store>((set, get) => ({
  // Default: hero visible, nessun percorso selezionato
  currentView: 'hero',
  activePath: null,
  heroVisible: true,

  isDrawerOpen: false,
  hasSeenDrawer: false,

  setCurrentView: (view) => set({ currentView: view }),

  setActivePath: (path) => {
    set({ activePath: path, heroVisible: path === null })
  },

  togglePath: () => {
    const { activePath } = get()
    const next: PathType =
      activePath === 'agenzie' ? 'aziende' : activePath === 'aziende' ? 'agenzie' : 'agenzie'
    set({ activePath: next, heroVisible: false })
  },

  setHeroVisible: (visible) => set({ heroVisible: visible }),

  setDrawerOpen: (open) => set({ isDrawerOpen: open }),

  setHasSeenDrawer: (seen) => set({ hasSeenDrawer: seen }),
}))

// Hook compatibile sia con useStore() che useStore(selector)
export const useStore: typeof useStoreBase = useStoreBase

