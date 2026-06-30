'use client'

import { useState } from 'react'

interface FeedbackFormProps {
  onSubmitted: () => void
}

export default function FeedbackForm({ onSubmitted }: FeedbackFormProps) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || rating === 0) return

    const feedback = { name: name.trim(), message: message.trim(), rating, date: new Date().toISOString() }
    const existing = JSON.parse(localStorage.getItem('hp_feedback') || '[]')
    existing.unshift(feedback)
    localStorage.setItem('hp_feedback', JSON.stringify(existing))

    setName('')
    setMessage('')
    setRating(0)
    setSubmitted(true)
    onSubmitted()
  }

  if (submitted) {
    return (
      <div className="bg-cream rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-moss mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-primary font-semibold">Thank you for your feedback!</p>
        <button onClick={() => setSubmitted(false)} className="text-gold text-sm mt-2 hover:underline">Submit another</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-primary mb-1">Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
          className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
          placeholder="Name" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-primary mb-1">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)}
              className="text-2xl transition-colors focus:outline-none">
              <svg className={`w-6 h-6 ${star <= (hover || rating) ? 'text-gold' : 'text-primary/20'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-primary mb-1">Your Feedback</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={3}
          className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm resize-y"
          placeholder="Share your experience..." />
      </div>
      <button type="submit"
        className="bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors">
        Submit Feedback
      </button>
    </form>
  )
}
