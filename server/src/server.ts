import express from 'express';
import { PORT } from './config.js';
import apiRoutes from './routes/api.js';
import authRoutes from './routes/auth.js';

const server = express();

server.use(express.json());
server.use(authRoutes);
server.use(apiRoutes);

server.get('/', (_req, res) => {
  res.send('Backend is running');
});

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

export default server;