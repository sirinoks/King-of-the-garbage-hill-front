// server/src/routes/api.ts
import express from 'express';
const router = express.Router();
// Example API Route
router.get('/api/example', (req, res) => {
    res.status(200).json({ message: 'Hello from the API!' });
});
export default router;
