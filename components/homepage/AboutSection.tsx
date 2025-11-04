'use client'

import Image from 'next/image'
import { BUSINESS_NAME, HIGHLIGHTS, CATEGORIES } from '@/lib/constants'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export default function AboutSection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-custom">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Gallery */}
          <div className="relative">
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/jewelery.png"
                  alt="Jewelry display"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg sm:mt-8 hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/inside.png"
                  alt="Antique mall interior"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg sm:-mt-8 hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/furniture.png"
                  alt="Vintage furniture display"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg hover-lift cursor-pointer">
                <Image
                  src="/images/vendors/vintage.png"
                  alt="Vintage collectibles and treasures"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-accent text-white rounded-full w-24 h-24 sm:w-32 sm:h-32 flex-col items-center justify-center shadow-xl">
              <div className="text-3xl sm:text-4xl font-bold">100+</div>
              <div className="text-xs sm:text-sm font-medium">Vendors</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <Badge variant="primary" className="mb-4">
              About Us
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Your Destination for Authentic Antiques & Vintage Treasures
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Welcome to {BUSINESS_NAME}, where history comes alive in every corner. Spanning{' '}
              <span className="font-semibold text-primary">30,000 square feet</span>, our antique
              mall is home to over <span className="font-semibold text-primary">100 independent
              vendors</span>, each bringing their unique expertise and passion for preserving the
              past.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Whether you&apos;re a seasoned collector, interior designer, or simply love the charm of
              vintage finds, you&apos;ll discover an ever-changing selection of authenticated antiques,
              mid-century modern pieces, vintage jewelry, and so much more.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-text-primary">500+ 5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-accent"
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
                <span className="font-semibold text-text-primary">Authenticated Items</span>
              </div>
            </div>

            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {HIGHLIGHTS.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover-glow cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-lg">{highlight}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="text-center">
          <h3 className="font-display text-3xl font-bold text-primary-dark mb-6">
            What You&apos;ll Find
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {CATEGORIES.map((category) => (
              <Badge
                key={category}
                variant="default"
                className="text-base px-4 py-2 bg-white shadow-sm hover-scale cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
