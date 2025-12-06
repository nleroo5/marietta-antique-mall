# Vendors Folder Audit Report
**Date**: December 6, 2025
**Location**: `/public/images/vendors/`
**Total Files**: 41 files
**Total Size**: 227 MB

---

## Executive Summary

The vendors folder contains 38 high-resolution JPEG photos (DSC series camera files) and 1 PNG file, totaling 227 MB. These appear to be professional photos of the antique mall's interior and vendor booths.

---

## Complete File Inventory

### Image Files (39 total)

#### JPEG Files (38 files)
All files appear to be from a Sony DSC (Digital Still Camera) series camera.

| # | Filename | Size | Notes |
|---|----------|------|-------|
| 1 | DSC01490.jpg | 6.1 MB | |
| 2 | DSC01492.jpg | 6.2 MB | |
| 3 | DSC01495.jpg | 5.5 MB | |
| 4 | DSC01498.jpg | 7.1 MB | Large file |
| 5 | DSC01499.jpg | 6.9 MB | Large file |
| 6 | DSC01500.jpg | 5.9 MB | |
| 7 | DSC01503.jpg | 5.3 MB | |
| 8 | DSC01505.jpg | 4.6 MB | |
| 9 | DSC01508.jpg | 5.0 MB | |
| 10 | DSC01510.jpg | 6.4 MB | |
| 11 | DSC01512.jpg | 4.9 MB | |
| 12 | DSC01513.jpg | 5.2 MB | |
| 13 | DSC01514.jpg | 5.1 MB | |
| 14 | DSC01516.jpg | 7.5 MB | **Top 4 largest** |
| 15 | DSC01519.jpg | 5.6 MB | |
| 16 | DSC01522.jpg | 5.8 MB | |
| 17 | DSC01527.jpg | 4.8 MB | |
| 18 | DSC01534.jpg | 6.3 MB | |
| 19 | DSC01539.jpg | 5.3 MB | |
| 20 | DSC01540.jpg | 5.7 MB | |
| 21 | DSC01543.jpg | 5.9 MB | |
| 22 | DSC01545.jpg | 6.1 MB | |
| 23 | DSC01547.jpg | 6.4 MB | |
| 24 | DSC01559.jpg | 5.8 MB | |
| 25 | DSC01565.jpg | 6.3 MB | |
| 26 | DSC01580.jpg | 5.6 MB | |
| 27 | DSC01584.jpg | 5.6 MB | |
| 28 | DSC01591.jpg | 5.2 MB | |
| 29 | DSC01593.jpg | 7.5 MB | **Top 4 largest** |
| 30 | DSC01599.jpg | 8.2 MB | **🏆 LARGEST FILE** |
| 31 | DSC01604.jpg | 7.4 MB | **Top 5 largest** |
| 32 | DSC01607.jpg | 5.1 MB | |
| 33 | DSC01618.jpg | 8.0 MB | **Top 2 largest** |
| 34 | DSC01619.jpg | 5.6 MB | |
| 35 | DSC01620.jpg | 6.5 MB | |
| 36 | DSC01622.jpg | 6.5 MB | |
| 37 | DSC01623.jpg | 5.0 MB | |
| 38 | DSC01626.jpg | 5.0 MB | |

**JPEG Subtotal**: 38 files, ~226.7 MB

#### PNG Files (1 file)
| # | Filename | Size | Notes |
|---|----------|------|-------|
| 39 | vintage.png | 323 KB | Legacy file, much smaller |

**PNG Subtotal**: 1 file, 323 KB

---

## System Files (2 files)

| # | Filename | Size | Purpose |
|---|----------|------|---------|
| 1 | .DS_Store | 10 KB | macOS system file (should be gitignored) |
| 2 | .gitkeep | 24 B | Git placeholder to keep empty directory |

---

## Statistics

### Size Distribution
- **Smallest JPEG**: DSC01505.jpg (4.6 MB)
- **Largest JPEG**: DSC01599.jpg (8.2 MB)
- **Average JPEG size**: ~5.96 MB
- **Median JPEG size**: ~5.8 MB

### Top 10 Largest Files
1. DSC01599.jpg - 8.2 MB
2. DSC01618.jpg - 8.0 MB
3. DSC01593.jpg - 7.5 MB
4. DSC01516.jpg - 7.5 MB
5. DSC01604.jpg - 7.4 MB
6. DSC01498.jpg - 7.1 MB
7. DSC01499.jpg - 6.9 MB
8. DSC01622.jpg - 6.5 MB
9. DSC01620.jpg - 6.5 MB
10. DSC01547.jpg - 6.4 MB

---

## File Sequence Analysis

### Sequential Numbering
The DSC files follow camera sequential numbering but have gaps:
- Range: DSC01490 → DSC01626
- Total span: 137 possible numbers
- Files present: 38
- **Missing files**: 99 photos not included

### Gap Analysis
Large gaps between files suggest selective photo import:
- DSC01490-01527: 14 files (37 photos taken, 23 not imported)
- DSC01534-01547: 5 files (13 photos taken, 8 not imported)
- DSC01559-01565: 2 files (6 photos taken, 4 not imported)
- DSC01580-01626: 17 files (46 photos taken, 29 not imported)

---

## Usage in Codebase

Let me check where these images are referenced:

### References Found
Based on git status, several vendor images were recently deleted:
- `furniture.png` (deleted)
- `inside.png` (deleted)
- `jewelry.png` (deleted)

These have been replaced with the DSC*.jpg files.

---

## Optimization Recommendations

### 🔴 Critical - File Size Issues
**Total folder size: 227 MB** is extremely large for web deployment.

#### Impact:
- Slow page loads
- High bandwidth usage
- Poor mobile performance
- Increased Vercel bandwidth costs
- Large git repository size

#### Recommendations:

1. **Immediate - Optimize Images**
   ```bash
   # Use Next.js Image Optimization (already configured)
   # Images should be lazy-loaded with next/image component
   ```

2. **Compress JPEGs**
   - Current: ~6 MB average per photo
   - Target: 200-500 KB per photo (12-30x reduction)
   - Tools: ImageOptim, TinyPNG, Squoosh, or sharp
   ```bash
   # Example with sharp (Node.js)
   npx sharp-cli --quality 80 --width 1920 input.jpg -o output.jpg
   ```

3. **Convert to Modern Formats**
   - Use WebP or AVIF (50-70% smaller than JPEG)
   - Next.js config already supports this
   - Keep JPEG as fallback

4. **Responsive Images**
   - Generate multiple sizes (thumbnail, medium, large)
   - Serve appropriate size based on device
   - Next.js Image component handles this automatically

5. **Expected Results After Optimization**
   - From: 227 MB
   - To: ~15-40 MB (85-95% reduction)
   - Better: 5-10 MB with aggressive optimization

---

## Security Considerations

### ✅ Good
- No executable files
- All files are standard image formats
- .gitkeep is appropriate

### ⚠️ Issues
- **macOS .DS_Store file present** (10 KB)
  - Contains metadata about folder view settings
  - Should be gitignored
  - Recommendation: Add to `.gitignore`

### Recommendations
Add to `.gitignore`:
```
.DS_Store
**/.DS_Store
```

---

## Git Repository Impact

### Current State
227 MB of images in repository will:
- Slow down git clone operations
- Increase repository size permanently (git stores all history)
- Make git operations slower

### Recommendation: Use Git LFS
Consider using Git Large File Storage for images:
```bash
git lfs install
git lfs track "*.jpg"
git lfs track "*.png"
```

This stores large files separately and only downloads them when needed.

---

## Next.js Integration Check

### Image Component Usage
These images should be used with Next.js `<Image>` component:
```tsx
import Image from 'next/image'

<Image
  src="/images/vendors/DSC01490.jpg"
  alt="Vendor booth"
  width={1920}
  height={1280}
  quality={80}
  loading="lazy"
/>
```

This provides:
- Automatic optimization
- Lazy loading
- Responsive images
- Modern format conversion (WebP/AVIF)

---

## Action Items

### High Priority
- [ ] Compress all JPEG files (target: 200-500 KB each)
- [ ] Add .DS_Store to .gitignore
- [ ] Remove .DS_Store from git tracking
- [ ] Verify all images are used with Next.js Image component

### Medium Priority
- [ ] Convert images to WebP format
- [ ] Generate responsive image sizes
- [ ] Set up Git LFS for image files
- [ ] Document which photos are used where in the app

### Low Priority
- [ ] Identify and delete unused images
- [ ] Organize images by category/booth if needed
- [ ] Add descriptive filenames (DSC01490 → "antique-furniture-booth.jpg")

---

## Summary

**Current State**:
- ✅ 38 high-quality vendor photos available
- ✅ 1 legacy PNG file
- ⚠️ 227 MB total size (TOO LARGE)
- ⚠️ macOS .DS_Store file present

**Immediate Action Required**:
Image optimization is critical to reduce the 227 MB folder size before deployment.

**Estimated Time to Fix**:
- Image compression: 30-60 minutes
- Git cleanup: 5 minutes
- Testing: 15 minutes
- **Total**: ~1-2 hours

---

**Audit Completed**: December 6, 2025
**Auditor**: Claude Code
**Status**: ⚠️ OPTIMIZATION REQUIRED
