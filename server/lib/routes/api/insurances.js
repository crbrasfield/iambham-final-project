"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _table = _interopRequireDefault(require("../../table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var insuranceTable = new _table.default("insurances");
router.get('/:id?', function (req, res) {
  var id = req.params.id;

  if (id) {
    insuranceTable.getOne(id).then(function (results) {
      return res.send(results);
    }).catch(function (err) {
      return res.status(500).send(err);
    });
  } else {
    insuranceTable.getAll().then(function (results) {
      return res.send(results);
    }).catch(function (err) {
      return res.status(500).send(err);
    });
  }
});
var _default = router;
exports.default = _default;