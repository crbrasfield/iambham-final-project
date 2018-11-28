"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;
exports.rows = rows;
exports.empty = empty;
exports.executeQuery = executeQuery;
exports.generatePlaceholders = generatePlaceholders;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pool = _mysql.default.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'exampleUser',
  password: 'password',
  database: 'InClassExample'
});

function executeQuery(_x) {
  return _executeQuery.apply(this, arguments);
}

function _executeQuery() {
  _executeQuery = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(sql) {
    var args,
        connection,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            args = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
            _context.next = 3;
            return getConnection();

          case 3:
            connection = _context.sent;
            return _context.abrupt("return", sendQueryToDB(connection, sql, args));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _executeQuery.apply(this, arguments);
}

function callProcedure(procedureName) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var placeholders = generatePlaceholders(args);
  var callString = "CALL ".concat(procedureName, "(").concat(placeholders, ");"); // CALL GetChirps();, or CALL InsertChirp(?,?,?);

  return executeQuery(callString, args);
}

function rows(_x2) {
  return _rows.apply(this, arguments);
}

function _rows() {
  _rows = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(procedureName) {
    var args,
        resultsets,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            args = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];
            _context2.next = 3;
            return callProcedure(procedureName, args);

          case 3:
            resultsets = _context2.sent;
            return _context2.abrupt("return", resultsets[0]);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _rows.apply(this, arguments);
}

function row(_x3) {
  return _row.apply(this, arguments);
}

function _row() {
  _row = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(procedureName) {
    var args,
        resultsets,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            args = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : [];
            _context3.next = 3;
            return callProcedure(procedureName, args);

          case 3:
            resultsets = _context3.sent;
            return _context3.abrupt("return", resultsets[0][0]);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _row.apply(this, arguments);
}

function empty(_x4) {
  return _empty.apply(this, arguments);
}

function _empty() {
  _empty = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(procedureName) {
    var args,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            args = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
            _context4.next = 3;
            return callProcedure(procedureName, args);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _empty.apply(this, arguments);
}

function generatePlaceholders() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholders = '';

  if (args.length > 0) {
    for (var i = 0; i < args.length; i++) {
      if (i === args.length - 1) {
        // if we are on the last argument in the array
        placeholders += '?';
      } else {
        placeholders += '?,';
      }
    }
  }

  return placeholders;
}

function getConnection() {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
}

function sendQueryToDB(connection, sql) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return new Promise(function (resolve, reject) {
    connection.query(sql, args, function (err, result) {
      connection.release();

      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}