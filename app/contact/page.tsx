'use client'

import { useState } from 'react'
import { BUSINESS_NAME, LOCATION, CONTACT_INFO, BUSINESS_HOURS } from '@/lib/constants'
import { getGoogleMapsUrl } from '@/lib/utils'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Card, { CardBody } from '@/components/ui/Card'

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'vendor', label: 'Becoming a Vendor' },
  { value: 'item', label: 'Question About an Item' },
  { value: 'event', label: 'Event or Group Visit' },
  { value: 'feedback', label: 'Feedback or Suggestion' },
  { value: 'other', label: 'Other' },
]

export default function ContactPage() {
  const mapUrl = getGoogleMapsUrl(LOCATION.address, LOCATION.city, LOCATION.state, LOCATION.zip)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
        })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        setErrors({ submit: 'Failed to send message. Please try again or call us directly.' })
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again or call us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-mauve-light/10 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="mauve" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-black">
              Have a question or want to learn more? We'd love to hear from you!
              Fill out the form below or give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardBody>
                  <h2 className="font-display text-2xl font-bold text-black mb-6">
                    Send Us a Message
                  </h2>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded-lg">
                      <p className="text-black font-semibold">
                        ✓ Thank you! Your message has been sent successfully. We'll get back to you
                        soon.
                      </p>
                    </div>
                  )}

                  {errors.submit && (
                    <div className="mb-6 p-4 bg-error/10 border border-error/30 rounded-lg">
                      <p className="text-black font-semibold">{errors.submit}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="Your full name"
                        required
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Phone (Optional)"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        helperText="We'll only call if you prefer a phone response"
                      />
                      <Select
                        label="Inquiry Type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        options={inquiryTypes}
                        placeholder="Select a topic..."
                        error={errors.inquiryType}
                        required
                      />
                    </div>

                    <Textarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      placeholder="Tell us how we can help..."
                      rows={6}
                      required
                    />

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5"
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
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-5 h-5 mr-2"
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
                            Send Message
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            inquiryType: '',
                            message: '',
                          })
                          setErrors({})
                        }}
                      >
                        Clear Form
                      </Button>
                    </div>

                    <p className="text-sm text-black">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-black hover:underline">
                        Privacy Policy
                      </a>
                      . We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardBody>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <Card>
                <CardBody>
                  <h3 className="font-display text-xl font-bold text-black mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          className="w-5 h-5 text-black"
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
                        <span className="font-semibold text-black">Phone</span>
                      </div>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-black hover:text-black text-lg font-medium"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          className="w-5 h-5 text-black"
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
                        <span className="font-semibold text-black">Email</span>
                      </div>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-black hover:text-black break-all"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          className="w-5 h-5 text-black"
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
                        <span className="font-semibold text-black">Address</span>
                      </div>
                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-black"
                      >
                        {LOCATION.address}
                        <br />
                        {LOCATION.city}, {LOCATION.state} {LOCATION.zip}
                      </a>
                    </div>
                  </div>

                  <Button
                    variant="accent"
                    fullWidth
                    className="mt-6"
                    onClick={() => window.open(mapUrl, '_blank')}
                  >
                    Get Directions
                  </Button>
                </CardBody>
              </Card>

              {/* Hours Card */}
              <Card>
                <CardBody>
                  <h3 className="font-display text-xl font-bold text-black mb-4">
                    Visit Us During
                  </h3>
                  <ul className="space-y-2">
                    {BUSINESS_HOURS.map((hours) => (
                      <li key={hours.day} className="flex justify-between text-sm">
                        <span className="font-medium text-black">{hours.day}:</span>
                        <span className="text-black">
                          {hours.open} - {hours.close}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              {/* Social Card */}
              <Card>
                <CardBody>
                  <h3 className="font-display text-xl font-bold text-black mb-4">
                    Follow Us
                  </h3>
                  <p className="text-black text-sm mb-4">
                    Stay updated on new arrivals, vendor spotlights, and special events!
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={CONTACT_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 bg-mauve-light hover:bg-mauve text-white rounded-lg transition-colors flex items-center justify-center"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    {CONTACT_INFO.instagram && (
                      <a
                        href={CONTACT_INFO.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 bg-mauve hover:bg-mauve-dark text-white rounded-lg transition-colors flex items-center justify-center"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
