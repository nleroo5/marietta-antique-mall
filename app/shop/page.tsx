'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { BUSINESS_NAME, LOCATION } from '@/lib/constants'

export default function ShopPage() {
  const [isFBLoaded, setIsFBLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Set a timeout to show error state if Facebook SDK doesn't load
    const timer = setTimeout(() => {
      if (!isFBLoaded) {
        setHasError(true)
      }
    }, 15000)

    return () => clearTimeout(timer)
  }, [isFBLoaded])

  useEffect(() => {
    // Parse Facebook widgets when SDK loads
    if (isFBLoaded && window.FB && !hasError) {
      try {
        window.FB.XFBML.parse()
      } catch (error) {
        console.error('Error parsing Facebook group plugin:', error)
        setHasError(true)
      }
    }
  }, [isFBLoaded, hasError])

  const handleScriptLoad = () => {
    setIsFBLoaded(true)
    setHasError(false)
  }

  const handleScriptError = () => {
    setHasError(true)
    setIsFBLoaded(false)
  }

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

  const handleVisitStoreClick = () => {
    // Track the click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Visit Store',
        event_label: 'Shop Page CTA',
        value: 1,
      })
    }

    window.location.href = '/visit'
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-light/20 to-white">
      {/* Facebook SDK */}
      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

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

      {/* Facebook Group Feed */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Browse Available Items
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              See what's currently available from our vendors in our Facebook Marketplace Group
            </p>
          </div>

          {/* Loading State */}
          {!isFBLoaded && !hasError && (
            <div className="flex justify-center">
              <div className="w-full max-w-[500px]">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-mauve animate-pulse">
                  <div className="bg-gray-200 h-[800px]" />
                </div>
                <div className="flex justify-center mt-4">
                  <div className="text-black text-sm">
                    Loading Facebook Marketplace feed...
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="flex justify-center">
              <div className="w-full max-w-[500px]">
                <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-mauve">
                  <svg
                    className="w-12 h-12 text-black mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="font-display text-xl font-bold text-black mb-2 text-center">
                    Unable to Load Facebook Group Feed
                  </h4>
                  <p className="text-black text-sm mb-6 text-center">
                    Visit our Facebook Marketplace Group directly to see all available items.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleVisitGroupClick}
                    >
                      Visit Facebook Group
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={handleVisitStoreClick}
                    >
                      Visit Us In-Store
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Facebook Group Plugin */}
          <div className={`flex justify-center ${!isFBLoaded || hasError ? 'hidden' : ''}`}>
            <div className="w-full max-w-[500px]">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-mauve">
                <div
                  className="fb-group"
                  data-href="https://www.facebook.com/groups/MAM.Marketplace/"
                  data-width="500"
                  data-show-metadata="true"
                  data-show-social-context="true"
                />
              </div>
              <div className="flex justify-center mt-6">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleVisitGroupClick}
                  className="min-w-[280px]"
                >
                  Join Our Marketplace Group
                </Button>
              </div>
            </div>
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
                  Browse Online
                </h3>
                <p className="text-black">
                  Join our Facebook Marketplace Group to see all available items with photos, descriptions, and prices
                </p>
              </div>
            </Card>

            <Card className="!border-2 !border-mauve text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-3">
                  Contact Seller
                </h3>
                <p className="text-black">
                  Message the vendor directly through Facebook to ask questions or arrange purchase
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

      {/* Why Shop With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                Why Shop MAM Marketplace?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      Curated by Experts
                    </h3>
                    <p className="text-black text-sm">
                      Our vendors are experienced collectors and dealers who know quality when they see it
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      Constantly Refreshed
                    </h3>
                    <p className="text-black text-sm">
                      New items added every single day - there's always something new to discover
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      Trusted Community
                    </h3>
                    <p className="text-black text-sm">
                      Connect directly with sellers, ask questions, and build relationships with our vendor community
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="!border-2 !border-mauve">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      Local Convenience
                    </h3>
                    <p className="text-black text-sm">
                      Browse online, pick up in-store - no shipping fees, see items in person before you buy
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
              Ready to Find Your Next Treasure?
            </h2>
            <p className="text-lg text-black mb-8">
              Join our Facebook Marketplace Group and start browsing hundreds of unique items today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={handleVisitGroupClick}
                className="w-full sm:w-auto min-w-[280px]"
              >
                Join Marketplace Group
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}

// Type declaration for Facebook SDK
declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (element?: HTMLElement) => void
      }
    }
  }
}
