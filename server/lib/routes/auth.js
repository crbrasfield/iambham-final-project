"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.post('/login', function (req, res, next) {
  _passport.default.authenticate('local', function (err, token, info) {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    } else if (!token) {
      return res.status(401).json(info);
    } else {
      return res.status(201).json(token);
    }
  })(req, res, next);
});
var _default = router;
exports.default = _default;