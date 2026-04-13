import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = {
  ngo: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2VjMTEzNzA2YTg4YTQ5NDA4NjIwMGIzMTcwODk4ZDYxEgsSBxCGiYDI_xkYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjQ3MDA2NTMwODg5MDY5NzE3&filename=&opi=89354086',
  company: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzgzZmNhZDM4NzQ2ODQ1M2ZhNzQ2YmRlYWM2ZmM1NjI1EgsSBxCGiYDI_xkYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjQ3MDA2NTMwODg5MDY5NzE3&filename=&opi=89354086',
  analytics: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzQ3ZDVmYTljZDU2MDQ1YWU5ZTg1Yzc2NTk3MTVmMGUzEgsSBxCGiYDI_xkYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjQ3MDA2NTMwODg5MDY5NzE3&filename=&opi=89354086',
  registry: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2RhM2I3ZWFmNDQ1MjQ4Y2U5MjcyNWQ0MTA2ZmIyNzVlEgsSBxCGiYDI_xkYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjQ3MDA2NTMwODg5MDY5NzE3&filename=&opi=89354086',
  marketplace: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzIyOGY1YTIyOWZmYzQ3ZDE5YTZkMmE2ZDVjMmEzYWJjEgsSBxCGiYDI_xkYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjQ3MDA2NTMwODg5MDY5NzE3&filename=&opi=89354086',
  admin: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzBjMTRkZGQ3MTQ1ZjRjYjQ4NTY3NDVmZjJiZGJkNDllEgsSBxCGiYDI_xkYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjQ3MDA2NTMwODg5MDY5NzE3&filename=&opi=89354086'
};

const outputDir = path.join(__dirname, 'src', 'stitch_assets');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

let exportsCode = '';

const download = (name, url) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const escaped = data.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
      exportsCode += `export const ${name}Html = \`${escaped}\`;\n\n`;
      resolve();
    });
  }).on('error', reject);
});

async function main() {
  for (const [name, url] of Object.entries(urls)) {
    console.log('Downloading', name);
    await download(name, url);
  }
  fs.writeFileSync(path.join(outputDir, 'index.js'), exportsCode);
  console.log('Successfully embedded HTML into JS module');
}

main();
