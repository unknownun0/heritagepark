import type { Metadata } from "next"
import AboutSections from "@/components/about/AboutSections"

export const metadata: Metadata = {
  title: "About Us | Heritage Park",
  description: "Learn about Heritage Park, a masterplanned memorial community offering dignified, compassionate memorial solutions for Filipino families.",
}

export default function AboutPage() {
  return <AboutSections />
}
