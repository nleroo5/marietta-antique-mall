# Marietta Antique Mall - Setup & Deployment Guide

## Project Complete! ✅

Your modern, high-performance homepage for Marietta Antique Mall has been successfully built with all requested features.

## What's Included

### ✅ Core Features Implemented

1. **Full-Screen Hero Section with Drone Video**
   - Video banner with fallback poster image
   - Mobile-optimized (uses static image on mobile)
   - Two prominent CTAs
   - Smooth scroll indicator

2. **Facebook Marketplace Integration**
   - Facebook Page Plugin embedded
   - Error handling and loading states
   - Fallback UI if Facebook SDK doesn't load
   - Links to Facebook group

3. **Featured Vendors Section**
   - Rotating vendor showcase
   - Auto-playing carousel
   - Grid display of all featured vendors
   - Booth number badges

4. **About Section**
   - Image gallery layout
   - Trust indicators (500+ reviews, authenticated items)
   - Business highlights grid
   - Category badges

5. **News & Events Section**
   - Card-based layout
   - Category badges (Event, News, Vendor Spotlight, Sale)
   - CTA to follow on Facebook

6. **Visit Us Section**
   - Embedded Google Maps
   - Real-time open/closed status
   - Complete business hours
   - Contact information with click-to-call
   - Parking and accessibility info

7. **Header & Navigation**
   - Sticky header with scroll effects
   - Top bar showing open/closed status
   - Social media links
   - Mobile-responsive hamburger menu
   - Smooth scroll navigation

8. **Footer**
   - Complete business information
   - Hours of operation
   - Quick links
   - Contact details
   - Social media links

9. **SEO Optimization**
   - Meta tags (title, description, keywords)
   - Open Graph tags
   - Twitter Card tags
   - JSON-LD structured data
   - Responsive og:image support

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Fonts:** Google Fonts (Playfair Display + Inter)
- **Icons:** Inline SVG
- **Deployment Ready:** Vercel

## Quick Start

### 1. Install Dependencies
```bash
cd marietta-antique-mall
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

## Required Assets

Before deploying, add these files to the `public/` directory:

### Critical Assets
- [public/videos/drone-banner.mp4](public/videos/drone-banner.mp4) - Optimized drone video (<10MB, 1920x1080)
- [public/videos/drone-banner.webm](public/videos/drone-banner.webm) - WebM format (optional but recommended)
- [public/images/hero-poster.jpg](public/images/hero-poster.jpg) - Hero fallback image (1920x1080)

### Optional Assets (for complete experience)
- `public/images/about-1.jpg` through `about-4.jpg` - About section images
- `public/images/vendors/vendor-1.jpg` through `vendor-4.jpg` - Vendor photos
- `public/images/news/` - News and event images
- `public/og-image.jpg` - Social media preview (1200x630)

## Customization Guide

### Update Business Information

Edit [lib/constants.ts](lib/constants.ts):
```typescript
export const CONTACT_INFO: ContactInfo = {
  phone: '(770) 973-5600',
  email: 'info@mariettaantiquemall.com',
  facebook: 'https://www.facebook.com/Mariettaantiquemall/',
  instagram: 'https://www.instagram.com/mariettaantiquemall/',
}
```

### Change Business Hours

Edit the `BUSINESS_HOURS` array in [lib/constants.ts](lib/constants.ts)

### Update Featured Vendors

Edit [components/homepage/FeaturedVendors.tsx](components/homepage/FeaturedVendors.tsx):
```typescript
const FEATURED_VENDORS: Vendor[] = [
  {
    id: '1',
    name: 'Your Vendor Name',
    boothNumber: '42',
    specialty: 'Mid-Century Modern',
    description: '...',
    featuredImage: '/images/vendors/vendor-1.jpg',
  },
  // Add more vendors...
]
```

### Add News/Events

Edit [components/homepage/NewsEvents.tsx](components/homepage/NewsEvents.tsx)

### Update Colors

Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  primary: {
    DEFAULT: '#8B6F47',  // Antique Bronze
    light: '#A4865C',
    dark: '#6B5436',
  },
  // ... more colors
}
```

## Deployment to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
cd marietta-antique-mall
git init
git add .
git commit -m "Initial commit - Marietta Antique Mall website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live in ~2 minutes!

### Step 3: Add Custom Domain (Optional)
1. In Vercel project settings → Domains
2. Add `www.mariettaantiquemall.com`
3. Follow DNS configuration instructions

## Performance Optimizations Included

✅ **Video Optimization**
- Mobile fallback to static image
- Poster image for instant display
- Lazy loading below-the-fold content

✅ **Image Optimization**
- Next.js Image component (automatic WebP conversion)
- Lazy loading
- Blur placeholders

✅ **Code Optimization**
- Code splitting
- Tree shaking
- Minification

✅ **SEO**
- Meta tags
- Structured data
- Sitemap ready

## Performance Targets

- **Lighthouse Score:** 90+ (all categories)
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility Features

✅ Semantic HTML
✅ ARIA labels
✅ Keyboard navigation
✅ Screen reader support
✅ Color contrast compliance (WCAG 2.1 AA)
✅ Reduced motion support

## Next Steps / Future Enhancements

Consider adding:
- [ ] Vendor directory page (`/vendors`)
- [ ] Events calendar page (`/events`)
- [ ] Blog/news section
- [ ] Newsletter signup form
- [ ] Instagram feed integration
- [ ] Search functionality
- [ ] Virtual tour
- [ ] Online vendor application form
- [ ] Google Analytics
- [ ] Contact form

## Troubleshooting

### Development Server Won't Start
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build Errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Ensure images are in the correct `public/` directory
- Check file extensions match (case-sensitive)
- Verify image paths in component files

### Facebook Feed Not Loading
- Check internet connection
- Verify Facebook page URL is correct
- Facebook SDK may be blocked by ad blockers

## Support

For technical questions:
- Documentation: [README.md](README.md)
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs

## File Structure Reference

```
marietta-antique-mall/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── homepage/
│   │   ├── HeroBanner.tsx
│   │   ├── FacebookMarketplace.tsx
│   │   ├── FeaturedVendors.tsx
│   │   ├── AboutSection.tsx
│   │   ├── VisitUsSection.tsx
│   │   └── NewsEvents.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── lib/
│   ├── constants.ts        # Business info (UPDATE THIS!)
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript types
├── public/
│   ├── images/             # Add your images here
│   └── videos/             # Add drone video here
└── package.json
```

## Important Files to Update

1. **[lib/constants.ts](lib/constants.ts)** - Business info, hours, contact
2. **[components/homepage/FeaturedVendors.tsx](components/homepage/FeaturedVendors.tsx)** - Vendor data
3. **[components/homepage/NewsEvents.tsx](components/homepage/NewsEvents.tsx)** - News/events
4. **public/** directory - All images and videos

## Contact

Website built by Claude Code
For questions about this build, refer to the documentation files included.

---

**🎉 Your website is ready to launch! Add your assets and deploy to Vercel.**
