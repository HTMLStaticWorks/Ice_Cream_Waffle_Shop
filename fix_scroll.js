const fs = require('fs');

const path = 'c:\\class\\.vscode\\icecream-waffle\\party-orders.html';
let content = fs.readFileSync(path, 'utf8');

// Add overflow-hidden to the section that contains the overlapping image box
content = content.replace('<section class="section-padding bg-vanilla position-relative">', '<section class="section-padding bg-vanilla position-relative overflow-hidden">');

fs.writeFileSync(path, content, 'utf8');
console.log('party-orders.html updated successfully.');
