import { Router } from 'express';
import insuranceRouter from './api/insurances';
import authRouter from './auth';
import patientRouter from './api/patients/index';
import doctorRouter from './api/doctors/index';
import apptRouter from './api/appointments';
import createRouter from './api/createUser';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/new', createRouter);

router.route('*')
    .get(tokenMiddleware, isLoggedIn)
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn)


router.use('/doctor', doctorRouter);
router.use('/patient', patientRouter);
router.use('/insurances', insuranceRouter);
router.use('/appointments', apptRouter);

export default router;