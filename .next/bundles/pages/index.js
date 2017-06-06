
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"next-redux-wrapper\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _index = __webpack_require__(619);

var _index2 = _interopRequireDefault(_index);

var _head = __webpack_require__(616);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Index = function Index() {
  return _react2.default.createElement('div', null, 'Welcome to next.js');
};

exports.default = (0, _nextReduxWrapper2.default)(_index2.default)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(538);


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'A Scrum Manager'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }));
};

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/head/head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/head/head.js"); } } })();

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(584);

var _firebase2 = _interopRequireDefault(_firebase);

var _config = __webpack_require__(633);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  try {
    _firebase2.default.initializeApp(_config2.default);
  } catch (err) {
    // Skip the "already exists" message which is not an error when hot-reloading
    if (!/already exists/.test(err.message)) {
      console.log('Firebase initialization error => ' + err);
    }
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/lib/firebase.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/lib/firebase.js"); } } })();

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/sagas/root.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/sagas/root.js"); } } })();

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(522);

var _reduxSaga = __webpack_require__(622);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxDevtoolsExtension = __webpack_require__(620);

var _redux = __webpack_require__(578);

var _root = __webpack_require__(618);

var _root2 = _interopRequireDefault(_root);

var _firebase = __webpack_require__(617);

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var rootReducer = (0, _redux.combineReducers)({});

var sagas = (0, _reduxSaga2.default)();

var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(sagas), typeof window !== 'undefined' && "development" !== 'production' ? window.devToolsExtension && window.devToolsExtension() : function (f) {
  return f;
});

exports.default = function (initialState) {
  var store = (0, _redux.createStore)(rootReducer, initialState, enhancer);
  sagas.run(_root2.default);
  (0, _firebase2.default)();
  return store;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/store/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/store/index.js"); } } })();

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    apiKey: "AIzaSyDg2puJbvdrqt_EuoETFyX2wnBGkuYuoEw",
    authDomain: "scrum-board-4d2c5.firebaseapp.com",
    databaseURL: "https://scrum-board-4d2c5.firebaseio.com",
    projectId: "scrum-board-4d2c5",
    storageBucket: "scrum-board-4d2c5.appspot.com",
    messagingSenderId: "318073583318"
  });


/***/ })

},[539]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzgzZWRhMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZC9oZWFkLmpzPzgzZWRhMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maXJlYmFzZS5qcz84M2VkYTEyIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcz84M2VkYTEyIiwid2VicGFjazovLy8uL3NyYy9saWIvY29uZmlnLnNlY3JldD84M2VkYTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3JjL3N0b3JlL2luZGV4JztcbmltcG9ydCBIZWFkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2hlYWQvaGVhZCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gPGRpdj5XZWxjb21lIHRvIG5leHQuanM8L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkEgU2NydW0gTWFuYWdlcjwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlYWQvaGVhZC5qcyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLnNlY3JldCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFNraXAgdGhlIFwiYWxyZWFkeSBleGlzdHNcIiBtZXNzYWdlIHdoaWNoIGlzIG5vdCBhbiBlcnJvciB3aGVuIGhvdC1yZWxvYWRpbmdcbiAgICBpZiAoIS9hbHJlYWR5IGV4aXN0cy8udGVzdChlcnIubWVzc2FnZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBGaXJlYmFzZSBpbml0aWFsaXphdGlvbiBlcnJvciA9PiAke2Vycn1gKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2ZpcmViYXNlLmpzIiwiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMvcm9vdCc7XG5pbXBvcnQgY29uZmlndXJlRmlyZWJhc2UgZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe30pO1xuXG5jb25zdCBzYWdhcyA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FzKSxcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICYmIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpXG4gICAgOiBmID0+IGZcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuICBzYWdhcy5ydW4ocm9vdFNhZ2EpO1xuICBjb25maWd1cmVGaXJlYmFzZSgpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFwaUtleTogXCJBSXphU3lEZzJwdUpidmRycXRfRXVvRVRGeVgyd25CR2t1WXVvRXdcIixcbiAgICBhdXRoRG9tYWluOiBcInNjcnVtLWJvYXJkLTRkMmM1LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc2NydW0tYm9hcmQtNGQyYzUuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwic2NydW0tYm9hcmQtNGQyYzVcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcInNjcnVtLWJvYXJkLTRkMmM1LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzE4MDczNTgzMzE4XCJcbiAgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xpYi9jb25maWcuc2VjcmV0XG4vLyBtb2R1bGUgaWQgPSA2MzNcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTs7O0FBTEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        