'use client'

import { BUSINESS_NAME } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'

export default function VendorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-light/50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Meet Our Dealers
            </h1>
            <p className="text-xl text-black mb-8">
              Over 100+ independent vendors showcasing unique antiques, vintage treasures,
              and collectibles. Each booth tells its own story.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Card>
            <CardBody className="text-center py-16">
              <div className="mb-6">
                <svg
                  className="w-24 h-24 mx-auto text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-black mb-4">
                Vendor Directory Coming Soon
              </h2>
              <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
                We're building a comprehensive directory of all our amazing vendors.
                In the meantime, visit us in person to explore all 100+ booths filled
                with unique finds!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" onClick={() => window.location.href = '/visit'}>
                  Plan Your Visit
                </Button>
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Vendor Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover>
              <CardBody className="text-center">
                <div className="w-12 h-12 bg-mauve-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  100+ Booths
                </h3>
                <p className="text-black">
                  Explore diverse collections from over 100 independent dealers
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="text-center">
                <div className="w-12 h-12 bg-mauve-light/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  Ever-Changing
                </h3>
                <p className="text-black">
                  New items arrive weekly - there's always something new to discover
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="text-center">
                <div className="w-12 h-12 bg-mauve-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  Expert Dealers
                </h3>
                <p className="text-black">
                  Knowledgeable vendors with passion for antiques and collectibles
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Become a Vendor CTA */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-slate-light/20 to-mauve-light/20 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-black mb-3">
              Interested in Becoming a Vendor?
            </h3>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              We have booth spaces available! Join our community of passionate dealers
              and showcase your collection to thousands of visitors.
            </p>
            <Button variant="accent" size="lg" onClick={() => window.location.href = '/contact'}>
              Contact Us About Booth Spaces
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
