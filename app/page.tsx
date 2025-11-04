import HeroBanner from '@/components/homepage/HeroBanner'
import FacebookMarketplace from '@/components/homepage/FacebookMarketplace'
import FeaturedVendors from '@/components/homepage/FeaturedVendors'
import AboutSection from '@/components/homepage/AboutSection'
import NewsEvents from '@/components/homepage/NewsEvents'
import VisitUsSection from '@/components/homepage/VisitUsSection'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FacebookMarketplace />
      <FeaturedVendors />
      <AboutSection />
      <NewsEvents />
      <VisitUsSection />
    </>
  )
}
