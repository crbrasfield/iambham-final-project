import { Router } from 'express';
import Table from '../../table';

let router = Router();
let usersTable = new Table('users');

router.post('/createpatient', (req, res) => {
    const user = req.body;
    user.user_type = 'patient';

    usersTable.insert(user)
        .then(results => res.send(results))
        .catch(err => res.send(err));
});

router.post('/createdoctor', (req, res) => {
    const user = req.body;
    user.user_type = 'doctor';

    usersTable.insert(user)
        .then(results => res.send(results))
        .catch(err => res.sendStatus(500));
});

export default router;