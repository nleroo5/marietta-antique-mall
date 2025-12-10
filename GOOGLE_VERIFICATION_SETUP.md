# 🔍 Google Search Console & Business Profile Verification Guide
## Marietta Antique Mall - Complete Setup Instructions

---

## 📋 WHAT THIS DOES

**Google Search Console Verification** gives you:
- ✅ Ownership verification of your website in Google's system
- ✅ Access to search performance data and analytics
- ✅ Core Web Vitals monitoring and alerts
- ✅ Sitemap submission and indexing control
- ✅ **CRITICAL:** Required for Google Business Profile instant verification
- ✅ SEO insights and search ranking data

---

## 🚀 STEP-BY-STEP VERIFICATION PROCESS

### **Step 1: Access Google Search Console**

1. Go to: https://search.google.com/search-console
2. Sign in with your Google account (use the same account you'll use for Google Business Profile)
3. Click the **"Add Property"** button (top left, or "+ Add a property")

---

### **Step 2: Choose Property Type**

You'll see two options:

#### **Option A: Domain Property (RECOMMENDED)**
- **Best for:** Verifying all versions of your site (http, https, www, non-www, subdomains)
- **Enter:** `mariettaantiquemall.com` (no https://, no www)
- **Click:** Continue

**PROS:**
- Verifies ALL versions of your domain at once
- More comprehensive data
- Easier long-term management

**CONS:**
- Requires DNS verification (slightly more technical)

#### **Option B: URL Prefix Property (EASIER)**
- **Best for:** Quick verification of specific URL only
- **Enter:** `https://www.mariettaantiquemall.com`
- **Click:** Continue

**PROS:**
- Simpler HTML tag verification
- Faster setup (what we'll use)

**CONS:**
- Only verifies the specific URL you enter
- Won't capture non-www traffic data

**⚠️ RECOMMENDATION:** Use **URL Prefix** for now (easier), you can add Domain property later if needed.

---

### **Step 3: Select HTML Tag Verification Method**

1. On the verification screen, you'll see multiple verification methods:
   - HTML tag (recommended)
   - HTML file upload
   - Google Analytics
   - Google Tag Manager
   - Domain name provider (DNS)

2. **Click on "HTML tag"** (should be the first or second option)

3. You'll see code that looks like this:

```html
<meta name="google-site-verification" content="ABC123xyz456DEF789GHI012JKL345MNO678PQR901STU234" />
```

4. **IMPORTANT:** Copy ONLY the verification code (the part between the quotes after `content=`)
   - Example: `ABC123xyz456DEF789GHI012JKL345MNO678PQR901STU234`
   - Your actual code will be different and unique to your site

5. **DO NOT CLICK "VERIFY" YET!** (Wait until you've updated your website code first)

---

### **Step 4: Add Verification Code to Your Website**

#### **Location:** `/app/layout.tsx` (Line 93)

**CURRENT CODE:**
```typescript
verification: {
  google: 'your-google-verification-code',
},
```

**UPDATE TO:**
```typescript
verification: {
  google: 'ABC123xyz456DEF789GHI012JKL345MNO678PQR901STU234', // Replace with YOUR actual code
},
```

#### **How to Update:**

**Option 1: Using Claude Code (Recommended)**
Ask Claude to update the verification code:
```
"Update app/layout.tsx line 93 to replace 'your-google-verification-code' with: ABC123xyz..."
```

**Option 2: Manual Edit**
1. Open `/Users/nicolasleroo/marietta-antique-mall/app/layout.tsx`
2. Find line 93 (search for `verification:`)
3. Replace `'your-google-verification-code'` with your actual code
4. Save the file

---

### **Step 5: Deploy to Production**

1. **Commit your changes:**
```bash
git add app/layout.tsx
git commit -m "Add Google Search Console verification code"
git push
```

2. **Vercel will automatically deploy** (usually takes 1-2 minutes)

3. **Wait for deployment to complete:**
   - Go to: https://vercel.com/your-project
   - Check that deployment status shows "Ready"
   - Or check: https://www.mariettaantiquemall.com (view page source, search for "google-site-verification")

---

### **Step 6: Verify in Google Search Console**

1. **Go back to Google Search Console** (the verification screen should still be open)
2. **Click the "Verify" button**
3. You should see: **"Ownership verified"** ✅

**If verification fails:**
- Wait 5 minutes and try again (DNS propagation)
- Clear your browser cache
- Check that the code matches EXACTLY (no extra spaces, quotes match)
- View page source at https://www.mariettaantiquemall.com and search for "google-site-verification"

---

### **Step 7: Verify Successful Installation**

1. Go to: https://www.mariettaantiquemall.com
2. Right-click → **View Page Source** (or press Ctrl+U / Cmd+Option+U)
3. Press Ctrl+F / Cmd+F and search for: `google-site-verification`
4. You should see your meta tag in the `<head>` section:

```html
<meta name="google-site-verification" content="YOUR-ACTUAL-CODE">
```

**✅ If you see this, your code is live and ready for verification!**

---

## 🏢 BONUS: Connect to Google Business Profile (CRITICAL FOR SEO)

Once your website is verified in Search Console, you can **instantly verify** your Google Business Profile!

### **Step 1: Access Google Business Profile**

1. Go to: https://business.google.com
2. Sign in with the **SAME Google account** you used for Search Console
3. Search for: "Marietta Antique Mall"

### **Step 2: Claim Your Business**

1. If your business appears, click **"Claim this business"**
2. If it doesn't appear, click **"Add your business to Google"**

### **Step 3: Instant Verification**

1. During verification, select **"Website"** as your verification method
2. Google will detect that you've already verified ownership in Search Console
3. **Instant verification!** ✅ (No postcard needed)

### **Step 4: Complete Your Profile (100%)**

**CRITICAL:** Complete ALL sections for maximum local SEO ranking:

✅ **Business name:** Marietta Antique Mall
✅ **Category:** Antique Store
✅ **Address:** 1477 Roswell Rd, Suite 100, Marietta, GA 30062
✅ **Phone:** (770) 973-0060
✅ **Website:** https://www.mariettaantiquemall.com
✅ **Hours:** Add your complete hours
✅ **Description:** 150-300 characters about your business
✅ **Photos:** Upload 20+ high-quality photos (exterior, interior, products)
✅ **Services:** Add specific services (antique sales, vendor booths, etc.)
✅ **Attributes:** Wheelchair accessible, parking, shopping carts, etc.

---

## 📊 POST-VERIFICATION: IMMEDIATE ACTIONS

### **In Google Search Console:**

1. **Submit Sitemap:**
   - Go to: Sitemaps (left sidebar)
   - Enter: `https://www.mariettaantiquemall.com/sitemap.xml`
   - Click: Submit

2. **Request Indexing:**
   - Go to: URL Inspection (top search bar)
   - Enter: `https://www.mariettaantiquemall.com`
   - Click: "Request Indexing"
   - Repeat for key pages (/shop, /vendors, /visit, /contact)

3. **Monitor Core Web Vitals:**
   - Go to: Experience → Core Web Vitals
   - Check mobile and desktop reports
   - Fix any "Poor" or "Needs Improvement" URLs

### **In Google Business Profile:**

1. **Enable Messaging:** Let customers message you directly
2. **Add Q&A:** Pre-populate common questions and answers
3. **Post Updates:** Weekly posts about new inventory, events, etc.
4. **Launch Review Campaign:**
   - Goal: 50 Google reviews in 60 days
   - Email customers asking for reviews
   - Add review link to receipts/newsletters
   - Direct link: `https://g.page/r/YOUR_PLACE_ID/review`

---

## 🚨 TROUBLESHOOTING

### **"Verification failed" Error**

**Possible causes:**
1. **Code not live yet:**
   - Check Vercel deployment status
   - View page source to confirm meta tag is present

2. **Wrong URL:**
   - Make sure you added `https://www.mariettaantiquemall.com` (with www)
   - Not `http://` or without `www`

3. **Code mismatch:**
   - Verify code matches EXACTLY (no extra spaces, characters)
   - Check for smart quotes (" ") vs straight quotes (" ")

4. **DNS propagation:**
   - Wait 5-15 minutes after deployment
   - Clear browser cache (Ctrl+Shift+Delete)

### **"Verification code not found" Error**

1. Check that code is in `<head>` section (not `<body>`)
2. View page source and search for `google-site-verification`
3. If not found, re-deploy from Vercel dashboard

### **Can't Find Verification Screen**

1. Go to: https://search.google.com/search-console
2. Click: Settings (bottom left)
3. Click: Verification details
4. You'll see your verification method

---

## ✅ SUCCESS CHECKLIST

After completing all steps, verify you have:

- [x] Google Search Console property added
- [x] HTML meta tag verification code added to layout.tsx
- [x] Code deployed to production (Vercel)
- [x] Verification successful in Search Console
- [x] Sitemap submitted (sitemap.xml)
- [x] Key pages requested for indexing
- [x] Google Business Profile claimed and verified
- [x] Business profile 100% complete
- [x] Photos uploaded (20+ images)
- [x] Review campaign launched

---

## 🎯 EXPECTED RESULTS

**Within 24 Hours:**
- ✅ Website appears in Search Console
- ✅ Sitemap indexed
- ✅ Core Web Vitals data starts appearing

**Within 1 Week:**
- ✅ Google Business Profile appears in search
- ✅ Local 3-Pack rankings improve
- ✅ First reviews appear

**Within 30 Days:**
- ✅ Organic search traffic increases
- ✅ "Marietta antique mall" ranking improves
- ✅ Local search visibility significantly better

**Within 60 Days:**
- ✅ 50+ Google reviews achieved
- ✅ Top 3 Local Pack ranking for primary keywords
- ✅ 3-5x increase in organic search traffic

---

## 📞 SUPPORT RESOURCES

- **Google Search Console Help:** https://support.google.com/webmasters
- **Verify Site Ownership Guide:** https://support.google.com/webmasters/answer/9008080
- **Google Business Profile Help:** https://support.google.com/business
- **Business Verification Methods:** https://support.google.com/business/answer/7107242

---

*Last Updated: December 2025*
*Priority: CRITICAL - Do this ASAP for maximum SEO impact*
