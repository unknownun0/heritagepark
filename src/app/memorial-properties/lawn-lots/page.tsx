import type { Metadata } from "next"
import LawnLotsSection from "@/components/memorial-properties/LawnLotsSection"

export const metadata: Metadata = {
  title: "Lawn Lots | Heritage Park",
  description: "Affordable lawn memorial lots for individuals and families planning ahead at Heritage Park. Dignified, flexible, and accessible.",
}

export default function LawnLotsPage() {
  return <LawnLotsSection />
}
