#!/usr/bin/env node

/**
 * Professional Image Optimization Script
 * Converts JPG/PNG images to WebP format and compresses them
 * Target: <100KB per image for optimal Core Web Vitals
 *
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const OUTPUT_DIR = path.join(IMAGES_DIR, 'optimized');

// WebP quality settings for different image types
const QUALITY_SETTINGS = {
  hero: 85,      // Hero images - high quality
  vendor: 80,    // Vendor booth photos - good quality
  icons: 90,     // Logos and icons - very high quality
  general: 75,   // General content images
};

// Target file size: 100KB = 102400 bytes
const TARGET_SIZE = 102400;

/**
 * Get all image files from a directory recursively
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip originals and optimized directories
      if (!file.includes('originals') && !file.includes('optimized')) {
        getImageFiles(filePath, fileList);
      }
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Determine quality setting based on file path
 */
function getQualitySetting(filePath) {
  if (filePath.includes('hero') || filePath.includes('banner')) {
    return QUALITY_SETTINGS.hero;
  } else if (filePath.includes('vendors')) {
    return QUALITY_SETTINGS.vendor;
  } else if (filePath.includes('logo') || filePath.includes('icon')) {
    return QUALITY_SETTINGS.icons;
  }
  return QUALITY_SETTINGS.general;
}

/**
 * Optimize a single image to WebP format
 */
async function optimizeImage(inputPath) {
  const relativePath = path.relative(IMAGES_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  const outputDir = path.dirname(outputPath);

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const quality = getQualitySetting(inputPath);
  const inputStats = fs.statSync(inputPath);
  const inputSizeKB = (inputStats.size / 1024).toFixed(2);

  try {
    // Convert to WebP with quality setting
    await sharp(inputPath)
      .webp({ quality, effort: 6 }) // effort 6 = good compression
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    const savings = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)}`);
    console.log(`   ${inputSizeKB}KB → ${outputSizeKB}KB (${savings}% reduction)`);

    // If still over 100KB, try with lower quality
    if (outputStats.size > TARGET_SIZE && quality > 70) {
      const lowerQuality = quality - 10;
      await sharp(inputPath)
        .webp({ quality: lowerQuality, effort: 6 })
        .toFile(outputPath);

      const finalStats = fs.statSync(outputPath);
      const finalSizeKB = (finalStats.size / 1024).toFixed(2);
      console.log(`   📉 Reduced quality to ${lowerQuality}: ${finalSizeKB}KB`);
    }

    return {
      input: inputPath,
      output: outputPath,
      inputSize: inputStats.size,
      outputSize: fs.statSync(outputPath).size,
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
  console.log('🚀 Starting Professional Image Optimization\n');
  console.log('Target: <100KB per image for optimal Core Web Vitals\n');
  console.log('='..repeat(60));

  const imageFiles = getImageFiles(IMAGES_DIR);
  console.log(`\nFound ${imageFiles.length} images to optimize\n`);

  const results = [];
  let totalInputSize = 0;
  let totalOutputSize = 0;

  // Process images in batches to avoid memory issues
  const BATCH_SIZE = 10;
  for (let i = 0; i < imageFiles.length; i += BATCH_SIZE) {
    const batch = imageFiles.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(batch.map(optimizeImage));
    results.push(...batchResults.filter(r => r !== null));

    // Add small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Calculate totals
  results.forEach(result => {
    totalInputSize += result.inputSize;
    totalOutputSize += result.outputSize;
  });

  const totalSavings = (((totalInputSize - totalOutputSize) / totalInputSize) * 100).toFixed(1);
  const totalInputMB = (totalInputSize / 1024 / 1024).toFixed(2);
  const totalOutputMB = (totalOutputSize / 1024 / 1024).toFixed(2);

  console.log('\n' + '='.repeat(60));
  console.log('\n✨ Optimization Complete!\n');
  console.log(`📊 Total Images Processed: ${results.length}`);
  console.log(`📉 Total Size Reduction: ${totalInputMB}MB → ${totalOutputMB}MB`);
  console.log(`💾 Total Savings: ${totalSavings}%`);
  console.log(`\n📁 Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('\n⚡ Next Steps:');
  console.log('   1. Review optimized images for quality');
  console.log('   2. Update image paths to use .webp extensions');
  console.log('   3. Test page load performance with PageSpeed Insights');
  console.log('   4. Consider implementing <picture> element for fallbacks\n');
}

// Run optimization
optimizeAllImages().catch(console.error);
