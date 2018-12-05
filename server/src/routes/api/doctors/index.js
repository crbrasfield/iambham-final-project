import { Router } from 'express';
import apptRouter from './appointments';
import userRouter from './user';

let router = Router();

router.use('/appointments', apptRouter);
router.use('/user', userRouter);

export default router;