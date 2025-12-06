# Technical Architecture Document
**Project:** Marietta Antique Mall Redesign
**Date:** December 5, 2025
**Version:** 1.0

---

## 📐 SYSTEM ARCHITECTURE

### Technology Stack

```
┌─────────────────────────────────────────────┐
│         PRESENTATION LAYER                  │
│  ┌──────────────┐  ┌──────────────┐        │
│  │   Next.js    │  │  Tailwind    │        │
│  │     16.x     │  │     CSS      │        │
│  └──────────────┘  └──────────────┘        │
│  ┌──────────────┐  ┌──────────────┐        │
│  │  TypeScript  │  │    React     │        │
│  │     5.9      │  │     19.x     │        │
│  └──────────────┘  └──────────────┘        │
└─────────────────────────────────────────────┘
                     │
┌─────────────────────────────────────────────┐
│          COMPONENT LAYER                    │
│  • Layout Components (Header, Footer)       │
│  • Page Components (Home, Visit, etc)       │
│  • UI Components (Button, Card, Badge)      │
│  • Form Components (Input, Select, etc)     │
└─────────────────────────────────────────────┘
                     │
┌─────────────────────────────────────────────┐
│           DATA LAYER                        │
│  • Constants (lib/constants.ts)             │
│  • Utilities (lib/utils.ts)                 │
│  • Types (types/index.ts)                   │
│  • Vendor Data (JSON/API)                   │
└─────────────────────────────────────────────┘
                     │
┌─────────────────────────────────────────────┐
│       EXTERNAL SERVICES                     │
│  • Google Maps API                          │
│  • Newsletter API (Mailchimp/SendGrid)      │
│  • Contact Form API                         │
│  • Social Media Embeds (Instagram/Facebook) │
│  • Google Analytics 4                       │
└─────────────────────────────────────────────┘
                     │
┌─────────────────────────────────────────────┐
│        DEPLOYMENT LAYER                     │
│  Staging: Vercel (marietta-antique-mall)    │
│  Production: Vercel (mariettaantiques.com)  │
└─────────────────────────────────────────────┘
```

---

## 🗂️ FILE STRUCTURE (REVISED)

### Current Structure
```
marietta-antique-mall/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── homepage/
│   │   ├── HeroBanner.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CategoryCards.tsx   # NEW
│   │   ├── VisitSection.tsx
│   │   └── SocialSection.tsx   # NEW
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    ├── images/
    └── videos/
```

### Planned Structure (Complete)
```
marietta-antique-mall/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                     # Home
│   ├── visit/
│   │   └── page.tsx                 # Visit page
│   ├── vendors/
│   │   └── page.tsx                 # Vendors page
│   ├── contact/
│   │   └── page.tsx                 # Contact page
│   ├── privacy/
│   │   └── page.tsx                 # Privacy policy
│   ├── terms/
│   │   └── page.tsx                 # Terms of service
│   ├── api/
│   │   ├── newsletter/
│   │   │   └── route.ts             # Newsletter signup API
│   │   └── contact/
│   │       └── route.ts             # Contact form API
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # ✅ Exists
│   │   ├── Footer.tsx               # ✅ Exists
│   │   ├── Navigation.tsx           # ✅ Exists
│   │   └── MobileMenu.tsx           # ✅ Exists
│   ├── homepage/
│   │   ├── HeroSection.tsx          # NEW (simplified)
│   │   ├── AboutSnippet.tsx         # NEW
│   │   ├── CategoryCards.tsx        # NEW
│   │   ├── VisitSection.tsx         # ✅ Exists (modify)
│   │   └── SocialSection.tsx        # NEW
│   ├── visit/
│   │   ├── LocationMap.tsx          # NEW
│   │   ├── HoursDisplay.tsx         # NEW
│   │   ├── FAQAccordion.tsx         # NEW
│   │   └── AccessibilityInfo.tsx    # NEW
│   ├── vendors/
│   │   ├── FeaturedVendor.tsx       # NEW
│   │   ├── VendorDirectory.tsx      # NEW
│   │   ├── VendorCard.tsx           # NEW
│   │   ├── VendorSearch.tsx         # NEW
│   │   └── BecomeVendorCTA.tsx      # NEW
│   ├── contact/
│   │   ├── ContactForm.tsx          # NEW
│   │   ├── ContactInfo.tsx          # NEW
│   │   └── NewsletterSignup.tsx     # NEW (reusable)
│   └── ui/
│       ├── Button.tsx               # ✅ Exists
│       ├── Card.tsx                 # ✅ Exists
│       ├── Badge.tsx                # ✅ Exists
│       ├── Input.tsx                # NEW
│       ├── Select.tsx               # NEW
│       ├── Textarea.tsx             # NEW
│       ├── SearchBar.tsx            # NEW
│       ├── Accordion.tsx            # NEW
│       └── StatusIndicator.tsx      # NEW
├── lib/
│   ├── constants.ts                 # ✅ Exists (update colors)
│   ├── utils.ts                     # ✅ Exists
│   ├── vendors.ts                   # NEW (vendor data)
│   └── api.ts                       # NEW (API helpers)
├── types/
│   └── index.ts                     # ✅ Exists (expand)
├── data/
│   ├── vendors.json                 # NEW (vendor directory)
│   └── faqs.json                    # NEW (FAQ data)
└── public/
    ├── images/
    │   ├── hero/
    │   ├── categories/              # NEW (8 images)
    │   ├── vendors/
    │   └── og-image.jpg             # NEW
    ├── videos/                      # CLEAN UP
    └── favicon/                     # NEW
        ├── favicon.ico
        ├── apple-touch-icon.png
        └── favicon-*.png
```

---

## 🎨 DESIGN SYSTEM IMPLEMENTATION

### Color System (Tailwind Config)

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Brand colors from logo
        'mint': {
          DEFAULT: '#C2DFC9',
          dark: '#A8CDB1',
          light: '#D9F0DE',
        },
        'magenta': {
          DEFAULT: '#A30093',
          dark: '#8A007D',
          light: '#C533B8',
        },
        // Supporting colors
        background: {
          DEFAULT: '#FAFAFA',
          secondary: '#F5F5F5',
        },
        text: {
          primary: '#2A2A2A',
          secondary: '#4A4A4A',
          light: '#6B6B6B',
        },
        // Status colors
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
        nav: ['Montserrat', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Type scale
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '3.75rem',     // 60px
      },
      spacing: {
        // 8px grid system
        '18': '4.5rem',       // 72px
        '22': '5.5rem',       // 88px
        '26': '6.5rem',       // 104px
        '30': '7.5rem',       // 120px
      },
    },
  },
}
```

### Component Patterns

#### Button Variants
```typescript
// components/ui/Button.tsx
variants: {
  primary:   'bg-mint hover:bg-mint-dark text-charcoal'
  secondary: 'bg-magenta hover:bg-magenta-dark text-white'
  outline:   'border-2 border-mint hover:bg-mint hover:text-charcoal'
  ghost:     'hover:bg-mint/10 text-mint'
}

sizes: {
  sm: 'px-4 py-2 text-sm'
  md: 'px-6 py-3 text-base'
  lg: 'px-8 py-4 text-lg'
}
```

---

## 🔌 API INTEGRATIONS

### 1. Newsletter Signup API

**Endpoint:** `/api/newsletter`
**Method:** POST

```typescript
// app/api/newsletter/route.ts
interface NewsletterRequest {
  email: string;
}

interface NewsletterResponse {
  success: boolean;
  message: string;
}

// Options for implementation:
// - Mailchimp API
// - SendGrid Marketing Contacts API
// - ConvertKit API
// - Custom database
```

**Environment Variables Required:**
```
NEWSLETTER_API_KEY=xxx
NEWSLETTER_LIST_ID=xxx
```

### 2. Contact Form API

**Endpoint:** `/api/contact`
**Method:** POST

```typescript
// app/api/contact/route.ts
interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// Options:
// - SendGrid Email API
// - Resend API
// - Nodemailer (SMTP)
// - Form service (Formspree, etc.)
```

**Environment Variables Required:**
```
SENDGRID_API_KEY=xxx
CONTACT_EMAIL=info@mariettaantiquemall.com
```

### 3. Google Maps Integration

**Implementation:**
```typescript
// components/visit/LocationMap.tsx
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=...'

// Alternative: Google Maps JavaScript API
// Requires API key and billing account
```

**Environment Variables (if using JS API):**
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxx
```

### 4. Social Media Embeds

**Instagram Feed:**
```typescript
// Option 1: Instagram Basic Display API (requires app approval)
// Option 2: Third-party service (Behold, SnapWidget)
// Option 3: Manual curation (recommended for simplicity)
```

**Facebook Page Plugin:**
```typescript
// Current implementation uses Facebook SDK
// Keep existing implementation or replace with manual curation
```

### 5. Google Analytics 4

**Implementation:**
```typescript
// app/layout.tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

**Environment Variables:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🗃️ DATA MANAGEMENT

### Vendor Directory Data

**Storage Options:**
1. **JSON File** (Recommended for MVP)
   - File: `data/vendors.json`
   - Easy to manage, no database needed
   - Update via file edits

2. **CMS** (Future enhancement)
   - Sanity.io, Contentful, or Strapi
   - Client-friendly editing
   - API-driven

3. **Database** (If scaling needed)
   - PostgreSQL (Vercel Postgres)
   - Airtable (easy client access)

**Recommended Approach:**
Start with JSON, migrate to CMS in Phase 2 (post-launch)

### Vendor Data Schema

```typescript
// data/vendors.json
{
  "vendors": [
    {
      "id": "vendor-001",
      "name": "Southern Charm Antiques",
      "boothNumber": "A-42",
      "specialty": "Estate Jewelry",
      "category": "jewelry",
      "description": "Specializing in vintage and antique jewelry...",
      "phone": "(770) xxx-xxxx",
      "email": "contact@example.com",
      "featured": true,
      "image": "/images/vendors/vendor-001.jpg",
      "socialMedia": {
        "instagram": "username",
        "facebook": "pagename"
      }
    }
  ]
}
```

### FAQ Data Schema

```typescript
// data/faqs.json
{
  "faqs": [
    {
      "id": "faq-001",
      "question": "What are your hours?",
      "answer": "We're open Monday-Thursday 10am-6pm...",
      "category": "hours",
      "order": 1
    }
  ]
}
```

---

## 🚀 DEPLOYMENT STRATEGY

### Staging Environment

**URL:** https://marietta-antique-mall.vercel.app/

**Configuration:**
- Branch: `develop` (or `staging`)
- Auto-deploy on push
- Environment: `preview`
- Use staging API keys

**Environment Variables:**
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://marietta-antique-mall.vercel.app
NEWSLETTER_API_KEY=[staging key]
SENDGRID_API_KEY=[staging key]
```

### Production Environment

**URL:** http://mariettaantiques.com/

**Configuration:**
- Branch: `main`
- Manual deploy approval
- Environment: `production`
- Use production API keys

**Environment Variables:**
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://mariettaantiques.com
NEWSLETTER_API_KEY=[production key]
SENDGRID_API_KEY=[production key]
NEXT_PUBLIC_GA_MEASUREMENT_ID=[GA4 ID]
```

### DNS Configuration

**Domain:** mariettaantiques.com

**Required DNS Records:**
```
Type   Name   Value
----   ----   -----
A      @      76.76.21.21 (Vercel IP)
CNAME  www    cname.vercel-dns.com
```

**SSL:** Auto-provisioned by Vercel

---

## 🧪 TESTING STRATEGY

### Unit Testing (Future Phase)
```
Framework: Jest + React Testing Library
Coverage: 80%+ for utilities and components
```

### Integration Testing
```
Framework: Playwright (future)
Coverage: Critical user flows
```

### Manual Testing Checklist

**Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS + iOS)
- [ ] Edge (latest)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

**Device Testing:**
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (1024px, 768px)
- [ ] Mobile (414px, 375px, 360px)

**Functional Testing:**
- [ ] Navigation (all links)
- [ ] Forms (validation, submission)
- [ ] Contact form email delivery
- [ ] Newsletter signup
- [ ] Phone links (click-to-call)
- [ ] Map interactions
- [ ] Social media links
- [ ] Search functionality
- [ ] Filter functionality

**Performance Testing:**
- [ ] Lighthouse audit (90+ all metrics)
- [ ] Core Web Vitals check
- [ ] Image optimization
- [ ] JavaScript bundle size
- [ ] Loading speed (< 2s desktop, < 3s mobile)

**Accessibility Testing:**
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader (NVDA/JAWS)
- [ ] Color contrast ratios
- [ ] Alt text on images
- [ ] Form labels

---

## 📦 BUILD & OPTIMIZATION

### Image Optimization

**Strategy:**
1. Use Next.js Image component everywhere
2. Convert to WebP format automatically
3. Generate multiple sizes for responsive
4. Lazy load below-the-fold images
5. Use blur placeholders

**Settings:**
```typescript
// next.config.ts
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

### Bundle Optimization

**Target:** < 200KB initial JavaScript

**Strategies:**
- Tree shaking (automatic)
- Code splitting by route (automatic with App Router)
- Dynamic imports for heavy components
- Remove unused dependencies
- Minimize vendor bundles

### Performance Targets

```
Lighthouse Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

Core Web Vitals:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Additional Metrics:
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Total Blocking Time: < 300ms
```

---

## 🔒 SECURITY CONSIDERATIONS

### Headers Configuration

```typescript
// next.config.ts
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ]
}
```

### Environment Variable Protection

**Never expose:**
- API keys
- Email credentials
- Database credentials

**Safe to expose (prefix with `NEXT_PUBLIC_`):**
- Google Maps API key (with domain restrictions)
- Google Analytics ID
- Site URL

### Form Security

- CSRF protection (Next.js API routes handle automatically)
- Input validation (client + server)
- Rate limiting on API routes
- Sanitize user input

---

## 📊 MONITORING & ANALYTICS

### Analytics Setup

**Google Analytics 4:**
- Track page views
- Track button clicks (CTAs)
- Track form submissions
- Track errors
- Track search queries (vendor directory)

**Custom Events:**
```javascript
// Call button click
gtag('event', 'call_button_click', {
  phone_number: '(770) 973-5600'
})

// Newsletter signup
gtag('event', 'newsletter_signup', {
  method: 'footer'
})

// Contact form submission
gtag('event', 'contact_form_submit', {
  subject: 'General Inquiry'
})
```

### Error Monitoring

**Options:**
- Sentry (recommended)
- LogRocket
- Vercel Analytics (built-in)

### Performance Monitoring

- Vercel Analytics (speed insights)
- Google Search Console (Core Web Vitals)
- Lighthouse CI (in GitHub Actions)

---

## 🔄 MAINTENANCE PLAN

### Monthly Tasks
- [ ] Update dependencies (`npm update`)
- [ ] Review analytics
- [ ] Check for broken links
- [ ] Review error logs
- [ ] Update vendor directory (if needed)
- [ ] Update events/news (if applicable)

### Quarterly Tasks
- [ ] Security audit
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit
- [ ] SEO audit
- [ ] Backup vendor data

### Annual Tasks
- [ ] Major dependency updates (Next.js, React)
- [ ] Design refresh review
- [ ] Content audit
- [ ] Photography updates

---

## 📝 DOCUMENTATION REQUIREMENTS

### Code Documentation
- JSDoc comments for complex functions
- README for component usage
- API endpoint documentation
- Environment variable documentation

### User Documentation
- Content update guide (for client)
- Vendor directory management guide
- Analytics dashboard guide
- Common troubleshooting guide

---

## ✅ PRE-LAUNCH CHECKLIST

### Technical
- [ ] All pages deployed and tested
- [ ] DNS configured correctly
- [ ] SSL certificate active
- [ ] All forms working
- [ ] Newsletter integration working
- [ ] Contact form email delivery working
- [ ] Analytics tracking verified
- [ ] Error monitoring active
- [ ] Performance targets met
- [ ] Accessibility audit passed
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete

### Content
- [ ] All copy approved
- [ ] All images optimized
- [ ] Vendor directory populated
- [ ] FAQ completed
- [ ] Legal pages published
- [ ] Social media links verified
- [ ] Contact information verified

### SEO
- [ ] Meta tags on all pages
- [ ] Structured data implemented
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Google Search Console setup
- [ ] Google My Business updated

---

**Document Status:** Draft
**Next Review:** December 9, 2025
**Owner:** Lead Developer
