'use client'

import { useState } from 'react'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`
    window.open(`https://m.me/heritageparktaguigph?text=${body}`, '_blank')
    setOpen(false)
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-slide-up border border-gray-100">
          <div className="bg-[#0084FF] px-5 py-4 text-white">
            <p className="font-semibold text-sm">Chat with us</p>
            <p className="text-xs text-white/80">We&apos;ll reply via Messenger</p>
          </div>
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/30 focus:border-[#0084FF] transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/30 focus:border-[#0084FF] transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/30 focus:border-[#0084FF] transition-colors"
            />
            <textarea
              placeholder="Your message..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/30 focus:border-[#0084FF] transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#0084FF] text-white font-semibold py-2.5 rounded-lg text-sm hover:bg-[#006FE0] transition-colors"
            >
              Send via Messenger
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#0084FF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label={open ? 'Close chat' : 'Chat with us on Messenger'}
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
          </svg>
        )}
      </button>
    </div>
  )
}
