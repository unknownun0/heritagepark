import type { Metadata } from "next"
import ImmediateNeedSection from "@/components/immediate-need/ImmediateNeedSection"

export const metadata: Metadata = {
  title: "Immediate Need | Heritage Park",
  description: "Heritage Park is here for your family in this moment. Call our support line for immediate assistance and compassionate care.",
}

export default function ImmediateNeedPage() {
  return <ImmediateNeedSection />
}
