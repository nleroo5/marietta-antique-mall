'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call - Replace with actual newsletter signup logic
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSuccess(true)
    setEmail('')
    setIsSubmitting(false)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-primary/10">
            <div className="text-center mb-8">
              <Badge variant="primary" className="mb-4">
                Stay Connected
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Get the latest updates on new arrivals, exclusive events, and special promotions
                delivered straight to your inbox.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                <svg
                  className="w-12 h-12 text-green-500 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-semibold text-green-800 text-lg mb-1">
                  Successfully Subscribed!
                </h3>
                <p className="text-green-700">Thank you for joining our newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base transition-all hover:border-primary/50"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="whitespace-nowrap transition-all hover:scale-105"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Subscribing...
                      </span>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </div>
                <p className="text-xs text-text-light mt-3 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-text-secondary">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">No spam, ever</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">Weekly updates</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Exclusive deals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
