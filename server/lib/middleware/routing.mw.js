"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

function stateRouting(req, res, next) {
  if (isServerAsset(req.url)) {
    next();
  } else {
    res.sendFile((0, _path.join)(__dirname, '../../../client/index.html'));
  }
}

function isServerAsset(path) {
  // ex: /images/tree.png, then pieces is ['', 'images', 'tree.png']
  var pieces = path.split('/');

  if (pieces.length === 0) {
    return false;
  } // ex: in the same example, last would be 'tree.png'


  var last = pieces[pieces.length - 1]; // Get the last piece after we've cut up the URL on the /
  // "If it's not the case that /api is NOT found OR it's not the case that /? is NOT found"
  // AKA: If /api or /? was found

  if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
    return true;
  } else if (last.indexOf('.') !== -1) {
    // "If it's not the case that '.' was not found in last"
    // AKA: If . was found
    return true; // must be a file extension e.g. tree.png
  } else {
    // In all other cases, this is NOT a server asset and must be a front-end asset
    // should be handled by Angular.
    return false;
  }
}

var _default = stateRouting;
exports.default = _default;