'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = _callee;

var _effects = require('redux-saga/effects');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = [placeholder, _callee].map(_regenerator2.default.mark);

function placeholder() {
  return _regenerator2.default.wrap(function placeholder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'placeholder';

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(placeholder)]);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}