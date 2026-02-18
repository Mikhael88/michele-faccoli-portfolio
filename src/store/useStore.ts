import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type PathType = 'agenzie' | 'aziende' | null

interface StoreState {
  // Navigation state
  currentView: 'hero' | 'bivio' | 'content'
  setCurrentView: (view: 'hero' | 'bivio' | 'content') => void
  
  // Path state
  activePath: PathType
  setActivePath: (path: PathType) => void
  /** Sync solo activePath da route, senza toccare currentView */
  setActivePathFromRoute: (path: PathType) => void
  
  // Drawer state
  isDrawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  hasSeenDrawer: boolean
  setHasSeenDrawer: (seen: boolean) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // Navigation state
      currentView: 'hero',
      setCurrentView: (view) => set({ currentView: view }),
      
      // Path state
      activePath: null,
      setActivePath: (path) => set({ activePath: path, currentView: path ? 'content' : 'bivio' }),
      setActivePathFromRoute: (path) => set({ activePath: path }),
      
      // Drawer state
      isDrawerOpen: false,
      setDrawerOpen: (open) => set({ isDrawerOpen: open }),
      hasSeenDrawer: false,
      setHasSeenDrawer: (seen) => set({ hasSeenDrawer: seen }),
    }),
    {
      name: 'michele-faccoli-portfolio',
      partialize: (state) => ({
        hasSeenDrawer: state.hasSeenDrawer,
        activePath: state.activePath,
      }),
    }
  )
)
