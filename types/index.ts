// Business Information Types
export interface BusinessHours {
  day: string
  open: string
  close: string
  isOpen?: boolean
}

export interface Location {
  address: string
  city: string
  state: string
  zip: string
  lat: number
  lng: number
}

export interface ContactInfo {
  phone: string
  email?: string
  facebook: string
  instagram?: string
}

// Vendor Types
export interface Vendor {
  id: string
  name: string
  boothNumber: string
  specialty: string
  description: string
  featuredImage?: string
  contactEmail?: string
  instagramHandle?: string
}

// Facebook Marketplace Types
export interface FacebookItem {
  id: string
  title: string
  price: number
  description: string
  image: string
  vendor?: string
  boothNumber?: string
  facebookUrl: string
  createdAt: Date
}

// News & Events Types
export interface NewsItem {
  id: string
  title: string
  excerpt: string
  image?: string
  date: Date
  category: 'event' | 'news' | 'vendor-spotlight' | 'sale'
  link?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: Date
  endDate?: Date
  image?: string
  facebookEventUrl?: string
}

// Component Props Types
export interface VendorCardProps {
  vendor: Vendor
  featured?: boolean
}

export interface FacebookFeedProps {
  limit?: number
  showPagination?: boolean
}

export interface MapProps {
  location: Location
  zoom?: number
}

// SEO Types
export interface SeoMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}
