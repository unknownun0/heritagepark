export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  topicId: string
  topic: string
  lang: 'EN' | 'TL'
  image: string
  readTime: string
  content: string[]
  relatedSlugs: string[]
}

export const topicFilters: { id: string; label: string }[] = [
  { id: 'all', label: 'All Topics' },
  { id: 'planning', label: 'Planning Basics' },
  { id: 'properties', label: 'Memorial Properties' },
  { id: 'costs', label: 'Costs & Payment' },
  { id: 'grief', label: 'Grief & Support' },
  { id: 'culture', label: 'Culture & Tradition' },
]

export const topicMap: Record<string, string> = {
  planning: 'Planning Basics',
  properties: 'Memorial Properties',
  costs: 'Costs & Payment',
  grief: 'Grief & Support',
  culture: 'Culture & Tradition',
}

const blogPosts: BlogPost[] = [
  {
    slug: 'what-you-need-to-know-about-pre-need-plans',
    title: 'What You Need to Know About Pre-Need Plans',
    excerpt: 'A comprehensive guide to understanding pre-need memorial plans and how they protect your family.',
    topicId: 'planning',
    topic: 'Planning Basics',
    lang: 'EN',
    image: '/images/blog-planning.jpg',
    readTime: '6 min read',
    content: [
      'Pre-need memorial plans are one of the most thoughtful gifts you can give your family. By planning ahead, you lock in today&apos;s prices, ensure your wishes are honored, and spare your loved ones the burden of making difficult decisions during a time of grief.',
      'In the Philippines, pre-need plans are regulated by the Insurance Commission, providing strong consumer protections. Every plan is backed by a trust fund that guarantees the delivery of services and properties as promised, regardless of economic changes.',
      'When you purchase a pre-need plan at Heritage Park, you are not just buying a memorial lot or service — you are investing in peace of mind. Flexible payment terms make it accessible for every family, with terms ranging from 1 to 5 years.',
      'Whether you choose a lawn lot, garden lot, estate lot, or a complete service package, planning ahead ensures that your family will never have to worry about unexpected expenses or rushed decisions.',
    ],
    relatedSlugs: ['cost-comparison-pre-need-vs-at-need', 'understanding-memorial-trust-funds'],
  },
  {
    slug: 'gabay-sa-pagpili-ng-tamang-memorial-lot',
    title: 'Gabay sa Pagpili ng Tamang Memorial Lot',
    excerpt: 'Mga dapat isaalang-alang sa pagpili ng memorial lot para sa inyong pamilya.',
    topicId: 'properties',
    topic: 'Memorial Properties',
    lang: 'TL',
    image: '/images/blog-lot.jpg',
    readTime: '5 min read',
    content: [
      'Ang pagpili ng tamang memorial lot ay isang mahalagang desisyon para sa bawat pamilyang Pilipino. Narito ang ilang mga gabay upang matulungan kayo sa inyong pagpili.',
      'Una, isaalang-alang ang lokasyon. Gusto niyo ba ng isang lugar na madaling puntahan ng pamilya? Ang Heritage Park ay may maginhawang lokasyon na accessible mula sa major roads sa Metro Manila at Cavite.',
      'Pangalawa, tingnan ang uri ng lot na babagay sa inyong pangangailangan. May mga lawn lot para sa simple at natural na setting, garden lot para sa mas pormal na hardin, at estate lot para sa mas malaking espasyo.',
      'Pangatlo, isipin ang inyong badyet. Ang Heritage Park ay nag-aalok ng flexible payment terms upang gawing abot-kaya ang pagpaplano para sa bawat pamilya.',
    ],
    relatedSlugs: ['cost-comparison-pre-need-vs-at-need', 'filipino-traditions-of-remembering'],
  },
  {
    slug: 'cost-comparison-pre-need-vs-at-need',
    title: 'Cost Comparison: Pre-Need vs. At-Need Arrangements',
    excerpt: 'Understand the financial impact of planning ahead versus unexpected expenses.',
    topicId: 'costs',
    topic: 'Costs & Payment',
    lang: 'EN',
    image: '/images/blog-costs.jpg',
    readTime: '7 min read',
    content: [
      'The difference between pre-need and at-need pricing can be substantial. When you plan ahead, you lock in today&apos;s rates and protect your family from annual price increases that typically range from 5% to 10% per year.',
      'Pre-need plans at Heritage Park offer 0% interest on 1-year terms, making it possible to secure your family&apos;s memorial arrangements with no additional cost beyond the current price. Longer terms of 2 to 5 years carry minimal interest that is still far less than the annual price increases.',
      'In contrast, at-need arrangements mean your family pays the full current price at the time of need, with no opportunity to lock in lower rates. This can result in significantly higher costs, especially if several years have passed since the family first considered planning.',
      'Beyond the financial aspect, pre-need planning gives your family the gift of time — time to grieve without the pressure of making hurried decisions and time to focus on honoring your life rather than worrying about expenses.',
    ],
    relatedSlugs: ['what-you-need-to-know-about-pre-need-plans', 'the-true-cost-of-memorial-services'],
  },
  {
    slug: 'paano-makakayanan-ang-pagdadalamhati',
    title: 'Paano Makakayanan ang Pagdadalamhati',
    excerpt: 'Mga paraan upang harapin ang pagdadalamhati at suportahan ang bawat isa bilang pamilya.',
    topicId: 'grief',
    topic: 'Grief & Support',
    lang: 'TL',
    image: '/images/blog-grief.jpg',
    readTime: '5 min read',
    content: [
      'Ang pagdadalamhati ay isang natural at personal na proseso. Bawat tao ay may kanya-kanyang paraan ng pagharap sa pagkawala ng isang mahal sa buhay.',
      'Mahalaga na bigyan ang iyong sarili ng panahon upang magdalamhati. Huwag madaliin ang proseso — ang pagdadalamhati ay walang takdang panahon. Payagan ang iyong sarili na maramdaman ang iba&apos;t ibang emosyon na kaakibat ng pagkawala.',
      'Ang suporta ng pamilya at mga kaibigan ay napakahalaga sa panahon ng pagdadalamhati. Huwag matakot na humingi ng tulong o makipag-usap sa mga taong pinagkakatiwalaan mo. Ang pagbabahagi ng iyong nararamdaman ay makatutulong sa proseso ng paggaling.',
      'Ang Heritage Park ay may mga mapagkukunan at suporta para sa mga pamilyang nagdadalamhati. Maaari kayong makipag-ugnayan sa amin para sa gabay at tulong sa mga panahong ito.',
    ],
    relatedSlugs: ['filipino-traditions-of-remembering', 'the-healing-power-of-nature'],
  },
  {
    slug: 'filipino-traditions-of-remembering',
    title: 'Filipino Traditions of Remembering Our Loved Ones',
    excerpt: 'Exploring the rich cultural heritage of remembrance practices in the Philippines.',
    topicId: 'culture',
    topic: 'Culture & Tradition',
    lang: 'EN',
    image: '/images/blog-culture.jpg',
    readTime: '6 min read',
    content: [
      'The Filipino culture is rich with traditions that honor and remember loved ones who have passed. From Undas (All Saints&apos; Day and All Souls&apos; Day) to death anniversaries, these practices strengthen family bonds and keep memories alive.',
      'One of the most beloved traditions is the celebration of Undas every November 1 and 2. Families travel from all over the country to visit cemeteries, clean and decorate graves, light candles, and pray together. It is a time of reunion as much as remembrance.',
      'Pasyon, or the chanting of the passion of Christ, is another tradition that some families incorporate into their remembrance practices. Nine-day novenas, monthly prayers, and annual memorial masses are also common ways Filipino families honor their departed.',
      'At Heritage Park, we honor these traditions by providing spaces that accommodate family gatherings, prayer services, and annual remembrance activities. Our memorial parks are designed to be places of living memory — where families can gather, reflect, and celebrate the lives of their loved ones.',
    ],
    relatedSlugs: ['what-you-need-to-know-about-pre-need-plans', 'gabay-sa-pagpili-ng-tamang-memorial-lot'],
  },
  {
    slug: 'the-true-cost-of-memorial-services',
    title: 'The True Cost of Memorial Services in the Philippines',
    excerpt: 'A transparent breakdown of memorial service costs and payment options available.',
    topicId: 'costs',
    topic: 'Costs & Payment',
    lang: 'EN',
    image: '/images/blog-costs2.jpg',
    readTime: '8 min read',
    content: [
      'Understanding the true cost of memorial services helps families make informed decisions. In the Philippines, memorial costs can vary widely depending on the type of service, location, and inclusions.',
      'A typical memorial service package may include chapel rental, memorial service coordination, basic casket or urn, embalming and preparation, use of hearsay vehicle, and documentation assistance. Premium packages may offer additional features such as floral arrangements, catering, and memorial markers.',
      'At Heritage Park, we believe in full transparency. Our service plans are designed with clear inclusions and no hidden fees. Payment options include spot cash with discounts, annual, semi-annual, quarterly, and monthly installments to accommodate every family&apos;s budget.',
      'By choosing a pre-need memorial service plan, you protect your family from future price increases and ensure that all arrangements are exactly as you envisioned them.',
    ],
    relatedSlugs: ['cost-comparison-pre-need-vs-at-need', 'understanding-memorial-trust-funds'],
  },
  {
    slug: 'understanding-memorial-trust-funds',
    title: 'Understanding Memorial Trust Funds',
    excerpt: 'How trust funds protect your pre-need investment and ensure funds are used as intended.',
    topicId: 'planning',
    topic: 'Planning Basics',
    lang: 'EN',
    image: '/images/blog-planning.jpg',
    readTime: '5 min read',
    content: [
      'When planning for the future, one of the most important questions Filipino families ask is how their pre-need investment will be protected. Memorial trust funds are designed to do exactly that — they safeguard the money you set aside so that it is available exactly when your family needs it.',
      'In the Philippines, memorial trust funds are regulated by the Insurance Commission and operate under strict guidelines. Every pre-need plan you purchase is required by law to have a corresponding trust fund that covers the full cost of the services and properties promised.',
      'What does this mean for you? It means peace of mind. When you choose a trusted memorial park like Heritage Park, your payments go into a trust that ensures your chosen lot, service plan, or columbary niche will be delivered as promised.',
    ],
    relatedSlugs: ['what-you-need-to-know-about-pre-need-plans', 'cost-comparison-pre-need-vs-at-need'],
  },
  {
    slug: 'choosing-between-burial-and-cremation',
    title: 'Choosing Between Burial and Cremation',
    excerpt: 'A balanced look at the considerations for each option.',
    topicId: 'planning',
    topic: 'Planning Basics',
    lang: 'EN',
    image: '/images/blog-planning.jpg',
    readTime: '5 min read',
    content: [
      'The choice between burial and cremation is deeply personal and often influenced by cultural, religious, and practical considerations. Both options have their own merits, and understanding them can help families make the right decision.',
      'Burial offers a physical place for families to visit and pay respects. It aligns with traditional Filipino practices of visiting gravesites during Undas and other special occasions. Heritage Park offers beautifully maintained lots for traditional burials.',
      'Cremation has become increasingly accepted in the Philippines, offering flexibility in memorialization. Cremated remains can be kept in columbary niches, scattered in meaningful locations, or kept with the family. Our Aeternum Columbary provides an elegant indoor sanctuary for cremation memorials.',
    ],
    relatedSlugs: ['filipino-traditions-of-remembering', 'gabay-sa-pagpili-ng-tamang-memorial-lot'],
  },
  {
    slug: 'the-healing-power-of-nature',
    title: 'The Healing Power of Nature in Grief',
    excerpt: 'How spending time in natural settings can support the grieving process.',
    topicId: 'grief',
    topic: 'Grief & Support',
    lang: 'EN',
    image: '/images/blog-grief.jpg',
    readTime: '4 min read',
    content: [
      'Nature has a remarkable ability to comfort and heal. Studies have shown that spending time in green spaces can reduce stress, improve mood, and support emotional well-being — benefits that are especially valuable during the grieving process.',
      'At Heritage Park, our memorial gardens are designed with this understanding. Lush landscapes, flowering pathways, tranquil water features, and shaded resting areas create an environment where families can find moments of peace and reflection.',
      'Whether you are visiting a loved one&apos;s resting place or simply taking a quiet walk through the gardens, nature offers a gentle reminder of life&apos;s enduring beauty and the cycle of renewal.',
    ],
    relatedSlugs: ['paano-makakayanan-ang-pagdadalamhati', 'filipino-traditions-of-remembering'],
  },
  {
    slug: 'the-role-of-memorials-in-filipino-culture',
    title: 'The Role of Memorials in Filipino Culture',
    excerpt: 'How our traditions of remembering shape modern memorial practices.',
    topicId: 'culture',
    topic: 'Culture & Tradition',
    lang: 'EN',
    image: '/images/blog-culture.jpg',
    readTime: '6 min read',
    content: [
      'In Filipino culture, memorials are more than markers of where our loved ones rest — they are tangible connections to family history, identity, and heritage. They serve as gathering places where stories are shared, traditions are passed down, and bonds are strengthened.',
      'The Filipino value of utang na loob (debt of gratitude) extends even beyond death. Families feel a deep sense of responsibility to honor their departed loved ones with dignity, and memorials are a physical expression of this commitment.',
      'Modern memorial practices in the Philippines blend traditional Catholic and indigenous customs with contemporary design. Heritage Park embraces this cultural richness by offering spaces that honor both tradition and modernity.',
    ],
    relatedSlugs: ['filipino-traditions-of-remembering', 'what-you-need-to-know-about-pre-need-plans'],
  },
  {
    slug: 'mga-karapatan-ng-mamimili-sa-pre-need-plans',
    title: 'Mga Karapatan ng Mamimili sa Pre-Need Plans',
    excerpt: 'Alamin ang inyong mga karapatan bilang mamimili ng pre-need memorial plans.',
    topicId: 'planning',
    topic: 'Planning Basics',
    lang: 'TL',
    image: '/images/blog-planning.jpg',
    readTime: '5 min read',
    content: [
      'Bilang mamimili ng pre-need memorial plans, mayroon kayong mga karapatan na protektado ng batas. Mahalagang malaman ang mga ito upang makagawa ng tamang desisyon para sa inyong pamilya.',
      'Ang Insurance Commission ng Pilipinas ang nagreregula sa mga pre-need plans. Bawat plan ay dapat may trust fund na sumasaklaw sa buong halaga ng mga serbisyo at ari-arian na ipinangako sa kontrata.',
      'May karapatan kayong makatanggap ng malinaw at kumpletong impormasyon tungkol sa inyong plan, kasama na ang mga termino, kondisyon, at mga bayarin. Ang Heritage Park ay nakatuon sa transparency at pagbibigay ng tamang impormasyon sa bawat pamilya.',
    ],
    relatedSlugs: ['gabay-sa-pagpili-ng-tamang-memorial-lot', 'understanding-memorial-trust-funds'],
  },
  {
    slug: 'pagpili-ng-tamang-memorial-lot-para-sa-pamilya',
    title: 'Pagpili ng Tamang Memorial Lot para sa Pamilya',
    excerpt: 'Gabay sa pagpili ng loteng babagay sa pangangailangan ng inyong pamilya.',
    topicId: 'properties',
    topic: 'Memorial Properties',
    lang: 'TL',
    image: '/images/blog-lot.jpg',
    readTime: '6 min read',
    content: [
      'Ang pagpili ng memorial lot ay isang desisyong pangmatagalan. Narito ang isang komprehensibong gabay upang matulungan kayo at ang inyong pamilya.',
      'Isipin ang inyong pangangailangan sa hinaharap. Gaano karaming tao ang maaaring magpahinga sa inyong lot? Ang Heritage Park ay may iba&apos;t ibang laki ng lot — mula sa lawn lots hanggang sa mas malalaking estate lots.',
      'Tingnan din ang mga amenities at serbisyo na kasama sa inyong plan. Ang Heritage Park ay nag-aalok ng 24/7 security, regular maintenance, chapel access, at iba pang serbisyo para sa inyong pamilya.',
    ],
    relatedSlugs: ['gabay-sa-pagpili-ng-tamang-memorial-lot', 'the-true-cost-of-memorial-services'],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => p !== undefined)
}

export function getFilteredPosts(topicId: string): BlogPost[] {
  return topicId === 'all' ? blogPosts : blogPosts.filter((p) => p.topicId === topicId)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export default blogPosts
