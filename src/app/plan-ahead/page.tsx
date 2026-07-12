import type { Metadata } from "next"
import PlanAheadSections from "@/components/plan-ahead/PlanAheadSections"

export const metadata: Metadata = {
  title: "Plan Ahead | Heritage Park",
  description: "Start planning ahead with Heritage Park. Secure today's prices, explore flexible payment options, and give your family peace of mind.",
}

export default function PlanAheadPage() {
  return <PlanAheadSections />
}
