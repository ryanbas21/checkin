'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _navbar = require('../src/components/navbar/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _container = require('../src/components/checkin/container');

var _container2 = _interopRequireDefault(_container);

var _TeamMembers = require('../src/components/TeamMembers/TeamMembers');

var _TeamMembers2 = _interopRequireDefault(_TeamMembers);

var _container3 = require('../src/components/TeamStatus/container');

var _container4 = _interopRequireDefault(_container3);

var _index = require('../src/store/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../src/components/MaterialHOC/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

try {
  (0, _reactTapEventPlugin2.default)();
} catch (e) {}

var muiTheme = (0, _getMuiTheme2.default)({
  userAgent: false
});
var Board = function Board() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_TeamMembers2.default, null), _react2.default.createElement(_navbar2.default, { team: "Ryan's Team" }), _react2.default.createElement(_container4.default, null), _react2.default.createElement(_container2.default, null));
};

exports.default = (0, _index4.default)(Board);