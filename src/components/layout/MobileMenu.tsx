'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const pathname = usePathname()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream shadow-xl animate-slide-down">
        <div className="flex items-center justify-between p-4 border-b border-primary/10">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button onClick={onClose} className="p-2 text-primary hover:text-gold" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block py-3 px-4 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-gold bg-gold/5'
                    : 'text-primary/80 hover:text-primary hover:bg-white/50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-primary/10">
          <a href="tel:+1234567890" className="block w-full bg-gold text-primary text-center font-semibold py-3 rounded text-sm hover:bg-gold/90 transition-colors">
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  )
}
