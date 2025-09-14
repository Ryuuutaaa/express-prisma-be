import { Router } from 'express';
import userRoutes from './user.routes.js';

const router = Router();

router.get('/health', (_req, res) => res.json({ ok: true, uptime: process.uptime() }));
router.use('/users', userRoutes);

export default router;
