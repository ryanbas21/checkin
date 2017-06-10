'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

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
  outer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    width: '50%',
    display: 'flex',
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

var TeamStatus = function (_Component) {
  (0, _inherits3.default)(TeamStatus, _Component);

  function TeamStatus() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TeamStatus);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TeamStatus.__proto__ || (0, _getPrototypeOf2.default)(TeamStatus)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleOpen = function () {
      _this.setState({ open: true });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TeamStatus, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var actions = [_react2.default.createElement(_FlatButton2.default, { label: 'Close', primary: true, keyboardFocused: true, onTouchTap: this.handleClose })];
      return _react2.default.createElement('div', { style: style.outer }, this.props.status.length ? _react2.default.createElement(_Paper2.default, { style: style.paper }, _react2.default.createElement(_List.List, { style: style.list }, _react2.default.createElement(_Subheader2.default, null, 'Activity'), this.props.status.map(function (checkin) {
        return _react2.default.createElement('div', null, _react2.default.createElement(_CheckedInDisplay2.default, {
          handleOpen: _this2.handleOpen,
          key: checkin.id,
          checkin: checkin
        }), _react2.default.createElement(_Dialog2.default, {
          title: checkin.today,
          actions: actions,
          modal: false,
          open: _this2.state.open,
          onRequestClose: _this2.handleClose
        }, _react2.default.createElement('p', null, 'recent work : ', checkin.recentWork), _react2.default.createElement('p', null, 'Todays work : ', checkin.today), _react2.default.createElement('p', null, 'blockers : ', checkin.questions)));
      }))) : _react2.default.createElement(_NoActivityMessage2.default, { style: style.paper }));
    }
  }]);
  return TeamStatus;
}(_react.Component);

exports.default = TeamStatus;