
const fs = require('fs');
const files = ['index.html', 'projects.html'];
const images = [
  'assets/proj-dashboard.webp',
  'assets/proj-ecommerce.webp',
  'assets/proj-landing.webp',
  'assets/blog1.webp',
  'assets/blog2.webp',
  'assets/blog3.webp'
];

let imgIndex = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/src="assets\/project[0-9]\.webp"/g, () => {
    const replacement = 'src="' + images[imgIndex % images.length] + '"';
    imgIndex++;
    return replacement;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
}

