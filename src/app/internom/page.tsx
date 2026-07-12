import type { Metadata } from "next"
import InternomSections from "@/components/internom/InternomSections"

export const metadata: Metadata = {
  title: "Internom | Heritage Park",
  description: "Learn about Internom, Heritage Park's international memorial services and repatriation assistance for families.",
}

export default function InternomPage() {
  return <InternomSections />
}
