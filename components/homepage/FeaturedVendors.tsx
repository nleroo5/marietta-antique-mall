'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Card, { CardBody, CardFooter } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import type { Vendor } from '@/types'

// Mock data - Replace with actual data from CMS or API
const FEATURED_VENDORS: Vendor[] = [
  {
    id: '1',
    name: 'Vintage Treasures',
    boothNumber: '42',
    specialty: 'Mid-Century Modern Furniture',
    description:
      'Curated collection of MCM pieces from the 1950s-1970s. Specializing in Eames, Knoll, and Danish modern designs.',
    featuredImage: '/images/vendors/vendor-1.jpg',
  },
  {
    id: '2',
    name: 'Southern Charm Antiques',
    boothNumber: '18',
    specialty: 'Vintage Jewelry & Accessories',
    description:
      'Estate jewelry, vintage costume pieces, and rare collectible accessories. From Victorian to Art Deco and beyond.',
    featuredImage: '/images/vendors/vendor-2.jpg',
  },
  {
    id: '3',
    name: 'Rustic Revival',
    boothNumber: '67',
    specialty: 'Farmhouse & Primitives',
    description:
      'Farmhouse decor, primitives, and rustic finds. Perfect for creating that cozy, lived-in look.',
    featuredImage: '/images/vendors/vendor-3.jpg',
  },
  {
    id: '4',
    name: 'Nostalgia Corner',
    boothNumber: '89',
    specialty: 'Advertising & Collectibles',
    description:
      'Vintage advertising memorabilia, tin signs, gas station collectibles, and Americana from the golden age.',
    featuredImage: '/images/vendors/vendor-4.jpg',
  },
]

export default function FeaturedVendors() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FEATURED_VENDORS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleVendorClick = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Featured Vendors
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
            Meet Our Vendors
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Discover unique treasures from our carefully curated selection of 100+ independent
            dealers and artisans.
          </p>
        </div>

        {/* Featured Vendor Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Vendor Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            {FEATURED_VENDORS[activeIndex].featuredImage ? (
              <Image
                src={FEATURED_VENDORS[activeIndex].featuredImage}
                alt={FEATURED_VENDORS[activeIndex].name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-black/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            <div className="absolute bottom-6 left-6 z-20">
              <Badge variant="success" className="text-base px-4 py-2">
                Booth #{FEATURED_VENDORS[activeIndex].boothNumber}
              </Badge>
            </div>
          </div>

          {/* Vendor Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-2">
              {FEATURED_VENDORS[activeIndex].name}
            </h3>
            <p className="text-xl text-black font-semibold mb-4">
              {FEATURED_VENDORS[activeIndex].specialty}
            </p>
            <p className="text-lg text-black mb-6 leading-relaxed">
              {FEATURED_VENDORS[activeIndex].description}
            </p>
            <div>
              <Button variant="primary" size="lg">
                Visit Booth #{FEATURED_VENDORS[activeIndex].boothNumber}
              </Button>
            </div>

            {/* Vendor Navigation Dots */}
            <div className="flex gap-3 mt-8">
              {FEATURED_VENDORS.map((vendor, index) => (
                <button
                  key={vendor.id}
                  onClick={() => handleVendorClick(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === activeIndex ? 'w-12 bg-primary' : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View ${vendor.name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_VENDORS.map((vendor) => (
            <Card key={vendor.id} hover className="cursor-pointer">
              <div className="relative h-48">
                {vendor.featuredImage ? (
                  <Image
                    src={vendor.featuredImage}
                    alt={vendor.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-black/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <Badge variant="default" className="bg-white/90 backdrop-blur-sm">
                    Booth #{vendor.boothNumber}
                  </Badge>
                </div>
              </div>
              <CardBody>
                <h4 className="font-display text-lg font-bold text-black mb-1">
                  {vendor.name}
                </h4>
                <p className="text-sm text-black font-medium">{vendor.specialty}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={() => (window.location.href = '/vendors')}>
            View All 100+ Vendors
          </Button>
        </div>
      </div>
    </section>
  )
}
