import { Router } from "express";
import Table from "../../table";
import { callProcedure } from "../../config/db";

let router = Router();
let apptTable = new Table("appointments");

router.post("/", (req, res) => {
  let makeAppt = req.body;
  const user = req.user;

  makeAppt.userid = user.id;

  if (user.user_type === "patient") {
    apptTable
      .insert(makeAppt)
      .then(results => {
        res.send(results);
      })
      .catch(err => res.send(err));
  }
});

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  const user = req.user;

  if (user.user_type === "patient") {
    if (id) {
      apptTable
        .getOne(id)
        .then(results => res.send(results))
        .catch(err => res.send(err));
    } else {
      callProcedure("spUserAppts", [user.id])
        .then(results => res.send(results[0]))
        .catch(err => res.send(err));
    }
  } else if (user.user_type === "doctor") {
    if (id) {
      apptTable
        .getOne(id)
        .then(results => res.send(results))
        .catch(err => res.send(err));
    } else {
      apptTable
        .getAll()
        .then(results => res.send(results))
        .catch(err => res.send(err));
    }
  }
});

router.get("/doctorappointments", (req, res) => {
  const user = req.user;

  callProcedure("spDocAppts", [user.id])
    .then(results => res.send(results[0]))
    .catch(err => res.send(err));
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  const user = req.user;
  let editAppt = req.body;

  if (user.user_type === "patient") {
    apptTable
      .update(id, editAppt)
      .then(results => res.send(results))
      .catch(err => res.sendStatus(500));
  }
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  const user = req.user;

  if (user.user_type === "patient") {
    apptTable
      .delete(id)
      .then(results => res.send(results))
      .catch(err => res.sendStatus(500));
  }
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  const user = req.user;

  if(user.user_type === "patient") {
    apptTable.update(id, req.body)
      .then(results => res.send(results))
      .catch(err => res.send(err))
  }  
});

export default router;
