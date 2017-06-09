
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(835);

var _FlatButton = __webpack_require__(776);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/NoActivityMessage.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/NoActivityMessage.js"); } } })();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrJoinSelector = exports.getTeamStatus = exports.addCheckIn = exports.addTeam = exports.selectTeam = exports.createTeam = undefined;

var _defineProperty2 = __webpack_require__(795);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(96);

var _extends4 = _interopRequireDefault(_extends3);

var _keys = __webpack_require__(233);

var _keys2 = _interopRequireDefault(_keys);

exports.default = createTeamReducer;

var _cuid = __webpack_require__(619);

var _cuid2 = _interopRequireDefault(_cuid);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// constants
var CREATE_TEAM = 'CREATE_TEAM';
var SELECT_TEAM = 'SELECT_TEAM';
var ADD_CHECKIN = 'ADD_CHECKIN';
var ADD_TEAM = 'ADD_TEAM';

// Actions
var createTeam = exports.createTeam = function createTeam() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _cuid2.default)();
  return {
    type: CREATE_TEAM,
    payload: {
      name: name,
      id: id
    }
  };
};

var selectTeam = exports.selectTeam = function selectTeam() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _cuid2.default)();
  return {
    type: SELECT_TEAM,
    payload: id
  };
};

// Difference between addTeam and createTeam?
var addTeam = exports.addTeam = function addTeam() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _cuid2.default)();
  return {
    type: ADD_TEAM,
    payload: {
      name: name,
      id: id
    }
  };
};

// Add default values for date, today, recent, and blockers
var addCheckIn = exports.addCheckIn = function addCheckIn(_ref) {
  var _ref$date = _ref.date,
      date = _ref$date === undefined ? Date.now() : _ref$date,
      _ref$today = _ref.today,
      today = _ref$today === undefined ? '' : _ref$today,
      _ref$recentWork = _ref.recentWork,
      recentWork = _ref$recentWork === undefined ? '' : _ref$recentWork,
      _ref$questions = _ref.questions,
      questions = _ref$questions === undefined ? '' : _ref$questions,
      _ref$id = _ref.id,
      id = _ref$id === undefined ? (0, _cuid2.default)() : _ref$id,
      _ref$userID = _ref.userID,
      userID = _ref$userID === undefined ? (0, _cuid2.default)() : _ref$userID;
  return {
    type: ADD_CHECKIN,
    payload: {
      date: date,
      today: today,
      recentWork: recentWork,
      questions: questions,
      id: id,
      userID: userID
    }
  };
};

// Selectors
var getTeamStatus = exports.getTeamStatus = function getTeamStatus(state) {
  return (0, _keys2.default)(state).map(function (id) {
    return state[id];
  });
};
var createOrJoinSelector = exports.createOrJoinSelector = function createOrJoinSelector(state) {
  return state.teams || [];
};

// Reducer
var initialState = {};
function createTeamReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ADD_CHECKIN:
      return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.payload.id, action.payload));
    case SELECT_TEAM:
      {
        return {};
      }
    case CREATE_TEAM:
      return {};
    default:
      return state;
  }
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateTeam/createTeam.reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateTeam/createTeam.reducer.js"); } } })();

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTeamReducer = undefined;

var _createTeam = __webpack_require__(593);

var _createTeam2 = _interopRequireDefault(_createTeam);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.createTeamReducer = _createTeam2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateTeam/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateTeam/index.js"); } } })();

/***/ }),

/***/ 723:
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

var _propTypes = __webpack_require__(85);

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
MobileTearSheet.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = MobileTearSheet;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MobileTearSheet/MobileTearSheet.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MobileTearSheet/MobileTearSheet.js"); } } })();

/***/ }),

/***/ 725:
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

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(625);

var _firebase2 = _interopRequireDefault(_firebase);

var _config = __webpack_require__(725);

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

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(66);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = _callee;

var _effects = __webpack_require__(605);

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

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(522);

var _reduxSaga = __webpack_require__(757);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxDevtoolsExtension = __webpack_require__(756);

var _redux = __webpack_require__(556);

var _root = __webpack_require__(727);

var _root2 = _interopRequireDefault(_root);

var _firebase = __webpack_require__(726);

var _firebase2 = _interopRequireDefault(_firebase);

var _CreateTeam = __webpack_require__(722);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var rootReducer = (0, _redux.combineReducers)({ createTeamReducer: _CreateTeam.createTeamReducer });

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

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(717);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

var _reactTapEventPlugin = __webpack_require__(746);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = __webpack_require__(703);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _colorManipulator = __webpack_require__(551);

var _getMuiTheme = __webpack_require__(590);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = __webpack_require__(786);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _navbar = __webpack_require__(936);

var _navbar2 = _interopRequireDefault(_navbar);

var _container = __webpack_require__(952);

var _container2 = _interopRequireDefault(_container);

var _TeamMembers = __webpack_require__(933);

var _TeamMembers2 = _interopRequireDefault(_TeamMembers);

var _container3 = __webpack_require__(953);

var _container4 = _interopRequireDefault(_container3);

var _index = __webpack_require__(728);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

try {
  (0, _reactTapEventPlugin2.default)();
} catch (e) {}

var muiTheme = (0, _getMuiTheme2.default)({
  userAgent: false
});
var Board = function Board() {
  return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme }, _react2.default.createElement('div', { style: { width: '100%' } }, _react2.default.createElement(_TeamMembers2.default, null), _react2.default.createElement(_navbar2.default, { team: "Ryan's Team" }), _react2.default.createElement(_container4.default, null), _react2.default.createElement(_container2.default, null)));
};

// // create higher-order page component, using compose()
// export default compose(
//   withMuiTheme(uiAgent),
//   withRedux(store )
// )(component);

exports.default = (0, _nextReduxWrapper2.default)(_index2.default)(Board);

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

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FloatingActionButton = __webpack_require__(806);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = __webpack_require__(913);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/AddButton/AddButton.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/AddButton/AddButton.js"); } } })();

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return _react2.default.createElement(_DatePicker2.default, {
    floatingLabelText: 'Date',
    autoOk: true,
    formatDate: props.formatDate,
    underlineShow: false,
    style: style.underline,
    hintText: 'Select Checkin Date',
    onChange: props.onChange,
    icon: _react2.default.createElement(_calendar2.default, null)
  });
};

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _DatePicker = __webpack_require__(803);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _calendar = __webpack_require__(938);

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  underline: {
    textDecoration: 'none'
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/DatePicker/DatePicker.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/DatePicker/DatePicker.js"); } } })();

/***/ }),

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamMembers/TeamMembers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamMembers/TeamMembers.js"); } } })();

/***/ }),

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

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

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

var _Dialog = __webpack_require__(782);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Divider = __webpack_require__(682);

var _Divider2 = _interopRequireDefault(_Divider);

var _Paper = __webpack_require__(692);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(778);

var _TextField2 = _interopRequireDefault(_TextField);

var _moment = __webpack_require__(955);

var _moment2 = _interopRequireDefault(_moment);

var _FlatButton = __webpack_require__(776);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(790);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AddButton = __webpack_require__(931);

var _AddButton2 = _interopRequireDefault(_AddButton);

var _DatePicker = __webpack_require__(932);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var style = {
  marginRight: 20,
  checkIn: {
    position: 'absolute',
    bottom: 150,
    right: 250
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
      open: false
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/checkin/checkin.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/checkin/checkin.js"); } } })();

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(904);

var _AppBar = __webpack_require__(786);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__(686);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = __webpack_require__(921);

var _close2 = _interopRequireDefault(_close);

var _FlatButton = __webpack_require__(776);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function handleTouchTap() {
  console.log('onTouchTap triggered on the title component');
}

var styles = {
  title: {
    cursor: 'pointer'
  },
  nav: {
    position: 'fixed',
    top: 0,
    zIndex: 10000,
    width: '100%',
    left: 0
  }
};

var Navbar = function Navbar(props) {
  return _react2.default.createElement(_AppBar2.default, {
    style: styles.nav,
    showMenuIconButton: false,
    title: _react2.default.createElement('span', { style: styles.title }, props.teamName + ' Board'),
    onTitleTouchTap: handleTouchTap,
    iconElementLeft: _react2.default.createElement(_IconButton2.default, null, _react2.default.createElement(_close2.default, null)),
    iconElementRight: _react2.default.createElement(_FlatButton2.default, { label: 'Sign Out' })
  });
};

exports.default = Navbar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/navbar/navbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/navbar/navbar.js"); } } })();

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(824);


/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(598);

var _redux = __webpack_require__(556);

var _checkin = __webpack_require__(935);

var _checkin2 = _interopRequireDefault(_checkin);

var _createTeam = __webpack_require__(593);

var actions = _interopRequireWildcard(_createTeam);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    teams: actions.createOrJoinSelector(state)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_checkin2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/checkin/container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/checkin/container.js"); } } })();

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(598);

var _redux = __webpack_require__(556);

var _createTeam = __webpack_require__(593);

var actions = _interopRequireWildcard(_createTeam);

var _TeamStatus = __webpack_require__(934);

var _TeamStatus2 = _interopRequireDefault(_TeamStatus);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var mapStateToProps = function mapStateToProps(state) {
  return { status: actions.getTeamStatus(state.createTeamReducer) };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TeamStatus2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/container.js"); } } })();

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItem = __webpack_require__(687);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Avatar = __webpack_require__(829);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _user = __webpack_require__(937);

var _user2 = _interopRequireDefault(_user);

var _colors = __webpack_require__(568);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CheckedInDisplay = function CheckedInDisplay(_ref) {
  var checkin = _ref.checkin;
  return _react2.default.createElement(_ListItem2.default, {
    key: checkin.id,
    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_user2.default, null) }),
    primaryText: checkin.today,
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, checkin.date.toString()), ' --', checkin.recentWork),
    secondaryTextLines: 2
  });
};

CheckedInDisplay.propTypes = {
  checkin: _propTypes2.default.shape({
    date: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    today: _propTypes2.default.string.isRequired,
    recentWork: _propTypes2.default.string.isRequired,
    questions: _propTypes2.default.string.isRequired
  }).isRequired
};
exports.default = CheckedInDisplay;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/CheckedInDisplay.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/TeamStatus/CheckedInDisplay.js"); } } })();

/***/ })

},[939]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvTm9BY3Rpdml0eU1lc3NhZ2UuanM/NjJhOWVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlci5qcz82MmE5ZWY1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vaW5kZXguanM/NjJhOWVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0LmpzPzYyYTllZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25maWcuc2VjcmV0LmpzPzYyYTllZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maXJlYmFzZS5qcz82MmE5ZWY1Iiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9yb290LmpzPzYyYTllZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzPzYyYTllZjUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NjJhOWVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzPzYyYTllZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGF0ZVBpY2tlci9EYXRlUGlja2VyLmpzPzYyYTllZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbU1lbWJlcnMvVGVhbU1lbWJlcnMuanM/NjJhOWVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL1RlYW1TdGF0dXMuanM/NjJhOWVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NoZWNraW4uanM/NjJhOWVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzPzYyYTllZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jb250YWluZXIuanM/NjJhOWVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcz82MmE5ZWY1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvQ2hlY2tlZEluRGlzcGxheS5qcz82MmE5ZWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRIZWFkZXIsIENhcmRUZXh0IH0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcblxuY29uc3QgTm9BY3Rpdml0eU1lc3NhZ2UgPSBwcm9wcyA9PlxuICA8Q2FyZCBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiTm8gUmVjZW50IEFjdGl2aXR5XCIgc3VidGl0bGU9XCJDaGVja2luIHlvdXIgYWN0aXZpdHkhXCIgLz5cbiAgPC9DYXJkPjtcblxuY29uc3QgeyBudW1iZXIsIHN0cmluZyB9ID0gUHJvcFR5cGVzO1xuLy8gTm9BY3Rpdml0eU1lc3NhZ2UucHJvcFR5cGVzID0ge1xuLy8gICBzdHlsZTogUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICB3aWR0aDogbnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgICAgZGlzcGxheTogc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgICAgZmxleERpcmVjdGlvbjogc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgICAganVzdGlmeUNvbnRlbnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGFsaWduSXRlbXM6IHN0cmluZy5pc1JlcXVpcmVkXG4vLyAgIH0pLmlzUmVxdWlyZWRcbi8vIH07XG5leHBvcnQgZGVmYXVsdCBOb0FjdGl2aXR5TWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvTm9BY3Rpdml0eU1lc3NhZ2UuanMiLCJpbXBvcnQgY3VpZCBmcm9tICdjdWlkJztcblxuLy8gY29uc3RhbnRzXG5jb25zdCBDUkVBVEVfVEVBTSA9ICdDUkVBVEVfVEVBTSc7XG5jb25zdCBTRUxFQ1RfVEVBTSA9ICdTRUxFQ1RfVEVBTSc7XG5jb25zdCBBRERfQ0hFQ0tJTiA9ICdBRERfQ0hFQ0tJTic7XG5jb25zdCBBRERfVEVBTSA9ICdBRERfVEVBTSc7XG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBjb25zdCBjcmVhdGVUZWFtID0gKG5hbWUgPSAnJywgaWQgPSBjdWlkKCkpID0+ICh7XG4gIHR5cGU6IENSRUFURV9URUFNLFxuICBwYXlsb2FkOiB7XG4gICAgbmFtZSxcbiAgICBpZFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFRlYW0gPSAoaWQgPSBjdWlkKCkpID0+ICh7XG4gIHR5cGU6IFNFTEVDVF9URUFNLFxuICBwYXlsb2FkOiBpZFxufSk7XG5cbi8vIERpZmZlcmVuY2UgYmV0d2VlbiBhZGRUZWFtIGFuZCBjcmVhdGVUZWFtP1xuZXhwb3J0IGNvbnN0IGFkZFRlYW0gPSAobmFtZSA9ICcnLCBpZCA9IGN1aWQoKSkgPT4gKHtcbiAgdHlwZTogQUREX1RFQU0sXG4gIHBheWxvYWQ6IHtcbiAgICBuYW1lLFxuICAgIGlkXG4gIH1cbn0pO1xuXG4vLyBBZGQgZGVmYXVsdCB2YWx1ZXMgZm9yIGRhdGUsIHRvZGF5LCByZWNlbnQsIGFuZCBibG9ja2Vyc1xuZXhwb3J0IGNvbnN0IGFkZENoZWNrSW4gPSAoe1xuICBkYXRlID0gRGF0ZS5ub3coKSxcbiAgdG9kYXkgPSAnJyxcbiAgcmVjZW50V29yayA9ICcnLFxuICBxdWVzdGlvbnMgPSAnJyxcbiAgaWQgPSBjdWlkKCksXG4gIHVzZXJJRCA9IGN1aWQoKVxufSkgPT4gKHtcbiAgdHlwZTogQUREX0NIRUNLSU4sXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRlLFxuICAgIHRvZGF5LFxuICAgIHJlY2VudFdvcmssXG4gICAgcXVlc3Rpb25zLFxuICAgIGlkLFxuICAgIHVzZXJJRFxuICB9XG59KTtcblxuLy8gU2VsZWN0b3JzXG5leHBvcnQgY29uc3QgZ2V0VGVhbVN0YXR1cyA9IHN0YXRlID0+XG4gIE9iamVjdC5rZXlzKHN0YXRlKS5tYXAoaWQgPT4gc3RhdGVbaWRdKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVPckpvaW5TZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnRlYW1zIHx8IFtdO1xuXG4vLyBSZWR1Y2VyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRlYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX0NIRUNLSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgY2FzZSBTRUxFQ1RfVEVBTToge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjYXNlIENSRUFURV9URUFNOlxuICAgICAgcmV0dXJuIHt9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vY3JlYXRlVGVhbS5yZWR1Y2VyLmpzIiwiZXhwb3J0IGNyZWF0ZVRlYW1SZWR1Y2VyIGZyb20gJy4vY3JlYXRlVGVhbS5yZWR1Y2VyJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTW9iaWxlVGVhclNoZWV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG11aVRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmVwYXJlU3R5bGVzIH0gPSB0aGlzLmNvbnRleHQubXVpVGhlbWU7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAyNCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggI2Q5ZDlkOScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJ25vbmUnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0sXG4gICAgICBib3R0b21UZWFyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBtYXJnaW5Ub3A6IC0xMCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MFxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17cHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtwcmVwYXJlU3R5bGVzKHN0eWxlcy5jb250YWluZXIpfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3R5bGU9e3ByZXBhcmVTdHlsZXMoc3R5bGVzLmJvdHRvbVRlYXIpfSBzcmM9XCIvc3RhdGljL2JvdHRvbXRlYXIuc3ZnXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlVGVhclNoZWV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTW9iaWxlVGVhclNoZWV0L01vYmlsZVRlYXJTaGVldC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpS2V5OiAnQUl6YVN5RGcycHVKYnZkcnF0X0V1b0VURnlYMnduQkdrdVl1b0V3JyxcbiAgYXV0aERvbWFpbjogJ3NjcnVtLWJvYXJkLTRkMmM1LmZpcmViYXNlYXBwLmNvbScsXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zY3J1bS1ib2FyZC00ZDJjNS5maXJlYmFzZWlvLmNvbScsXG4gIHByb2plY3RJZDogJ3NjcnVtLWJvYXJkLTRkMmM1JyxcbiAgc3RvcmFnZUJ1Y2tldDogJ3NjcnVtLWJvYXJkLTRkMmM1LmFwcHNwb3QuY29tJyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICczMTgwNzM1ODMzMTgnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9jb25maWcuc2VjcmV0LmpzIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuc2VjcmV0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICB0cnkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gU2tpcCB0aGUgXCJhbHJlYWR5IGV4aXN0c1wiIG1lc3NhZ2Ugd2hpY2ggaXMgbm90IGFuIGVycm9yIHdoZW4gaG90LXJlbG9hZGluZ1xuICAgIGlmICghL2FscmVhZHkgZXhpc3RzLy50ZXN0KGVyci5tZXNzYWdlKSkge1xuICAgICAgY29uc29sZS5sb2coYEZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yID0+ICR7ZXJyfWApO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZmlyZWJhc2UuanMiLCJpbXBvcnQgeyBmb3JrLCBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5mdW5jdGlvbiogcGxhY2Vob2xkZXIoKSB7XG4gIHlpZWxkICdwbGFjZWhvbGRlcic7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gIHlpZWxkIGFsbChbZm9yayhwbGFjZWhvbGRlcildKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYWdhcy9yb290LmpzIiwiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMvcm9vdCc7XG5pbXBvcnQgY29uZmlndXJlRmlyZWJhc2UgZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7IGNyZWF0ZVRlYW1SZWR1Y2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVUZWFtJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoeyBjcmVhdGVUZWFtUmVkdWNlciB9KTtcblxuY29uc3Qgc2FnYXMgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZShzYWdhcyksXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAmJiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKVxuICAgIDogZiA9PiBmXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcbiAgc2FnYXMucnVuKHJvb3RTYWdhKTtcbiAgY29uZmlndXJlRmlyZWJhc2UoKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJ21hdGVyaWFsLXVpL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXInO1xuaW1wb3J0IENoZWNraW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jb250YWluZXInO1xuaW1wb3J0IFRlYW1NZW1iZXJzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RlYW1NZW1iZXJzL1RlYW1NZW1iZXJzJztcbmltcG9ydCBUZWFtU3RhdHVzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvY29udGFpbmVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zcmMvc3RvcmUvaW5kZXgnO1xuXG50cnkge1xuICBpbmplY3RUYXBFdmVudFBsdWdpbigpO1xufSBjYXRjaCAoZSkge31cblxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7XG4gIHVzZXJBZ2VudDogZmFsc2Vcbn0pO1xuY29uc3QgQm9hcmQgPSAoKSA9PlxuICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIDxUZWFtTWVtYmVycyAvPlxuICAgICAgPE5hdmJhciB0ZWFtPXtcIlJ5YW4ncyBUZWFtXCJ9IC8+XG4gICAgICA8VGVhbVN0YXR1cyAvPlxuICAgICAgPENoZWNraW4gLz5cbiAgICA8L2Rpdj5cbiAgPC9NdWlUaGVtZVByb3ZpZGVyPjtcblxuLy8gLy8gY3JlYXRlIGhpZ2hlci1vcmRlciBwYWdlIGNvbXBvbmVudCwgdXNpbmcgY29tcG9zZSgpXG4vLyBleHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuLy8gICB3aXRoTXVpVGhlbWUodWlBZ2VudCksXG4vLyAgIHdpdGhSZWR1eChzdG9yZSApXG4vLyApKGNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoQm9hcmQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgQ29udGVudEFkZCBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvY29udGVudC9hZGQnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDIwXG59O1xuXG5jb25zdCBBZGRCdXR0b24gPSBwcm9wcyA9PlxuICA8RmxvYXRpbmdBY3Rpb25CdXR0b24gc2Vjb25kYXJ5IG9uVG91Y2hUYXA9e3Byb3BzLmFjdGlvbn0gc3R5bGU9e3N0eWxlfT5cbiAgICA8Q29udGVudEFkZCAvPlxuICA8L0Zsb2F0aW5nQWN0aW9uQnV0dG9uPjtcblxuZXhwb3J0IGRlZmF1bHQgQWRkQnV0dG9uO1xuXG5BZGRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ21hdGVyaWFsLXVpL0RhdGVQaWNrZXInO1xuaW1wb3J0IENhbGVuZGFySWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZ28vY2FsZW5kYXInO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgdW5kZXJsaW5lOiB7XG4gICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RGF0ZVBpY2tlclxuICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJEYXRlXCJcbiAgICAgIGF1dG9Pa1xuICAgICAgZm9ybWF0RGF0ZT17cHJvcHMuZm9ybWF0RGF0ZX1cbiAgICAgIHVuZGVybGluZVNob3c9e2ZhbHNlfVxuICAgICAgc3R5bGU9e3N0eWxlLnVuZGVybGluZX1cbiAgICAgIGhpbnRUZXh0PVwiU2VsZWN0IENoZWNraW4gRGF0ZVwiXG4gICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICBpY29uPXs8Q2FsZW5kYXJJY29uIC8+fVxuICAgIC8+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9EYXRlUGlja2VyL0RhdGVQaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyYXdlciBmcm9tICdtYXRlcmlhbC11aS9EcmF3ZXInO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnbWF0ZXJpYWwtdWkvVG9nZ2xlJztcbmltcG9ydCBGb250SWNvbiBmcm9tICdtYXRlcmlhbC11aS9Gb250SWNvbic7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ21hdGVyaWFsLXVpL0F2YXRhcic7XG5pbXBvcnQgVXNlckljb24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3VzZXInO1xuaW1wb3J0IFRvZ2dsZU9mZiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdG9nZ2xlLW9mZic7XG5pbXBvcnQgVG9nZ2xlT24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3RvZ2dsZS1vbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdG9nZ2xlOiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogMTAwMDAsXG4gICAgdGh1bWJPZmY6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmNjY2MnXG4gICAgfSxcbiAgICB0cmFja09mZjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmOWQ5ZCdcbiAgICB9LFxuICAgIHRyYWNrU3dpdGNoZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZjlkOWQnXG4gICAgfVxuICB9XG59O1xuY29uc3QgTmFtZXMgPSBbJ1J5YW4nLCAnRXJpYycsICdKb2huJywgJ01pa2UnLCAnR2VvcmdlJywgJ0Nhc2V5JywgJ0dyZWcnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbU1lbWJlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxuICAgICAgICA8VG9nZ2xlIHN0eWxlPXtzdHlsZXMudG9nZ2xlfSBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9IGljb249e1RvZ2dsZU9ufSB4IC8+XG4gICAgICAgIDxEcmF3ZXIgb3BlblNlY29uZGFyeSBjb250YWluZXJTdHlsZT17eyBtYXJnaW5Ub3A6IDY1IH19IG9wZW49e3RoaXMuc3RhdGUub3Blbn0gZG9ja2VkPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk1lbWJlcnM8L01lbnVJdGVtPlxuICAgICAgICAgIHtOYW1lcy5tYXAobmFtZSA9PlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bmFtZX0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDEwIH19PlxuICAgICAgICAgICAgICA8QXZhdGFyIGljb249ezxVc2VySWNvbiAvPn0gc3R5bGU9e3sgbWFyZ2luOiA1IH19IC8+e25hbWV9XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVGVhbU1lbWJlcnMuZGVmYXVsdFByb3BzID0ge1xuICBwaG90b1VSTDogPEZvbnRJY29uIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgLz5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtTWVtYmVycy9UZWFtTWVtYmVycy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ21hdGVyaWFsLXVpL0F2YXRhcic7XG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpL0xpc3QnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcbmltcG9ydCBTdWJoZWFkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvU3ViaGVhZGVyJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IENvbW11bmljYXRpb25DaGF0QnViYmxlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb21tdW5pY2F0aW9uL2NoYXQtYnViYmxlJztcbmltcG9ydCBNb2JpbGVUZWFyU2hlZXQgZnJvbSAnLi4vTW9iaWxlVGVhclNoZWV0L01vYmlsZVRlYXJTaGVldCc7XG5pbXBvcnQgQ2hlY2tlZEluRGlzcGxheSBmcm9tICcuL0NoZWNrZWRJbkRpc3BsYXknO1xuaW1wb3J0IE5vQWN0aXZpdHlNZXNzYWdlIGZyb20gJy4vTm9BY3Rpdml0eU1lc3NhZ2UnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgb3V0ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBwYXBlcjoge1xuICAgIHdpZHRoOiAnNTAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB3aWR0aDogMzAwLFxuICAgIG1hcmdpbjogNSxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH1cbn07XG5cbmNvbnN0IFRlYW1TdGF0dXMgPSBwcm9wcyA9PlxuICA8ZGl2IHN0eWxlPXtzdHlsZS5vdXRlcn0+XG4gICAge3Byb3BzLnN0YXR1cy5sZW5ndGhcbiAgICAgID8gPFBhcGVyIHN0eWxlPXtzdHlsZS5wYXBlcn0+XG4gICAgICAgIDxMaXN0IHN0eWxlPXtzdHlsZS5saXN0fT5cbiAgICAgICAgICA8U3ViaGVhZGVyPkFjdGl2aXR5PC9TdWJoZWFkZXI+XG4gICAgICAgICAge3Byb3BzLnN0YXR1cy5tYXAoY2hlY2tpbiA9PiA8Q2hlY2tlZEluRGlzcGxheSBrZXk9e2NoZWNraW4uaWR9IGNoZWNraW49e2NoZWNraW59IC8+KX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDogPE5vQWN0aXZpdHlNZXNzYWdlIHN0eWxlPXtzdHlsZS5wYXBlcn0gLz59XG4gIDwvZGl2PjtcbmV4cG9ydCBkZWZhdWx0IFRlYW1TdGF0dXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL1RlYW1TdGF0dXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgQWRkQnV0dG9uIGZyb20gJy4uL0FkZEJ1dHRvbi9BZGRCdXR0b24nO1xuaW1wb3J0IERhdGVDaGVja2luUGlja2VyIGZyb20gJy4uL0RhdGVQaWNrZXIvRGF0ZVBpY2tlcic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMjAsXG4gIGNoZWNrSW46IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDE1MCxcbiAgICByaWdodDogMjUwXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrSW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZVxuICB9O1xuICBnZXREYXRlID0gKGUsIGRhdGUpID0+IHtcbiAgICBjb25zdCB0b2RheXNEYXRlID0gbW9tZW50KGRhdGUpLmZvcm1hdCgnbCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNraW4sXG4gICAgICAgIGRhdGU6IHRvZGF5c0RhdGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZ2V0VG9kYXkgPSBlID0+IHtcbiAgICBjb25zdCB0b2RheXNXb3JrID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNrSW4sXG4gICAgICAgIHRvZGF5OiB0b2RheXNXb3JrXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGdldFJlY2VudCA9IGUgPT4ge1xuICAgIGNvbnN0IHJlY2VudFdvcmsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICBjaGVja0luOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuY2hlY2tJbixcbiAgICAgICAgcmVjZW50V29ya1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBnZXRCbG9ja2VycyA9IGUgPT4ge1xuICAgIGNvbnN0IGJsb2NrZXJzID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNrSW4sXG4gICAgICAgIHF1ZXN0aW9uczogYmxvY2tlcnNcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9ybWF0RGF0ZSA9IGRhdGUgPT4gbW9tZW50KGRhdGUpLmZvcm1hdCgnbCcpO1xuICBzdWJtaXRGb3JtID0gZSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmFkZENoZWNrSW4odGhpcy5zdGF0ZS5jaGVja0luKTtcbiAgfTtcbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9O1xuICBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQ2FuY2VsXCIgcHJpbWFyeSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfSAvPixcbiAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiU3VibWl0XCIgcHJpbWFyeSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfSBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm19IC8+XG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY2hlY2tJbn0+XG4gICAgICAgIDxBZGRCdXR0b24gYWN0aW9uPXt0aGlzLmhhbmRsZU9wZW59IGxhYmVsPXsnQ2hlY2sgSW4nfSAvPlxuICAgICAgICA8RGlhbG9nIHRpdGxlPVwiQ2hlY2sgSW4hXCIgYWN0aW9ucz17YWN0aW9uc30gbW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufT5cbiAgICAgICAgICA8RGF0ZUNoZWNraW5QaWNrZXIgZm9ybWF0RGF0ZT17dGhpcy5mb3JtYXREYXRlfSBvbkNoYW5nZT17dGhpcy5nZXREYXRlfSAvPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJZZXN0ZXJkYXkvUmVjZW50IFdvcmtcIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdW5kZXJsaW5lU2hvdz17ZmFsc2V9XG4gICAgICAgICAgICBtdWx0aUxpbmVcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldFJlY2VudH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZ2V0VG9kYXl9XG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlRvZGF5XCJcbiAgICAgICAgICAgIHVuZGVybGluZVNob3c9e2ZhbHNlfVxuICAgICAgICAgICAgbXVsdGlMaW5lXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldEJsb2NrZXJzfVxuICAgICAgICAgICAgbXVsdGlMaW5lXG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD17J1F1ZXN0aW9ucy9CbG9ja2Vycyd9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICB1bmRlcmxpbmVTaG93PXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jaGVja2luLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExlZnROYXYsIE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWknO1xuaW1wb3J0IEFwcEJhciBmcm9tICdtYXRlcmlhbC11aS9BcHBCYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTmF2aWdhdGlvbkNsb3NlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Nsb3NlJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaFRhcCgpIHtcbiAgY29uc29sZS5sb2coJ29uVG91Y2hUYXAgdHJpZ2dlcmVkIG9uIHRoZSB0aXRsZSBjb21wb25lbnQnKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB0aXRsZToge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH0sXG4gIG5hdjoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICB6SW5kZXg6IDEwMDAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbGVmdDogMFxuICB9XG59O1xuXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PlxuICA8QXBwQmFyXG4gICAgc3R5bGU9e3N0eWxlcy5uYXZ9XG4gICAgc2hvd01lbnVJY29uQnV0dG9uPXtmYWxzZX1cbiAgICB0aXRsZT17PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+e2Ake3Byb3BzLnRlYW1OYW1lfSBCb2FyZGB9PC9zcGFuPn1cbiAgICBvblRpdGxlVG91Y2hUYXA9e2hhbmRsZVRvdWNoVGFwfVxuICAgIGljb25FbGVtZW50TGVmdD17PEljb25CdXR0b24+PE5hdmlnYXRpb25DbG9zZSAvPjwvSWNvbkJ1dHRvbj59XG4gICAgaWNvbkVsZW1lbnRSaWdodD17PEZsYXRCdXR0b24gbGFiZWw9XCJTaWduIE91dFwiIC8+fVxuICAvPjtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IENoZWNrSW4gZnJvbSAnLi9jaGVja2luJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vQ3JlYXRlVGVhbS9jcmVhdGVUZWFtLnJlZHVjZXInO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB0ZWFtczogYWN0aW9ucy5jcmVhdGVPckpvaW5TZWxlY3RvcihzdGF0ZSlcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaGVja0luKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NoZWNraW4vY29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL0NyZWF0ZVRlYW0vY3JlYXRlVGVhbS5yZWR1Y2VyJztcbmltcG9ydCBUZWFtU3RhdHVzIGZyb20gJy4vVGVhbVN0YXR1cyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7IHN0YXR1czogYWN0aW9ucy5nZXRUZWFtU3RhdHVzKHN0YXRlLmNyZWF0ZVRlYW1SZWR1Y2VyKSB9KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7IGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaCkgfSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZWFtU3RhdHVzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvY29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdC9MaXN0SXRlbSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ21hdGVyaWFsLXVpL0F2YXRhci9BdmF0YXInO1xuaW1wb3J0IFVzZXJJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS91c2VyJztcbmltcG9ydCB7IGdyZXk0MDAsIGRhcmtCbGFjaywgbGlnaHRCbGFjayB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnO1xuXG5jb25zdCBDaGVja2VkSW5EaXNwbGF5ID0gKHsgY2hlY2tpbiB9KSA9PlxuICA8TGlzdEl0ZW1cbiAgICBrZXk9e2NoZWNraW4uaWR9XG4gICAgbGVmdEF2YXRhcj17PEF2YXRhciBpY29uPXs8VXNlckljb24gLz59IC8+fVxuICAgIHByaW1hcnlUZXh0PXtjaGVja2luLnRvZGF5fVxuICAgIHNlY29uZGFyeVRleHQ9e1xuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBkYXJrQmxhY2sgfX0+e2NoZWNraW4uZGF0ZS50b1N0cmluZygpfTwvc3Bhbj4gLS1cbiAgICAgICAge2NoZWNraW4ucmVjZW50V29ya31cbiAgICAgIDwvcD5cbiAgICB9XG4gICAgc2Vjb25kYXJ5VGV4dExpbmVzPXsyfVxuICAvPjtcblxuQ2hlY2tlZEluRGlzcGxheS5wcm9wVHlwZXMgPSB7XG4gIGNoZWNraW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdG9kYXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZWNlbnRXb3JrOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcXVlc3Rpb25zOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrZWRJbkRpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL0NoZWNrZWRJbkRpc3BsYXkuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQ0E7QUFDQTtBQTNEQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBT0E7QUFBQTs7QUFFQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUZBO0FBUkE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUFBO0FBR0E7QUFMQTs7QUFPQTtBQUNBO0FBQUE7QUFLQTtBQVBBO0FBYkE7QUFDQTtBQW9CQTs7Ozs7O0FBbkNBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUFBO0FBc0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBUEE7OztBQWJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7QUFFQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBRkE7O0FBS0E7QUFGQTs7QUFHQTtBQUFBO0FBVkE7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUhBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFLQTtBQU9BOzs7Ozs7QUF0QkE7QUFDQTtBQXVCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7O0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBZkE7QUFDQTtBQXFCQTtBQUNBO0FBS0E7QUFBQTtBQU5BO0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBRkE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFIQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUhBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFLQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBRUE7QUFDQTtBQUVBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7Ozs7OztBQWhGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFHQTs7QUFJQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUpBO0FBQ0E7QUFXQTs7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFMQTtBQUZBO0FBQ0E7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBO0FBQUE7QUFEQTtBQUdBOztBQUNBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFUQTtBQUZBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        