'use client'

import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { LOCATION } from '@/lib/constants'

export default function ShopPage() {
  const handleVisitGroupClick = () => {
    // Track the click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Facebook Marketplace',
        event_label: 'Visit Group Button',
        value: 1,
      })
    }

    window.open('https://www.facebook.com/groups/MAM.Marketplace/', '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/50">
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 40%,
            rgba(239, 195, 147, 1) 50%,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 1) 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="shimmer-text font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Shop Our Facebook Marketplace
            </h1>
            <p className="text-xl text-black leading-relaxed">
              Browse hundreds of unique antiques, vintage finds, and collectibles from our 100+ vendors. New items added daily!
            </p>
          </div>
        </div>
      </section>

      {/* Visit Facebook Group CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card hover className="!border-2 !border-slate-200 text-center !p-12">
              <div className="mb-10">
                <svg
                  className="w-20 h-20 mx-auto mb-6 text-[#1877F2] drop-shadow-[0_0_15px_rgba(24,119,242,0.5)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                  Browse Available Items
                </h2>
                <p className="text-lg text-black mb-3 leading-relaxed">
                  Join our <strong>MAM Marketplace</strong> Facebook Group to see all items currently for sale
                </p>
                <p className="text-base text-black/80 leading-relaxed">
                  Hundreds of antiques, vintage items, and collectibles with photos, descriptions, and prices
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleVisitGroupClick}
                  className="w-full sm:w-auto min-w-[320px] !bg-[#1877F2] hover:!bg-[#1664D8] !border-[#1877F2] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(24,119,242,0.4)]"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Visit MAM Marketplace Group
                </Button>

                <p className="text-sm text-black/60">
                  Free to join • Browse & message vendors directly
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card hover className="!border-2 !border-slate-200 text-center !p-8">
              <div className="flex flex-col items-center">
                <h3 className="font-display text-xl font-bold text-black mb-3">
                  Join the Group
                </h3>
                <p className="text-black leading-relaxed">
                  Click the button above to join our MAM Marketplace Facebook Group - it's free and takes just a moment
                </p>
              </div>
            </Card>

            <Card hover className="!border-2 !border-slate-200 text-center !p-8">
              <div className="flex flex-col items-center">
                <h3 className="font-display text-xl font-bold text-black mb-3">
                  Browse & Message
                </h3>
                <p className="text-black leading-relaxed">
                  See all available items with photos, descriptions, and prices. Message vendors directly with questions
                </p>
              </div>
            </Card>

            <Card hover className="!border-2 !border-slate-200 text-center !p-8">
              <div className="flex flex-col items-center">
                <h3 className="font-display text-xl font-bold text-black mb-3">
                  Pick Up In-Store
                </h3>
                <p className="text-black leading-relaxed">
                  Visit us at {LOCATION.address} to pick up your treasure or browse even more items in person
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
