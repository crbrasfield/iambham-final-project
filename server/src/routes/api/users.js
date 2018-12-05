import { Router } from 'express';
import Table from '../../table';
import { isLoggedIn, tokenMiddleware } from '../../middleware/auth.mw';

let router = Router();

let usersTable = new Table('users');
let apptTable = new Table('appointments');

router.get('/patient/:id', tokenMiddleware, isLoggedIn, (req, res, next) => {
    let id = req.params.id;
    const user = req.user;

    //Will not work without {tokenMiddleware, isLoggedIn}
    if (user.id === parseInt(id, 10) && user.user_type == 'patient') {
        usersTable.getOne(id)
                .then(results => {
                    res.send(results);
                    console.log(req.user.user_type);
                })
                .catch(err => res.sendStatus(500));
        
        apptTable.find(user.id) 
            .then(results => res.send(results))
            .catch(err => res.sendStatus(500));
            
    } else if (id !== user.id) {
        res.send("No access.");
    }
    
});

router.get('/doctor/:id',tokenMiddleware, isLoggedIn, (req, res) => {
    let id = req.params.id;
    const user = req.user

    if (user.id === parseInt(id, 10) && user.user_type == 'doctor') {
        usersTable.getOne(id)
                .then(results => {
                    res.send(results);
                })
                .catch(err => res.sendStatus(500));
    } else if (id !== user.id) {
        res.send("No access");
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