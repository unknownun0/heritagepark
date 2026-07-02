import { Suspense } from 'react'
import type { Metadata } from 'next'
import LearnSections from "@/components/learn/LearnSections"

export const metadata: Metadata = {
  title: 'Learn & Resources | Heritage Park',
  description: 'Explore our library of helpful guides about memorial planning, costs, traditions, and grief support — written with your family\'s peace of mind in mind.',
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-primary/50">Loading...</div>}>
      <LearnSections />
    </Suspense>
  )
}
