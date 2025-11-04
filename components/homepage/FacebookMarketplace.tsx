'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { FACEBOOK_PAGE_ID } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function FacebookMarketplace() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Set a timeout to show error state if Facebook SDK doesn't load
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [isLoaded])

  const handleScriptLoad = () => {
    setIsLoaded(true)
    // Parse Facebook widgets after SDK loads
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }

  const handleScriptError = () => {
    setHasError(true)
  }

  return (
    <section id="facebook-marketplace" className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Follow Us on Facebook
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Stay connected with us on Facebook to see upcoming events, new arrivals, and special promotions from our 100+ vendors.
          </p>
        </div>

        {/* Facebook SDK */}
        <div id="fb-root" />
        <Script
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
          strategy="lazyOnload"
          onLoad={handleScriptLoad}
          onError={handleScriptError}
        />

        {/* Loading State */}
        {!isLoaded && !hasError && (
          <div className="flex justify-center">
            <div className="animate-pulse space-y-4 w-full max-w-2xl">
              <div className="bg-gray-300 h-96 rounded-lg" />
              <div className="flex justify-center">
                <div className="text-text-secondary">Loading Facebook feed...</div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <svg
                className="w-16 h-16 text-accent mx-auto mb-4"
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
              <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                Unable to Load Facebook Feed
              </h3>
              <p className="text-text-secondary mb-6">
                Please visit our Facebook page directly to see upcoming events and stay connected with our community.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  window.open(`https://www.facebook.com/${FACEBOOK_PAGE_ID}/`, '_blank')
                }
              >
                Visit Our Facebook Page
              </Button>
            </div>
          </div>
        )}

        {/* Facebook Page Plugin */}
        <div className={`flex justify-center ${!isLoaded || hasError ? 'hidden' : ''}`}>
          <div className="w-full max-w-2xl">
            <div
              className="fb-page"
              data-href={`https://www.facebook.com/${FACEBOOK_PAGE_ID}/`}
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite={`https://www.facebook.com/${FACEBOOK_PAGE_ID}/`}
                className="fb-xfbml-parse-ignore"
              >
                <a href={`https://www.facebook.com/${FACEBOOK_PAGE_ID}/`}>
                  Marietta Antique Mall
                </a>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Follow us on Facebook to stay updated on upcoming events, new arrivals, and special announcements!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                window.open(`https://www.facebook.com/${FACEBOOK_PAGE_ID}/`, '_blank')
              }
            >
              Follow on Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Type declaration for Facebook SDK
declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void
      }
    }
  }
}
