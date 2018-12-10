import { Router } from "express";
import Table from "../../../table";

let router = Router();
let usersTable = new Table("users");

router.get("/doctor/:id", (req, res) => {
  let id = req.params.id;
  const user = req.user;

  if (user.id === parseInt(id, 10) && user.user_type == "doctor") {
    usersTable
      .getOne(id)
      .then(results => {
        res.send(results);
      })
      .catch(err => res.sendStatus(500));
  } else if (id !== user.id) {
    res.send("No access");
  }
});

router.get("/doctors", (req, res) => {
  usersTable.getAll().then(results => {
    const doctors = results.filter(user => user.user_type === "doctor");

    res.send(doctors);
  });
});

export default router;
