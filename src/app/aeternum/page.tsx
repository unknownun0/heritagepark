import type { Metadata } from "next"
import AeternumSections from "@/components/aeternum/AeternumSections"

export const metadata: Metadata = {
  title: "Aeternum Columbary | Heritage Park",
  description: "Explore Aeternum, Heritage Park's elegant indoor columbary sanctuary for cremation memorials in Quezon City.",
}

export default function AeternumPage() {
  return <AeternumSections />
}
