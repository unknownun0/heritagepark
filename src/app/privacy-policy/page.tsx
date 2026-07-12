import type { Metadata } from "next"
import LegalSections from "@/components/legal/LegalSections"

export const metadata: Metadata = {
  title: "Privacy Policy | Heritage Park",
  description: "Heritage Park Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with the Data Privacy Act of 2012.",
}

export default function PrivacyPolicyPage() {
  return <LegalSections type="privacy" />
}
