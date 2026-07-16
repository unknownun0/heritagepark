import type { Metadata } from "next"
import IntermentPlansSection from "@/components/memorial-services/IntermentPlansSection"

export const metadata: Metadata = {
 title: "Interment Plans | Heritage Park",
 description: "Heritage Park interment plans cover burial services for your memorial lot, including full body and cremains placement options.",
}

export default function IntermentPlansPage() {
 return <IntermentPlansSection />
}
