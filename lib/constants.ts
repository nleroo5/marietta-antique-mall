import type { BusinessHours, ContactInfo, Location } from '@/types'

// Business Information
export const BUSINESS_NAME = 'Marietta Antique Mall'

export const LOCATION: Location = {
  address: '1477 Roswell Rd, Suite 100',
  city: 'Marietta',
  state: 'GA',
  zip: '30062',
  lat: 33.9893,
  lng: -84.4617,
}

export const CONTACT_INFO: ContactInfo = {
  phone: '(770) 973-5600',
  email: 'info@mariettaantiquemall.com',
  facebook: 'https://www.facebook.com/Mariettaantiquemall/',
  instagram: 'https://www.instagram.com/mariettaantiquemall/',
}

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Monday', open: '10:00 AM', close: '6:00 PM' },
  { day: 'Tuesday', open: '10:00 AM', close: '6:00 PM' },
  { day: 'Wednesday', open: '10:00 AM', close: '6:00 PM' },
  { day: 'Thursday', open: '10:00 AM', close: '6:00 PM' },
  { day: 'Friday', open: '10:00 AM', close: '7:00 PM' },
  { day: 'Saturday', open: '10:00 AM', close: '7:00 PM' },
  { day: 'Sunday', open: '12:00 PM', close: '6:00 PM' },
]

// Business Highlights
export const HIGHLIGHTS = [
  '30,000 sq ft of treasures',
  '100+ independent vendors',
  'Wheelchair accessible',
  'Wide aisles with shopping carts',
  'Near the famous Big Chicken',
  '10 minutes from Marietta Square',
]

// Featured Categories
export const CATEGORIES = [
  'True Antiques',
  'Mid-Century Modern',
  'Vintage Jewelry',
  'Collectibles',
  'Advertising Memorabilia',
  'Furniture',
  'Home Decor',
  'Handcrafted Artisan Goods',
  'Restoration Products',
]

// SEO Keywords
export const SEO_KEYWORDS = [
  'marietta antique mall',
  'antiques marietta ga',
  'vintage furniture marietta',
  'collectibles georgia',
  'antique dealers marietta',
  'facebook marketplace antiques',
  'big chicken marietta shops',
  'marietta square antiques',
  'mcm furniture atlanta',
  'vintage jewelry georgia',
]

// Social Media
export const FACEBOOK_PAGE_ID = 'Mariettaantiquemall'
export const FACEBOOK_GROUP = 'MAM Marketplace'
