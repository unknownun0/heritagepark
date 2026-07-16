import type { Metadata } from "next"
import PropertyComparison from "@/components/memorial-properties/PropertyComparison"

export const metadata: Metadata = {
 title: "Memorial Lots | Heritage Park",
 description: "Explore Heritage Park memorial lots: Lawn Lots, Garden Lots, Estate Lots, and Memory Place. Find the right memorial lot for your family.",
}

export default function MemorialPropertiesPage() {
 return <PropertyComparison />
}
