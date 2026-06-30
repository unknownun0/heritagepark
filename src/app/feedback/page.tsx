'use client'

import { useState } from 'react'
import FeedbackForm from '@/components/home/FeedbackForm'

export default function FeedbackPage() {
  const [key, setKey] = useState(0)

  return (
    <>
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Share Your Experience</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">We&apos;d Love to Hear From You</h1>
          <p className="text-white/70 max-w-lg mx-auto">
            Your feedback helps us serve families better and continuously improve.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
            <FeedbackForm onSubmitted={() => setKey((k) => k + 1)} />
          </div>
        </div>
      </section>
    </>
  )
}
