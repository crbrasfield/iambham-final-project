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
var apptTable = new _table.default('appointments');
router.post('/', function (req, res) {
  var makeAppt = req.body;
  apptTable.insert(makeAppt).then(function (results) {
    return res.send(results);
  }).catch(function (err) {
    return res.send(err);
  });
});
router.get('/:id?', function (req, res) {
  var id = req.params.id;

  if (id) {
    apptTable.getOne(id).then(function (results) {
      return res.send(results);
    }).catch(function (err) {
      return res.send(err);
    });
  } else {
    apptTable.getAll().then(function (results) {
      return res.send(results);
    }).catch(function (err) {
      return res.send(err);
    });
  }
});
var _default = router;
exports.default = _default;