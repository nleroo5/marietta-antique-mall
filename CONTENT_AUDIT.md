# Content Audit & Asset Inventory
**Date:** December 5, 2025
**Project:** Marietta Antique Mall Redesign

---

## 📁 EXISTING ASSETS INVENTORY

### Images (public/images/)
**Total Size:** 1.2MB

#### Current Structure:
```
public/images/
├── hero-poster.jpg (exists)
├── news/ (directory exists)
└── vendors/
    ├── furniture.png
    ├── inside.png
    ├── jewelery.png ⚠️ TYPO: should be "jewelry.png"
    └── vintage.png
```

**Status:** ✅ Minimal assets present
**Action Required:**
- [ ] Fix typo: Rename `jewelery.png` → `jewelry.png`
- [ ] Add 4 more category images (need 8 total)
- [ ] Add featured vendor photos
- [ ] Create og-image.jpg for social sharing (1200x630)

### Videos (public/videos/)
**Total Size:** 193MB ⚠️ TOO LARGE

#### Current Files:
```
public/videos/
├── drone.mp4
├── drone-optimized.mp4
├── drone-optimized-original.mp4
```

**Status:** ❌ Requires optimization
**Action Required:**
- [ ] Keep only ONE optimized version (< 10MB)
- [ ] Delete unused files
- [ ] Consider removing video entirely (use static hero image)
- [ ] If keeping video, compress to < 5MB

### Code Assets
- ✅ 24 TypeScript/React component files
- ✅ Tailwind CSS configuration
- ✅ Next.js 16 setup
- ✅ Google Fonts integrated

---

## 📝 CONTENT INVENTORY

### Existing Content

#### Business Information (lib/constants.ts)
```typescript
✅ Business Name: Marietta Antique Mall
✅ Address: 1477 Roswell Rd, Suite 100, Marietta, GA 30062
✅ Phone: (770) 973-5600
✅ Email: info@mariettaantiquemall.com
✅ Facebook: https://www.facebook.com/Mariettaantiquemall/
✅ Instagram: https://www.instagram.com/mariettaantiquemall/
✅ Coordinates: 33.9893, -84.4617
```

#### Business Hours (lib/constants.ts)
```
✅ Monday-Thursday: 10:00 AM - 6:00 PM
✅ Friday-Saturday: 10:00 AM - 7:00 PM
✅ Sunday: 12:00 PM - 6:00 PM
```

#### Categories (lib/constants.ts)
```
✅ True Antiques
✅ Mid-Century Modern
✅ Vintage Jewelry
✅ Collectibles
✅ Advertising Memorabilia
✅ Furniture
✅ Home Decor
✅ Handcrafted Artisan Goods
✅ Restoration Products
```

#### Highlights
```
✅ 30,000 sq ft of treasures
✅ 100+ independent vendors
✅ Wheelchair accessible
✅ Wide aisles with shopping carts
✅ Near the famous Big Chicken
✅ 10 minutes from Marietta Square
```

---

## 🚫 CONTENT GAPS

### Missing Content for New Pages

#### 1. HOME PAGE
- [x] Hero headline ✅ (exists: "Discover 30,000 sq ft of treasures")
- [ ] NEW Hero headline (needs refresh: "Where Treasures Come to Life")
- [ ] About snippet (2-3 sentences) - needs writing
- [ ] 8 category descriptions (brief, 1 sentence each)
- [ ] Newsletter signup copy

#### 2. VISIT PAGE
- [ ] Page hero text
- [ ] Parking details copy
- [ ] Accessibility features description
- [ ] FAQ questions & answers (8-10)
  - What are your hours?
  - Where is parking?
  - Do you buy items?
  - Are pets allowed?
  - Do vendors negotiate prices?
  - Is there a restaurant nearby?
  - How often does inventory change?
  - Can I reserve items?
- [ ] Nearby attractions descriptions

#### 3. VENDORS PAGE
- [ ] "Meet Our Vendors" intro text
- [ ] Featured vendor spotlight (monthly)
  - Vendor name
  - Booth number
  - Specialty
  - Description
  - Photo
- [ ] Vendor directory data (100+ vendors)
  - Names
  - Booth numbers
  - Specialties
- [ ] "Become a Vendor" section copy
- [ ] Vendor benefits list

#### 4. CONTACT PAGE
- [ ] "Get in Touch" intro text
- [ ] Form field labels
- [ ] Success message copy
- [ ] Newsletter signup copy
- [ ] Privacy assurance text

#### 5. LEGAL PAGES
- [ ] Privacy Policy (template + customization)
- [ ] Terms of Service (template + customization)

---

## 📸 PHOTOGRAPHY NEEDS

### Critical (Must Have)
- [ ] Hero image (high-res, 1920x1080+, horizontal)
  - Options: Exterior shot, interior wide angle, or keep drone footage
- [ ] 8 Category images (professional, consistent style)
  1. Mid-Century Modern Furniture
  2. Vintage Jewelry & Accessories
  3. True Antiques
  4. Art & Prints
  5. Collectibles & Memorabilia
  6. Home Decor
  7. Estate Pieces
  8. Retro Finds

### Important (Should Have)
- [ ] Featured vendor photos (3-5 vendors)
- [ ] Interior mall shots (wide aisles, clean booths)
- [ ] Detail shots (interesting items, vintage finds)

### Nice to Have
- [ ] Staff photos
- [ ] Customer shopping photos
- [ ] Seasonal/event photos

---

## ✍️ COPYWRITING NEEDS

### Homepage Copy

#### Hero Section
```
CURRENT:
"Discover 30,000 sq ft of treasures"

PROPOSED:
"Where Treasures Come to Life"
Subheadline: "30,000 sq ft • 100+ Dealers • Near the Big Chicken"
```

#### About Snippet (NEW - needs writing)
```
PROPOSED DRAFT:
"Since [YEAR], Marietta Antique Mall has been North Georgia's
premier destination for authentic antiques and vintage finds.
Browse our spacious, wheelchair-accessible aisles filled with
mid-century modern furniture, estate jewelry, collectibles,
and one-of-a-kind treasures."
```

**Action Required:**
- [ ] Confirm founding year
- [ ] Review and approve about snippet
- [ ] Write category descriptions

### Category Descriptions (8 needed)
```
EXAMPLE FORMAT:
Mid-Century Modern Furniture
"Iconic designs from the 1950s-70s including Eames,
Herman Miller, and Danish modern pieces."

Need 7 more similar descriptions.
```

### Visit Page Copy

#### FAQ Answers (Sample)
```
Q: What are your hours?
A: We're open Monday-Thursday 10am-6pm, Friday-Saturday
   10am-7pm, and Sunday 12pm-6pm.

Q: Where can I park?
A: We offer ample free parking in our lot with wheelchair
   accessible spaces near the entrance.

[Need 6-8 more FAQ]
```

### Vendor Page Copy
```
Featured Vendor Spotlight Template:
- Booth #42: [Vendor Name]
- Specialty: [e.g., "Estate Jewelry & Vintage Watches"]
- Description: [2-3 sentences about vendor, their expertise,
  what makes their booth special]
- Featured Find: [Highlight one special item]
```

---

## 🎨 DESIGN ASSETS NEEDED

### Logos & Branding
- [ ] Logo files (SVG, PNG - various sizes)
  - Full color version
  - White version (for dark backgrounds)
  - Icon/mark only version
- [ ] Favicon (ICO, PNG - 16x16, 32x32, 192x192)
- [ ] App icons (Apple touch icon - 180x180)

### Social Media
- [ ] og:image for sharing (1200x630 px)
- [ ] Twitter card image (1200x628 px)
- [ ] Social media profile images (if needed)

---

## 📊 DATA COLLECTION NEEDS

### Vendor Directory Data
**Format:** CSV or JSON

Required fields per vendor:
```csv
vendor_id,vendor_name,booth_number,specialty,category,phone,email,description,featured,image_url
1,"Southern Charm Antiques","A-42","Estate Jewelry","Jewelry","","","[description]",true,"/images/vendors/vendor-1.jpg"
```

**Action Required:**
- [ ] Collect vendor information from client
- [ ] Create vendor data spreadsheet
- [ ] Get vendor photos (at least featured vendors)
- [ ] Select 3-5 featured vendors for spotlight

### Event/News Data
**Current:** Hardcoded with fake dates

**Action Required:**
- [ ] Get real upcoming events
- [ ] Get past event highlights (if any)
- [ ] Confirm if client wants event calendar feature
- [ ] If yes, plan CMS integration

---

## 🔧 TECHNICAL CONTENT NEEDS

### SEO Metadata

#### Homepage
```
Title: "Marietta Antique Mall | 30,000 sq ft of Antiques & Vintage Treasures"
Description: "Discover unique antiques, vintage items, and collectibles
from 100+ vendors. Located near the Big Chicken in Marietta, GA."
Keywords: marietta antique mall, antiques marietta ga, vintage furniture
marietta, big chicken marietta shops
```

#### Visit Page
```
Title: "Visit Us | Marietta Antique Mall"
Description: "Plan your visit to Marietta Antique Mall. Open 7 days a week
with free parking and wheelchair accessibility. 1477 Roswell Rd, Marietta, GA."
```

#### Vendors Page
```
Title: "Our Vendors | Marietta Antique Mall"
Description: "Meet the 100+ independent dealers at Marietta Antique Mall.
Each vendor brings unique expertise and passion for antiques and vintage finds."
```

#### Contact Page
```
Title: "Contact Us | Marietta Antique Mall"
Description: "Get in touch with Marietta Antique Mall. Call (770) 973-5600
or visit us at 1477 Roswell Rd, Marietta, GA 30062."
```

---

## ✅ CONTENT DELIVERY CHECKLIST

### Week 1 (Phase 1) - URGENT
- [ ] Logo files (all formats)
- [ ] Hero image or confirm using existing video
- [ ] About snippet text approval
- [ ] Founding year confirmation
- [ ] Category descriptions (8)

### Week 2 (Phase 2) - IMPORTANT
- [ ] 8 category images (professional photos)
- [ ] Featured vendor data (3-5 vendors)
- [ ] FAQ questions & answers (8-10)

### Week 3 (Phase 3) - NEEDED
- [ ] Full vendor directory data (100+ vendors)
- [ ] Vendor photos
- [ ] All page copy finalized
- [ ] Legal pages (Privacy, Terms)

### Week 4+ (Phase 4+) - FINAL
- [ ] og:image created
- [ ] Final photo approvals
- [ ] Newsletter integration details
- [ ] Contact form email routing

---

## 📋 CONTENT APPROVAL WORKFLOW

1. **Draft Content** → Send to client for review
2. **Client Reviews** → Provides feedback within 48 hours
3. **Revisions** → Make changes (limit 2 rounds)
4. **Final Approval** → Client signs off
5. **Implementation** → Add to website

---

## 🎯 PRIORITY ACTIONS (NEXT 48 HOURS)

### CRITICAL (Must do immediately)
1. [ ] Get logo files from client
2. [ ] Decide on hero image/video strategy
3. [ ] Write about snippet draft
4. [ ] Start FAQ content

### HIGH (This week)
1. [ ] Source/take category photos
2. [ ] Collect vendor data
3. [ ] Write all page copy
4. [ ] Get founding year

### MEDIUM (Next week)
1. [ ] Create og:image
2. [ ] Write legal pages
3. [ ] Collect vendor photos

---

**Status:** Phase 1 - Discovery & Planning
**Next Update:** December 6, 2025
**Owner:** Development Team
