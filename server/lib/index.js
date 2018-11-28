"use strict";

require("@babel/polyfill");

var _path = require("path");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _routing = _interopRequireDefault(require("./middleware/routing.mw"));

var _passport = _interopRequireDefault(require("./config/passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_PATH = (0, _path.join)(__dirname, '../../client');
var app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
app.use(_express.default.static(CLIENT_PATH));
app.use(_express.default.json());
(0, _passport.default)(app);
app.use('/api', _routes.default);
app.use(_routing.default);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});