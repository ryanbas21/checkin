webpackHotUpdate(5,{

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(41);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Drawer = __webpack_require__(804);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(784);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Toggle = __webpack_require__(901);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _FontIcon = __webpack_require__(684);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Avatar = __webpack_require__(781);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _user = __webpack_require__(937);

var _user2 = _interopRequireDefault(_user);

var _toggleOff = __webpack_require__(1073);

var _toggleOff2 = _interopRequireDefault(_toggleOff);

var _toggleOn = __webpack_require__(1074);

var _toggleOn2 = _interopRequireDefault(_toggleOn);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = {
  sideNav: {
    marginTop: 600
  },
  toggle: {
    block: {
      maxWidth: 250
    },
    toggle: {
      marginBottom: 16
    },
    thumbOff: {
      backgroundColor: '#ffcccc'
    },
    trackOff: {
      backgroundColor: '#ff9d9d'
    },
    thumbSwitched: {
      backgroundColor: 'red'
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d'
    },
    labelStyle: {
      color: 'red'
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
      return _react2.default.createElement('div', { style: { float: 'right' } }, _react2.default.createElement(_Toggle2.default, {
        defaultToggled: !!this.state.open,
        onToggle: this.handleToggle,
        icon: _toggleOn2.default,
        style: { position: 'relative', marginTop: '0%', left: '10%' }
      }), _react2.default.createElement(_Drawer2.default, { openSecondary: true, style: styles.sideNav, open: this.state.open, docked: true }, _react2.default.createElement('br', null), _react2.default.createElement(_MenuItem2.default, { style: { textAlign: 'center' } }, 'Members'), _react2.default.createElement(_Toggle2.default, {
        style: styles.toggle,
        onToggle: this.handleToggle,
        icon: _toggleOn2.default,
        defaultToggled: true
      }), Names.map(function (name) {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamMembers/TeamMembers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamMembers/TeamMembers.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xYjg0ZjQyMmY4NTg3MTJmYWQ2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbU1lbWJlcnMvVGVhbU1lbWJlcnMuanM/YTk2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnbWF0ZXJpYWwtdWkvVG9nZ2xlJztcbmltcG9ydCBGb250SWNvbiBmcm9tICdtYXRlcmlhbC11aS9Gb250SWNvbic7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ21hdGVyaWFsLXVpL0F2YXRhcic7XG5pbXBvcnQgVXNlckljb24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3VzZXInO1xuaW1wb3J0IFRvZ2dsZU9mZiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdG9nZ2xlLW9mZic7XG5pbXBvcnQgVG9nZ2xlT24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3RvZ2dsZS1vbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2lkZU5hdjoge1xuICAgIG1hcmdpblRvcDogNjAwXG4gIH0sXG4gIHRvZ2dsZToge1xuICAgIGJsb2NrOiB7XG4gICAgICBtYXhXaWR0aDogMjUwXG4gICAgfSxcbiAgICB0b2dnbGU6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMTZcbiAgICB9LFxuICAgIHRodW1iT2ZmOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZjY2NjJ1xuICAgIH0sXG4gICAgdHJhY2tPZmY6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZjlkOWQnXG4gICAgfSxcbiAgICB0aHVtYlN3aXRjaGVkOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnXG4gICAgfSxcbiAgICB0cmFja1N3aXRjaGVkOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmY5ZDlkJ1xuICAgIH0sXG4gICAgbGFiZWxTdHlsZToge1xuICAgICAgY29sb3I6ICdyZWQnXG4gICAgfVxuICB9XG59O1xuY29uc3QgTmFtZXMgPSBbJ1J5YW4nLCAnRXJpYycsICdKb2huJywgJ01pa2UnLCAnR2VvcmdlJywgJ0Nhc2V5JywgJ0dyZWcnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbU1lbWJlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxuICAgICAgICA8VG9nZ2xlXG4gICAgICAgICAgZGVmYXVsdFRvZ2dsZWQ9eyEhdGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICBpY29uPXtUb2dnbGVPbn1cbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luVG9wOiAnMCUnLCBsZWZ0OiAnMTAlJyB9fVxuICAgICAgICAvPlxuICAgICAgICA8RHJhd2VyIG9wZW5TZWNvbmRhcnkgc3R5bGU9e3N0eWxlcy5zaWRlTmF2fSBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IGRvY2tlZD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5NZW1iZXJzPC9NZW51SXRlbT5cbiAgICAgICAgICA8VG9nZ2xlXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIGljb249e1RvZ2dsZU9ufVxuICAgICAgICAgICAgZGVmYXVsdFRvZ2dsZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIHtOYW1lcy5tYXAobmFtZSA9PlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bmFtZX0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDEwIH19PlxuICAgICAgICAgICAgICA8QXZhdGFyIGljb249ezxVc2VySWNvbiAvPn0gc3R5bGU9e3sgbWFyZ2luOiA1IH19IC8+e25hbWV9XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVGVhbU1lbWJlcnMuZGVmYXVsdFByb3BzID0ge1xuICBwaG90b1VSTDogPEZvbnRJY29uIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgLz5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtTWVtYmVycy9UZWFtTWVtYmVycy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBSUE7QUFGQTs7O0FBTUE7QUFGQTs7QUFLQTtBQUZBOztBQUtBO0FBRkE7O0FBS0E7QUFGQTs7QUFLQTtBQUZBOztBQUtBO0FBRkE7O0FBR0E7QUFBQTtBQW5CQTtBQUpBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUhBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUhBO0FBU0E7QUFDQTtBQUVBO0FBRUE7QUFMQTtBQU1BO0FBT0E7Ozs7OztBQWxDQTtBQUNBO0FBbUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9