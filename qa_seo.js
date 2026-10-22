import fs from 'fs';
import path from 'path';

function findAstroFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findAstroFiles(filePath, fileList);
    } else if (filePath.endsWith('.astro')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = findAstroFiles('./src/pages');
console.log('--- Title & H1 QA ---');
for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Try to find the title prop passed to <Layout>
  const titleMatch = content.match(/<Layout\s+title="([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : 'No title found';
  
  // Try to find the H1 tag
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'No H1 found';
  
  const relPath = path.relative('./src/pages', file);
  console.log(`\nPath: /${relPath.replace(/\/index\.astro$/, '/').replace(/^index\.astro$/, '')}`);
  console.log(`Title: ${title}`);
  console.log(`H1:    ${h1}`);
}
