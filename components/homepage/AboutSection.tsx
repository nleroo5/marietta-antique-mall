'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { BUSINESS_NAME, CATEGORIES } from '@/lib/constants'
import Button from '@/components/ui/Button'

// Animated Vendor Counter Component
function AnimatedVendorBadge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      const duration = 4000 // 4 seconds
      const endValue = 100

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        setDisplayValue(Math.floor(progress * endValue))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 1, delay: 0.3 }}
      className="hidden sm:flex absolute -top-4 -right-4 bg-accent text-white rounded-full w-24 h-24 sm:w-32 sm:h-32 flex-col items-center justify-center shadow-xl"
    >
      <div
        className="text-3xl sm:text-4xl font-bold"
        style={{
          textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0 #000'
        }}
      >
        {displayValue}+
      </div>
      <div className="text-xs sm:text-sm font-bold text-black">Vendors</div>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section className="section-padding">
      <style jsx global>{`
        @keyframes lever-sway {
          0%, 100% {
            transform: translateY(-6px) rotate(-2deg);
          }
          50% {
            transform: translateY(-6px) rotate(2deg);
          }
        }
        .wood-card-wrapper:hover .wood-card {
          animation: lever-sway 1.5s ease-in-out infinite;
        }
        .wood-card-wrapper:hover .wood-card span {
          color: #2A2A2A;
        }
      `}</style>
      <div className="container-custom">
        {/* Main About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Gallery */}
          <div className="relative">
            {/* Mobile: Single Hero Image */}
            <div className="md:hidden relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/vendors/vintage-finds-antique-store-marietta-atlanta-24.jpg"
                alt="Vintage finds antique store Marietta Atlanta display"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Desktop: 4-Image Grid */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/marietta-vintage-finds-antique-store-interior-35.jpg"
                  alt="Marietta vintage finds antique store interior display"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg sm:mt-8 hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/marietta-antique-mall-vintage-decor-treasures-25.jpg"
                  alt="Marietta antique mall vintage decor and treasures"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg sm:-mt-8 hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/vintage-finds-antique-store-marietta-atlanta-24.jpg"
                  alt="Vintage finds antique store Marietta Atlanta display"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/marietta-antique-store-vintage-finds-interior-27.jpg"
                  alt="Marietta antique store vintage finds interior"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Badge - Animated */}
            <AnimatedVendorBadge />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
              Your Destination for Antiques & Vintage Treasures
            </h2>
            <p className="text-lg text-black mb-6 leading-relaxed">
              Welcome to {BUSINESS_NAME}, where history comes alive in every corner. Spanning{' '}
              <span className="font-semibold text-black">30,000 square feet</span>, our antique
              mall is home to over <span className="font-semibold text-black">100 independent
              vendors</span>, each bringing their unique expertise and passion for preserving the
              past.
            </p>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Whether you&apos;re a seasoned collector, interior designer, or simply love the charm of
              vintage finds, you&apos;ll discover an ever-changing selection of antiques,
              mid-century modern pieces, vintage jewelry, and so much more.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-black">400+ 5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Clock circle */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  />
                  {/* Clock hands - animated */}
                  <g className="origin-center animate-spin" style={{ transformOrigin: '12px 12px' }}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3"
                    />
                  </g>
                </svg>
                <span className="font-semibold text-black">Open 7 Days a Week</span>
              </div>
            </div>

            <Button variant="primary" size="lg">
              Plan Your Visit
            </Button>
          </div>
        </div>

        {/* Categories Section - Vertical Wood Grain Cards */}
        <div className="text-center">
          <h3 className="font-display text-3xl font-bold text-black mb-12">
            What You&apos;ll Find
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="wood-card-wrapper"
              >
                <div
                  className="wood-card relative px-6 py-3 cursor-pointer"
                  style={{
                    backgroundColor: '#FAF8F5',
                    backgroundImage: `
                      linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.55) 100%),
                      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Cdefs%3E%3Cpattern id='woodsketch2' x='0' y='0' width='400' height='600' patternUnits='userSpaceOnUse'%3E%3Cpath d='M50,0 Q48,150 50,300 T50,600' stroke='%23B89968' stroke-width='1' fill='none' opacity='0.25'/%3E%3Cpath d='M55,0 Q53,150 55,300 T55,600' stroke='%23C9A86A' stroke-width='0.7' fill='none' opacity='0.17'/%3E%3Cpath d='M100,0 Q102,150 100,300 T100,600' stroke='%23A0826D' stroke-width='0.9' fill='none' opacity='0.22'/%3E%3Cpath d='M150,0 Q148,150 150,300 T150,600' stroke='%23B89968' stroke-width='1' fill='none' opacity='0.24'/%3E%3Cpath d='M155,0 Q157,150 155,300 T155,600' stroke='%23C9A86A' stroke-width='0.7' fill='none' opacity='0.16'/%3E%3Cpath d='M200,0 Q198,150 200,300 T200,600' stroke='%238B6F47' stroke-width='1.1' fill='none' opacity='0.27'/%3E%3Cpath d='M205,0 Q207,150 205,300 T205,600' stroke='%23C9A86A' stroke-width='0.7' fill='none' opacity='0.19'/%3E%3Cpath d='M250,0 Q252,150 250,300 T250,600' stroke='%23B89968' stroke-width='0.9' fill='none' opacity='0.22'/%3E%3Cpath d='M300,0 Q298,150 300,300 T300,600' stroke='%23A0826D' stroke-width='0.9' fill='none' opacity='0.21'/%3E%3Cpath d='M350,0 Q352,150 350,300 T350,600' stroke='%23B89968' stroke-width='0.9' fill='none' opacity='0.21'/%3E%3Cellipse cx='200' cy='200' rx='40' ry='35' stroke='%238B6F47' stroke-width='1' fill='none' opacity='0.22'/%3E%3Cellipse cx='200' cy='200' rx='32' ry='28' stroke='%238B6F47' stroke-width='0.8' fill='none' opacity='0.19'/%3E%3Cellipse cx='200' cy='200' rx='24' ry='20' stroke='%23B89968' stroke-width='0.7' fill='none' opacity='0.16'/%3E%3Cellipse cx='100' cy='400' rx='35' ry='30' stroke='%23A0826D' stroke-width='0.9' fill='none' opacity='0.21'/%3E%3Cellipse cx='100' cy='400' rx='26' ry='22' stroke='%23B89968' stroke-width='0.8' fill='none' opacity='0.17'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23woodsketch2)'/%3E%3C/svg%3E")
                    `,
                    backgroundSize: '400px 600px',
                    border: '1.5px solid #D4C4B0',
                    boxShadow: `
                      inset 0 1px 2px rgba(255, 255, 255, 0.4),
                      0 4px 6px rgba(0, 0, 0, 0.07),
                      0 8px 16px rgba(139, 111, 71, 0.15),
                      0 2px 4px rgba(0, 0, 0, 0.05)
                    `,
                    borderRadius: '4px',
                  }}
                >
                  {/* Decorative top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-60 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to right, transparent 0%, rgba(201, 168, 106, 0.4) 50%, transparent 100%)',
                    }}
                  />

                  {/* Category text */}
                  <span className="font-display text-base md:text-lg text-charcoal relative z-10 whitespace-nowrap block">
                    {category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
