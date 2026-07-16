'use client'

import { useState } from 'react'

const channels = [
 {
  id: 'messenger',
  label: 'Messenger',
  color: '#0084FF',
  href: (body: string) => `https://m.me/heritageparktaguigph?text=${body}`,
 },
 {
  id: 'whatsapp',
  label: 'WhatsApp',
  color: '#25D366',
  href: (body: string) => `https://wa.me/639178841009?text=${body}`,
 },
 {
  id: 'viber',
  label: 'Viber',
  color: '#7360F2',
  href: (_body: string) => 'viber://pa?chatURI=heritagepark',
 },
 {
  id: 'gmail',
  label: 'Gmail',
  color: '#EA4335',
  href: (body: string) =>
   `mailto:sales@heritageparktaguig.com?subject=Inquiry from Heritage Park Website&body=${body.replace(/%0A/g, '\n')}`,
 },
]

export default function FloatingChat() {
 const [open, setOpen] = useState(false)
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [phone, setPhone] = useState('')
 const [message, setMessage] = useState('')
 const [sending, setSending] = useState<string | null>(null)

 const handleChannel = (channel: (typeof channels)[0]) => {
  const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`
  window.open(channel.href(body), '_blank')
  setOpen(false)
  setName('')
  setEmail('')
  setPhone('')
  setMessage('')
 }

 const panel = (
  <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-slide-up border border-gray-100">
   <div className="bg-primary px-5 py-4 text-white">
    <p className="font-semibold text-sm">Chat with us</p>
    <p className="text-xs text-white/80">We&apos;d love to hear from you</p>
   </div>
   <div className="p-4 space-y-3">
      <input
       type="text"
       placeholder="Your name"
       value={name}
       onChange={(e) => setName(e.target.value)}
       required
       className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
      />
      <input
       type="email"
       placeholder="Email address"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
       className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
      />
      <input
       type="tel"
       placeholder="Phone number"
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
       required
       className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
      />
      <textarea
       placeholder="Your message..."
       rows={3}
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       required
       className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
      />
      <div className="grid grid-cols-2 gap-2 pt-1">
       {channels.map((ch) => (
        <button
         key={ch.id}
         onClick={() => handleChannel(ch)}
         style={{ backgroundColor: ch.color }}
         className="text-white text-xs font-semibold py-2.5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
        >
         {ch.id === 'messenger' && (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0z" />
          </svg>
         )}
         {ch.id === 'whatsapp' && (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
         )}
         {ch.id === 'viber' && (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
           <path d="M11.398.002C7.888-.151 5.14.912 3.005 2.778 1.466 4.156.227 6.174.096 9.003c-.063 1.357.457 2.807.64 3.951.328 2.097 1.124 3.924 2.576 5.262.253.233.405.347.479.784.053.311.058.642.086.963.065.735.295 1.44.663 2.085.116.204.347.428.588.37.232-.055.334-.31.408-.517.168-.473.255-.97.343-1.46.03-.165.146-.426.316-.458.19-.036.371.12.532.205a6.19 6.19 0 003.174.88c1.563.038 3.074-.26 4.467-.926 2.267-1.08 3.967-2.725 5.15-4.862.572-1.034.963-2.13 1.134-3.306.27-1.86.04-3.616-.716-5.336-.656-1.48-1.65-2.685-2.984-3.585-1.603-1.088-3.444-1.645-5.362-1.733m2.567 3.915c3.787.459 5.77 2.904 6.007 6.817.052.868-.047 1.722-.293 2.557a.586.586 0 01-.715.403.574.574 0 01-.39-.72c.4-1.318.365-2.626.023-3.931-.43-1.639-1.365-2.766-2.936-3.47a.58.58 0 01-.308-.767.592.592 0 01.612-.389z" />
          </svg>
         )}
         {ch.id === 'gmail' && (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
           <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.91 12 9.548l6.545-4.637 1.528-1.418C21.691 2.28 24 3.434 24 5.457z" />
          </svg>
         )}
         {ch.label}
        </button>
       ))}
      </div>
     </div>
  </div>
 )

 return (
  <>
   {open && (
    <>
     <div className="fixed inset-0 z-50 bg-black/50 sm:hidden" onClick={() => setOpen(false)} />
     <div className="sm:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
       {panel}
      </div>
     </div>
    </>
   )}

   <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end gap-3">
    {open && panel}
    <button
     onClick={() => setOpen(!open)}
     className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
     aria-label={open ? 'Close chat' : 'Contact us'}
    >
     {open ? (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
     ) : (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
     </svg>
     )}
    </button>
   </div>

   <button
    onClick={() => setOpen(!open)}
    className="sm:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
    aria-label={open ? 'Close chat' : 'Contact us'}
   >
    {open ? (
     <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
     </svg>
    ) : (
     <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
     </svg>
    )}
   </button>
  </>
 )
}
