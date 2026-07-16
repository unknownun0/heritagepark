import type { Metadata } from "next"
import ContactSections from "@/components/contact/ContactSections"

export const metadata: Metadata = {
 title: "Contact Us | Heritage Park",
 description: "Get in touch with Heritage Park. Call, email, or visit our memorial park in Quezon City to speak with an advisor.",
}

export default function ContactPage() {
 return <ContactSections />
}
