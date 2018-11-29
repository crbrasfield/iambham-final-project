"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenMiddleware = tokenMiddleware;
exports.isLoggedIn = isLoggedIn;

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tokenMiddleware(req, res, next) {
  _passport.default.authenticate('bearer', {
    session: false
  })(req, res, next);
}

function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}