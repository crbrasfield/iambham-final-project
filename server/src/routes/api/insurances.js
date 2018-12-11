import { Router } from 'express';
import Table from '../../table';
import { callProcedure } from "../../config/db"

let router = Router();
let insuranceTable = new Table("insurances");

router.get('/:id?', (req, res) => {
    const id = req.params.id;
    const user = req.user;

    if (id) {
        insuranceTable.getOne(id)
            .then(results => res.send(results))
            .catch(err => res.status(500).send(err));
    } else {
        insuranceTable.getAll()
        .then(results => res.send(results))
        .catch(err => res.status(500).send(err)); 
    }
});

export default router;