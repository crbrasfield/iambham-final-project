"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _table = _interopRequireDefault(require("../../table"));

var _auth = require("../../middleware/auth.mw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var usersTable = new _table.default('users');
var tokenTable = new _table.default('tokens');
router.get('/patient/:id', function (req, res) {
  var id = req.params.id;
  var query = "SELECT * FROM ".concat(usersTable, " WHERE id = ").concat(id, ";"); // usersTable.find(query)
  //  .then(results => res.send(results))
  //  .catch(err => res.send(500));

  usersTable.getOne(id).then(function (results) {
    return res.send(results);
  }).catch(function (err) {
    return res.send(500);
  });
});
router.get('/doctor/:id', function (req, res) {
  var id = req.params.id;

  if (user.user_type === "doctor") {
    usersTable.getOne(id).then(function (results) {
      return res.send(results);
    }).catch(function (err) {
      return res.send(500);
    });
  }
});
router.post('/createdoctor', function (req, res) {
  var user = req.body;
  user.user_type = 'doctor';
  usersTable.insert(user).then(function (results) {
    return res.send(results);
  }).catch(function (err) {
    return res.sendStatus(500);
  });
});
router.post('/createpatient', function (req, res) {
  var user = req.body;
  user.user_type = 'patient';
  usersTable.insert(req.body).then(function (results) {
    return res.send(results);
  }).catch(function (err) {
    return res.sendStatus(500);
  });
});
var _default = router;
exports.default = _default;