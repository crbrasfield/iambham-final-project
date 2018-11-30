"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _appointments = _interopRequireDefault(require("./api/appointments"));

var _users = _interopRequireDefault(require("./api/users"));

var _insurances = _interopRequireDefault(require("./api/insurances"));

var _auth = _interopRequireDefault(require("./auth"));

var _auth2 = require("../middleware/auth.mw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/auth', _auth.default);
router.use('/users', _users.default);
router.route('*').get(_auth2.tokenMiddleware, _auth2.isLoggedIn).post(_auth2.tokenMiddleware, _auth2.isLoggedIn).put(_auth2.tokenMiddleware, _auth2.isLoggedIn).delete(_auth2.tokenMiddleware, _auth2.isLoggedIn);
router.use('/appointments', _appointments.default);
router.use('/insurances', _insurances.default);
var _default = router;
exports.default = _default;