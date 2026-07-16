import type { Metadata } from "next"
import ComboPlansSection from "@/components/memorial-services/ComboPlansSection"

export const metadata: Metadata = {
 title: "Combo Plans | Heritage Park",
 description: "Heritage Park combo plans bundle memorial properties with mortuary and interment services for complete family preparation.",
}

export default function ComboPlansPage() {
 return <ComboPlansSection />
}
