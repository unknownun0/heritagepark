import type { Metadata } from "next";
import { Cinzel, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

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
  title: "Heritage Park | A Place Worth Planning For",
  description:
    "Heritage Park helps Filipino families plan ahead with dignity, peace of mind, and lasting protection — for generations to come.",
  keywords: [
    "Heritage Park",
    "memorial park",
    "plan ahead",
    "memorial lots",
    "memorial services",
    "pre-need plan",
    "Philippines",
  ],
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
        <main className="flex-1">{children}</main>
        <section className="bg-primary">
          <div className="w-full h-72 md:h-80 relative">
            <iframe
              src="https://www.google.com/maps?q=Heritage+Park+Memorial+Taguig&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Heritage Park Location"
            />
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
