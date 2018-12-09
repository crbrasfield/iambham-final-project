import { Router } from "express";
import Table from "../../../table";

let router = Router();
let usersTable = new Table("users");

router.get("/:id?", (req, res, next) => {
  let id = req.params.id;
  const user = req.user;

  if (user.id === parseInt(id, 10) && user.user_type == "patient") {
    usersTable
      .getOne(id)
      .then(results => {
        res.send(results);
      })
      .catch(err => res.sendStatus(500));
  } else if (parseInt(id, 10) !== user.id) {
    res.sendStatus(401);
  }
});

router.put("/:id", (req, res, next) => {
  let id = req.params.id;

  usersTable
    .update(id, req.body)
    .then(results => {
      res.sendStatus(200);
    })
    .catch(err => res.sendStatus(500));
});

export default router;
