"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cfg = void 0;
var cfg = {
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  STRIPE_SK: process.env.STRIPE_SK,
  mysql: {
    connectionLimit: 10,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_SCHEMA
  }
};
exports.cfg = cfg;