import type { Metadata } from "next"
import ExploreParkSections from "@/components/explore-park/ExploreParkSections"

export const metadata: Metadata = {
 title: "Explore the Park | Heritage Park",
 description: "Take a virtual tour of Heritage Park, a masterplanned memorial community with landscaped gardens, sanctuaries, and peaceful spaces for remembrance.",
}

export default function ExploreTheParkPage() {
 return <ExploreParkSections />
}
