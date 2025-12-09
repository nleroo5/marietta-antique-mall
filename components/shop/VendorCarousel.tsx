'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const vendorImages = [
  '/images/vendors/marietta-antique-mall-vintage-store-interior-01.jpg',
  '/images/vendors/atlanta-vintage-finds-antique-mall-marietta-02.jpg',
  '/images/vendors/marietta-antiques-vintage-collectibles-store-03.jpg',
  '/images/vendors/antique-store-marietta-georgia-vintage-mall-04.jpg',
  '/images/vendors/marietta-antique-mall-vintage-furniture-display-05.jpg',
  '/images/vendors/atlanta-antique-store-marietta-vintage-treasures-06.jpg',
  '/images/vendors/vintage-finds-marietta-antique-mall-interior-07.jpg',
  '/images/vendors/marietta-vintage-store-antique-collectibles-08.jpg',
  '/images/vendors/antique-mall-marietta-atlanta-vintage-store-09.jpg',
  '/images/vendors/marietta-antiques-vintage-furniture-showcase-10.jpg',
  '/images/vendors/atlanta-vintage-mall-marietta-antique-store-11.jpg',
  '/images/vendors/marietta-antique-store-vintage-decor-display-12.jpg',
  '/images/vendors/vintage-antique-mall-marietta-georgia-finds-13.jpg',
  '/images/vendors/marietta-vintage-finds-antique-store-atlanta-14.jpg',
  '/images/vendors/antique-store-marietta-vintage-collectibles-mall-15.jpg',
  '/images/vendors/marietta-antique-mall-vintage-home-decor-16.jpg',
  '/images/vendors/atlanta-marietta-antiques-vintage-store-interior-17.jpg',
  '/images/vendors/vintage-mall-marietta-antique-finds-atlanta-18.jpg',
  '/images/vendors/marietta-antique-store-vintage-treasures-display-19.jpg',
  '/images/vendors/marietta-vintage-antiques-store-atlanta-mall-21.jpg',
  '/images/vendors/marietta-antiques-vintage-collectibles-display-23.jpg',
  '/images/vendors/vintage-finds-antique-store-marietta-atlanta-24.jpg',
  '/images/vendors/marietta-antique-mall-vintage-decor-treasures-25.jpg',
  '/images/vendors/atlanta-vintage-store-marietta-antique-mall-26.jpg',
  '/images/vendors/marietta-antique-store-vintage-finds-interior-27.jpg',
  '/images/vendors/antique-mall-marietta-vintage-collectibles-atlanta-28.jpg',
  '/images/vendors/marietta-vintage-antiques-store-showcase-29.jpg',
  '/images/vendors/atlanta-marietta-antique-mall-vintage-finds-30.jpg',
  '/images/vendors/marietta-antique-store-vintage-furniture-mall-31.jpg',
  '/images/vendors/vintage-antique-mall-marietta-atlanta-store-32.jpg',
  '/images/vendors/marietta-antiques-vintage-store-display-atlanta-33.jpg',
  '/images/vendors/antique-store-marietta-vintage-mall-treasures-34.jpg',
  '/images/vendors/marietta-vintage-finds-antique-store-interior-35.jpg',
  '/images/vendors/atlanta-antique-mall-marietta-vintage-decor-36.jpg',
  '/images/vendors/marietta-antique-store-vintage-collectibles-finds-37.jpg',
  '/images/vendors/vintage-mall-marietta-antiques-atlanta-store-38.jpg',
]

export default function VendorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === vendorImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vendorImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vendorImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative w-full h-full border-2 border-slate hover:border-mauve transition-all duration-300 rounded-lg overflow-hidden group">
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={vendorImages[currentIndex]}
          alt={`Vendor booth ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={currentIndex === 0}
          quality={85}
        />

        {/* Gradient Overlay for better button visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next image"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs md:text-sm px-3 py-1 rounded-full">
        {currentIndex + 1} / {vendorImages.length}
      </div>
    </div>
  )
}
