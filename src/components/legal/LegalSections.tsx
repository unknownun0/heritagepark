const privacyContent = {
  title: 'Privacy Policy',
  sections: [
    {
      heading: 'Introduction',
      body: `Heritage Park ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. It covers our use of Google services (Google Fonts, Google Maps, and Gmail) and details how your data is protected when transmitted through these platforms. This policy complies with the Data Privacy Act of 2012 (Republic Act No. 10173) of the Philippines.`,
    },
    {
      heading: 'Information We Collect',
      body: `We collect personal information when you inquire about our memorial properties and services, request a consultation, download resources, or contact us through our website. This includes your full name, email address, phone number, mailing address, and any details you share about your planning needs. When you use our contact form, your message is transmitted through Gmail (Google's email service) — Google processes this data under their privacy policy, and we recommend you avoid sending sensitive personal information such as government IDs or financial account numbers through the contact form. We also collect non-personal data such as browser type, device information, and usage patterns to improve your experience.`,
    },
    {
      heading: 'Google Services We Use',
      body: `This website integrates the following Google services: (1) Google Fonts — typography is loaded via next/font/google from Google's servers; your browser requests font files, which may transmit your IP address to Google. (2) Google Maps — embedded maps on our Contact and Nacional pages load from Google's servers; Google may set cookies and collect usage data when you interact with these maps. (3) Gmail — our contact form opens a compose window in Gmail to send your inquiry to sales@heritageparktaguig.com; your message and contact details are transmitted through and stored on Google's servers. We do not control Google's data practices. We recommend reviewing Google's Privacy Policy at policies.google.com/privacy for more information on how Google processes data.`,
    },
    {
      heading: 'How We Use Your Information',
      body: `The information you provide is used solely to respond to your inquiries, schedule consultations, provide educational resources, and deliver the memorial planning services you request. We may also use your contact details to send relevant updates about Heritage Park offerings, events, or planning guides only if you have opted in to receive communications. Your data will never be sold to third parties.`,
    },
    {
      heading: 'Information Sharing',
      body: `We may share your personal information with our authorized sales consultants and partner agencies strictly for purposes related to your memorial planning needs. Heritage Park does not sell, trade, or rent your personal data to external organizations for their marketing purposes. When you contact us via Gmail, your data is processed and stored on Google's infrastructure, which may involve transfer to servers outside the Philippines subject to Google's own security and compliance measures. We may disclose information when required by law, such as in response to a court order or regulatory requirement from the Insurance Commission or other government authority.`,
    },
    {
      heading: 'Cookies and Tracking',
      body: `Our website uses minimal cookies necessary for basic functionality. Google Maps embeds may set third-party cookies from Google for map functionality and analytics. Google Fonts may log IP addresses for diagnostic purposes. You may control cookie preferences through your browser settings. Disabling cookies may affect certain features such as interactive maps but will not prevent you from accessing our core content or contacting us through other channels.`,
    },
    {
      heading: 'Data Protection and Security',
      body: `We implement reasonable administrative, technical, and physical security measures to protect your personal information. Our website is served over HTTPS (TLS encryption), ensuring all data transmitted between your browser and our server is encrypted. Contact form submissions routed through Gmail are protected by Google's own security infrastructure, including encryption in transit and at rest. Within our organization, access to personal data is restricted to authorized personnel only. While no system is completely infallible, we are committed to maintaining high standards of data protection in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173).`,
    },
    {
      heading: 'Your Rights',
      body: `Under the Data Privacy Act of 2012, you have the right to access, correct, update, or request deletion of your personal information held by Heritage Park. You may also withdraw your consent to data processing at any time. To exercise these rights or raise any concerns about your data privacy, please contact our Data Protection Officer using the information below.`,
    },
    {
      heading: 'Changes to This Policy',
      body: `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the Google services we use. The "Last updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically.`,
    },
    {
      heading: 'Contact Us',
      body: `For questions about this Privacy Policy or to exercise your data privacy rights, you may reach us at: sales@heritageparktaguig.com or 0917 884 1009. You may also write to our Data Protection Officer at Heritage Park, Quezon City, Philippines.`,
    },
  ],
}

const termsContent = {
  title: 'Terms of Use',
  sections: [
    {
      heading: 'Acceptance of Terms',
      body: 'By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of this site immediately. Heritage Park reserves the right to update or modify these terms at any time without prior notice. Continued use of the website after any changes constitutes your acceptance of the updated terms.',
    },
    {
      heading: 'Products and Services',
      body: 'All memorial properties, service plans, and products described on this website are offered subject to availability and applicable terms and conditions. Heritage Park and Pompa & Associates reserve the right to modify, suspend, or discontinue any product or service offering at any time. Prices listed on this website are for reference purposes only and may change without notice. Confirmed pricing will be provided during consultation and reflected in your formal agreement.',
    },
    {
      heading: 'Payments and Installment Plans',
      body: 'Payment terms for memorial properties and pre-need plans are governed by the specific contract entered into between the client and Heritage Park. All payments are subject to the terms outlined in the plan agreement, including schedule, interest rates (if any), and penalties for late or missed payments. Full payment of the plan ensures delivery of the contracted services and properties. Pre-need plans are trust-funded in accordance with Insurance Commission regulations.',
    },
    {
      heading: 'Limitations of Liability',
      body: 'Heritage Park and Pompa & Associates shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website or the services provided herein. This includes but is not limited to damages for loss of data, profits, or business interruption. The content on this website is provided for informational purposes only and does not constitute legal, financial, or professional advice.',
    },
    {
      heading: 'Intellectual Property',
      body: 'All content on this website, including text, images, graphics, logos, and design elements, is the property of Heritage Park or its licensors and is protected by Philippine intellectual property laws. No part of this website may be reproduced, distributed, or transmitted without prior written permission from Heritage Park.',
    },
    {
      heading: 'Governing Law',
      body: 'These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising from the use of this website or the services provided shall be subject to the exclusive jurisdiction of the courts of Quezon City, Philippines.',
    },
    {
      heading: 'Contact Information',
      body: 'For questions or concerns regarding these Terms of Use, please contact us at sales@heritageparktaguig.com or 0917 884 1009.',
    },
  ],
}

export default function LegalSections({ type }: { type: 'privacy' | 'terms' }) {
  const data = type === 'privacy' ? privacyContent : termsContent

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/legal-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{data.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-primary/40 mb-8">Last updated: July 2026</p>
          <div className="space-y-8">
            {data.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-primary mb-3">{section.heading}</h2>
                <p className="text-sm text-primary/70 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
