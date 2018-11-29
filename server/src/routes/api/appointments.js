import { Router } from 'express';
import Table from '../../table';
import { tokenMiddleware, isLoggedIn } from '../../middleware/auth.mw';

let router = Router();
let apptTable = new Table('appointments')

router.post('/', (req, res) => {
    let makeAppt = req.body;

    apptTable.insert(makeAppt)
    .then(results => res.send(results))
    .catch(err => res.send(err));
});

router.get('/', (req, res) => {
    
    apptTable.getAll()
    .then(results => res.send(results))
    .catch(err => res.send(err));
});

export default router;