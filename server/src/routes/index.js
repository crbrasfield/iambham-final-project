import { Router } from 'express';
import apptRouter from './api/appointments';
import userRouter from './api/users';
import insuranceRouter from './api/insurances';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);

router.route('*')
    .get(tokenMiddleware, isLoggedIn)
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn)

router.use('/appointments', apptRouter);
router.use('/insurances', insuranceRouter);

export default router;