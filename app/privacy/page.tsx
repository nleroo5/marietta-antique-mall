'use client'

import { BUSINESS_NAME, CONTACT_INFO, LOCATION } from '@/lib/constants'
import Card, { CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-light/50 to-white py-12 md:py-16">
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
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="shimmer-text font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-black/70">
              Last updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom max-w-4xl">
          <Card className="!border-2 !border-mauve">
            <CardBody className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-black mb-4">
                Introduction
              </h2>
              <p className="text-black mb-6">
                {BUSINESS_NAME} ("we," "us," or "our") respects your privacy and is committed to
                protecting your personal information. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website or our
                physical store location.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Information We Collect
              </h2>
              <p className="text-black mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-black mb-6 space-y-2">
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone number, and
                  mailing address when you subscribe to our newsletter or contact us
                </li>
                <li>
                  <strong>Vendor Information:</strong> Business details if you apply to become a
                  vendor at our antique mall
                </li>
                <li>
                  <strong>Website Usage Data:</strong> IP address, browser type, device
                  information, pages visited, and time spent on our website through cookies and
                  similar technologies
                </li>
                <li>
                  <strong>Communication Records:</strong> Messages and correspondence when you
                  contact us via phone, email, or contact forms
                </li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                How We Use Your Information
              </h2>
              <p className="text-black mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-black mb-6 space-y-2">
                <li>Send newsletters, promotional materials, and event announcements</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Process vendor applications and manage booth spaces</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Information Sharing
              </h2>
              <p className="text-black mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-black mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party service providers
                  who assist us in operating our website, conducting business, or servicing you
                  (e.g., email service providers, website hosting)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, subpoena, or other
                  legal process
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, sale, or
                  acquisition of all or part of our business
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share
                  your information
                </li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-black mb-6">
                Our website uses cookies and similar tracking technologies to enhance user
                experience, analyze website traffic, and understand visitor behavior. You can
                control cookies through your browser settings, but disabling cookies may limit some
                website functionality.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Third-Party Links
              </h2>
              <p className="text-black mb-6">
                Our website may contain links to third-party websites, including Facebook
                Marketplace and social media platforms. We are not responsible for the privacy
                practices of these external sites. We encourage you to review their privacy
                policies before providing any personal information.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Data Security
              </h2>
              <p className="text-black mb-6">
                We implement reasonable security measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Your Privacy Rights
              </h2>
              <p className="text-black mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-black mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Object to or restrict certain processing of your information</li>
              </ul>
              <p className="text-black mb-6">
                To exercise these rights, please contact us using the information below.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Email Newsletter
              </h2>
              <p className="text-black mb-6">
                If you subscribe to our email newsletter, you can unsubscribe at any time by
                clicking the "unsubscribe" link at the bottom of any email or by contacting us
                directly. We will process your request within 10 business days.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Children's Privacy
              </h2>
              <p className="text-black mb-6">
                Our website is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If you believe we have
                collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Changes to This Privacy Policy
              </h2>
              <p className="text-black mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page with an updated "Last
                updated" date. We encourage you to review this Privacy Policy periodically for any
                changes.
              </p>

              <h2 className="font-display text-2xl font-bold text-black mb-4 mt-8">
                Contact Us
              </h2>
              <p className="text-black mb-4">
                If you have questions or concerns about this Privacy Policy or our privacy
                practices, please contact us:
              </p>
              <div className="bg-mauve-light/30 p-6 rounded-lg border-2 border-mauve">
                <p className="text-black mb-2">
                  <strong>{BUSINESS_NAME}</strong>
                </p>
                <p className="text-black">
                  {LOCATION.address}
                  <br />
                  {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                </p>
                <p className="text-black mt-3">
                  <strong>Phone:</strong>{' '}
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-mauve-dark hover:text-mauve underline transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p className="text-black">
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-mauve-dark hover:text-mauve underline transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  )
}
