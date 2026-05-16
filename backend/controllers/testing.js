import { Router } from 'express';
const router = Router();
export default router;

import Blog from '../models/Blog.js';
import User from '../models/User.js';

router.post('/reset', async (req, res) => {
  await Blog.deleteMany({});
  await User.deleteMany({});

  res.status(204).end();
});
