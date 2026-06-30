'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Plan Ahead', href: '/plan-ahead' },
  { label: 'Memorial Properties', href: '/memorial-properties' },
  { label: 'Memorial Services', href: '/memorial-services' },
  { label: 'Explore the Park', href: '/explore-the-park' },
  { label: 'Nacional', href: '/nacional' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const atNeedLinks = [
  { label: 'Get Help Now', href: 'tel:+1234567890' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Find a Consultant', href: '/find-a-consultant' },
]

const mobileLinks = [
  ...navLinks,
  { label: 'Immediate Need', href: '/immediate-need' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Find a Consultant', href: '/find-a-consultant' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [atNeedOpen, setAtNeedOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAtNeedOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setAtNeedOpen(false) }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  const navLinkClass = (isActive: boolean) =>
    `px-3 py-2 text-xs font-medium tracking-wide uppercase rounded transition-colors ${
      isActive
        ? 'text-gold'
        : scrolled
          ? 'text-primary/80 hover:text-primary'
          : 'text-white/80 hover:text-white'
    }`

  return (
    <>
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Heritage Park"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <Link key={link.href} href={link.href} className={navLinkClass(isActive)}>
                    {link.label}
                  </Link>
                )
              })}
              <div className="relative ml-2" ref={dropdownRef}>
                <button
                  onClick={() => setAtNeedOpen(!atNeedOpen)}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wide uppercase rounded transition-colors ${
                    scrolled
                      ? 'bg-gold text-primary hover:bg-gold/90'
                      : 'bg-gold/20 text-gold hover:bg-gold/30'
                  }`}
                >
                  AT NEED
                  <svg className={`w-3 h-3 transition-transform ${atNeedOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {atNeedOpen && (
                  <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded shadow-lg overflow-hidden animate-slide-down">
                    <a href="/immediate-need" className="block px-4 py-3 text-xs font-semibold text-primary bg-gold/10 hover:bg-gold/20 transition-colors border-b border-primary/5">
                      Immediate Need — We're Here
                    </a>
                    {atNeedLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-3 text-xs text-primary hover:bg-cream transition-colors border-b border-primary/5 last:border-0"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2"
              aria-label="Open menu"
            >
              <svg className={`w-6 h-6 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={mobileLinks} />
    </>
  )
}
