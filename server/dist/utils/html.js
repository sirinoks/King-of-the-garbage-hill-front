import { collectStyle } from './collectCss.js';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Get the equivalent of __dirname in ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));
export async function renderHtml(appHtml, css, server) {
    // Resolve the path to main.ts dynamically, using import.meta.url for SSR compatibility
    const mainTsPath = resolve(__dirname, '../../../kotgh/src/main.ts');
    console.log(`Resolving main.ts path: ${mainTsPath}`);
    try {
        // Attempt to collect the styles for SSR
        const collectedCss = await collectStyle(server, [mainTsPath]);
        console.log('Successfully collected CSS: ', collectedCss);
        return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SSR Vue App</title>
          <style>${css}</style> <!-- Inlined CSS -->
          <style>${collectedCss}</style> <!-- Collected CSS -->
          <script type="module" src="/assets/main-DuoGcy-8.js"></script>
        </head>
        <body>
          <div id="app">${appHtml}</div>
        </body>
      </html>
    `;
    }
    catch (error) {
        console.error('Error during SSR:', error);
        return `<html><body><h1>SSR Error</h1><p>${error.message}</p></body></html>`;
    }
}
