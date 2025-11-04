'use client'

import Image from 'next/image'
import Link from 'next/link'
import Card, { CardBody, CardFooter } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { formatDate } from '@/lib/utils'
import type { NewsItem } from '@/types'

// Mock data - Replace with actual CMS or API data
const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'Spring Antique Show & Sale',
    excerpt:
      'Join us for our annual Spring event featuring special discounts, live music, and food trucks!',
    date: new Date('2024-04-15'),
    category: 'event',
    image: '/images/news/spring-sale.jpg',
    link: '/events/spring-antique-show',
  },
  {
    id: '2',
    title: 'Vendor Spotlight: Southern Charm Antiques',
    excerpt:
      'Meet Jane Smith and discover her incredible collection of estate jewelry spanning 100+ years.',
    date: new Date('2024-03-20'),
    category: 'vendor-spotlight',
    image: '/images/news/vendor-spotlight.jpg',
    link: '/blog/southern-charm-spotlight',
  },
  {
    id: '3',
    title: 'New Mid-Century Modern Collection',
    excerpt:
      'Just in! A stunning collection of authenticated MCM furniture from estate sales across the Southeast.',
    date: new Date('2024-03-10'),
    category: 'news',
    image: '/images/news/mcm-collection.jpg',
  },
]

const categoryColors: Record<NewsItem['category'], 'primary' | 'secondary' | 'success' | 'warning'> = {
  event: 'warning',
  news: 'primary',
  'vendor-spotlight': 'secondary',
  sale: 'success',
}

const categoryLabels: Record<NewsItem['category'], string> = {
  event: 'Event',
  news: 'News',
  'vendor-spotlight': 'Vendor Spotlight',
  sale: 'Sale',
}

export default function NewsEvents() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            News & Events
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            What&apos;s Happening
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Stay updated with our latest events, vendor spotlights, and new arrivals.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {NEWS_ITEMS.map((item) => (
            <Card key={item.id} hover className="flex flex-col hover-lift cursor-pointer">
              {/* Content */}
              <CardBody className="flex-1">
                <div className="mb-4">
                  <Badge variant={categoryColors[item.category]}>
                    {categoryLabels[item.category]}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-light mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time dateTime={item.date.toISOString()}>{formatDate(item.date)}</time>
                </div>

                <h3 className="font-display text-xl font-bold text-text-primary mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-text-secondary line-clamp-3">{item.excerpt}</p>
              </CardBody>

              {/* Footer */}
              {item.link && (
                <CardFooter>
                  <Link
                    href={item.link}
                    className="text-primary hover:text-primary-dark font-semibold flex items-center gap-2 group"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl font-bold text-primary-dark mb-4">
            Never Miss an Update
          </h3>
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            Follow us on Facebook for the latest news, events, and newly listed treasures from our
            vendors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://www.facebook.com/Mariettaantiquemall/', '_blank')}
              className="transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </Button>
            <Button variant="outline" size="lg" className="transition-all hover:scale-105">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
