'use client'

import { BUSINESS_NAME, LOCATION, CONTACT_INFO, BUSINESS_HOURS } from '@/lib/constants'
import { isBusinessOpen, formatPhoneLink, getDirectionsUrl } from '@/lib/utils'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function VisitUsSection() {
  const { isOpen, nextChange } = isBusinessOpen(BUSINESS_HOURS)
  const fullAddress = `${LOCATION.address}, ${LOCATION.city}, ${LOCATION.state} ${LOCATION.zip}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const todayHours = BUSINESS_HOURS.find((h) => h.day === today)

  return (
    <section id="visit-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Visit Us
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Located near the iconic Big Chicken in Marietta, just 10 minutes from the historic
            Marietta Square.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl hover-lift">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8348659862267!2d-84.46395!3d33.989295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50e7f8c8c8c8d%3A0x8e8e8e8e8e8e8e8e!2s1477%20Roswell%20Rd%2C%20Marietta%2C%20GA%2030062!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marietta Antique Mall Location - 1477 Roswell Rd, Marietta, GA 30062"
              />
            </div>

            {/* Parking Info */}
            <div className="mt-6 bg-bg-secondary rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Parking Information</h4>
                  <p className="text-text-secondary text-sm">
                    Ample free parking available. Wheelchair accessible entrance with wide aisles
                    throughout the mall. Shopping carts provided for your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Hours Info */}
          <div className="order-1 lg:order-2">
            {/* Status */}
            <div className="mb-8">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                <span
                  className={`h-3 w-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}
                />
                <span className="font-semibold">{isOpen ? 'Open Now' : 'Closed'}</span>
                {todayHours && (
                  <span className="text-sm">
                    • {nextChange}
                  </span>
                )}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-bg-secondary rounded-lg p-6 mb-6">
              <h3 className="font-display text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Hours of Operation
              </h3>
              <div className="space-y-3">
                {BUSINESS_HOURS.map((hours) => {
                  const isToday = hours.day === today
                  return (
                    <div
                      key={hours.day}
                      className={`flex justify-between items-center ${
                        isToday
                          ? 'font-bold text-primary bg-primary/5 -mx-3 px-3 py-2 rounded'
                          : 'text-text-secondary'
                      }`}
                    >
                      <span>{hours.day}</span>
                      <span>
                        {hours.open} - {hours.close}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-bg-secondary rounded-lg p-6 mb-6">
              <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                    <div>
                      <p className="font-medium text-text-primary">Address</p>
                      <p className="text-text-secondary">
                        {LOCATION.address}
                        <br />
                        {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-1"
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
                    <div>
                      <p className="font-medium text-text-primary">Phone</p>
                      <a
                        href={`tel:${formatPhoneLink(CONTACT_INFO.phone)}`}
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {CONTACT_INFO.email && (
                  <div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-text-primary">Email</p>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-accent hover:text-accent-dark transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="flex-1 transition-all hover:scale-105"
                onClick={() => window.open(directionsUrl, '_blank')}
              >
                Get Directions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 transition-all hover:scale-105"
                onClick={() => window.location.href = `tel:${formatPhoneLink(CONTACT_INFO.phone)}`}
              >
                Call Us
              </Button>
            </div>

            {/* Landmarks */}
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-primary">Nearby Landmarks:</span> Famous Big
                Chicken (2 min), Marietta Square (10 min), Marietta Museum of History (12 min)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
