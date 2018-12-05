"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _table = _interopRequireDefault(require("../../table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var usersTable = new _table.default('users');
router.post('/createpatient', function (req, res) {
  var user = req.body;
  user.user_type = 'patient';
  usersTable.insert(user).then(function (results) {
    return res.send(results);
  }).catch(function (err) {
    return res.send(err);
  });
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
var _default = router;
exports.default = _default;