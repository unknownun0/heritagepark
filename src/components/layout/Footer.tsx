import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Plan Ahead', href: '/plan-ahead' },
  { label: 'Memorial Properties', href: '/memorial-properties' },
  { label: 'Memorial Services', href: '/memorial-services' },
  { label: 'Explore the Park', href: '/explore-the-park' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'FAQs', href: '/faqs' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/heritageparktaguigph',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.11 2.525c.636-.247 1.363-.416 2.427-.465C8.83 2.013 9.185 2 11.615 2h.7zm-.08 1.802h-.7c-2.406 0-2.688.01-3.628.053-.893.04-1.393.19-1.72.316-.373.144-.64.317-.92.597a2.402 2.402 0 00-.598.92c-.126.327-.276.827-.316 1.72-.043.94-.053 1.222-.053 3.628v.7c0 2.406.01 2.688.053 3.628.04.893.19 1.393.316 1.72.144.373.317.64.597.92.28.28.547.453.92.598.327.126.827.276 1.72.316.94.043 1.222.053 3.628.053h.7c2.406 0 2.688-.01 3.628-.053.893-.04 1.393-.19 1.72-.316.373-.144.64-.317.92-.598.28-.28.453-.547.598-.92.126-.327.276-.827.316-1.72.043-.94.053-1.222.053-3.628v-.7c0-2.406-.01-2.688-.053-3.628-.04-.893-.19-1.393-.316-1.72a2.402 2.402 0 00-.598-.92 2.402 2.402 0 00-.92-.598c-.327-.126-.827-.276-1.72-.316-.94-.043-1.222-.053-3.628-.053zm0 4.741a3.461 3.461 0 100 6.922 3.461 3.461 0 000-6.922zM21.7 6.577a.81.81 0 11-1.62 0 .81.81 0 011.62 0z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Image
                src="/images/heritage_logo.png"
                alt="Heritage Park"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              For generations, Heritage Park has been a sanctuary of peace, beauty, and remembrance.
              As a master-planned memorial community, we are committed to providing Filipino families
              with dignified, compassionate memorial solutions in an environment of natural splendor.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Heritage Park Memorial</p>
              <p>Lawton Ave, Taguig</p>
              <p>Metro Manila, Philippines</p>
              <p className="pt-2">
                <a href="tel:+639178841009" className="text-gold hover:text-gold/80 transition-colors">0917 884 1009</a>
              </p>
              <p>
                <a href="mailto:sales@heritageparktaguig.com" className="text-gold hover:text-gold/80 transition-colors">sales@heritageparktaguig.com</a>
              </p>
              <div className="pt-2">
                <p className="font-semibold text-white/90 text-xs">Office Hours</p>
                <p>Mon–Sat: 8:00 AM – 5:00 PM</p>
                <p>Sun: 9:00 AM – 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Heritage Park. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="text-white/50 hover:text-gold transition-colors" aria-label={social.label}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
