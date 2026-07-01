'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

interface NavChild {
  label: string
  href: string
}

interface NavItem {
  key: string
  label: string
  href: string
  children?: NavChild[]
}

const navItems: NavItem[] = [
  {
    key: 'plan-ahead',
    label: 'Plan Ahead',
    href: '/plan-ahead',
    children: [
      { label: 'Why Plan Ahead', href: '/plan-ahead#why-plan-ahead' },
      { label: 'What Planning Looks Like', href: '/plan-ahead#what-planning-looks-like' },
      { label: 'Common Questions', href: '/plan-ahead#common-questions' },
    ],
  },
  {
    key: 'memorial-properties',
    label: 'Memorial Properties',
    href: '/memorial-properties',
    children: [
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
      { label: 'Mortuary Plans', href: '/memorial-services/mortuary-plans' },
      { label: 'Interment Plans', href: '/memorial-services/interment-plans' },
      { label: 'Combo Plans', href: '/memorial-services/combo-plans' },
    ],
  },
  {
    key: 'explore-the-park',
    label: 'Explore the Park',
    href: '/explore-the-park',
    children: [
      { label: 'Park Highlights', href: '/explore-the-park' },
      { label: 'Aeternum Columbary', href: '/aeternum' },
      { label: 'Schedule a Visit', href: '/contact' },
    ],
  },
  {
    key: 'nacional',
    label: 'Nacional',
    href: '/nacional',
    children: [
      { label: 'Cremation Plans', href: '/nacional' },
      { label: 'Cremation with Viewing', href: '/nacional' },
      { label: 'Viewing then Cremation', href: '/nacional' },
      { label: 'Regular Plans', href: '/nacional' },
    ],
  },
  {
    key: 'learn',
    label: 'Learn',
    href: '/learn',
    children: [
      { label: 'Planning Basics', href: '/learn' },
      { label: 'Memorial Properties', href: '/learn' },
      { label: 'Costs & Payment', href: '/learn' },
      { label: 'Grief & Support', href: '/learn' },
      { label: 'Culture & Tradition', href: '/learn' },
    ],
  },
  {
    key: 'internom',
    label: 'Internom',
    href: '/internom',
    children: [
      { label: 'Personalized Memorials', href: '/internom#personalized' },
      { label: 'Digital Tributes', href: '/internom#digital' },
      { label: 'Expert Guidance', href: '/internom#expert' },
    ],
  },
  {
    key: 'contact',
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Find a Consultant', href: '/find-a-consultant' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    href: '/feedback',
    children: [
      { label: 'Share Your Experience', href: '/feedback' },
      { label: 'Rate Your Visit', href: '/feedback' },
      { label: 'Suggestions', href: '/feedback' },
    ],
  },
]

const atNeedLinks = [
  { label: 'Get Help Now', href: 'tel:+639178841009' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Find a Consultant', href: '/find-a-consultant' },
]

const mobileLinks = [
  ...navItems.map((item) => ({ label: item.label, href: item.href })),
  { label: 'Immediate Need', href: '/immediate-need' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Find a Consultant', href: '/find-a-consultant' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [atNeedOpen, setAtNeedOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setAtNeedOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
        setAtNeedOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setAtNeedOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  const navLinkClass = (isActive: boolean) =>
    `px-2 py-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-all ${
      isActive
        ? 'text-white border-gold'
        : 'text-white/70 border-transparent hover:text-white hover:border-gold/50'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-primary/95 backdrop-blur shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4">
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

            <nav ref={navRef} className="hidden lg:flex flex-1 items-center justify-between ml-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <div key={item.key} className="relative">
                    <div className="flex items-center gap-0.5">
                      <Link
                        href={item.href}
                        className={navLinkClass(isActive)}
                        onClick={(e) => {
                          if (item.children) {
                            e.preventDefault()
                            setActiveDropdown(activeDropdown === item.key ? null : item.key)
                            return
                          }
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
                          className="p-0.5 text-white/50 hover:text-white transition-colors"
                          aria-label={`Toggle ${item.label} menu`}
                        >
                          <svg className={`w-3 h-3 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.children && activeDropdown === item.key && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded shadow-lg overflow-hidden animate-slide-down z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-xs text-primary hover:bg-cream transition-colors border-b border-primary/5 last:border-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <div className="relative">
                <button
                  onClick={() => setAtNeedOpen(!atNeedOpen)}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold tracking-wide uppercase rounded transition-colors bg-gold text-primary hover:bg-gold/90"
                >
                  AT NEED
                  <svg className={`w-3 h-3 transition-transform ${atNeedOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {atNeedOpen && (
                  <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded shadow-lg overflow-hidden animate-slide-down">
                    <a href="/immediate-need" className="block px-4 py-3 text-xs font-semibold text-primary bg-gold/10 hover:bg-gold/20 transition-colors border-b border-primary/5">
                      Immediate Need &mdash; We&apos;re Here
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
