export default function HeroSection() {
 return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
   <video autoPlay muted loop playsInline poster="/images/chapel.jpg" className="absolute inset-0 w-full h-full object-cover">
    <source src="/videos/heritagepark.mp4" type="video/mp4" />
   </video>
  </section>
 )
}
