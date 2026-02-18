'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useStore } from '@/store/useStore'

const DRAWER_DELAY = 45000 // 45 seconds

export function useTimerDrawer() {
  const { isDrawerOpen, setDrawerOpen, hasSeenDrawer, setHasSeenDrawer } = useStore()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = useCallback(() => {
    if (hasSeenDrawer || isDrawerOpen) return

    timerRef.current = setTimeout(() => {
      if (!hasSeenDrawer) {
        setDrawerOpen(true)
        setHasSeenDrawer(true)
      }
    }, DRAWER_DELAY)
  }, [hasSeenDrawer, isDrawerOpen, setDrawerOpen, setHasSeenDrawer])

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    setHasSeenDrawer(true)
  }, [setDrawerOpen, setHasSeenDrawer])

  const openDrawer = useCallback(() => {
    setDrawerOpen(true)
  }, [setDrawerOpen])

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [startTimer, stopTimer])

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    hasSeenDrawer,
  }
}
