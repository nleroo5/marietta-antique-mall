import HeroBanner from '@/components/homepage/HeroBanner'
import FacebookMarketplace from '@/components/homepage/FacebookMarketplace'
import AboutSection from '@/components/homepage/AboutSection'
import NewsletterSignup from '@/components/homepage/NewsletterSignup'
import VisitUsSection from '@/components/homepage/VisitUsSection'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-slate-light/20 to-white">
      <HeroBanner />
      <AboutSection />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <FacebookMarketplace />
            <NewsletterSignup />
          </div>
        </div>
      </section>
      <VisitUsSection />
    </div>
  )
}
