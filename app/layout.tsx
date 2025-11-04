import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BUSINESS_NAME, LOCATION, SEO_KEYWORDS } from '@/lib/constants'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} | 30,000 sq ft of Antiques & Vintage Treasures`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    'Discover unique antiques, vintage items, and collectibles from 100+ vendors. Located near the Big Chicken in Marietta, GA. Follow us on Facebook for upcoming events and new arrivals!',
  keywords: SEO_KEYWORDS,
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mariettaantiquemall.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mariettaantiquemall.com',
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | 30,000 sq ft of Antiques & Vintage Treasures`,
    description:
      'Discover unique antiques, vintage items, and collectibles from 100+ vendors in Marietta, GA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} - Antiques & Vintage`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | 30,000 sq ft of Antiques & Vintage Treasures`,
    description: 'Discover unique antiques from 100+ vendors in Marietta, GA.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AntiqueStore',
              name: BUSINESS_NAME,
              image: 'https://www.mariettaantiquemall.com/og-image.jpg',
              '@id': 'https://www.mariettaantiquemall.com',
              url: 'https://www.mariettaantiquemall.com',
              telephone: '(770) 973-5600',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: LOCATION.address,
                addressLocality: LOCATION.city,
                addressRegion: LOCATION.state,
                postalCode: LOCATION.zip,
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: LOCATION.lat,
                longitude: LOCATION.lng,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '10:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Friday', 'Saturday'],
                  opens: '10:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '12:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/Mariettaantiquemall/',
                'https://www.instagram.com/mariettaantiquemall/',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
