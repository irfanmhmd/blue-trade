const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

let output = '';

files.forEach(f => {
  const name = path.basename(f, '.html');
  const content = fs.readFileSync(path.join(__dirname, f), 'utf-8');
  // Escape backticks and ${} to use it in a template literal
  const escapedContent = content.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  
  // Also inject a script to intercept clicks on `<a>` or `<button>` to navigate natively
  const injection = `
  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  `;
  const finalHtml = escapedContent.replace('</body>', injection + '</body>');
  
  output += `export const ${name}Html = \`${finalHtml}\`;\n\n`;
});

fs.writeFileSync(path.join(__dirname, 'HtmlAssets.js'), output);
console.log('Finished converting HTML assets.');
