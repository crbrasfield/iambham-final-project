import { Router } from 'express';
import Table from '../../table';

let router = Router();
let apptTable = new Table('appointments')

router.post('/', (req, res) => {
    let makeAppt = req.body;

    apptTable.insert(makeAppt)
    .then(results => res.send(results))
    .catch(err => res.send(err));
});

export default router;