import type { Metadata } from "next"
import FAQSections from "@/components/faqs/FAQSections"

export const metadata: Metadata = {
 title: "FAQs | Heritage Park",
 description: "Find answers to common questions about memorial planning, properties, payment options, and visiting Heritage Park.",
}

export default function FAQsPage() {
 return <FAQSections />
}
