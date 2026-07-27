// Script to optimize/compress textures
// Run with: node scripts/optimize-textures.js

const fs = require('fs');
const path = require('path');

console.log(`
┌─────────────────────────────────────────────────────────┐
│  TEXTURE OPTIMIZATION GUIDE                             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Your model is 106MB - here's how to reduce it:        │
│                                                         │
│  1. USE ONLINE COMPRESSION:                             │
│     • gltf.report - Upload GLB and optimize online     │
│     • https://gltf.report/                              │
│     • Will reduce to 20-40MB typically                  │
│                                                         │
│  2. COMPRESS TEXTURES MANUALLY:                         │
│     • Use tinypng.com for PNG/JPG textures             │
│     • Reduce texture resolution (2048 → 1024)          │
│     • Convert to WebP format                            │
│                                                         │
│  3. SIMPLIFY IN REVIT:                                  │
│     • Export with lower LOD (200 instead of 350)       │
│     • Remove unnecessary details                        │
│     • Combine similar materials                         │
│                                                         │
│  4. USE CLOUD HOSTING (RECOMMENDED):                    │
│     • Upload to Cloudflare R2 / AWS S3                 │
│     • Serve via CDN                                     │
│     • Keep portfolio site fast                          │
│                                                         │
└─────────────────────────────────────────────────────────┘

Current file sizes:
`);

const publicDir = path.join(__dirname, '..', 'public', '3D');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.glb') || f.endsWith('.gltf'));

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  const stats = fs.statSync(filePath);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
  console.log(`  📦 ${file}: ${sizeMB} MB`);
});

console.log('\n✨ Recommended: Use https://gltf.report/ to compress your model\n');
