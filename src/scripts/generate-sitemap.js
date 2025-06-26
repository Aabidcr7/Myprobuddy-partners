import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// For __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Updated Base URL
const baseUrl = 'https://partners.myprobuddy.com';

// ✅ All defined routes
const routes = [
  '/',
  '/affiliate-partners',
  '/service-partners'
];

// Create the sitemap structure
const urlset = create({ version: '1.0' }).ele('urlset', {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
});

// Add each route to the sitemap
routes.forEach(route => {
  urlset.ele('url')
    .ele('loc').txt(`${baseUrl}${route}`).up()
    .ele('lastmod').txt(new Date().toISOString()).up()
    .ele('changefreq').txt('monthly').up()
    .ele('priority').txt(route === '/' ? '1.0' : '0.8');
});

// Generate formatted XML string
const xml = urlset.end({ prettyPrint: true });

// Define path to public/sitemap.xml
const outputPath = path.resolve(__dirname, '../../public/sitemap.xml');

// Ensure output directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// Write sitemap to file
fs.writeFileSync(outputPath, xml);

console.log('✅ Sitemap generated successfully at public/sitemap.xml');
