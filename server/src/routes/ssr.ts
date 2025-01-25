// server/src/routes/ssr.ts
import express from 'express';
import { createRequire } from 'module';
import { renderHtml } from '../utils/html.js';

const require = createRequire(import.meta.url);
const { render } = require('../../../kotgh/dist/server/entry-server.js'); // Path to SSR build

const router = express.Router();

router.get('*', async (req, res) => {
  try {
    const url = req.originalUrl;
    const { appHtml } = await render(url); // Call SSR render function
    const html = renderHtml(appHtml); // Generate HTML
    res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
