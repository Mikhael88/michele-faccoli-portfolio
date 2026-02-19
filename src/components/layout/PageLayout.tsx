'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Palette, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Preventivatore } from '@/components/blocks/Preventivatore'
import { PreventivatoreFAB } from '@/components/blocks/PreventivatoreFAB'

interface PageLayoutProps {
  children: ReactNode
  currentPage: 'agenzie' | 'aziende'
}

export function PageLayout({ children, currentPage }: PageLayoutProps) {
  const isAgenzie = currentPage === 'agenzie'
  const otherPage = isAgenzie ? '/soluzioni-industriali' : '/servizi-agenzie'
  const otherLabel = isAgenzie ? 'Sei un\'Azienda?' : 'Sei un\'Agenzia?'

  return (
    <div data-theme={isAgenzie ? 'orange' : 'blue'} className="flex h-screen bg-site-bg overflow-hidden">
      {/* Preventivatore Modal - rendered via Portal */}
      <Preventivatore currentPage={currentPage} />
      <PreventivatoreFAB rightOffset="calc(10% + 1.5rem)" />
      
      {/* Main Content Area - con padding destro per evitare overlap con sidebar */}
      <motion.main
        className="h-full overflow-y-auto overflow-x-hidden relative pr-14 md:pr-20"
        initial={{ width: '100%' }}
        animate={{ width: '90%' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      {/* Sidebar Navigation (10%) */}
      <motion.aside
        className={cn(
          'h-full relative flex flex-col items-center justify-center border-l z-40 group cursor-pointer transition-all duration-300',
          isAgenzie 
            ? 'bg-site-bg border-[var(--brand-accent)]/20' 
            : 'bg-site-bg border-[var(--brand-accent)]/20'
        )}
        initial={{ width: '0%' }}
        animate={{ width: '10%' }}
        whileHover={{ width: '15%' }}
        transition={{ duration: 0.3 }}
      >
        {/* Background blur colorato - colore in base alla pagina DI DESTINAZIONE */}
        <div className={cn(
          'absolute inset-0 pointer-events-none',
          isAgenzie 
            ? 'bg-gradient-to-b from-[#0066ff]/15 to-transparent'  // CTA verso Aziende → blu
            : 'bg-gradient-to-b from-[#FF6B35]/15 to-transparent'  // CTA verso Agenzie → arancio
        )} />
        <div className={cn(
          'absolute inset-0 opacity-30 pointer-events-none',
          isAgenzie 
            ? 'bg-[#0066ff]/5'   // CTA verso Aziende → blu
            : 'bg-[#FF6B35]/5'   // CTA verso Agenzie → arancio
        )} />

        {/* Content */}
        <div className="h-full flex flex-col justify-between py-8 items-center relative z-10">
          {/* Home Link */}
          <Link 
            href="/"
            className={cn(
              'w-10 h-10 rounded-lg flex items-center justify-center border transition-colors',
              isAgenzie 
                ? 'bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/20' 
                : 'bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/20'
            )}
          >
            <Home className="w-5 h-5" />
          </Link>

          {/* Vertical Text - Link to other page */}
          <Link href={otherPage} className="flex-1 flex items-center justify-center group/link">
            <h2 className="transform -rotate-90 whitespace-nowrap text-slate-400 font-medium tracking-widest text-sm uppercase group-hover/link:text-white transition-colors">
              {otherLabel}{' '}
              <span className={cn(
                'font-bold ml-2',
                isAgenzie ? 'text-[#0066ff]' : 'text-[#FF6B35]'  // Blu per "Sei un'Azienda?", arancio per "Sei un'Agenzia?"
              )}>
                Clicca qui
              </span>
            </h2>
          </Link>

          {/* Switch Icon */}
          <Link 
            href={otherPage}
            className={cn(
              'w-10 h-10 rounded-lg flex items-center justify-center border transition-colors',
              isAgenzie 
                ? 'bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/20' 
                : 'bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/20'
            )}
          >
            {isAgenzie ? <Building2 className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
          </Link>
        </div>

        {/* Hover Overlay - segue il colore della pagina di destinazione */}
        <div className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none',
          isAgenzie ? 'bg-[#0066ff]/5' : 'bg-[#FF6B35]/5'
        )} />
      </motion.aside>
    </div>
  )
}
