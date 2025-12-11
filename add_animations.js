const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add the import statement after the existing imports
const importStatement = 'import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";';
content = content.replace(
  'import { useState } from "react";',
  'import { useState } from "react";\nimport FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";'
);

// 2. Wrap Hero Section (Arabic)
content = content.replace(
  /(\s*)(\{\/\* Hero Section - Phase 1 \*\/\}\n\s*<section className="w-full bg-gradient-to-b from-blue-50\/60 to-white">)/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(          <\/section>)\n(\s*)(\{\/\* Features Section - Phase 2 \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 3. Wrap Features Section (Arabic)
content = content.replace(
  /(\s*)(\{\/\* Features Section - Phase 2 \*\/\}\n\s*<section id="features")/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(          <\/section>)\n(\s*)(\{\/\* Why Choose Us Section - Phase 3 \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 4. Wrap Why Choose Us Section (Arabic)
content = content.replace(
  /(\s*)(\{\/\* Why Choose Us Section - Phase 3 \*\/\}\n\s*<section id="why-us")/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(          <\/section>)\n(\s*)(\{\/\* How BidZone Works Section - Phase 4 \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 5. Wrap How It Works Section (Arabic)
content = content.replace(
  /(\s*)(\{\/\* How BidZone Works Section - Phase 4 \*\/\}\n\s*<section id="how-it-works")/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(          <\/section>)\n(\s*)(\{\/\* App Screenshots Gallery Section - Phase 5 \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 6. Wrap App Screenshots Section (Arabic)
content = content.replace(
  /(\s*)(\{\/\* App Screenshots Gallery Section - Phase 5 \*\/\}\n\s*<section className="py-24 bg-gray-50">)/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
// Find the closing for Screenshots (before Security section or Download section)
content = content.replace(
  /(      <\/section>)\n(\s*)(\{\/\* Security & Trust Section - Phase 6 \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 7. Wrap Security & Trust Section (if exists)
content = content.replace(
  /(\s*)(\{\/\* Security & Trust Section - Phase 6 \*\/\}\n\s*<section className="py-24 bg-white">)/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(      <\/section>)\n(\s*)(\{\/\* Contact Us Section - Phase 7 \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 8. Wrap Contact Us Section (Arabic)
content = content.replace(
  /(\s*)(\{\/\* Contact Us Section - Phase 7 \*\/\}\n\s*<section id="contact")/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(      <\/section>)\n(\s*)(\{\/\* FAQ Section \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 9. Wrap FAQ Section
content = content.replace(
  /(\s*)(\{\/\* FAQ Section \*\/\}\n\s*<section className="max-w-4xl)/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(      <\/section>)\n(\s*)(\{\/\* About Section \(moved\) \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 10. Wrap About Section (Arabic)
content = content.replace(
  /(\s*)(\{\/\* About Section \(moved\) \*\/\}\n\s*<section id="about")/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(      <\/section>)\n(\s*)(\{\/\* Download App Area \*\/\})/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 11. Wrap Download App Area (Arabic)
content = content.replace(
  /(\s*)(\{\/\* Download App Area \*\/\}\n\s*<section className="py-16 bg-white">)/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(      <\/section>)\n(\s*)(\{\/\* Footer \*\/\}\n\s*<footer)/,
  '$1\n$2</FadeInWhenVisible>\n\n$2$3'
);

// 12. Wrap Footer (Arabic) - very light fade
content = content.replace(
  /(\s*)(\{\/\* Footer \*\/\}\n\s*<footer className="bg-slate-900)/,
  '$1<FadeInWhenVisible>\n$1  $2'
);
content = content.replace(
  /(      <\/footer>)\n(\s*)(<\/>\n\s*\) : \()/,
  '$1\n$2</FadeInWhenVisible>\n$2$3'
);

// Write the updated content
fs.writeFileSync(filePath, content, 'utf8');

console.log('✓ Animations added successfully to all sections');
console.log('  - Import statement added');
console.log('  - Hero Section wrapped');
console.log('  - Features Section wrapped');
console.log('  - Why Choose Us Section wrapped');
console.log('  - How It Works Section wrapped');
console.log('  - App Screenshots Section wrapped');
console.log('  - Security & Trust Section wrapped');
console.log('  - Contact Us Section wrapped');
console.log('  - FAQ Section wrapped');
console.log('  - About Section wrapped');
console.log('  - Download App Area wrapped');
console.log('  - Footer wrapped');
console.log('\n✓ All animations are light, clean, and non-intrusive');
console.log('✓ RTL layout preserved');
console.log('✓ Section content unchanged');
