export default function ActionBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white/60 text-[11px]">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-end gap-4">
        <span>Mon–Sat 8AM–5PM</span>
        <span className="hidden sm:inline">|</span>
        <a href="tel:+1234567890" className="hidden sm:inline hover:text-gold transition-colors">(02) 8123 4567</a>
      </div>
    </div>
  )
}
