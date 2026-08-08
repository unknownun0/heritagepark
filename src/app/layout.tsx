import type { Metadata } from "next";
import { Cinzel, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import FloatingChat from "@/components/layout/FloatingChat";

const cinzel = Cinzel({
 subsets: ["latin"],
 variable: "--font-heading",
 display: "swap",
});

const montserrat = Montserrat({
 subsets: ["latin"],
 variable: "--font-body",
 display: "swap",
});

const cormorant = Cormorant_Garamond({
 subsets: ["latin"],
 variable: "--font-accent",
 weight: ["400", "600"],
 style: ["normal", "italic"],
 display: "swap",
});

export const metadata: Metadata = {
 title: {
  default: "Heritage Park Taguig",
  template: "%s | Heritage Park Taguig",
 },
 description:
  "Heritage Park is the premier memorial park in Taguig, Philippines. Plan ahead with dignity — memorial lots, services, and preneed plans for Filipino families.",
 icons: {
  icon: "/favicon.svg",
 },
 keywords: [
  "Heritage Park",
  "Heritage Park Taguig",
  "memorial park Taguig",
  "memorial park Philippines",
  "plan ahead",
  "memorial lots Taguig",
  "memorial services",
  "preneed plan",
  "Philippines",
  "burial lots Taguig",
 ],
 authors: [{ name: "Heritage Park Taguig" }],
 publisher: "Heritage Park Taguig",
 robots: { index: true, follow: true },
 openGraph: {
  type: "website",
  locale: "en_PH",
  siteName: "Heritage Park Taguig",
  title: "Heritage Park Taguig",
  description:
   "Heritage Park is the premier memorial park in Taguig, Philippines. Plan ahead with dignity — memorial lots, services, and preneed plans for Filipino families.",
  url: "https://heritageparktaguig.com",
  images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
 },
 twitter: {
  card: "summary_large_image",
  title: "Heritage Park Taguig",
  description:
   "Heritage Park is the premier memorial park in Taguig, Philippines.",
  images: ["/images/og-image.jpg"],
 },
 alternates: { canonical: "https://heritageparktaguig.com" },
 verification: {
  google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
 },
 category: "memorial park",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html
   lang="en"
   className={`${cinzel.variable} ${montserrat.variable} ${cormorant.variable} h-full antialiased`}
  >
   <body className="min-h-full flex flex-col">

    <Header />
    <ScrollToTop />
    <main className="flex-1 pt-16">{children}</main>
    <hr className="border-t border-primary/10" />
    <Footer />
    <FloatingChat />
    <script dangerouslySetInnerHTML={{
     __html: `document.addEventListener('contextmenu',e=>e.preventDefault());document.addEventListener('keydown',e=>{if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&['I','J','C'].includes(e.key.toUpperCase()))||(e.ctrlKey&&e.key==='u')){e.preventDefault();e.stopPropagation()}});(function(){const d=()=>{const w=window.outerWidth-window.innerWidth;const h=window.outerHeight-window.innerHeight;if(w>160||h>160){document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#1F3A2D;background:#F6F1E7;text-align:center;padding:2rem;"><div><h1 style="font-size:1.5rem;margin-bottom:1rem;">Developer tools detected</h1><p style="color:#666;">Please close all developer tools and refresh the page.</p></div></div>'}};setInterval(d,1e3)})()`}} />
   </body>
  </html>
 );
}
