import { Router } from 'express';
import { getHistory } from '../controllers/historyController';

const router = Router();
router.get('/history', getHistory);


export default router;
