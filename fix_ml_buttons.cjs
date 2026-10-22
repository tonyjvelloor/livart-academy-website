const fs = require('fs');

let mlHome = fs.readFileSync('src/pages/ml/index.astro', 'utf-8');

mlHome = mlHome.replace(/Explore Courses/g, 'കോഴ്‌സുകൾ കാണുക');
mlHome = mlHome.replace(/Talk to Admissions/g, 'ഞങ്ങളെ വിളിക്കുക');
mlHome = mlHome.replace(/B&WSSC Affiliated/g, 'B&WSSC അംഗീകാരം');
mlHome = mlHome.replace(/Kalamassery, Kochi/g, 'കളമശ്ശേരി, കൊച്ചി');

fs.writeFileSync('src/pages/ml/index.astro', mlHome);
console.log('Fixed ML Buttons & Trust Strip');
