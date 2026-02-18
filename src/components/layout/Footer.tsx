'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { cn } from '@/lib/utils'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/michelefaccoli',
    icon: Linkedin,
  },
  {
    name: 'ArtStation',
    href: 'https://artstation.com/michelefaccoli',
    icon: ExternalLink,
  },
  {
    name: 'Behance',
    href: 'https://behance.net/michelefaccoli',
    icon: ExternalLink,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/michelefaccoli',
    icon: Instagram,
  },
]

export function Footer() {
  const { activePath, heroVisible } = useStore()

  if (heroVisible) return null

  const currentColor = activePath === 'aziende' ? '#0066ff' : '#00d4ff'
  const currentGradient = activePath === 'aziende' 
    ? 'from-[#0066ff] to-[#ffd700]' 
    : 'from-[#00d4ff] to-[#0088ff]'

  return (
    <footer className="relative bg-site-bg border-t border-white/5 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className={cn(
              "w-10 h-10 rounded-lg p-[1px] bg-gradient-to-br",
              currentGradient
            )}>
              <div className="w-full h-full rounded-lg bg-site-bg flex items-center justify-center">
                <span className="text-sm font-bold text-white">MF</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Michele Faccoli</h3>
              <p className="text-xs text-[#888]">3D Artist</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#888] hover:text-white hover:bg-white/10 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="mailto:info@michelefaccoli.com"
              className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@michelefaccoli.com
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[#888]">
            © {new Date().getFullYear()} Michele Faccoli. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-[#888]">
            Realizzato con <span className={activePath === 'aziende' ? 'text-[#ffd700]' : 'text-[#00d4ff]'}>♥</span> e tecnologia 3D
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
