webpackHotUpdate(5,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kNDRiZGFkZDMyNDlhM2VhMzdhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NjJiNGEyYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkL2hlYWQuanM/NjJiNGEyYyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ZpcmViYXNlLmpzPzYyYjRhMmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzPzYyYjRhMmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25maWcuc2VjcmV0PzYyYjRhMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zcmMvc3RvcmUvaW5kZXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaGVhZC9oZWFkJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiA8ZGl2PldlbGNvbWUgdG8gbmV4dC5qczwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShJbmRleCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+QSBTY3J1bSBNYW5hZ2VyPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaGVhZC9oZWFkLmpzIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuc2VjcmV0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICB0cnkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gU2tpcCB0aGUgXCJhbHJlYWR5IGV4aXN0c1wiIG1lc3NhZ2Ugd2hpY2ggaXMgbm90IGFuIGVycm9yIHdoZW4gaG90LXJlbG9hZGluZ1xuICAgIGlmICghL2FscmVhZHkgZXhpc3RzLy50ZXN0KGVyci5tZXNzYWdlKSkge1xuICAgICAgY29uc29sZS5sb2coYEZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yID0+ICR7ZXJyfWApO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZmlyZWJhc2UuanMiLCJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcy9yb290JztcbmltcG9ydCBjb25maWd1cmVGaXJlYmFzZSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7fSk7XG5cbmNvbnN0IHNhZ2FzID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxuY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlKFxuICBhcHBseU1pZGRsZXdhcmUoc2FnYXMpLFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gJiYgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKClcbiAgICA6IGYgPT4gZlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG4gIHNhZ2FzLnJ1bihyb290U2FnYSk7XG4gIGNvbmZpZ3VyZUZpcmViYXNlKCk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURnMnB1SmJ2ZHJxdF9FdW9FVEZ5WDJ3bkJHa3VZdW9Fd1wiLFxuICAgIGF1dGhEb21haW46IFwic2NydW0tYm9hcmQtNGQyYzUuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zY3J1bS1ib2FyZC00ZDJjNS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJzY3J1bS1ib2FyZC00ZDJjNVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwic2NydW0tYm9hcmQtNGQyYzUuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMTgwNzM1ODMzMThcIlxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGliL2NvbmZpZy5zZWNyZXRcbi8vIG1vZHVsZSBpZCA9IDYzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7OztBQUxBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9