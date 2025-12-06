'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONTACT_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function FacebookMarketplace() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isWidgetRendered, setIsWidgetRendered] = useState(false)

  useEffect(() => {
    // Set a timeout to show error state if Facebook SDK doesn't load
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true)
      }
    }, 15000) // Increased to 15 seconds for slower connections

    return () => clearTimeout(timer)
  }, [isLoaded])

  useEffect(() => {
    // Only parse once when SDK is loaded and widget is visible
    if (isLoaded && window.FB && !hasError && !isWidgetRendered) {
      // Wait for DOM to be ready
      const timeoutId = setTimeout(() => {
        try {
          if (window.FB) {
            window.FB.XFBML.parse()
            setIsWidgetRendered(true)
          }
        } catch (error) {
          console.error('Error parsing Facebook widgets:', error)
          // Retry once more after a delay if parsing fails
          setTimeout(() => {
            try {
              if (window.FB) {
                window.FB.XFBML.parse()
                setIsWidgetRendered(true)
              }
            } catch (retryError) {
              console.error('Retry parse failed:', retryError)
            }
          }, 2000)
        }
      }, 500)

      return () => clearTimeout(timeoutId)
    }
  }, [isLoaded, hasError, isWidgetRendered])

  const handleScriptLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleScriptError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  const handleRetry = () => {
    setHasError(false)
    setIsLoaded(false)
    setIsWidgetRendered(false)

    // Reload the page to reset Facebook SDK
    window.location.reload()
  }

  return (
    <div id="facebook-marketplace" className="h-full flex flex-col">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-black mb-3">
          Follow Us on Facebook
        </h2>
        <p className="text-base text-black">
          Stay up to date with our latest arrivals, events, and exclusive offers.
        </p>
      </div>

      {/* Facebook SDK */}
            <div id="fb-root" />
            <Script
              src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
              strategy="afterInteractive"
              onLoad={handleScriptLoad}
              onError={handleScriptError}
            />

            {/* Loading State */}
            {!isLoaded && !hasError && (
              <div className="flex justify-center">
                <div className="w-full max-w-[500px]">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-mauve animate-pulse">
                    <div className="bg-gray-200 h-[700px]" />
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="text-black text-sm">Loading Facebook feed...</div>
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
                      Unable to Load Facebook Feed
                    </h4>
                    <p className="text-black text-sm mb-6 text-center">
                      Visit our Facebook page directly or try reloading the feed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        variant="secondary"
                        size="md"
                        onClick={handleRetry}
                      >
                        Retry Loading
                      </Button>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() =>
                          window.open(CONTACT_INFO.facebook, '_blank')
                        }
                      >
                        Visit Facebook Page
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Facebook Page Plugin */}
            <div
              className={`flex justify-center ${!isLoaded || hasError ? 'hidden' : ''}`}
            >
              <div className="w-full max-w-[500px]">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-mauve">
                  <div
                    className="fb-page"
                    data-href={CONTACT_INFO.facebook}
                    data-tabs="timeline"
                    data-width="500"
                    data-height="700"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite={CONTACT_INFO.facebook}
                      className="fb-xfbml-parse-ignore"
                    >
                      <a href={CONTACT_INFO.facebook}>
                        Marietta Antique Mall
                      </a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
    </div>
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
