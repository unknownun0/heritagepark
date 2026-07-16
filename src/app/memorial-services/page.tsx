import type { Metadata } from "next"
import ServicePlans from "@/components/memorial-services/ServicePlans"

export const metadata: Metadata = {
  title: "Funeral Services | Heritage Park",
  description: "Explore Heritage Park funeral service plans: mortuary, wake, interment, and combo plans designed to care for your family in every detail.",
}

export default function MemorialServicesPage() {
  return <ServicePlans />
}
