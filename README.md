# Marietta Antique Mall - Official Website

Modern, high-performance homepage for Marietta Antique Mall featuring 100+ vendor booths and 30,000 sq ft of antique treasures.

## Features

- **Full-Screen Drone Video Banner** - Stunning aerial footage (optimized for performance)
- **Facebook Marketplace Integration** - Live feed from Facebook page
- **Featured Vendors Showcase** - Rotating vendor spotlights
- **Interactive Google Maps** - Location with directions
- **Dynamic Business Hours** - Shows current open/closed status
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Structured data and meta tags
- **Accessibility** - WCAG 2.1 AA compliant

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Performance:** Optimized images, lazy loading, code splitting

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
marietta-antique-mall/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Header, Footer, Navigation
│   ├── homepage/            # Homepage sections
│   ├── ui/                  # Reusable UI components
│   └── shared/              # Shared components
├── lib/
│   ├── constants.ts         # Business info, hours, etc.
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript types
├── public/
│   ├── images/              # Static images
│   └── videos/              # Drone video files
└── hooks/                   # Custom React hooks
```

## Adding Content

### Drone Video

1. Place optimized video files in `public/videos/`:
   - `drone-banner.mp4` (< 10MB, 1920x1080)
   - `drone-banner.webm` (optional, for better browser support)
2. Add poster image: `public/images/hero-poster.jpg`

### Images

Add images to `public/images/`:
- Hero poster: `hero-poster.jpg` (1920x1080)
- Vendor photos: `vendors/vendor-{id}.jpg`
- About section: `about-{1-4}.jpg`
- News items: `news/{slug}.jpg`
- OG image: `og-image.jpg` (1200x630)

### Business Information

Update constants in `lib/constants.ts`:
- Address, phone, email
- Business hours
- Social media links
- Categories and highlights

### Vendors

Edit mock data in `components/homepage/FeaturedVendors.tsx` or connect to a CMS/database.

## Performance Optimization

- Video is disabled on mobile devices (uses poster image)
- Images use Next.js Image component with automatic optimization
- Lazy loading for below-the-fold content
- Code splitting by route
- Facebook SDK loaded lazily

### Performance Targets

- Lighthouse Score: 90+ (all categories)
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## SEO

The site includes:
- Meta tags (title, description, keywords)
- Open Graph tags (Facebook)
- Twitter Card tags
- Structured data (JSON-LD) for Google
- Sitemap (add via next-sitemap)
- Robots.txt

### Local SEO Keywords

- marietta antique mall
- antiques marietta ga
- vintage furniture marietta
- big chicken marietta shops
- marietta square antiques

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No environment variables needed for basic deployment. Add as needed for:
- Google Analytics
- Facebook API (if using Graph API)
- Form submissions

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome)

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Reduced motion support

## Contributing

This is a client website. For changes, contact the development team.

## License

Proprietary - © 2024 Marietta Antique Mall. All rights reserved.

## Support

For technical issues or questions:
- Email: dev@mariettaantiquemall.com
- Phone: (770) 973-5600

## Roadmap

- [ ] Vendor directory page
- [ ] Events calendar
- [ ] Online vendor application
- [ ] Newsletter signup
- [ ] Instagram feed integration
- [ ] Virtual tour feature
- [ ] Search functionality
- [ ] Blog/news section
