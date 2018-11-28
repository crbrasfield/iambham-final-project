import { Router } from 'express';
import apptRouter from './api/appointments';
import userRouter from './api/users';
import authRouter from './auth';
import hereRouter from './here';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn)

router.use('/here', hereRouter);    
router.use('/users', userRouter);
router.use('/appointments', apptRouter);

export default router;