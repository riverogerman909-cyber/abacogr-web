import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync, readdirSync } from 'node:fs';

// lastmod por post desde el frontmatter (date:); home y /blog/ usan la fecha más reciente
const fechas = {};
let masReciente = '2026-09-05';
for (const f of readdirSync('./src/content/blog')) {
  const m = readFileSync(`./src/content/blog/${f}`, 'utf-8').match(/^date: (\d{4}-\d{2}-\d{2})/m);
  if (m) {
    fechas[`https://abacogr.com/blog/${f.replace(/\.md$/, '')}/`] = m[1];
    if (m[1] > masReciente) masReciente = m[1];
  }
}

export default defineConfig({
  site: 'https://abacogr.com',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = fechas[item.url] ?? masReciente;
        return item;
      },
    }),
  ],
  trailingSlash: 'ignore',
});
