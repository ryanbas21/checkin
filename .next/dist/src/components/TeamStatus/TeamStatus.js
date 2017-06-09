'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = require('material-ui/List');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _chatBubble = require('material-ui/svg-icons/communication/chat-bubble');

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _MobileTearSheet = require('../MobileTearSheet/MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

var _CheckedInDisplay = require('./CheckedInDisplay');

var _CheckedInDisplay2 = _interopRequireDefault(_CheckedInDisplay);

var _NoActivityMessage = require('./NoActivityMessage');

var _NoActivityMessage2 = _interopRequireDefault(_NoActivityMessage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  paper: {
    marginTop: 120,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flexDirection: 'column',
    width: 300,
    margin: 5,
    textAlign: 'center'
  }
};

var TeamStatus = function TeamStatus(props) {
  return props.status.length ? _react2.default.createElement(_Paper2.default, { style: style.paper }, _react2.default.createElement(_List.List, { style: style.list }, _react2.default.createElement(_Subheader2.default, null, 'Activity'), props.status.map(function (checkin) {
    return _react2.default.createElement(_CheckedInDisplay2.default, { key: checkin.id, checkin: checkin });
  }))) : _react2.default.createElement(_NoActivityMessage2.default, { style: style.paper });
};
exports.default = TeamStatus;