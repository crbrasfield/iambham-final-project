import { Router } from 'express';
import passport from 'passport';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
let router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, token, info) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    }) (req, res, next);
});

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    console.log(req.user);
    res.json(req.user);
})


export default router;