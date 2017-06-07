
          window.__NEXT_REGISTER_PAGE('/teams', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'A Scrum Manager'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }));
};

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(207);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/head/head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/head/head.js"); } } })();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  apiKey: 'AIzaSyDg2puJbvdrqt_EuoETFyX2wnBGkuYuoEw',
  authDomain: 'scrum-board-4d2c5.firebaseapp.com',
  databaseURL: 'https://scrum-board-4d2c5.firebaseio.com',
  projectId: 'scrum-board-4d2c5',
  storageBucket: 'scrum-board-4d2c5.appspot.com',
  messagingSenderId: '318073583318'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/lib/config.secret.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/lib/config.secret.js"); } } })();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(636);

var _firebase2 = _interopRequireDefault(_firebase);

var _config = __webpack_require__(672);

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

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(53);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = _callee;

var _effects = __webpack_require__(623);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = [placeholder, _callee].map(_regenerator2.default.mark);

function placeholder() {
  return _regenerator2.default.wrap(function placeholder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'placeholder';

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(placeholder)]);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/sagas/root.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/sagas/root.js"); } } })();

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(566);

var _reduxSaga = __webpack_require__(687);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxDevtoolsExtension = __webpack_require__(686);

var _redux = __webpack_require__(606);

var _root = __webpack_require__(674);

var _root2 = _interopRequireDefault(_root);

var _firebase = __webpack_require__(673);

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

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(670);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _index = __webpack_require__(675);

var _index2 = _interopRequireDefault(_index);

var _head = __webpack_require__(671);

var _head2 = _interopRequireDefault(_head);

var _CreateOrJoin = __webpack_require__(927);

var _CreateOrJoin2 = _interopRequireDefault(_CreateOrJoin);

var _reactTapEventPlugin = __webpack_require__(750);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _getMuiTheme = __webpack_require__(204);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(439);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

try {
  (0, _reactTapEventPlugin2.default)();
} catch (e) {}
var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

var Teams = function Teams(props) {
  return _react2.default.createElement(_MuiThemeProvider2.default, { theme: muiTheme }, _react2.default.createElement(_CreateOrJoin2.default, null));
};

exports.default = Teams;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/pages/teams.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/pages/teams.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(89)
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
    })(module.exports.default || module.exports, "/teams")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(934);

var _link2 = _interopRequireDefault(_link);

var _groupAdd = __webpack_require__(928);

var _groupAdd2 = _interopRequireDefault(_groupAdd);

var _groupOutline = __webpack_require__(929);

var _groupOutline2 = _interopRequireDefault(_groupOutline);

var _FlatButton = __webpack_require__(761);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Paper = __webpack_require__(716);

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = __webpack_require__(798);

var _Divider2 = _interopRequireDefault(_Divider);

var _List = __webpack_require__(859);

var _MobileTearSheet = __webpack_require__(931);

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  inline: {
    display: 'inline-block'
  },
  icon: {
    margin: 20,
    width: 100,
    textAlign: 'center',
    display: 'inline-block'
  },
  a: {
    textDecoration: 'none'
  }
};
var dividerStyle = { marginTop: 20, marginBottom: 20 };

var CreateOrJoin = function CreateOrJoin() {
  return _react2.default.createElement(_MobileTearSheet2.default, null, _react2.default.createElement('div', { className: style.inline }, _react2.default.createElement(_link2.default, { href: '/create' }, _react2.default.createElement('a', { style: style.a }, _react2.default.createElement(_groupAdd2.default, { style: style.icon }), 'Add Team'))), _react2.default.createElement(_Divider2.default, { style: dividerStyle }), _react2.default.createElement('div', { className: style.inline }, _react2.default.createElement(_link2.default, { href: '/join' }, _react2.default.createElement('a', { style: style.a }, _react2.default.createElement(_groupOutline2.default, { style: style.icon }), 'Join Existing Team'))));
};

exports.default = CreateOrJoin;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateOrJoin/CreateOrJoin.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateOrJoin/CreateOrJoin.js"); } } })();

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(926);


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(24);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MobileTearSheet = function (_Component) {
  (0, _inherits3.default)(MobileTearSheet, _Component);

  function MobileTearSheet() {
    (0, _classCallCheck3.default)(this, MobileTearSheet);
    return (0, _possibleConstructorReturn3.default)(this, (MobileTearSheet.__proto__ || (0, _getPrototypeOf2.default)(MobileTearSheet)).apply(this, arguments));
  }

  (0, _createClass3.default)(MobileTearSheet, [{
    key: 'render',
    value: function render() {
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = {
        root: {
          marginBottom: 24,
          marginRight: 24,
          maxWidth: 360,
          width: '100%'
        },
        container: {
          border: 'solid 1px #d9d9d9',
          borderBottom: 'none',
          height: this.props.height,
          overflow: 'hidden'
        },
        bottomTear: {
          display: 'block',
          position: 'relative',
          marginTop: -10,
          maxWidth: 360
        }
      };

      return _react2.default.createElement('div', { style: prepareStyles(styles.root) }, _react2.default.createElement('div', { style: prepareStyles(styles.container) }, this.props.children), _react2.default.createElement('img', { style: prepareStyles(styles.bottomTear), src: '/static/bottomtear.svg' }));
    }
  }]);
  return MobileTearSheet;
}(_react.Component);

MobileTearSheet.propTypes = {
  children: _propTypes2.default.node,
  height: _propTypes2.default.number.isRequired
};
MobileTearSheet.defaultProps = {
  height: 500
};
MobileTearSheet.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = MobileTearSheet;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MobileTearSheet/MobileTearSheet.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MobileTearSheet/MobileTearSheet.js"); } } })();

/***/ })

},[930]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90ZWFtcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWQvaGVhZC5qcz8wMjg2YWQxIiwid2VicGFjazovLy8uL3NyYy9saWIvY29uZmlnLnNlY3JldC5qcz8wMjg2YWQxIiwid2VicGFjazovLy8uL3NyYy9saWIvZmlyZWJhc2UuanM/MDI4NmFkMSIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcm9vdC5qcz8wMjg2YWQxIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcz8wMjg2YWQxIiwid2VicGFjazovLy8uL3BhZ2VzL3RlYW1zLmpzPzAyODZhZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlT3JKb2luL0NyZWF0ZU9ySm9pbi5qcz8wMjg2YWQxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vYmlsZVRlYXJTaGVldC9Nb2JpbGVUZWFyU2hlZXQuanM/MDI4NmFkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkEgU2NydW0gTWFuYWdlcjwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlYWQvaGVhZC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpS2V5OiAnQUl6YVN5RGcycHVKYnZkcnF0X0V1b0VURnlYMnduQkdrdVl1b0V3JyxcbiAgYXV0aERvbWFpbjogJ3NjcnVtLWJvYXJkLTRkMmM1LmZpcmViYXNlYXBwLmNvbScsXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zY3J1bS1ib2FyZC00ZDJjNS5maXJlYmFzZWlvLmNvbScsXG4gIHByb2plY3RJZDogJ3NjcnVtLWJvYXJkLTRkMmM1JyxcbiAgc3RvcmFnZUJ1Y2tldDogJ3NjcnVtLWJvYXJkLTRkMmM1LmFwcHNwb3QuY29tJyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICczMTgwNzM1ODMzMTgnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9jb25maWcuc2VjcmV0LmpzIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuc2VjcmV0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICB0cnkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gU2tpcCB0aGUgXCJhbHJlYWR5IGV4aXN0c1wiIG1lc3NhZ2Ugd2hpY2ggaXMgbm90IGFuIGVycm9yIHdoZW4gaG90LXJlbG9hZGluZ1xuICAgIGlmICghL2FscmVhZHkgZXhpc3RzLy50ZXN0KGVyci5tZXNzYWdlKSkge1xuICAgICAgY29uc29sZS5sb2coYEZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yID0+ICR7ZXJyfWApO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZmlyZWJhc2UuanMiLCJpbXBvcnQgeyBmb3JrLCBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5mdW5jdGlvbiogcGxhY2Vob2xkZXIoKSB7XG4gIHlpZWxkICdwbGFjZWhvbGRlcic7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gIHlpZWxkIGFsbChbZm9yayhwbGFjZWhvbGRlcildKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYWdhcy9yb290LmpzIiwiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMvcm9vdCc7XG5pbXBvcnQgY29uZmlndXJlRmlyZWJhc2UgZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe30pO1xuXG5jb25zdCBzYWdhcyA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FzKSxcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICYmIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpXG4gICAgOiBmID0+IGZcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuICBzYWdhcy5ydW4ocm9vdFNhZ2EpO1xuICBjb25maWd1cmVGaXJlYmFzZSgpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zcmMvc3RvcmUvaW5kZXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaGVhZC9oZWFkJztcbmltcG9ydCBDcmVhdGVPckpvaW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlT3JKb2luL0NyZWF0ZU9ySm9pbic7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcblxudHJ5IHtcbiAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcbn0gY2F0Y2ggKGUpIHt9XG5jb25zdCBtdWlUaGVtZSA9IGdldE11aVRoZW1lKHsgdXNlckFnZW50OiBmYWxzZSB9KTtcblxuY29uc3QgVGVhbXMgPSBwcm9wcyA9PlxuICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17bXVpVGhlbWV9PlxuICAgIDxDcmVhdGVPckpvaW4gLz5cbiAgPC9NdWlUaGVtZVByb3ZpZGVyPjtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy90ZWFtcy5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFkZFRlYW1JY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9ncm91cC1hZGQnO1xuaW1wb3J0IEpvaW5UZWFtSWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvdGkvZ3JvdXAtb3V0bGluZSc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdCc7XG5pbXBvcnQgTW9iaWxlVGVhclNoZWV0IGZyb20gJy4uL01vYmlsZVRlYXJTaGVldC9Nb2JpbGVUZWFyU2hlZXQnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgaW5saW5lOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgfSxcbiAgaWNvbjoge1xuICAgIG1hcmdpbjogMjAsXG4gICAgd2lkdGg6IDEwMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gIH0sXG4gIGE6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH1cbn07XG5jb25zdCBkaXZpZGVyU3R5bGUgPSB7IG1hcmdpblRvcDogMjAsIG1hcmdpbkJvdHRvbTogMjAgfTtcblxuY29uc3QgQ3JlYXRlT3JKb2luID0gKCkgPT5cbiAgPE1vYmlsZVRlYXJTaGVldD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5saW5lfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlXCI+XG4gICAgICAgIDxhIHN0eWxlPXtzdHlsZS5hfT48QWRkVGVhbUljb24gc3R5bGU9e3N0eWxlLmljb259IC8+QWRkIFRlYW08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPERpdmlkZXIgc3R5bGU9e2RpdmlkZXJTdHlsZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5saW5lfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvam9pblwiPlxuICAgICAgICA8YSBzdHlsZT17c3R5bGUuYX0+PEpvaW5UZWFtSWNvbiBzdHlsZT17c3R5bGUuaWNvbn0gLz5Kb2luIEV4aXN0aW5nIFRlYW08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvTW9iaWxlVGVhclNoZWV0PjtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlT3JKb2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlT3JKb2luL0NyZWF0ZU9ySm9pbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBNb2JpbGVUZWFyU2hlZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA1MDBcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG11aVRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmVwYXJlU3R5bGVzIH0gPSB0aGlzLmNvbnRleHQubXVpVGhlbWU7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAyNCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggI2Q5ZDlkOScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJ25vbmUnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0sXG4gICAgICBib3R0b21UZWFyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBtYXJnaW5Ub3A6IC0xMCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MFxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17cHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtwcmVwYXJlU3R5bGVzKHN0eWxlcy5jb250YWluZXIpfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3R5bGU9e3ByZXBhcmVTdHlsZXMoc3R5bGVzLmJvdHRvbVRlYXIpfSBzcmM9XCIvc3RhdGljL2JvdHRvbXRlYXIuc3ZnXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlVGVhclNoZWV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTW9iaWxlVGVhclNoZWV0L01vYmlsZVRlYXJTaGVldC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUVBOzs7QUFMQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBSUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU1BO0FBQUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQWNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQUE7QUFHQTtBQUxBOztBQU9BO0FBQ0E7QUFBQTtBQUtBO0FBUEE7QUFiQTtBQUNBO0FBb0JBOzs7Ozs7QUF2Q0E7QUFFQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQUE7QUFQQTtBQVdBO0FBQUE7QUFzQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        