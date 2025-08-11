#!/usr/bin/env node
/**
 * optimize-members.mjs
 *
 * Batch converts member images placed in public/members/ into consistent web-friendly assets.
 * - Converts HEIC/HEIF, PNG, JPEG to WebP (and keeps an optimized JPEG copy) at target widths.
 * - Generates two sizes: 800px (display) and 400px (thumbnail reserve, if needed later).
 * - Filenames preserved (base). Writes:
 *    <name>.webp  (800)
 *    <name>@2x.webp (optional if source larger than 1400)
 *    <name>.jpg (optimized fallback)
 * - Skips already optimized files unless --force passed.
 *
 * Usage:
 *   npm run optimize:members          # normal incremental
 *   npm run optimize:members -- --force   # reprocess everything
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const MEMBERS_DIR = path.join(process.cwd(), 'public', 'members');
const FORCE = process.argv.includes('--force');
const VALID_INPUT_EXT = ['.heic', '.heif', '.jpg', '.jpeg', '.png', '.webp'];

async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }

function baseName(file) { return file.replace(/\.[^.]+$/, ''); }

async function gatherInputs() {
  const files = await fs.readdir(MEMBERS_DIR).catch(() => []);
  return files.filter(f => VALID_INPUT_EXT.includes(path.extname(f).toLowerCase()));
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const full = path.join(MEMBERS_DIR, file);
  const base = baseName(file);
  const webpOut = path.join(MEMBERS_DIR, base + '.webp');
  if (!FORCE) {
    try { await fs.access(webpOut); console.log('Skip (exists):', file); return; } catch {}
  }
  try {
    const img = sharp(full);
    const meta = await img.metadata();
    const targetWidth = Math.min(800, meta.width || 800);

    // Main webp
    await img
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpOut);

    // Optimized jpeg fallback
    const jpegOut = path.join(MEMBERS_DIR, base + '.jpg');
    await img
      .resize({ width: targetWidth, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(jpegOut);

    console.log('Optimized:', file, '->', path.basename(webpOut), 'and JPEG');
  } catch (e) {
    console.error('Failed:', file, e.message);
  }
}

async function run() {
  await ensureDir(MEMBERS_DIR);
  const inputs = await gatherInputs();
  if (!inputs.length) {
    console.log('No input images found in public/members');
    return;
  }
  console.log('Processing', inputs.length, 'files...');
  for (const f of inputs) await processFile(f);
  console.log('Done.');
}

run();
