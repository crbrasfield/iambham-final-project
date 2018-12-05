import { Router } from 'express';
import Table from '../../table';
import { tokenMiddleware, isLoggedIn } from '../../middleware/auth.mw';

let router = Router();
let apptTable = new Table('appointments');

router.post('/', tokenMiddleware, isLoggedIn, (req, res) => {
    let makeAppt = req.body;
    const user = req.user;

    if(user.user_type === 'patient') {
        apptTable.insert(makeAppt)
            .then(results => { res.send(results)})
            .catch(err => res.send(err))}
});

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    const user = req.user;

    if(user.user_type === 'doctor') {
        if (id) {
            apptTable.getOne(id)
                .then(results => res.send(results))
                .catch(err => res.send(err));
        } else {
            apptTable.getAll()
                .then(results => res.send(results))
                .catch(err => res.send(err));
        }
    } else {
        res.send('Doctors only.')
    }
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    const user = req.user;
    let editAppt = req.body;

    if (user.user_type === 'patient') {
        apptTable.update(id, editAppt)
            .then(results => res.send(results))
            .catch(err => res.sendStatus(500));
    }
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    const user = req.user;

    if (user.user_type === 'patient') {
        apptTable.delete(id)
            .then(results => res.send(results))
            .catch(err => res.sendStatus(500));
    }
});

export default router;