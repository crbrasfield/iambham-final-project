"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = require("./config/db");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Table =
/*#__PURE__*/
function () {
  function Table(tableName) {
    _classCallCheck(this, Table);

    if (!tableName) {
      throw new TypeError('You must pass a MySQL table name into the Table object constructor.');
    }

    this.tableName = tableName;
  }

  _createClass(Table, [{
    key: "getOne",
    value: function () {
      var _getOne = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id) {
        var sql, results;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sql = "SELECT * FROM ".concat(this.tableName, " WHERE id = ").concat(id, ";");
                _context.next = 3;
                return (0, _db.executeQuery)(sql, [id]);

              case 3:
                results = _context.sent;
                return _context.abrupt("return", results[0]);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getOne(_x) {
        return _getOne.apply(this, arguments);
      };
    }()
  }, {
    key: "getAll",
    value: function getAll() {
      var sql = "SELECT * FROM ".concat(this.tableName);
      return (0, _db.executeQuery)(sql);
    }
  }, {
    key: "find",
    value: function find(query) {
      var columns = Object.keys(query);
      var values = Object.values(query);
      var conditions = columns.map(function (columnName) {
        return "".concat(columnName, " LIKE ?");
      });
      var sql = "SELECT * FROM ".concat(this.tableName, " WHERE ").concat(conditions.join(' AND '), ";");
      return (0, _db.executeQuery)(sql, values);
    }
  }, {
    key: "insert",
    value: function () {
      var _insert = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(row) {
        var columns, values, placeholderString, sql, results;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                columns = Object.keys(row);
                values = Object.values(row);
                placeholderString = (0, _db.generatePlaceholders)(values);
                sql = "INSERT INTO ".concat(this.tableName, " (").concat(columns.join(','), ") VALUES (").concat(placeholderString, ");");
                _context2.next = 6;
                return (0, _db.executeQuery)(sql, values);

              case 6:
                results = _context2.sent;
                return _context2.abrupt("return", {
                  id: results.insertId
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function insert(_x2) {
        return _insert.apply(this, arguments);
      };
    }()
  }, {
    key: "update",
    value: function update(id, row) {
      var columns = Object.keys(row);
      var values = Object.values(row);
      var updates = columns.map(function (columnName) {
        return "".concat(columnName, " = ?");
      });
      var sql = "UPDATE ".concat(this.tableName, " SET ").concat(updates.join(','), " WHERE id = ").concat(id, ";");
      return (0, _db.executeQuery)(sql, values);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var sql = "DELETE FROM ".concat(this.tableName, " WHERE id = ").concat(id);
      return (0, _db.executeQuery)(sql);
    }
  }]);

  return Table;
}();

var _default = Table;
exports.default = _default;