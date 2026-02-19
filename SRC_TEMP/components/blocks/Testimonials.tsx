'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock Testimonials Data
const testimonials = [
  {
    id: '1',
    quote: 'Michele ha trasformato il nostro catalogo prodotti in esperienze 3D immersive. La qualit\u00E0 dei modelli e l\'attenzione ai dettagli hanno superato ogni aspettativa.',
    author: 'Marco Rossi',
    role: 'Creative Director',
    company: 'Studio Creativo Milano',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    rating: 5,
  },
  {
    id: '2',
    quote: 'La conversione CAD to 3D \u00E8 stata impeccabile. Ora possiamo mostrare i nostri prodotti a clienti e partner in modo interattivo e coinvolgente.',
    author: 'Laura Bianchi',
    role: 'Marketing Manager',
    company: 'TechFlow Industries',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Professionalit\u00E0 e competenza tecniche eccellenti. La stampa 3D del nostro prototipo \u00E8 stata perfetta al primo tentativo.',
    author: 'Giuseppe Verdi',
    role: 'R&D Engineer',
    company: 'MedTech Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
    rating: 5,
  },
  {
    id: '4',
    quote: 'Collaborazione fluida e risultati straordinari. Michele ha saputo interpretare le nostre esigenze e consegnare oltre le aspettative.',
    author: 'Anna Colombo',
    role: 'Art Director',
    company: 'Brand Studio Roma',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (direction === 'right' && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--cyber-blue)]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--neon-green)]/10 text-[var(--neon-green)] text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cosa dicono i{' '}
            <span className="gradient-text">clienti</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La soddisfazione dei clienti \u00E8 la mia priorit\u00E0. Ecco le loro esperienze.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollTo('left')}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-[var(--card)] border-[var(--cyber-blue)]/20 text-foreground hover:border-[var(--cyber-blue)] disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollTo('right')}
              disabled={currentIndex === testimonials.length - 1}
              className="w-12 h-12 rounded-full bg-[var(--card)] border-[var(--cyber-blue)]/20 text-foreground hover:border-[var(--cyber-blue)] disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards Container */}
          <div ref={scrollRef} className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
                >
                  <div className="h-full p-6 lg:p-8 rounded-2xl bg-[var(--card)] border border-[var(--cyber-blue)]/10 hover:border-[var(--cyber-blue)]/30 transition-all duration-300">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-10 h-10 text-[var(--cyber-blue)]/30" />
                    </div>

                    {/* Quote */}
                    <p className="text-foreground mb-6 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[var(--neon-green)] text-[var(--neon-green)]" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[var(--cyber-blue)]/20"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} @ {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${currentIndex === index 
                    ? 'w-6 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--neon-green)]' 
                    : 'bg-[var(--steel-gray)]'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
