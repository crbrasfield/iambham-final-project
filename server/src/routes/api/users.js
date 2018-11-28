import { Router } from 'express';
import Table from '../../table';
import { tokenMiddleware, isLoggedIn } from '../../middleware/auth.mw';

let router = Router();

let usersTable = new Table('users');

router.get('/', tokenMiddleware, isLoggedIn, (req, res) => {
    usersTable.getAll()
       .then(results => res.send(results))
       .catch(err => res.send(500));
});

router.get('/:id', tokenMiddleware, isLoggedIn, (req, res) => {
    let id = req.params.id;

       usersTable.getOne(id)
        .then(results => res.send(results))
        .catch(err => res.send(500));
   
});

export default router;