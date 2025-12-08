'use client'

import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { LOCATION } from '@/lib/constants'

export default function ShopPage() {
  const handleVisitGroupClick = () => {
    // Track the click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Facebook Marketplace',
        event_label: 'Visit Group Button',
        value: 1,
      })
    }

    window.open('https://www.facebook.com/groups/MAM.Marketplace/', '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-light/20 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-slate-light/50 to-transparent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Shop Our Facebook Marketplace
            </h1>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Browse hundreds of unique antiques, vintage finds, and collectibles from our 100+ vendors. New items added daily!
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-black mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100+ Trusted Vendors</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>New Items Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Local Pickup Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Facebook Group CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="!border-2 !border-mauve text-center">
              <div className="mb-8">
                <svg
                  className="w-20 h-20 mx-auto mb-6 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                  Browse Available Items
                </h2>
                <p className="text-lg text-black mb-2">
                  Join our <strong>MAM Marketplace</strong> Facebook Group to see all items currently for sale
                </p>
                <p className="text-base text-black/80">
                  Hundreds of antiques, vintage items, and collectibles with photos, descriptions, and prices
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleVisitGroupClick}
                  className="w-full sm:w-auto min-w-[320px] !bg-[#1877F2] hover:!bg-[#1664D8] !border-[#1877F2]"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Visit MAM Marketplace Group
                </Button>

                <p className="text-sm text-black/60">
                  Free to join • Browse & message vendors directly
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="!border-2 !border-mauve text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-accent">1</span>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-3">
                  Join the Group
                </h3>
                <p className="text-black">
                  Click the button above to join our MAM Marketplace Facebook Group - it's free and takes just a moment
                </p>
              </div>
            </Card>

            <Card className="!border-2 !border-mauve text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-3">
                  Browse & Message
                </h3>
                <p className="text-black">
                  See all available items with photos, descriptions, and prices. Message vendors directly with questions
                </p>
              </div>
            </Card>

            <Card className="!border-2 !border-mauve text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-3">
                  Pick Up In-Store
                </h3>
                <p className="text-black">
                  Visit us at {LOCATION.address} to pick up your treasure or browse even more items in person
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Shop Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                Why Shop Our Marketplace?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      Fresh Inventory Daily
                    </h3>
                    <p className="text-black text-sm">
                      New items posted every day - from furniture and jewelry to vintage signs and rare collectibles
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      Direct Vendor Contact
                    </h3>
                    <p className="text-black text-sm">
                      Message sellers directly through Facebook - ask questions, negotiate, and arrange pickup
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      See Before You Buy
                    </h3>
                    <p className="text-black text-sm">
                      Local pickup means you can inspect items in person before purchasing - no shipping surprises
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      Trusted Sellers
                    </h3>
                    <p className="text-black text-sm">
                      All vendors are vetted antique dealers with years of experience and expertise in their specialties
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-transparent to-slate-light/50">
        <div className="container-custom">
          <Card className="!border-2 !border-mauve max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-lg text-black mb-8">
              Join thousands of treasure hunters in our Facebook Marketplace Group
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleVisitGroupClick}
              className="min-w-[280px] !bg-[#1877F2] hover:!bg-[#1664D8] !border-[#1877F2]"
            >
              Join MAM Marketplace Group
            </Button>
          </Card>
        </div>
      </section>
    </main>
  )
}
