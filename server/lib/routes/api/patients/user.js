"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _table = _interopRequireDefault(require("../../../table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var usersTable = new _table.default('users');
router.get('/:id?', function (req, res, next) {
  var id = req.params.id;
  var user = req.user;

  if (user.id === parseInt(id, 10) && user.user_type == 'patient') {
    usersTable.getOne(id).then(function (results) {
      res.send(results);
    }).catch(function (err) {
      return res.sendStatus(500);
    });
  } else if (parseInt(id, 10) !== user.id) {
    res.sendStatus(401);
  }
});
var _default = router;
exports.default = _default;