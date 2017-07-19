'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUi = require('material-ui');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function handleTouchTap() {
  console.log('onTouchTap triggered on the title component');
}

var styles = {
  title: {
    cursor: 'pointer'
  },
  nav: {
    position: 'fixed',
    top: 0,
    zIndex: 10000,
    width: '100%',
    left: 0
  }
};

var Navbar = function Navbar(props) {
  return _react2.default.createElement(_AppBar2.default, {
    isLoggedIn: props.isLoggedIn,
    style: styles.nav,
    showMenuIconButton: false,
    title: _react2.default.createElement('span', { style: styles.title }, props.teamName + ' Scrum Board'),
    onTitleTouchTap: handleTouchTap,
    iconElementLeft: _react2.default.createElement(_IconButton2.default, null, _react2.default.createElement(_close2.default, null)),
    iconElementRight: _react2.default.createElement(_FlatButton2.default, { label: 'Sign Out' })
  });
};

Navbar.defaultProps = {
  teamName: 'Unnamed Team',
  isLoggedIn: false
};
Navbar.propTypes = {
  teamName: _propTypes2.default.string,
  isLoggedIn: _propTypes2.default.bool
};
exports.default = Navbar;