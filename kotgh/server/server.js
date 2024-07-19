"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vite_1 = require("vite");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function createServer() {
    const app = (0, express_1.default)();
    // Create Vite server in middleware mode
    const vite = await (0, vite_1.createServer)({
        server: { middlewareMode: true },
        appType: 'custom', // don't include Vite's default HTML handling middlewares
    });
    // Use vite's connect instance as middleware
    app.use(vite.middlewares);
    // Custom HTML Middleware
    app.get('*', async (req, res, next) => {
        try {
            const url = req.originalUrl;
            // Read index.html
            let template = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../index.html'), 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            // SSR Render
            const { render } = await vite.ssrLoadModule('/src/entry-server.js');
            const appHtml = await render(url);
            // Inject rendered app into template
            const html = template.replace(`<!--ssr-outlet-->`, appHtml);
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        }
        catch (e) {
            vite.ssrFixStacktrace(e);
            console.error(e);
            res.status(500).end(e.message);
        }
    });
    app.listen(3000, () => {
        console.log('Server running at http://localhost:3000');
    });
}
createServer();
