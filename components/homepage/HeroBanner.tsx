'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import { BUSINESS_NAME, CONTACT_INFO } from '@/lib/constants'

export default function HeroBanner() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleScrollToMarketplace = () => {
    const element = document.querySelector('#facebook-marketplace')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToVisit = () => {
    const element = document.querySelector('#visit-us')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background - Only on desktop */}
      {!isMobile ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/drone-optimized.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback image for mobile
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-poster.jpg)' }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 pt-40 md:pt-48 lg:pt-56">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 drop-shadow-2xl text-white whitespace-nowrap">
            {BUSINESS_NAME}
          </h1>

          <div className="space-y-2 md:space-y-3 mb-16 md:mb-20 lg:mb-24 xl:mb-32">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow-lg">
              30,000 sq ft of Treasures • 100+ Vendors
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              variant="primary"
              onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}
              className="w-full sm:w-auto shadow-2xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToVisit}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-text-primary shadow-2xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Plan Your Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Accessibility: Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded-lg focus-ring"
      >
        Skip to main content
      </a>
    </section>
  )
}
