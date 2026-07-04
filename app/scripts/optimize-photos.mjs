#!/usr/bin/env node
/**
 * Optimize route-stop photos for the Bydgoszcz City Game app.
 *
 * Usage: node scripts/optimize-photos.mjs <raw-dir> [out-dir]
 *
 * Takes every .jpg/.jpeg/.png in <raw-dir> and writes an optimized
 * `<out-dir>/<basename>.webp` (default out-dir: `src/assets/stops/`):
 *   - auto-rotated according to EXIF orientation
 *   - resized to max width 1200px (never enlarged)
 *   - WebP quality 78, stepping quality down if a file exceeds ~250 KB
 */
import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_WIDTH = 1200;
const START_QUALITY = 78;
const MIN_QUALITY = 50;
const SIZE_BUDGET_BYTES = 250 * 1024;

const rawDir = process.argv[2];
if (!rawDir) {
  console.error('Usage: node scripts/optimize-photos.mjs <raw-dir>');
  process.exit(1);
}

const outDir =
  process.argv[3] ??
  path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
    'src',
    'assets',
    'stops',
  );
await mkdir(outDir, { recursive: true });

const files = (await readdir(rawDir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
if (files.length === 0) {
  console.error(`No source images found in ${rawDir}`);
  process.exit(1);
}

let failed = false;
for (const file of files.sort()) {
  const slug = file.replace(/\.[^.]+$/, '');
  const src = path.join(rawDir, file);
  const out = path.join(outDir, `${slug}.webp`);
  try {
    let quality = START_QUALITY;
    let info;
    for (;;) {
      info = await sharp(src)
        .rotate() // respect EXIF orientation
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality })
        .toFile(out);
      if (info.size <= SIZE_BUDGET_BYTES || quality <= MIN_QUALITY) break;
      quality -= 10;
    }
    console.log(
      `${slug}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB  (q${quality})`,
    );
  } catch (err) {
    failed = true;
    console.error(`FAILED ${file}: ${err.message}`);
  }
}
process.exit(failed ? 1 : 0);
