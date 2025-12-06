'use client'

import {
  BUSINESS_NAME,
  LOCATION,
  CONTACT_INFO,
  BUSINESS_HOURS,
} from '@/lib/constants'
import { getGoogleMapsUrl } from '@/lib/utils'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'

const faqItems = [
  {
    id: 'hours',
    title: 'What are your hours of operation?',
    content: (
      <div>
        <p className="mb-3">We're open 7 days a week:</p>
        <ul className="space-y-1">
          {BUSINESS_HOURS.map((hours) => (
            <li key={hours.day}>
              <strong>{hours.day}:</strong> {hours.open} - {hours.close}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'parking',
    title: 'Where can I park?',
    content: (
      <p>
        We offer ample free parking in our lot with designated wheelchair-accessible spaces near
        the main entrance. Our parking lot can accommodate large vehicles and there's plenty of
        room for everyone.
      </p>
    ),
  },
  {
    id: 'buying',
    title: 'Do you buy items or accept consignments?',
    content: (
      <p>
        We operate as an antique mall with independent vendors who rent booth space. If you're
        interested in becoming a vendor and selling your items, please contact us at{' '}
        <a href={`tel:${CONTACT_INFO.phone}`} className="text-black hover:text-black underline">
          {CONTACT_INFO.phone}
        </a>{' '}
        to learn about available booth spaces and rental terms.
      </p>
    ),
  },
  {
    id: 'pets',
    title: 'Are pets allowed?',
    content: (
      <p>
        Service animals are always welcome. Due to the nature of our antiques and the comfort of all
        guests, we ask that other pets remain at home. Thank you for understanding!
      </p>
    ),
  },
  {
    id: 'negotiation',
    title: 'Can I negotiate prices?',
    content: (
      <p>
        Many of our vendors are open to reasonable offers, especially on higher-priced items. Our
        staff can help contact vendors to discuss pricing. Keep in mind that each booth is
        independently operated, so policies may vary.
      </p>
    ),
  },
  {
    id: 'dining',
    title: 'Are there restaurants nearby?',
    content: (
      <p>
        Yes! We're located in a vibrant area with numerous dining options within walking distance.
        The famous Big Chicken landmark is nearby, and the Marietta Square (about 10 minutes away)
        has dozens of restaurants, cafes, and eateries to choose from.
      </p>
    ),
  },
  {
    id: 'inventory',
    title: 'How often does your inventory change?',
    content: (
      <p>
        With over 100+ independent vendors, our inventory is constantly changing! New items arrive
        weekly, and some vendors refresh their booths several times a month. We recommend visiting
        regularly to discover new treasures.
      </p>
    ),
  },
  {
    id: 'reserve',
    title: 'Can I reserve or hold items?',
    content: (
      <p>
        Hold policies vary by vendor. Our staff at the front desk can help coordinate with
        individual vendors regarding holds or special arrangements for items you're interested in.
        We recommend calling ahead if you have questions about a specific item.
      </p>
    ),
  },
]

export default function VisitPage() {
  const mapUrl = getGoogleMapsUrl(LOCATION.address, LOCATION.city, LOCATION.state, LOCATION.zip)

  // Get current day and time to show if open/closed
  const now = new Date()
  const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' })
  const currentHours = BUSINESS_HOURS.find(h => h.day === currentDay)

  return (
    <main className="min-h-screen">
      {/* Small Page Hero */}
      <section className="bg-gradient-to-b from-slate-light/50 to-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-black mb-4">
              <a href="/" className="hover:text-black transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-black">Visit</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              Plan Your Visit
            </h1>
            <p className="text-lg text-black">
              Located near the famous Big Chicken in Marietta, GA. Open 7 days a week with free parking.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Hours - 50/50 Split */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: Map */}
            <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(`${LOCATION.address}, ${LOCATION.city}, ${LOCATION.state} ${LOCATION.zip}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marietta Antique Mall Location"
              />
            </div>

            {/* RIGHT: Info Card */}
            <div>
              <Card>
                <CardBody>
                  {/* Current Status */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-display text-2xl font-bold text-black">
                        Store Hours
                      </h2>
                    </div>
                    {currentHours && (
                      <p className="text-lg font-semibold text-black">
                        Today: {currentHours.open} - {currentHours.close}
                      </p>
                    )}
                  </div>

                  {/* Full Week Schedule */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h3 className="font-semibold text-black mb-3">Weekly Schedule</h3>
                    <ul className="space-y-2">
                      {BUSINESS_HOURS.map((hours) => (
                        <li
                          key={hours.day}
                          className={`flex justify-between ${
                            hours.day === currentDay
                              ? 'font-semibold text-black'
                              : 'text-black'
                          }`}
                        >
                          <span>{hours.day}</span>
                          <span>
                            {hours.open} - {hours.close}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Address</h3>
                    <p className="text-black">
                      {LOCATION.address}
                      <br />
                      {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Phone</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-lg font-semibold text-black hover:text-black transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  {/* Get Directions Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={() => window.open(mapUrl, '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Get Directions
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Accessibility */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Visitor Amenities
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              We've made visiting comfortable and accessible for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Parking */}
            <Card hover>
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-mauve-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  Free Parking
                </h3>
                <p className="text-black">
                  Ample parking lot with spaces for large vehicles
                </p>
              </CardBody>
            </Card>

            {/* Wheelchair Access */}
            <Card hover>
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-mauve-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  Wheelchair Accessible
                </h3>
                <p className="text-black">
                  Accessible entrance, wide aisles, and designated parking
                </p>
              </CardBody>
            </Card>

            {/* Shopping Carts */}
            <Card hover>
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-mauve-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  Shopping Carts
                </h3>
                <p className="text-black">
                  Carts available for your convenience while browsing
                </p>
              </CardBody>
            </Card>

            {/* Restrooms */}
            <Card hover>
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-mauve-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  Clean Restrooms
                </h3>
                <p className="text-black">
                  Well-maintained facilities for our visitors
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Got Questions? We've Got Answers!
            </h2>
            <p className="text-lg text-black">
              Find answers to common questions about visiting our antique mall
            </p>
          </div>

          <Accordion items={faqItems} defaultOpenIds={['hours']} />
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Nearby Attractions
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Make a day of it! Explore the best of Marietta while you're here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Big Chicken */}
            <Card hover>
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mauve-light/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-black mb-2">
                      The Big Chicken
                    </h3>
                    <p className="text-sm text-black mb-2">2 minutes away</p>
                    <p className="text-black">
                      Iconic Marietta landmark and local meeting point. A must-see photo opportunity!
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Marietta Square */}
            <Card hover>
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mauve-light rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-black mb-2">
                      Marietta Square
                    </h3>
                    <p className="text-sm text-black mb-2">10 minutes away</p>
                    <p className="text-black">
                      Historic downtown area with shops, galleries, and seasonal farmers market.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Dining */}
            <Card hover>
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mauve-light/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-black mb-2">
                      Great Dining Options
                    </h3>
                    <p className="text-sm text-black mb-2">Walking distance</p>
                    <p className="text-black">
                      Numerous restaurants, cafes, and eateries within minutes of the mall.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center p-8 bg-gradient-to-r from-slate-light/20 to-mauve-light/20 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-black mb-3">
              Still Have Questions?
            </h3>
            <p className="text-black mb-6">
              Our friendly staff is here to help! Give us a call or stop by during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="!border-2 !border-mint !text-white hover:!bg-mint hover:!text-black"
                onClick={() => (window.location.href = `tel:${CONTACT_INFO.phone}`)}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </Button>
              <Button variant="accent" size="lg" onClick={() => (window.location.href = '/contact')}>
                Contact Us Online
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
