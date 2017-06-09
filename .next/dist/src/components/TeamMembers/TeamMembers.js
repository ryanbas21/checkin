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

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _user = require('react-icons/lib/fa/user');

var _user2 = _interopRequireDefault(_user);

var _toggleOff = require('react-icons/lib/fa/toggle-off');

var _toggleOff2 = _interopRequireDefault(_toggleOff);

var _toggleOn = require('react-icons/lib/fa/toggle-on');

var _toggleOn2 = _interopRequireDefault(_toggleOn);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = {
  toggle: {
    top: 0,
    right: 0,
    zIndex: 10000,
    thumbOff: {
      backgroundColor: '#ffcccc'
    },
    trackOff: {
      backgroundColor: '#ff9d9d'
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d'
    }
  }
};
var Names = ['Ryan', 'Eric', 'John', 'Mike', 'George', 'Casey', 'Greg'];

var TeamMembers = function (_Component) {
  (0, _inherits3.default)(TeamMembers, _Component);

  function TeamMembers(props) {
    (0, _classCallCheck3.default)(this, TeamMembers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TeamMembers.__proto__ || (0, _getPrototypeOf2.default)(TeamMembers)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.state = { open: false };
    return _this;
  }

  (0, _createClass3.default)(TeamMembers, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: { float: 'right' } }, _react2.default.createElement(_Toggle2.default, { style: styles.toggle, onToggle: this.handleToggle, icon: _toggleOn2.default, x: true }), _react2.default.createElement(_Drawer2.default, { openSecondary: true, containerStyle: { marginTop: 65 }, open: this.state.open, docked: true }, _react2.default.createElement(_MenuItem2.default, { style: { textAlign: 'center' } }, 'Members'), Names.map(function (name) {
        return _react2.default.createElement(_MenuItem2.default, { key: name, style: { paddingLeft: 10 } }, _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_user2.default, null), style: { margin: 5 } }), name);
      })));
    }
  }]);
  return TeamMembers;
}(_react.Component);

exports.default = TeamMembers;

TeamMembers.defaultProps = {
  photoURL: _react2.default.createElement(_FontIcon2.default, { className: 'material-icons' })
};