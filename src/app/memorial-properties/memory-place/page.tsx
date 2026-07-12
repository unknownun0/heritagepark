import type { Metadata } from "next"
import MemoryPlaceSection from "@/components/memorial-properties/MemoryPlaceSection"

export const metadata: Metadata = {
  title: "Memory Place | Heritage Park",
  description: "Private above-ground family crypts at Heritage Park offering comfort, accessibility, and lasting remembrance for your loved ones.",
}

export default function MemoryPlacePage() {
  return <MemoryPlaceSection />
}
