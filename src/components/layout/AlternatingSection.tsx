'use client'

import type { ReactNode } from 'react'
import { BohemeBackground } from '@/components/ui/BohemeBackground'
import { cn } from '@/lib/utils'

type AlternatingSectionVariant = 'dark-boheme' | 'colored-solid'

interface AlternatingSectionProps {
  children: ReactNode
  variant: AlternatingSectionVariant
}

export function AlternatingSection({ children, variant }: AlternatingSectionProps) {
  const isDarkBoheme = variant === 'dark-boheme'

  return (
    <section
      className={cn(
        'relative w-full py-24 overflow-hidden',
        isDarkBoheme
          ? 'bg-zinc-950 text-white'
          : 'bg-[var(--brand-accent)] text-white'
      )}
    >
      {isDarkBoheme && <BohemeBackground />}

      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

