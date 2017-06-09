webpackHotUpdate(5,{

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(781);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = __webpack_require__(689);

var _Paper = __webpack_require__(692);

var _Paper2 = _interopRequireDefault(_Paper);

var _Subheader = __webpack_require__(695);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = __webpack_require__(682);

var _Divider2 = _interopRequireDefault(_Divider);

var _chatBubble = __webpack_require__(912);

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _MobileTearSheet = __webpack_require__(723);

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

var _CheckedInDisplay = __webpack_require__(954);

var _CheckedInDisplay2 = _interopRequireDefault(_CheckedInDisplay);

var _NoActivityMessage = __webpack_require__(1072);

var _NoActivityMessage2 = _interopRequireDefault(_NoActivityMessage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  outer: {
    width: '100%',
    height: 'auto',
    margin: '0 auto',
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

var TeamStatus = function TeamStatus(props) {
  return _react2.default.createElement('div', { style: style.outer }, props.status.length ? _react2.default.createElement(_Paper2.default, { style: style.paper }, _react2.default.createElement(_List.List, { style: style.list }, _react2.default.createElement(_Subheader2.default, null, 'Activity'), props.status.map(function (checkin) {
    return _react2.default.createElement(_CheckedInDisplay2.default, { key: checkin.id, checkin: checkin });
  }))) : _react2.default.createElement(_NoActivityMessage2.default, { style: style.paper }));
};
exports.default = TeamStatus;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/TeamStatus.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/TeamStatus.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zOTA4MjlhZjkxYjdiMDk0YmQ1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9UZWFtU3RhdHVzLmpzPzIwNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXZhdGFyJztcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xuaW1wb3J0IFN1YmhlYWRlciBmcm9tICdtYXRlcmlhbC11aS9TdWJoZWFkZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcic7XG5pbXBvcnQgQ29tbXVuaWNhdGlvbkNoYXRCdWJibGUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbW11bmljYXRpb24vY2hhdC1idWJibGUnO1xuaW1wb3J0IE1vYmlsZVRlYXJTaGVldCBmcm9tICcuLi9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0JztcbmltcG9ydCBDaGVja2VkSW5EaXNwbGF5IGZyb20gJy4vQ2hlY2tlZEluRGlzcGxheSc7XG5pbXBvcnQgTm9BY3Rpdml0eU1lc3NhZ2UgZnJvbSAnLi9Ob0FjdGl2aXR5TWVzc2FnZSc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBvdXRlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICc1MCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgbGlzdDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHdpZHRoOiAzMDAsXG4gICAgbWFyZ2luOiA1LFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfVxufTtcblxuY29uc3QgVGVhbVN0YXR1cyA9IHByb3BzID0+XG4gIDxkaXYgc3R5bGU9e3N0eWxlLm91dGVyfT5cbiAgICB7cHJvcHMuc3RhdHVzLmxlbmd0aFxuICAgICAgPyA8UGFwZXIgc3R5bGU9e3N0eWxlLnBhcGVyfT5cbiAgICAgICAgPExpc3Qgc3R5bGU9e3N0eWxlLmxpc3R9PlxuICAgICAgICAgIDxTdWJoZWFkZXI+QWN0aXZpdHk8L1N1YmhlYWRlcj5cbiAgICAgICAgICB7cHJvcHMuc3RhdHVzLm1hcChjaGVja2luID0+IDxDaGVja2VkSW5EaXNwbGF5IGtleT17Y2hlY2tpbi5pZH0gY2hlY2tpbj17Y2hlY2tpbn0gLz4pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L1BhcGVyPlxuICAgICAgOiA8Tm9BY3Rpdml0eU1lc3NhZ2Ugc3R5bGU9e3N0eWxlLnBhcGVyfSAvPn1cbiAgPC9kaXY+O1xuZXhwb3J0IGRlZmF1bHQgVGVhbVN0YXR1cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvVGVhbVN0YXR1cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFmQTtBQUNBO0FBcUJBO0FBQ0E7QUFLQTtBQUFBO0FBTkE7QUFXQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9