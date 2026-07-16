import type { Metadata } from "next"
import EstateLotsSection from "@/components/memorial-properties/EstateLotsSection"

export const metadata: Metadata = {
 title: "Estate Lots | Heritage Park",
 description: "Heritage Park's most prestigious memorial estate lots. Expansive, private properties for families building a legacy across generations.",
}

export default function EstateLotsPage() {
 return <EstateLotsSection />
}
