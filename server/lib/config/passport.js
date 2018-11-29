"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _passportHttpBearer = require("passport-http-bearer");

var _table = _interopRequireDefault(require("../table"));

var _tokens = require("../utils/tokens");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var usersTable = new _table.default('users');
var tokensTable = new _table.default('tokens');

function configurePassport(app) {
  _passport.default.use(new _passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(email, password, done) {
      var _ref2, _ref3, user, idObj, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return usersTable.find({
                email: email
              });

            case 3:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 1);
              user = _ref3[0];

              if (!(user && user.password && user.password === password)) {
                _context.next = 14;
                break;
              }

              _context.next = 9;
              return tokensTable.insert({
                userid: user.id
              });

            case 9:
              idObj = _context.sent;
              token = (0, _tokens.encode)(idObj.id);
              return _context.abrupt("return", done(null, {
                token: token
              }));

            case 14:
              return _context.abrupt("return", done(null, false, {
                message: 'Invalid credentials'
              }));

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", done(_context.t0));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 17]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()));

  _passport.default.use(new _passportHttpBearer.Strategy(
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(token, done) {
      var tokenId, tokenRecord, user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              tokenId = (0, _tokens.decode)(token);

              if (tokenId) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", done(null, false, {
                message: 'Invalid token'
              }));

            case 3:
              _context2.prev = 3;
              _context2.next = 6;
              return tokensTable.getOne(tokenId);

            case 6:
              tokenRecord = _context2.sent;
              _context2.next = 9;
              return usersTable.getOne(tokenRecord.userid);

            case 9:
              user = _context2.sent;

              if (!user) {
                _context2.next = 15;
                break;
              }

              delete user.password;
              return _context2.abrupt("return", done(null, user));

            case 15:
              return _context2.abrupt("return", done(null, false, {
                message: 'Invalid token'
              }));

            case 16:
              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](3);
              return _context2.abrupt("return", done(_context2.t0));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 18]]);
    }));

    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }()));

  app.use(_passport.default.initialize());
}

var _default = configurePassport;
exports.default = _default;