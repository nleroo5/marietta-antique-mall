'use client'

import { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import { CONTACT_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function FacebookMarketplace() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isWidgetRendered, setIsWidgetRendered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const parseAttemptRef = useRef(0)
  const mountTimeRef = useRef(Date.now())

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { rootMargin: '50px' }
    )

    observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Reset state when component mounts (important for navigation)
  useEffect(() => {
    // Update mount time on each mount
    mountTimeRef.current = Date.now()

    // Reset states for fresh render on each mount
    setIsLoaded(false)
    setHasError(false)
    setIsWidgetRendered(false)
    parseAttemptRef.current = 0

    // Check if FB SDK is already loaded from previous page visit
    if (window.FB && isVisible) {
      setIsLoaded(true)
      // Force immediate parse since SDK is already available
      setTimeout(() => {
        if (window.FB && containerRef.current) {
          try {
            window.FB.XFBML.parse(containerRef.current)
            setIsWidgetRendered(true)
          } catch (error) {
            console.error('Error parsing Facebook widget on remount:', error)
          }
        }
      }, 100)
    }

    // Cleanup function when component unmounts
    return () => {
      // Clear any pending timers
      setIsLoaded(false)
      setHasError(false)
      setIsWidgetRendered(false)
    }
  }, [isVisible]) // Re-run when visibility changes

  useEffect(() => {
    // Set a timeout to show error state if Facebook SDK doesn't load
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true)
      }
    }, 15000)

    return () => clearTimeout(timer)
  }, [isLoaded])

  useEffect(() => {
    // Parse Facebook widgets when SDK loads
    if (isLoaded && window.FB && !hasError && !isWidgetRendered && containerRef.current) {
      parseAttemptRef.current++

      // Wait for DOM to be ready
      const timeoutId = setTimeout(() => {
        try {
          if (window.FB && containerRef.current) {
            // Parse only this container, not entire page
            window.FB.XFBML.parse(containerRef.current)
            setIsWidgetRendered(true)
          }
        } catch (error) {
          console.error('Error parsing Facebook widgets:', error)

          // Retry once more if first attempt fails
          if (parseAttemptRef.current === 1) {
            setTimeout(() => {
              try {
                if (window.FB && containerRef.current) {
                  window.FB.XFBML.parse(containerRef.current)
                  setIsWidgetRendered(true)
                }
              } catch (retryError) {
                console.error('Retry parse failed:', retryError)
                setHasError(true)
              }
            }, 2000)
          }
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
    <div id="facebook-marketplace" className="h-full flex flex-col" ref={containerRef}>
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-black mb-3">
          Follow Us on Facebook
        </h2>
        <p className="text-base text-black">
          Stay up to date with our latest arrivals, events, and exclusive offers.
        </p>
      </div>

      {/* Facebook SDK - Only load when visible */}
      {isVisible && (
        <>
          <div id="fb-root" />
          <Script
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
            strategy="lazyOnload"
            onLoad={handleScriptLoad}
            onError={handleScriptError}
          />
        </>
      )}

            {/* Loading State */}
            {(!isLoaded || !isVisible) && !hasError && (
              <div className="flex justify-center">
                <div className="w-full max-w-[500px]">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-mauve animate-pulse">
                    <div className="bg-gray-200 h-[700px]" />
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="text-black text-sm">
                      {isVisible ? 'Loading Facebook feed...' : 'Scroll down to load Facebook feed...'}
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
        parse: (element?: HTMLElement) => void
      }
    }
  }
}
