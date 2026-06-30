export default function ContactSections() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Let&apos;s Plan Together</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">No pressure, ever. Just a conversation with someone who truly understands.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    placeholder="+63 912 345 6789"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-primary mb-1">I&apos;m interested in</label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="memorial-properties">Memorial Properties</option>
                    <option value="memorial-services">Memorial Services</option>
                    <option value="just-exploring">Just Exploring</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm resize-y"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <div>
                  <label htmlFor="contact-time" className="block text-sm font-semibold text-primary mb-1">Preferred Contact Time</label>
                  <select
                    id="contact-time"
                    className="w-full px-4 py-3 border border-primary/10 rounded bg-cream text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8AM – 12PM)</option>
                    <option value="afternoon">Afternoon (12PM – 5PM)</option>
                    <option value="evening">Evening (5PM – 8PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
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
                    <p>123 Peaceful Valley Road</p>
                    <p>Manila, Philippines</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gold hover:text-gold/80 transition-colors">(02) 8123 4567</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-1">Email</h3>
                    <a href="mailto:info@heritagepark.ph" className="text-gold hover:text-gold/80 transition-colors">info@heritagepark.ph</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary uppercase tracking-wider text-xs mb-1">Hours</h3>
                    <p>Mon–Sat: 8:00 AM – 5:00 PM</p>
                    <p>Sun: 9:00 AM – 3:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-lg overflow-hidden h-64 flex items-center justify-center border border-primary/5">
                <div className="text-center text-primary/40">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">Map Embed Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
