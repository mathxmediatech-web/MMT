const fs = require('fs');
const path = require('path');

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Replace -sky- with -blue- (e.g. text-sky-500 -> text-blue-500)
      content = content.replace(/-sky-/g, '-blue-');
      // Replace shadow-sky with shadow-blue
      content = content.replace(/shadow-sky/g, 'shadow-blue');
      // Replace bg-sky with bg-blue
      content = content.replace(/bg-sky/g, 'bg-blue');
      // Replace from-sky with from-blue
      content = content.replace(/from-sky/g, 'from-blue');
      // Replace via-sky with via-blue
      content = content.replace(/via-sky/g, 'via-blue');
      // Replace to-sky with to-blue
      content = content.replace(/to-sky/g, 'to-blue');
      // Replace text-sky with text-blue
      content = content.replace(/text-sky/g, 'text-blue');
      // Replace border-sky with border-blue
      content = content.replace(/border-sky/g, 'border-blue');
      // Replace ring-sky with ring-blue
      content = content.replace(/ring-sky/g, 'ring-blue');
      // Replace fill-sky with fill-blue
      content = content.replace(/fill-sky/g, 'fill-blue');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

// Process folders
['app', 'components', 'lib'].forEach(folder => {
  const dirPath = path.join(__dirname, folder);
  if (fs.existsSync(dirPath)) {
    processDirectory(dirPath);
  }
});

console.log('Replacement complete.');
