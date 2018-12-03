import { Router } from 'express';
import Table from '../../table';

let router = Router();

let usersTable = new Table('users');
let tokenTable = new Table('tokens');

router.get('/patient/:id', (req, res) => {
    let id = req.params.id;

    let query = `SELECT * FROM ${usersTable} WHERE id = ${id};`;

    // usersTable.find(query)
    //  .then(results => res.send(results))
    //  .catch(err => res.send(500));
    
    usersTable.getOne(id)
        .then(results => res.send(results))
        .catch(err => res.send(500));

    

});

router.get('/doctor/:id', (req, res) => {
    let id = req.params.id;

    if(user.user_type === "doctor") {
       usersTable.getOne(id)
        .then(results => res.send(results))
        .catch(err => res.send(500));
    }
});

router.post('/createdoctor', (req, res) => {
    const user = req.body;
    user.user_type = 'doctor';

    usersTable.insert(user)
        .then(results => res.send(results))
        .catch(err => res.sendStatus(500));
});

router.post('/createpatient', (req, res) => {
    const user = req.body;
    user.user_type = 'patient';

    usersTable.insert(req.body)
        .then(results => res.send(results))
        .catch(err => res.sendStatus(500));
});



export default router;