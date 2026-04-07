const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  { from: /text-white/g, to: 'text-black' },
  { from: /hover:text-white/g, to: 'hover:text-black' },
  { from: /border-white\/10/g, to: 'border-black/10' },
  { from: /border-white\/5/g, to: 'border-black/5' },
  { from: /border-white\/20/g, to: 'border-black/20' },
  { from: /bg-white\/5/g, to: 'bg-black/5' },
  { from: /bg-white\/10/g, to: 'bg-black/10' },
  { from: /text-gray-400/g, to: 'text-gray-600' },
  { from: /text-gray-300/g, to: 'text-gray-700' },
  { from: /bg-\[\#030303\]/g, to: 'bg-white' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      for (const { from, to } of replacements) {
        content = content.replace(from, to);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Conversion complete.');
