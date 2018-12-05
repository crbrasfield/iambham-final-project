"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _insurances = _interopRequireDefault(require("./api/insurances"));

var _auth = _interopRequireDefault(require("./auth"));

var _index = _interopRequireDefault(require("./api/patients/index"));

var _index2 = _interopRequireDefault(require("./api/doctors/index"));

var _appointments = _interopRequireDefault(require("./api/appointments"));

var _createUser = _interopRequireDefault(require("./api/createUser"));

var _auth2 = require("../middleware/auth.mw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/auth', _auth.default);
router.use('/new', _createUser.default);
router.route('*').get(_auth2.tokenMiddleware, _auth2.isLoggedIn).post(_auth2.tokenMiddleware, _auth2.isLoggedIn).put(_auth2.tokenMiddleware, _auth2.isLoggedIn).delete(_auth2.tokenMiddleware, _auth2.isLoggedIn);
router.use('/doctor', _index2.default);
router.use('/patient', _index.default);
router.use('/insurances', _insurances.default);
router.use('/appointments', _appointments.default);
var _default = router;
exports.default = _default;