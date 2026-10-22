const fs = require('fs');
let overview = fs.readFileSync('src/pages/overview/index.astro', 'utf-8');

// Replace highlight in Cosmetology
overview = overview.replace('"Hair, Skin & Tattooing"', '"Hair, Skin & Makeup"');

// Remove the tattoo object from the array
// We can use a regex that matches the object block
overview = overview.replace(/,\s*\{\s*title:\s*"Diploma in Tattoo Artistry".*?feeRange:\s*"[^"]+"\s*\}/s, '');

fs.writeFileSync('src/pages/overview/index.astro', overview);
console.log('Fixed overview');
