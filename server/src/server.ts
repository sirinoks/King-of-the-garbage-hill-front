import express from 'express';
import path from 'path';
import { PORT } from './config.js';
import apiRoutes from './routes/api.js';
import authRoutes from './routes/auth.js';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const frontendDist = process.env.FRONTEND_DIST ?? resolve(__dirname, '../../kotgh/dist');





const server = express();
server.use(authRoutes);
server.use(express.static(frontendDist));

server.use(express.json());

// Serve static assets from the frontend's client build directory
server.use(express.static(path.resolve('O:/git/King-of-the-garbage-hill-front/kotgh/dist')));

server.use('/assets', express.static(path.resolve('O:/git/King-of-the-garbage-hill-front/kotgh/dist/assets')));


// Attach API routes
server.use(apiRoutes);

server.get('/', (_req, res) => {
  res.send('Backend is running');
});


// Start server
server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

export default server;
