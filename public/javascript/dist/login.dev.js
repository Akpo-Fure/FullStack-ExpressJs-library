"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _alerts = require("./alerts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
var login = function login(Email, Password) {
  var res;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            method: 'POST',
            url: 'http://127.0.0.1:3000/authors/login',
            data: {
              Email: Email,
              Password: Password
            }
          }));

        case 3:
          res = _context.sent;

          if (res.statusText === 'OK') {
            (0, _alerts.showAlert)('success', 'Logged in successfully');
            window.setTimeout(function () {
              location.assign('/');
            }, 1500);
          }

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)('error', _context.t0.response.data.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.login = login;

var logout = function logout() {
  var res;
  return regeneratorRuntime.async(function logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            method: 'GET',
            url: 'http://127.0.0.1:3000/authors/logout'
          }));

        case 3:
          res = _context2.sent;

          if (res.statusText === 'OK') {
            (0, _alerts.showAlert)('success', 'Logged out successfully');
            window.setTimeout(function () {
              location.reload(true).assign('/');
            }, 1500);
          }

          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          (0, _alerts.showAlert)('error', 'Failed to log out! Try again.');

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.logout = logout;