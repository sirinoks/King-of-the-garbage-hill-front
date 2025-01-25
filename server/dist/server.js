import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || '53134';
const server = express();
// Start server
server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
export default server;
