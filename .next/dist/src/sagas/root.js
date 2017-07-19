'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = _callee;

var _effects = require('redux-saga/effects');

var _signin = require('../components/login/signin.saga');

var _signin2 = _interopRequireDefault(_signin);

var _createTeam = require('../components/CreateTeam/createTeam.saga');

var _createTeam2 = _interopRequireDefault(_createTeam);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = [_callee].map(_regenerator2.default.mark);

function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(_signin2.default), (0, _effects.fork)(_createTeam2.default)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}