import type { Metadata } from "next"
import MortuaryPlansSection from "@/components/memorial-services/MortuaryPlansSection"

export const metadata: Metadata = {
 title: "Mortuary & Wake Plans | Heritage Park",
 description: "Complete mortuary and wake service plans from Heritage Park. Pickup, preservation, chapel rental, casket, and coordination included.",
}

export default function MortuaryPlansPage() {
 return <MortuaryPlansSection />
}
