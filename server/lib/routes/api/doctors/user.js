"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _table = _interopRequireDefault(require("../../../table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var usersTable = new _table.default("users");
router.get("/:id", function (req, res) {
  var id = req.params.id;
  var user = req.user;

  if (user.id === parseInt(id, 10) && user.user_type == "doctor") {
    usersTable.getOne(id).then(function (results) {
      res.send(results);
    }).catch(function (err) {
      return res.sendStatus(500);
    });
  } else if (id !== user.id) {
    res.send("No access");
  }
});
router.get("/doctors", function (req, res) {
  usersTable.getAll().then(function (results) {
    var doctors = results.filter(function (user) {
      return user.user_type === "doctor";
    });
    res.send(doctors);
  });
});
var _default = router;
exports.default = _default;