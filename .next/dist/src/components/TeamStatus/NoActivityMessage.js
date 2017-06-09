'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var NoActivityMessage = function NoActivityMessage(props) {
  return _react2.default.createElement(_Card.Card, { style: props.style }, _react2.default.createElement(_Card.CardHeader, { title: 'No Recent Activity', subtitle: 'Checkin your activity!' }));
};

var number = _propTypes2.default.number,
    string = _propTypes2.default.string;
// NoActivityMessage.propTypes = {
//   style: PropTypes.shape({
//     width: number.isRequired,
//     display: string.isRequired,
//     flexDirection: string.isRequired,
//     justifyContent: string.isRequired,
//     alignItems: string.isRequired
//   }).isRequired
// };

exports.default = NoActivityMessage;