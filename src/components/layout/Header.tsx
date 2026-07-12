'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

interface NavItem {
  key: string
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    key: 'plan-ahead',
    label: 'Plan Ahead',
    href: '/plan-ahead',
  },
  {
    key: 'memorial-properties',
    label: 'Memorial Properties',
    href: '/memorial-properties',
    children: [
      { label: 'Explore All', href: '/memorial-properties' },
      { label: 'Lawn Lots', href: '/memorial-properties/lawn-lots' },
      { label: 'Garden Lots', href: '/memorial-properties/garden-lots' },
      { label: 'Estate Lots', href: '/memorial-properties/estate-lots' },
      { label: 'Memory Place', href: '/memorial-properties/memory-place' },
    ],
  },
  {
    key: 'memorial-services',
    label: 'Memorial Services',
    href: '/memorial-services',
    children: [
      { label: 'Explore All', href: '/memorial-services' },
      { label: 'Mortuary & Wake Plans', href: '/memorial-services/mortuary-plans' },
      { label: 'Interment Plans', href: '/memorial-services/interment-plans' },
      { label: 'Combo Plans', href: '/memorial-services/combo-plans' },
    ],
  },
  {
    key: 'explore-the-park',
    label: 'Explore the Park',
    href: '/explore-the-park',
  },
  {
    key: 'nacional',
    label: 'Nacional',
    href: '/nacional',
  },
  {
    key: 'learn',
    label: '__',
    href: '/learn',
  },
  {
    key: 'aeternum',
    label: 'Aeternum',
    href: '/aeternum',
  },
  {
    key: 'contact',
    label: 'Contact',
    href: '/contact',
  },
]

const mobileLinks = [
  ...navItems.map((item) => ({ label: item.label === '__' ? 'Learn' : item.label, href: item.href })),
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeDropdown = useCallback(() => setOpenDropdown(null), [])

  const navLinkClass = (isActive: boolean) =>
    `px-2.5 py-3 text-[13px] font-semibold tracking-wider uppercase border-b-2 transition-all duration-200 ${
      isActive
        ? 'text-white border-gold'
        : 'text-white/70 border-transparent hover:text-white hover:border-gold/50'
    }`

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-primary/95 backdrop-blur shadow-sm"
        style={{ fontSize: 16 }}
      >
        <div className="max-w-7xl mx-auto px-4" ref={headerRef}>
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Image
                src="/images/logo.png"
                alt="Heritage Park"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                const hasChildren = item.children && item.children.length > 0
                const isOpen = openDropdown === item.key

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 ${navLinkClass(isActive)}`}
                      onClick={() => { closeDropdown(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    >
                      {item.label}
                      {hasChildren && (
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    {hasChildren && isOpen && (
                      <div
                        className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-primary/10 py-2 animate-slide-down"
                        style={{ marginTop: 0 }}
                      >
                        {item.children!.map((child) => {
                          const isChildActive = pathname === child.href
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => { closeDropdown(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                              className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                isChildActive
                                  ? 'text-gold bg-gold/5'
                                  : 'text-primary/80 hover:text-primary hover:bg-cream'
                              }`}
                            >
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 transition-colors text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
