'use client'

import { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { LOCATION } from '@/lib/constants'

export default function ShopPage() {
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

  const handleRetry = () => {
    setHasError(false)
    setIsLoaded(false)
    setIsWidgetRendered(false)

    // Reload the page to reset Facebook SDK
    window.location.reload()
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

      {/* Facebook Group Feed */}
      <section className="section-padding" ref={containerRef}>
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Browse Available Items
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              See what's currently available from our vendors in our Facebook Marketplace Group
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
                      onClick={handleVisitGroupClick}
                    >
                      Visit Facebook Group
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Facebook Group Plugin */}
          <div className={`flex justify-center ${!isLoaded || hasError ? 'hidden' : ''}`}>
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
