'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AddButton = require('../AddButton/AddButton');

var _AddButton2 = _interopRequireDefault(_AddButton);

var _DatePicker = require('../DatePicker/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  marginRight: 20,
  checkIn: {
    position: 'absolute',
    bottom: 30,
    right: 0
  }
};

var CheckIn = function (_Component) {
  (0, _inherits3.default)(CheckIn, _Component);

  function CheckIn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CheckIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CheckIn.__proto__ || (0, _getPrototypeOf2.default)(CheckIn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false,
      checkIn: {
        date: (0, _moment2.default)().format('l')
      }
    }, _this.getDate = function (e, date) {
      var todaysDate = (0, _moment2.default)(date).format('l');
      _this.setState({
        checkIn: (0, _extends3.default)({}, _this.state.checkin, {
          date: todaysDate
        })
      });
    }, _this.getToday = function (e) {
      var todaysWork = e.target.value;
      _this.setState((0, _extends3.default)({}, _this.state, {
        checkIn: (0, _extends3.default)({}, _this.state.checkIn, {
          today: todaysWork
        })
      }));
    }, _this.getRecent = function (e) {
      var recentWork = e.target.value;
      _this.setState((0, _extends3.default)({}, _this.state, {
        checkIn: (0, _extends3.default)({}, _this.state.checkIn, {
          recentWork: recentWork
        })
      }));
    }, _this.getBlockers = function (e) {
      var blockers = e.target.value;
      _this.setState((0, _extends3.default)({}, _this.state, {
        checkIn: (0, _extends3.default)({}, _this.state.checkIn, {
          questions: blockers
        })
      }));
    }, _this.formatDate = function (date) {
      return (0, _moment2.default)(date).format('l');
    }, _this.submitForm = function (e) {
      _this.props.actions.addCheckIn(_this.state.checkIn);
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _this.handleOpen = function () {
      _this.setState({ open: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CheckIn, [{
    key: 'render',
    value: function render() {
      var actions = [_react2.default.createElement(_FlatButton2.default, { label: 'Cancel', primary: true, onTouchTap: this.handleClose }), _react2.default.createElement(_FlatButton2.default, { label: 'Submit', primary: true, onTouchTap: this.handleClose, onClick: this.submitForm })];
      return _react2.default.createElement('div', { style: style.checkIn }, _react2.default.createElement(_AddButton2.default, { action: this.handleOpen, label: 'Check In' }), _react2.default.createElement(_Dialog2.default, { title: 'Check In!', actions: actions, modal: true, open: this.state.open }, _react2.default.createElement(_DatePicker2.default, { formatDate: this.formatDate, onChange: this.getDate }), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_TextField2.default, {
        floatingLabelText: 'Yesterday/Recent Work',
        style: style,
        underlineShow: false,
        multiLine: true,
        onChange: this.getRecent
      }), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_TextField2.default, {
        onChange: this.getToday,
        floatingLabelText: 'Today',
        underlineShow: false,
        multiLine: true
      }), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_TextField2.default, {
        onChange: this.getBlockers,
        multiLine: true,
        floatingLabelText: 'Questions/Blockers',
        style: style,
        underlineShow: false
      }), _react2.default.createElement(_Divider2.default, null)));
    }
  }]);
  return CheckIn;
}(_react.Component);

exports.default = CheckIn;