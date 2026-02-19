'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'

function getSnapshot(query: string): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(query).matches
}

function getServerSnapshot(): boolean {
  return false
}

function subscribe(query: string, callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {}
  
  const media = window.matchMedia(query)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

export function useMediaQuery(query: string): boolean {
  const getSnapshotBound = () => getSnapshot(query)
  const subscribeBound = (callback: () => void) => subscribe(query, callback)
  
  return useSyncExternalStore(
    subscribeBound,
    getSnapshotBound,
    getServerSnapshot
  )
}

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)')
}

export function useIsTablet(): boolean {
  return useMediaQuery('(max-width: 1024px)')
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1025px)')
}
