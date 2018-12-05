import { Router } from 'express';
import Table from '../../../table';

let router = Router();
let apptTable = new Table('appointments');

router.get(router.get('/:id?', (req, res) => {
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
        res.sendStatus(401)
    }
}));



export default router;