import type { Metadata } from "next"
import ConsultantSections from "@/components/consultant/ConsultantSections"

export const metadata: Metadata = {
  title: "Find a Consultant | Heritage Park",
  description: "Connect with a Heritage Park Memorial Sales Consultant who can guide your family with compassion and zero pressure.",
}

export default function FindConsultantPage() {
  return <ConsultantSections />
}
