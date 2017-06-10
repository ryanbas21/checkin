'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  marginRight: 20
};

var AddButton = function AddButton(props) {
  return _react2.default.createElement(_FloatingActionButton2.default, { secondary: true, onTouchTap: props.action, style: style }, _react2.default.createElement(_add2.default, null));
};

exports.default = AddButton;

AddButton.propTypes = {
  action: _propTypes2.default.func.isRequired
};