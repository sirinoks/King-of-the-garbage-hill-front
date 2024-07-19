import express from 'express'
import { createServer as createViteServer } from 'vite'
import fs from 'fs'
import path from 'path'

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom', // don't include Vite's default HTML handling middlewares
  })
  // Use vite's connect instance as middleware
  app.use(vite.middlewares)

  // Custom HTML Middleware
  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl

      // Read index.html
      let template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)

      // SSR Render
      const { render } = await vite.ssrLoadModule('/src/entry-server.js')
      const appHtml = await render(url)

      // Inject rendered app into template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      console.error(e)
      res.status(500).end((e as Error).message);
    }
  })
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
  })
}

createServer()