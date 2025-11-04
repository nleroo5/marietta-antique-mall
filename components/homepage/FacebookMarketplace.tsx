'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { FACEBOOK_PAGE_ID } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

// Newsletter Signup Component
function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call - Replace with actual newsletter signup logic
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSuccess(true)
    setEmail('')
    setIsSubmitting(false)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-primary/10 min-h-[600px] lg:h-[600px] flex flex-col">
      <div className="mb-6">
        <Badge variant="primary" className="mb-3">
          Newsletter
        </Badge>
        <p className="text-text-secondary text-sm">
          Get the latest updates on new arrivals, exclusive events, and special promotions
          delivered straight to your inbox.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in flex-grow flex flex-col items-center justify-center">
          <svg
            className="w-12 h-12 text-green-500 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 className="font-semibold text-green-800 text-lg mb-1">
            Successfully Subscribed!
          </h4>
          <p className="text-green-700 text-sm">Thank you for joining our newsletter.</p>
        </div>
      ) : (
        <div className="flex-grow flex flex-col">
          {/* Social Proof Section */}
          <div className="mb-6 space-y-4">
            {/* Subscriber Count */}
            <div className="flex items-center justify-center gap-2 text-primary-dark">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-sm font-semibold">Join 2,500+ treasure hunters</span>
            </div>

            {/* Testimonial */}
            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-text-secondary italic mb-2">
                "Best way to stay updated on estate sales and new vintage finds! Found my dream china cabinet thanks to their newsletter."
              </p>
              <p className="text-xs font-semibold text-text-primary">- Sarah M., Marietta</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe Now'
              )}
            </Button>

            <p className="text-xs text-center text-text-light">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-gray-200 text-xs">
        <div className="flex items-center gap-2 text-text-secondary">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>No spam</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Weekly updates</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Exclusive deals</span>
        </div>
      </div>
    </div>
  )
}

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
            Stay Connected
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Follow us on Facebook and join our newsletter for the latest updates, events, and exclusive offers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT COLUMN - Facebook Feed */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-6 text-center">
              Follow Us on Facebook
            </h3>

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
                <div className="animate-pulse space-y-4 w-full max-w-[500px]">
                  <div className="bg-gray-300 h-[600px] rounded-lg" />
                  <div className="flex justify-center">
                    <div className="text-text-secondary text-sm">Loading Facebook feed...</div>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-[500px] w-full">
                  <svg
                    className="w-12 h-12 text-accent mx-auto mb-4"
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
                  <h4 className="font-display text-xl font-bold text-text-primary mb-2 text-center">
                    Unable to Load Facebook Feed
                  </h4>
                  <p className="text-text-secondary text-sm mb-6 text-center">
                    Visit our Facebook page directly to stay connected.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() =>
                        window.open(`https://www.facebook.com/${FACEBOOK_PAGE_ID}/`, '_blank')
                      }
                    >
                      Visit Facebook Page
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Facebook Page Plugin */}
            <div className={`flex justify-center ${!isLoaded || hasError ? 'hidden' : ''}`}>
              <div className="w-full flex justify-center">
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
          </div>

          {/* RIGHT COLUMN - Newsletter Signup */}
          <div className="lg:sticky lg:top-24">
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-6 text-center">
              Join Our Newsletter
            </h3>
            <NewsletterSignup />
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
