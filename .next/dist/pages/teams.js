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

var _CreateOrJoin = require('../src/components/CreateOrJoin/CreateOrJoin');

var _CreateOrJoin2 = _interopRequireDefault(_CreateOrJoin);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

try {
  (0, _reactTapEventPlugin2.default)();
} catch (e) {}
var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

var Teams = function Teams(props) {
  return _react2.default.createElement(_MuiThemeProvider2.default, { theme: muiTheme }, _react2.default.createElement(_CreateOrJoin2.default, null));
};

exports.default = Teams;