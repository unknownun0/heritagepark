export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  topicId: string
  topic: string
  lang: 'EN'
  image: string
  readTime: string
  content: string[]
  relatedSlugs: string[]
  featured?: boolean
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
    featured: true,
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
    slug: 'cost-comparison-pre-need-vs-at-need',
    title: 'Cost Comparison: Pre-Need vs. At-Need Arrangements',
    excerpt: 'Understand the financial impact of planning ahead versus unexpected expenses.',
    topicId: 'costs',
    topic: 'Costs & Payment',
    lang: 'EN',
    featured: true,
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
    slug: 'filipino-traditions-of-remembering',
    title: 'Filipino Traditions of Remembering Our Loved Ones',
    excerpt: 'Exploring the rich cultural heritage of remembrance practices in the Philippines.',
    topicId: 'culture',
    topic: 'Culture & Tradition',
    lang: 'EN',
    featured: true,
    image: '/images/blog-culture.jpg',
    readTime: '6 min read',
    content: [
      'The Filipino culture is rich with traditions that honor and remember loved ones who have passed. From Undas (All Saints&apos; Day and All Souls&apos; Day) to death anniversaries, these practices strengthen family bonds and keep memories alive.',
      'One of the most beloved traditions is the celebration of Undas every November 1 and 2. Families travel from all over the country to visit cemeteries, clean and decorate graves, light candles, and pray together. It is a time of reunion as much as remembrance.',
      'Pasyon, or the chanting of the passion of Christ, is another tradition that some families incorporate into their remembrance practices. Nine-day novenas, monthly prayers, and annual memorial masses are also common ways Filipino families honor their departed.',
      'At Heritage Park, we honor these traditions by providing spaces that accommodate family gatherings, prayer services, and annual remembrance activities. Our memorial parks are designed to be places of living memory — where families can gather, reflect, and celebrate the lives of their loved ones.',
    ],
    relatedSlugs: ['what-you-need-to-know-about-pre-need-plans', 'the-role-of-memorials-in-filipino-culture'],
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
    relatedSlugs: ['filipino-traditions-of-remembering', 'the-role-of-memorials-in-filipino-culture'],
  },
  {
    slug: 'the-healing-power-of-nature',
    title: 'The Healing Power of Nature in Grief',
    excerpt: 'How spending time in natural settings can support the grieving process.',
    topicId: 'grief',
    topic: 'Grief & Support',
    lang: 'EN',
    featured: true,
    image: '/images/blog-grief.jpg',
    readTime: '4 min read',
    content: [
      'Nature has a remarkable ability to comfort and heal. Studies have shown that spending time in green spaces can reduce stress, improve mood, and support emotional well-being — benefits that are especially valuable during the grieving process.',
      'At Heritage Park, our memorial gardens are designed with this understanding. Lush landscapes, flowering pathways, tranquil water features, and shaded resting areas create an environment where families can find moments of peace and reflection.',
      'Whether you are visiting a loved one&apos;s resting place or simply taking a quiet walk through the gardens, nature offers a gentle reminder of life&apos;s enduring beauty and the cycle of renewal.',
    ],
    relatedSlugs: ['filipino-traditions-of-remembering', 'choosing-between-burial-and-cremation'],
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

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}

export function getPostsByTopic(topicId: string): BlogPost[] {
  return blogPosts.filter((p) => p.topicId === topicId && !p.featured)
}

export default blogPosts
