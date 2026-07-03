'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4 sm:p-6"
      style={{ padding: 'env(safe-area-inset-top, 16px) env(safe-area-inset-right, 16px) env(safe-area-inset-bottom, 16px) env(safe-area-inset-left, 16px)' }}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={panelRef}
        className="relative w-full max-w-[90vw] sm:max-w-lg md:max-w-xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-slide-up"
        style={{ WebkitOverflowScrolling: 'touch' }}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-primary/5 bg-white/95 backdrop-blur-sm">
          {title && (
            <h2 className="text-lg sm:text-xl font-bold text-primary truncate pr-2">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-cream text-primary/60 hover:text-primary transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div
          className="px-5 py-5 sm:px-6 sm:py-6 break-words overflow-wrap-break-word"
          style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
