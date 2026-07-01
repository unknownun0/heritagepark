'use client'

import { useState } from 'react'

const channels = [
  { value: 'gmail', label: 'Gmail', icon: 'gmail' },
  { value: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp' },
  { value: 'viber', label: 'Viber', icon: 'viber' },
  { value: 'messenger', label: 'Messenger', icon: 'messenger' },
]

const icons: Record<string, React.ReactNode> = {
  gmail: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.91 12 9.818l6.545-4.91 1.528-1.418C21.691 2.28 24 3.434 24 5.457z" />
    </svg>
  ),
  whatsapp: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.563 3.43C18.31 1.201 15.356 0 12.125 0 5.592 0 .247 5.345.247 11.878c0 2.092.546 4.139 1.585 5.945L.168 24l6.348-1.658a11.874 11.874 0 0 0 5.609 1.43c6.533 0 11.878-5.345 11.878-11.878 0-3.176-1.236-6.163-3.44-8.464zM12.125 21.56c-1.778 0-3.52-.478-5.034-1.382l-.361-.213-3.766.985 1.007-3.663-.236-.375a9.851 9.851 0 0 1-1.514-5.333c0-5.45 4.433-9.883 9.883-9.883 2.642 0 5.123 1.031 6.988 2.903a9.86 9.86 0 0 1 2.896 7.014c0 5.449-4.434 9.934-9.883 9.934zm5.425-7.427c-.298-.149-1.762-.87-2.035-.97s-.472-.149-.67.149c-.199.298-.769.97-.942 1.17s-.347.223-.645.074c-.298-.149-1.258-.463-2.396-1.479-.886-.79-1.484-1.767-1.658-2.066-.174-.298-.019-.46.13-.609.134-.134.298-.347.447-.521.149-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.67-1.614-.919-2.211-.242-.58-.486-.482-.67-.482s-.596-.022-.915-.022c-.318 0-.834.119-1.27.596-.437.477-1.669 1.631-1.669 3.975s1.708 4.613 1.947 4.931c.238.318 3.363 5.134 8.145 7.197 1.137.491 2.024.784 2.717.999 1.147.357 2.19.275 3.014.167.918-.12 2.843-1.162 3.244-2.284.403-1.122.403-2.084.283-2.284-.12-.2-.447-.322-.745-.471z" />
    </svg>
  ),
  viber: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.398.002C7.613.042 3.299.666 1.056 3.266c-1.127 1.27-1.447 2.829-1.152 4.552.36 2.423 1.335 4.659 2.888 6.46.47.51.756.475.836-.123a21.637 21.637 0 0 1 .076-.72c.08-.453.008-.612-.346-.914-1.026-.942-1.852-2.377-2.221-3.772-.6-2.206-.211-4.047 1.063-5.297C3.472 1.645 6.422.882 10.107.736c3.666-.103 6.192.48 8.004 1.847 2.08 1.544 3.157 4.612 2.269 7.736-.556 1.913-1.723 3.947-3.158 5.051-.56.398-1.014.933-1.147 1.562-.172.758.067 1.122.37 1.523.358.478.86.82 1.365 1.076l.44.226c.62.32 1.213.561 1.852.543 1.41-.06 2.734-1.295 3.668-2.354 2.14-2.526 3.34-5.491 3.134-9.064-.193-3.335-1.865-6.934-4.694-9.013C19.687.383 16.203-.065 11.398.002m.067 13.298c.054.015.108.03.162.038 1.534.451 2.86-.597 3.486-1.96.611-1.39.488-2.935-.225-4.194-.703-1.15-2.588-1.34-3.428-.24-.085.117-.11.163-.128.025-.019-.15-.022-.301-.025-.452-.006-.35-.007-.702-.073-1.047-.067-.362-.198-.73-.443-.984-.266-.254-.578-.4-.943-.468-1.59-.273-2.468.875-2.915 2.04-1.03 1.97-.261 5.063 1.614 6.41 1.043.733 1.957.888 2.918.872z" />
    </svg>
  ),
  messenger: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
    </svg>
  ),
}

export default function ContactSections() {
  const [channel, setChannel] = useState('gmail')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')
  const [contactTime, setContactTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const intro = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AInterest: ${interest}%0APreferred Time: ${contactTime}%0A%0A`
    const fullMsg = `${intro}${message}`

    switch (channel) {
      case 'gmail':
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sales@heritageparktaguig.com&su=Inquiry%20from%20${encodeURIComponent(name)}&body=${fullMsg}`, '_blank')
        break
      case 'whatsapp':
        window.open(`https://wa.me/639178841009?text=${fullMsg}`, '_blank')
        break
      case 'viber':
        window.open(`viber://pa?chatURI=heritagepark&text=${fullMsg}`, '_blank')
        break
      case 'messenger':
        window.open(`https://m.me/heritageparktaguigph?text=${fullMsg}`, '_blank')
        break
    }
  }

  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/contact-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Let&apos;s Plan Together</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">No pressure, ever. Just a conversation with someone who truly understands.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    placeholder="+63 912 345 6789"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-primary mb-1">I&apos;m interested in</label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Memorial Properties">Memorial Properties</option>
                    <option value="Memorial Services">Memorial Services</option>
                    <option value="Just Exploring">Just Exploring</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm resize-y"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-time" className="block text-sm font-semibold text-primary mb-1">Preferred Contact Time</label>
                  <select
                    id="contact-time"
                    value={contactTime}
                    onChange={(e) => setContactTime(e.target.value)}
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="Morning (8AM – 12PM)">Morning (8AM – 12PM)</option>
                    <option value="Afternoon (12PM – 5PM)">Afternoon (12PM – 5PM)</option>
                    <option value="Evening (5PM – 8PM)">Evening (5PM – 8PM)</option>
                    <option value="Anytime">Anytime</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">Send via</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {channels.map((ch) => (
                      <button
                        key={ch.value}
                        type="button"
                        onClick={() => setChannel(ch.value)}
                        className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-lg border text-xs font-medium transition-all ${
                          channel === ch.value
                            ? 'bg-gold/10 border-gold text-primary'
                            : 'bg-cream border-primary/10 text-primary/60 hover:border-gold/30'
                        }`}
                      >
                    {icons[ch.icon]}
                    {ch.label}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-moss italic font-accent">No pressure, ever. Just a conversation.</p>
                <button
                  type="submit"
                  className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div className="bg-cream rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Visit or Reach Us</h2>
                <div className="space-y-5 text-sm text-primary/70">
                  <div>
                    <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-1">Address</h3>
                    <p>Heritage Park Memorial</p>
                    <p>Lawton Ave, Taguig</p>
                    <p>Metro Manila, Philippines</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-1">Phone</h3>
                    <a href="tel:+639178841009" className="text-gold hover:text-gold/80 transition-colors">0917 884 1009</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-1">Email</h3>
                    <a href="mailto:sales@heritageparktaguig.com" className="text-gold hover:text-gold/80 transition-colors">sales@heritageparktaguig.com</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-1">Hours</h3>
                    <p>Mon–Sat: 8:00 AM – 5:00 PM</p>
                    <p>Sun: 9:00 AM – 3:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/wft18AKdizcAjY5u7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream rounded-lg overflow-hidden h-64 flex items-center justify-center border border-primary/5 hover:border-gold/30 transition-colors group"
              >
                <div className="text-center text-primary/40 group-hover:text-gold transition-colors">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">Open in Google Maps</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
