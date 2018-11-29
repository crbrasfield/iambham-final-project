"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
// Remember to set the NODE_ENV environment property to "production" (no quotes)
// in the settings of your deployed app (AWS, Heroku, etc)
var env = process.env.NODE_ENV || 'development'; // Depending on the whether we are in development or production (deployed),
// import either env/development.js or env/production.js

var config = require("./env/".concat(env)).cfg;

exports.config = config;