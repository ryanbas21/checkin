'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _index = require('../src/store/index');

var _index2 = _interopRequireDefault(_index);

var _head = require('../src/components/head/head');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Index = function Index() {
  return _react2.default.createElement('div', null, 'Welcome to next.js');
};

exports.default = (0, _nextReduxWrapper2.default)(_index2.default)(Index);