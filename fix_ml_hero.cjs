const fs = require('fs');

let mlHome = fs.readFileSync('src/pages/ml/index.astro', 'utf-8');

// Replace Hero H1 using regex
mlHome = mlHome.replace(/Professional Beauty Education.\s*<br\/>\s*<span class="italic font-display-xl text-primary">Built for Real Careers.<\/span>/m, 'മികച്ച ബ്യൂട്ടി എഡ്യൂക്കേഷൻ. <br/> <span class="italic font-display-xl text-primary">നിങ്ങളുടെ കരിയർ ഇവിടെ തുടങ്ങാം.</span>');

// Replace Hero subtext using regex
mlHome = mlHome.replace(/Premium beauty, makeup, hair, and skincare education in Kochi. We combine rigorous hands-on training with B&WSSC-affiliated certification to prepare you for the professional beauty industry./m, 'കൊച്ചിയിലെ മികച്ച ബ്യൂട്ടി അക്കാദമി. മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സ്കിൻ കെയർ കോഴ്സുകൾ. 100% പ്രാക്ടിക്കൽ ട്രെയിനിങ്ങോടെ പഠിക്കാം.');

fs.writeFileSync('src/pages/ml/index.astro', mlHome);
console.log('Fixed ML Hero section');
