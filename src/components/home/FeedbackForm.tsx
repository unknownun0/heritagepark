'use client'

import { useState } from 'react'

interface FeedbackFormProps {
 onSubmitted: () => void
}

export default function FeedbackForm({ onSubmitted }: FeedbackFormProps) {
 const [name, setName] = useState('')
 const [message, setMessage] = useState('')
 const [submitted, setSubmitted] = useState(false)

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!name.trim() || !message.trim()) return

  const feedback = { name: name.trim(), message: message.trim(), date: new Date().toISOString() }
  const existing = JSON.parse(localStorage.getItem('hp_feedback') || '[]')
  existing.unshift(feedback)
  localStorage.setItem('hp_feedback', JSON.stringify(existing))

  setName('')
  setMessage('')
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
    <h3 className="text-lg font-bold text-primary mb-1">Feedback and Suggestions</h3>
   </div>
   <div>
    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={3}
     className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm resize-y"
     placeholder="Share your experience..." />
   </div>
   <button type="submit"
    className="bg-[#e2af43] text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-[#e2af43]/90 transition-colors">
    Submit
   </button>
  </form>
 )
}
