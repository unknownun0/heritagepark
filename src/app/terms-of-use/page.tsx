import type { Metadata } from "next"
import LegalSections from "@/components/legal/LegalSections"

export const metadata: Metadata = {
 title: "Terms of Use | Heritage Park",
 description: "Heritage Park Terms of Use. By accessing this website, you agree to be bound by these terms governing the use of our site and services.",
}

export default function TermsOfUsePage() {
 return <LegalSections type="terms" />
}
