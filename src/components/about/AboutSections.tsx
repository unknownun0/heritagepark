import { getPageContent } from '@/lib/content'

export default async function AboutSections() {
 const subtitle = await getPageContent('about', 'subtitle', 'A Legacy of Dignity & Peace')
 const heroDesc = await getPageContent('about', 'hero_desc', 'For generations, Heritage Park has stood as a sanctuary where families find comfort, beauty, and lasting remembrance.')
 const storyTitle = await getPageContent('about', 'story_title', 'More Than a Cemetery A masterplanned Memorial Community')
 const visionTitle = await getPageContent('about', 'vision_title', 'A masterplanned Memorial Community')
 const philosophyTitle = await getPageContent('about', 'philosophy_title', 'Guided by Education, Never Pressure')

 return (
  <>
   <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
    <div className="absolute inset-0 bg-[url(/images/about-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 text-center px-4">
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">About Heritage Park</p>
     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{subtitle}</h1>
     <p className="text-white/70 max-w-2xl mx-auto text-lg">{heroDesc}</p>
    </div>
   </section>

   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Story</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{storyTitle}</h2>
     </div>
     <div className="space-y-6 text-primary/70 leading-relaxed">
      <p>
       Heritage Park was envisioned as something different not simply a cemetery, but a thoughtfully designed memorial
       community where nature, architecture, and remembrance exist in harmony. Every pathway, garden, and chapel was
       planned with the intention of creating a space that honors life while offering solace to those who visit.
      </p>
      <p>
       Unlike traditional cemeteries, Heritage Park is a masterplanned memorial park. Wide landscaped avenues,
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
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Vision</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{visionTitle}</h2>
     </div>
     <div className="text-primary/60 text-sm leading-relaxed space-y-5 max-w-3xl mx-auto">
      <p>
       Heritage Park was designed from the ground up as a masterplanned memorial community not a traditional cemetery. Every pathway, garden, and sanctuary was thoughtfully laid out to create an environment of peace, dignity, and natural beauty.
      </p>
      <p>
       The park is organized into distinct sections connected by a network of paved roads and walking paths. Landscaped gardens with indigenous flowering trees provide shade and color throughout the year. Each zone has its own character from the open lawns of the Garden lots to the intimate garden settings of our estate areas.
      </p>
      <p>
       Central to the park is the Aeternum columbary complex, an indoor sanctuary of elegance, and the Heritage Chapel, designed for intimate family services. The Nacional Memorial section stands as a tribute to the nation&apos;s heritage, while Reflection Lake offers a quiet place for contemplation.
      </p>
     </div>
    </div>
   </section>

   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Philosophy</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{philosophyTitle}</h2>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white rounded-lg p-8 border border-primary/5">
       <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
       <p className="text-sm text-primary/60 leading-relaxed">
        To help Filipino families make informed, dignified decisions about memorial planning with complete
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


  </>
 )
}
