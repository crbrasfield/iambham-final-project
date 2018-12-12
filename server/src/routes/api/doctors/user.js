import { Router } from "express";
import Table from "../../../table";

let router = Router();
let usersTable = new Table("users");

router.get("/doctors", (req, res) => {
  usersTable.getAll().then(results => {
    const doctors = results.filter(user => user.user_type === "doctor");

    res.send(doctors);
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  const user = req.user;

  usersTable
    .getOne(id)
    .then(results => {
      res.send(results);
    })
    .catch(err => res.sendStatus(500));
});

export default router;
