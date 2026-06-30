export default function AboutSections() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/about-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">About Heritage Park</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">A Legacy of Dignity &amp; Peace</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">For generations, Heritage Park has stood as a sanctuary where families find comfort, beauty, and lasting remembrance.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">More Than a Cemetery — A Master-Planned Memorial Community</h2>
          </div>
          <div className="space-y-6 text-primary/70 leading-relaxed">
            <p>
              Heritage Park was envisioned as something different — not simply a cemetery, but a thoughtfully designed memorial
              community where nature, architecture, and remembrance exist in harmony. Every pathway, garden, and chapel was
              planned with the intention of creating a space that honors life while offering solace to those who visit.
            </p>
            <p>
              Unlike traditional cemeteries, Heritage Park is a master-planned memorial park. Wide landscaped avenues,
              serene water features, and meticulously maintained gardens set the tone for a place that feels more like a
              botanical park than a burial ground. Families are invited to walk, reflect, and connect with their heritage
              in an environment of lasting beauty.
            </p>
            <p>
              From columbary niches to family estates, every interment option is designed to provide a dignified,
              permanent resting place that future generations can visit with pride. This is a place worth planning for.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Guided by Education, Never Pressure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg p-8 border border-primary/5">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                To help Filipino families make informed, dignified decisions about memorial planning — with complete
                transparency, compassionate guidance, and zero sales pressure. We believe knowledge empowers families
                to choose what is right for them.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-primary/5">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                A Philippines where every family has the peace of mind that comes from planning ahead. We envision a
                future that honors cultural traditions, protects loved ones from burden, and creates lasting memorials
                that bring generations together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Pompa &amp; Associates</h2>
          <p className="text-primary/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Heritage Park is exclusively represented by Pompa &amp; Associates, a trusted partner of PhilPlans —
            the Philippines&apos; largest and most established pre-need plan provider. Together, we bring decades of
            experience in memorial planning, with a shared commitment to integrity, transparency, and genuine care for
            the families we serve.
          </p>
          <p className="text-primary/70 leading-relaxed max-w-3xl mx-auto">
            Our consultants are not salespeople — they are educators and guides who take the time to understand each
            family&apos;s unique needs, beliefs, and financial situation. Every recommendation is made with your best
            interests at heart.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Your Consultants</h2>
          <p className="text-primary/60 mb-8 max-w-2xl mx-auto">
            Our dedicated team of memorial planning professionals is ready to guide you with compassion, expertise,
            and respect.
          </p>
          <a
            href="/find-a-consultant"
            className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors"
          >
            Meet Our Consultants
          </a>
        </div>
      </section>
    </>
  )
}
