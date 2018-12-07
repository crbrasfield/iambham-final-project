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
var apptTable = new _table.default('appointments');
router.get('/patient/:id', _auth.tokenMiddleware, _auth.isLoggedIn, function (req, res, next) {
  var id = req.params.id;
  var user = req.user; //Will not work without {tokenMiddleware, isLoggedIn}

  if (user.id === parseInt(id, 10) && user.user_type == 'patient') {
    usersTable.getOne(id).then(function (results) {
      res.send(results);
      console.log(req.user.user_type);
    }).catch(function (err) {
      return res.sendStatus(500);
    });
    apptTable.find(user.id).then(function (results) {
      return res.send(results);
    }).catch(function (err) {
      return res.sendStatus(500);
    });
  } else if (id !== user.id) {
    res.send("No access.");
  }
});
router.get('/doctor/:id', _auth.tokenMiddleware, _auth.isLoggedIn, function (req, res) {
  var id = req.params.id;
  var user = req.user;

  if (user.id === parseInt(id, 10) && user.user_type == 'doctor') {
    usersTable.getOne(id).then(function (results) {
      res.send(results);
    }).catch(function (err) {
      return res.sendStatus(500);
    });
  } else if (id !== user.id) {
    res.send("No access");
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