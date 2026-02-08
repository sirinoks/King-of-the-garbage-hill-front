import express from 'express';
import path from 'path';
import { PORT } from './config.js';
import ssrRoutes from './routes/ssr.js';
import apiRoutes from './routes/api.js';
const server = express();
server.use(express.json());
// Serve static assets from the frontend's client build directory
server.use(express.static(path.resolve('O:/git/King-of-the-garbage-hill-front/kotgh/dist/client')));
server.use('/assets', express.static(path.resolve('O:/git/King-of-the-garbage-hill-front/kotgh/dist/client')));
// Attach API routes
server.use(apiRoutes);
// Catch-all route to handle SSR for non-static requests
server.use('*', ssrRoutes);
// Start server
server.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
export default server;
