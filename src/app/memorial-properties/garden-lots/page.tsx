import type { Metadata } from "next"
import GardenLotsSection from "@/components/memorial-properties/GardenLotsSection"

export const metadata: Metadata = {
 title: "Garden Lots | Heritage Park",
 description: "Spacious garden memorial lots for families who want room to grow together. Beautifully landscaped grounds at Heritage Park.",
}

export default function GardenLotsPage() {
 return <GardenLotsSection />
}
