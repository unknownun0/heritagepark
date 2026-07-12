import type { Metadata } from "next"
import NacionalSections from "@/components/nacional/NacionalSections"

export const metadata: Metadata = {
  title: "Nacional Memorial Homes | Heritage Park",
  description: "Heritage Park quality memorial service plans now available in Quezon City through Nacional Memorial Homes. Cremation, viewing, and burial services.",
}

export default function NacionalPage() {
  return <NacionalSections />
}
