const fs = require('fs');

const enHome = fs.readFileSync('src/pages/index.astro', 'utf-8');

let mlHome = enHome;

// SEO
mlHome = mlHome.replace(/<Layout title="[^"]+">/, '<Layout title="മികച്ച ബ്യൂട്ടി കോഴ്‌സുകൾ | Livart Beauty Academy">');
mlHome = mlHome.replace(/description="[^"]+"/, 'description="കൊച്ചിയിലെ മികച്ച ബ്യൂട്ടി അക്കാദമി. മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സ്കിൻ കെയർ കോഴ്സുകൾ."');

// Hero
mlHome = mlHome.replace('Professional Beauty Education. \n\t\t\t\t\tBuilt for Real Careers.', 'മികച്ച ബ്യൂട്ടി എഡ്യൂക്കേഷൻ. <br/><span class="italic text-primary">നിങ്ങളുടെ കരിയർ ഇവിടെ തുടങ്ങാം.</span>');
mlHome = mlHome.replace('Admissions Open', 'അഡ്മിഷൻ ആരംഭിച്ചിരിക്കുന്നു');
mlHome = mlHome.replace('The only academy in Kerala focusing strictly on high-end editorial, clinical cosmetology, and advanced bridal mastery.', 'കേരളത്തിലെ ഏറ്റവും മികച്ച ഹൈ-എൻഡ് ബ്യൂട്ടി, മേക്കപ്പ് കോഴ്സുകൾ. 100% പ്രാക്ടിക്കൽ ട്രെയിനിങ്ങോടെ പഠിക്കാം.');

// Trust Strip
mlHome = mlHome.replace('B&amp;WSSC Affiliated', 'B&amp;WSSC അംഗീകാരം');
mlHome = mlHome.replace('Hands-on Training', 'പ്രാക്ടിക്കൽ ട്രെയിനിങ്');
mlHome = mlHome.replace('Experienced Trainers', 'വിദഗ്ദ്ധരായ അധ്യാപകർ');

// Section 1
mlHome = mlHome.replace('We build professionals.', 'മികച്ച പരിശീലനം ഉറപ്പ്.');
mlHome = mlHome.replace('At Livart, we focus entirely on the three pillars of a successful beauty career.', 'ഒരു മികച്ച കരിയർ പടുത്തുയർത്താൻ ആവശ്യമായ 3 കാര്യങ്ങൾ ഞങ്ങൾ നൽകുന്നു:');
mlHome = mlHome.replace('The Craft.', 'മികവ്.');
mlHome = mlHome.replace('The Credential.', 'അംഗീകാരം.');
mlHome = mlHome.replace('The Career.', 'കരിയർ.');
mlHome = mlHome.replace('No theory-only days. Every student works on live models to master actual salon floor techniques.', 'വെറും തിയറി മാത്രമല്ല. നേരിട്ടുള്ള പരിശീലനത്തിലൂടെ (Live models) എല്ലാം പഠിക്കാം.');

// Courses
mlHome = mlHome.replace('Courses Built for Industry.', 'ഞങ്ങളുടെ കോഴ്‌സുകൾ.');
mlHome = mlHome.replace('Select your track. Every syllabus is designed for maximum practical exposure.', 'നിങ്ങൾക്ക് അനുയോജ്യമായ കോഴ്സ് തിരഞ്ഞെടുക്കുക. എല്ലാം പ്രാക്ടിക്കൽ ട്രെയിനിങ്ങോടെ.');

mlHome = mlHome.replace(/View Syllabus/g, 'കൂടുതൽ വിവരങ്ങൾ');

// Career Pathways
mlHome = mlHome.replace('What will you become?', 'നിങ്ങൾക്ക് എന്താകാം?');
mlHome = mlHome.replace('Our graduates don’t just get jobs; they build businesses and independent brands.', 'പഠനം കഴിഞ്ഞയുടൻ സ്വന്തമായി ബിസിനസ്സ് തുടങ്ങാനോ ജോലി നേടാനോ നിങ്ങളെ സഹായിക്കുന്നു.');

// Founder
mlHome = mlHome.replace('Vision Meets Discipline.', 'സ്ഥാപകയെക്കുറിച്ച്.');
mlHome = mlHome.replace('Read Founder Story', 'കൂടുതൽ വായിക്കുക');

// Campus / Location
mlHome = mlHome.replace('Step Inside Livart.', 'ഞങ്ങളുടെ അക്കാദമി.');
mlHome = mlHome.replace('Located centrally in Edappally', 'ഇടപ്പള്ളിയിൽ സ്ഥിതിചെയ്യുന്നു');
mlHome = mlHome.replace('Get Directions', 'വഴി അറിയുക');

// Final CTA
mlHome = mlHome.replace('Ready to Build Your Beauty Career?', 'നിങ്ങളുടെ കരിയർ തുടങ്ങാൻ തയ്യാറാണോ?');
mlHome = mlHome.replace('Enrollment for the upcoming batch is strictly limited', 'അടുത്ത ബാച്ചിലേക്കുള്ള അഡ്മിഷൻ ആരംഭിച്ചിരിക്കുന്നു.');
mlHome = mlHome.replace(/Apply For Next Batch/g, 'ഇപ്പോൾ അപേക്ഷിക്കുക');

fs.writeFileSync('src/pages/ml/index.astro', mlHome);
console.log('Malayalam homepage generated.');
