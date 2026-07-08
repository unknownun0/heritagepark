'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingAtNeed() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-20 left-0 z-30 transition-all duration-500 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <Link
        href="/immediate-need"
        className="flex items-center gap-2 bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-2.5 rounded-r-lg shadow-lg hover:bg-red-800 transition-colors"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
        At Need
      </Link>
    </div>
  )
}
