import express from 'express';
import { createRequire } from 'module';
import { renderHtml } from '../utils/html.js';
import { createServer } from 'vite'; // <-- Fixed import
const require = createRequire(import.meta.url);
const { render } = require('../../../kotgh/dist/server/entry-server.js'); // Path to SSR build
const router = express.Router();
router.get('*', async (req, res) => {
    try {
        const url = req.originalUrl;
        const { appHtml, css } = await render(url); // Ensure `css` is also returned
        // Create the Vite server instance
        const vite = await createServer({
            server: { middlewareMode: true },
            appType: 'custom',
        });
        // Inject CSS into the HTML
        const html = await renderHtml(appHtml, css, vite); // Pass Vite server instance
        res.status(200).send(html);
    }
    catch (error) {
        console.error('SSR Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
export default router;
