'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _groupAdd = require('react-icons/lib/md/group-add');

var _groupAdd2 = _interopRequireDefault(_groupAdd);

var _groupOutline = require('react-icons/lib/ti/group-outline');

var _groupOutline2 = _interopRequireDefault(_groupOutline);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _List = require('material-ui/List');

var _MobileTearSheet = require('../MobileTearSheet/MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  inline: {
    display: 'inline-block'
  },
  icon: {
    margin: 20,
    width: 100,
    textAlign: 'center',
    display: 'inline-block'
  },
  a: {
    textDecoration: 'none'
  }
};
var dividerStyle = { marginTop: 20, marginBottom: 20 };

var CreateOrJoin = function CreateOrJoin() {
  return _react2.default.createElement(_MobileTearSheet2.default, null, _react2.default.createElement('div', { className: style.inline }, _react2.default.createElement(_link2.default, { href: '/create' }, _react2.default.createElement('a', { style: style.a }, _react2.default.createElement(_groupAdd2.default, { style: style.icon }), 'Add Team'))), _react2.default.createElement(_Divider2.default, { style: dividerStyle }), _react2.default.createElement('div', { className: style.inline }, _react2.default.createElement(_link2.default, { href: '/join' }, _react2.default.createElement('a', { style: style.a }, _react2.default.createElement(_groupOutline2.default, { style: style.icon }), 'Join Existing Team'))));
};

exports.default = CreateOrJoin;