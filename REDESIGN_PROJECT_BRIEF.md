# Marietta Antique Mall - Redesign Project Brief
**Project Start Date:** December 5, 2025
**Target Launch:** January 24, 2026 (8 weeks)
**Current Status:** Phase 1 - Discovery & Planning (In Progress)

---

## Project Overview

### Objective
Complete redesign of Marietta Antique Mall website with modern, minimal aesthetic using brand colors and simplified structure.

### Stakeholders
- **Client:** Marietta Antique Mall
- **Development Team:** Lead Developer, Designer, QA Tester
- **Project Manager:** [To be assigned]

### Domains
- **Staging:** https://marietta-antique-mall.vercel.app/
- **Production:** http://mariettaantiques.com/

---

## Design Specifications

### Brand Colors (From Logo)
```
Primary: #C2DFC9 (Mint Green)
Accent:  #A30093 (Magenta)

Supporting:
- Soft White: #FAFAFA
- Warm Gray: #4A4A4A
- Charcoal: #2A2A2A
- Darker Mint: #A8CDB1 (hover states)
- Deep Magenta: #8A007D (hover states)
```

### Typography
- **Display/Headings:** Playfair Display (400, 600, 700)
- **Body:** Inter (300, 400, 500, 600)
- **Navigation/Accents:** Montserrat (500, 600, 700)

### Site Structure (4 Core Pages)
1. **Home** - Single-scroll layout with 5 sections
2. **Visit** - Location, hours, FAQ, accessibility
3. **Vendors** - Directory, featured spotlight, become a vendor CTA
4. **Contact** - Contact form, newsletter, quick info
5. **Legal** - Privacy Policy, Terms of Service (footer links)

---

## Current State Assessment

### Existing Assets
- ✅ 24 TypeScript/React files
- ✅ 1.2MB images directory
- ✅ 193MB videos directory (needs optimization)
- ✅ Next.js 16.0.1 setup
- ✅ Tailwind CSS configured
- ✅ Google Fonts integrated

### Issues to Address
- ❌ Video files too large (193MB)
- ❌ Mock newsletter implementation
- ❌ Missing pages (vendors, visit, contact, events)
- ❌ Hardcoded news/events data
- ❌ Wrong color palette (needs update to brand colors)
- ❌ No testing framework
- ❌ Outdated dependencies

---

## Success Metrics

### Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Page Load Time: < 2s desktop, < 3s mobile
- Core Web Vitals: All "Good"

### Business Targets (3-6 months post-launch)
- 50% increase in website traffic
- 100+ newsletter signups/month
- 30% increase in contact form submissions
- Improved Google search rankings

---

## Timeline Summary

**Phase 1:** Discovery & Planning (Week 1) - Dec 5-9
**Phase 2:** Design (Week 2-3) - Dec 10-23
**Phase 3:** Content Creation (Week 3-4) - Dec 17-30
**Phase 4:** Frontend Development (Week 4-6) - Dec 24 - Jan 13
**Phase 5:** Testing & QA (Week 6-7) - Jan 7-20
**Phase 6:** Client Review (Week 7) - Jan 14-20
**Phase 7:** Launch Prep (Week 8) - Jan 21-24
**Phase 8:** Launch (Week 8+) - Jan 24+

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Content delays | Medium | High | Request all content by Week 1 end |
| Design approval delays | Medium | Medium | Limit to 2 revision rounds |
| Video file size | High | Medium | Optimize/compress before launch |
| Vendor data collection | Medium | Low | Launch with featured vendors only |

---

## Communication Plan

- **Status Updates:** Weekly progress reports
- **Design Reviews:** End of Week 2, Week 3
- **Staging Reviews:** Week 6, Week 7
- **Emergency Protocol:** Direct contact for critical issues

---

## Next Actions (Phase 1)

### Day 1-2: Stakeholder Alignment ✅ IN PROGRESS
- [x] Document current state
- [x] Create project brief
- [ ] Review existing content
- [ ] Plan asset requirements
- [ ] Update dependencies

### Day 3-4: Content Audit
- [ ] Inventory all content
- [ ] Identify content gaps
- [ ] Plan photography needs
- [ ] Draft copy outlines

### Day 5: Technical Planning
- [ ] Document component architecture
- [ ] Plan deployment strategy
- [ ] Set up testing framework
- [ ] Create development checklist

---

**Document Version:** 1.0
**Last Updated:** December 5, 2025, 12:00 PM
**Next Review:** December 6, 2025
