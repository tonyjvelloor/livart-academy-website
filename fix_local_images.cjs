const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2021\/12\/Stephy-Sebastian\.jpg/g, '/images/brand/stephy-sebastian.webp');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2023\/11\/livart-logo-white-small\.png/g, '/images/brand/logo.jpg');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2021\/11\/livart-lor-website-1024x476\.png/g, '/images/transformations/bridal_hindu_after.jpg');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2021\/10\/portrait-of-sexy-blonde-woman-with-a-beautiful-face-1-1-1-1024x1024\.jpg/g, '/images/transformations/bridal_after.jpg');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2022\/01\/0X2A0020-scaled\.jpg/g, '/images/instagram/DK13xiot6zA.jpg');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2022\/01\/0X2A0035-scaled\.jpg/g, '/images/transformations/blowdry_after.jpg');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2022\/01\/0X2A0027-scaled\.jpg/g, '/images/instagram/DUap-mOkvuu.jpg');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2022\/01\/0X2A9699-scaled\.jpg/g, '/images/instagram/DZSWz8wyz5i.jpg');
      content = content.replace(/https:\/\/livart\.co\.in\/wp-content\/uploads\/2022\/01\/0X2A0038-scaled\.jpg/g, '/images/instagram/DWtk05cjLnI.jpg');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir('src');
console.log('Successfully replaced all remote image URLs with local image assets!');
