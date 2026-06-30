'use client'

import { useState, useEffect } from 'react'

interface Feedback {
  name: string
  message: string
  rating: number
  date: string
}

const defaultFeedback: Feedback = {
  name: 'Maria S., Taguig',
  message: 'Heritage Park gave our family the time and space to make the right decision — without pressure. We are truly grateful for their compassion.',
  rating: 5,
  date: '',
}

export default function FeedbackFeatured() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  const loadFeedbacks = () => {
    const stored = JSON.parse(localStorage.getItem('hp_feedback') || '[]')
    setFeedbacks([defaultFeedback, ...stored])
  }

  useEffect(() => { loadFeedbacks() }, [])

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What Our Families Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Trust Means Everything</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-primary/5">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className={`w-4 h-4 ${s <= fb.rating ? 'text-gold' : 'text-primary/15'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-primary/70 leading-relaxed mb-4">&ldquo;{fb.message}&rdquo;</p>
              <p className="text-xs font-semibold text-primary">&mdash; {fb.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
