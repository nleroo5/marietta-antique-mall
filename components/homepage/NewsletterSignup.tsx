'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <div className="flex flex-col">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-black mb-3">
          Join the Treasure Hunter&apos;s Club
        </h2>
      </div>

      {/* Wood Grain Card */}
      <motion.div
        ref={ref}
        initial={{ flexGrow: 0 }}
        animate={{
          flexGrow: isInView ? 1 : 0
        }}
        transition={{
          duration: 1.2,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.2
        }}
        className="rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden flex flex-col"
            style={{
              backgroundColor: '#FAF8F5',
              backgroundImage: `
                linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.55) 100%),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Cdefs%3E%3Cpattern id='woodsketch2' x='0' y='0' width='400' height='600' patternUnits='userSpaceOnUse'%3E%3Cpath d='M50,0 Q48,150 50,300 T50,600' stroke='%23B89968' stroke-width='1' fill='none' opacity='0.25'/%3E%3Cpath d='M55,0 Q53,150 55,300 T55,600' stroke='%23C9A86A' stroke-width='0.7' fill='none' opacity='0.17'/%3E%3Cpath d='M100,0 Q102,150 100,300 T100,600' stroke='%23A0826D' stroke-width='0.9' fill='none' opacity='0.22'/%3E%3Cpath d='M150,0 Q148,150 150,300 T150,600' stroke='%23B89968' stroke-width='1' fill='none' opacity='0.24'/%3E%3Cpath d='M155,0 Q157,150 155,300 T155,600' stroke='%23C9A86A' stroke-width='0.7' fill='none' opacity='0.16'/%3E%3Cpath d='M200,0 Q198,150 200,300 T200,600' stroke='%238B6F47' stroke-width='1.1' fill='none' opacity='0.27'/%3E%3Cpath d='M205,0 Q207,150 205,300 T205,600' stroke='%23C9A86A' stroke-width='0.7' fill='none' opacity='0.19'/%3E%3Cpath d='M250,0 Q252,150 250,300 T250,600' stroke='%23B89968' stroke-width='0.9' fill='none' opacity='0.22'/%3E%3Cpath d='M300,0 Q298,150 300,300 T300,600' stroke='%23A0826D' stroke-width='0.9' fill='none' opacity='0.21'/%3E%3Cpath d='M350,0 Q352,150 350,300 T350,600' stroke='%23B89968' stroke-width='0.9' fill='none' opacity='0.21'/%3E%3Cellipse cx='200' cy='200' rx='40' ry='35' stroke='%238B6F47' stroke-width='1' fill='none' opacity='0.22'/%3E%3Cellipse cx='200' cy='200' rx='32' ry='28' stroke='%238B6F47' stroke-width='0.8' fill='none' opacity='0.19'/%3E%3Cellipse cx='200' cy='200' rx='24' ry='20' stroke='%23B89968' stroke-width='0.7' fill='none' opacity='0.16'/%3E%3Cellipse cx='100' cy='400' rx='35' ry='30' stroke='%23A0826D' stroke-width='0.9' fill='none' opacity='0.21'/%3E%3Cellipse cx='100' cy='400' rx='26' ry='22' stroke='%23B89968' stroke-width='0.8' fill='none' opacity='0.17'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23woodsketch2)'/%3E%3C/svg%3E")
              `,
              backgroundSize: '400px 600px',
              border: '2px solid #D4C4B0',
              boxShadow: `
                inset 0 1px 2px rgba(255, 255, 255, 0.4),
                0 8px 16px rgba(0, 0, 0, 0.1),
                0 16px 32px rgba(139, 111, 71, 0.2)
              `,
            }}
          >
            {/* Decorative top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[4px] opacity-60 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, transparent 0%, rgba(201, 168, 106, 0.5) 50%, transparent 100%)',
              }}
            />

            <div className="text-center mb-6 relative z-10">
              {/* Vintage Key Icon */}
              <div className="flex justify-center mb-4">
                <svg className="w-20 h-20 text-black" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  {/* Ornate key bow (handle) with sketch style */}
                  <circle cx="25" cy="50" r="12" strokeWidth="2.5" opacity="0.9"/>
                  <circle cx="25" cy="50" r="8" strokeWidth="2" opacity="0.8"/>
                  <circle cx="25" cy="50" r="4" strokeWidth="2" opacity="0.7"/>

                  {/* Key shaft with slight irregularity for hand-drawn look */}
                  <path d="M 37 50 L 75 50" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
                  <path d="M 37 48 L 75 48" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M 37 52 L 75 52" strokeWidth="1.5" opacity="0.5"/>

                  {/* Key teeth (bits) - ornate vintage style */}
                  <path d="M 75 50 L 75 58" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                  <path d="M 70 50 L 70 55" strokeWidth="2.5" strokeLinecap="round" opacity="0.85"/>
                  <path d="M 65 50 L 65 58" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                  <path d="M 60 50 L 60 54" strokeWidth="2.5" strokeLinecap="round" opacity="0.85"/>

                  {/* Decorative detail on bow */}
                  <path d="M 20 50 L 30 50" strokeWidth="1.5" opacity="0.6"/>
                  <path d="M 25 45 L 25 55" strokeWidth="1.5" opacity="0.6"/>
                </svg>
              </div>

              <p className="text-base text-charcoal">
                Be the first to discover newly arrived antiques, upcoming estate sales, and vendor spotlights. Get updates delivered to your inbox every Monday.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                <svg
                  className="w-12 h-12 text-black mx-auto mb-3"
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
                <h3 className="font-semibold text-black text-lg mb-1">
                  Successfully Subscribed!
                </h3>
                <p className="text-black">Thank you for joining our newsletter.</p>
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
                <p className="text-xs text-black mt-3 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-accent/30 relative z-10">
              <div className="flex items-start gap-3 text-charcoal">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold">Monday Updates</p>
                  <p className="text-xs text-charcoal/80">New arrivals & events</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-charcoal">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-semibold">First Access</p>
                  <p className="text-xs text-charcoal/80">Estate sale notifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-charcoal">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-semibold">Vendor Spotlights</p>
                  <p className="text-xs text-charcoal/80">Featured collections</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-charcoal">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-semibold">No Spam</p>
                  <p className="text-xs text-charcoal/80">Unsubscribe anytime</p>
                </div>
              </div>
            </div>
          </motion.div>
    </div>
  )
}
