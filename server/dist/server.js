import express from 'express';
import { PORT } from './config.js';
import ssrRoutes from './routes/ssr.js';
import apiRoutes from './routes/api.js';
// import authRoutes from './routes/auth';
const server = express();
server.use(express.json());
// Attach routes
server.use(ssrRoutes);
server.use(apiRoutes);
// server.use(authRoutes);
// server.get('/', (req, res)=>{
//   console.log("info")
//   res.status(200).json({ message: 'Hello from the server!' });
// })
// Start server
server.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
export default server;
