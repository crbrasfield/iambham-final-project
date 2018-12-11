"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _table = _interopRequireDefault(require("../../../table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var apptTable = new _table.default('appointments');
router.get(router.get('/:id?', function (req, res) {
  var id = req.params.id;
  var user = req.user;

  if (user.user_type === 'doctor') {
    if (id) {
      apptTable.getOne(id).then(function (results) {
        return res.send(results);
      }).catch(function (err) {
        return res.send(err);
      });
    } else {
      apptTable.getAll().then(function (results) {
        return res.send(results[0]);
      }).catch(function (err) {
        return res.send(err);
      });
    }
  } else {
    res.sendStatus(401);
  }
}));
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var user = req.user;
  var editAppt = req.body;

  if (user.user_type === 'doctor') {
    apptTable.update(id, editAppt).then(function (results) {
      return res.send(results);
    }).catch(function (err) {
      return res.sendStatus(500);
    });
  }
});
var _default = router;
exports.default = _default;