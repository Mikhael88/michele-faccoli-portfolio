'use client'

import { useState, useEffect, useCallback } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollProgress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0

    setProgress(scrollProgress)
    setScrollY(currentScrollY)
    setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { progress, scrollY, scrollDirection }
}
