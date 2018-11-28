"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var people = [{
  name: 'Jackson',
  age: 25
}, {
  name: 'Matt',
  age: 40
}];
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.json(people);
});
var _default = router;
exports.default = _default;