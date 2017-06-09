
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

NoActivityMessage.propTypes = {
  style: _propTypes2.default.shape({
    marginTop: number.isRequired,
    width: number.isRequired,
    display: string.isRequired,
    flexDirection: string.isRequired,
    justifyContent: string.isRequired,
    alignItems: string.isRequired
  }).isRequired
};
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
  return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme }, _react2.default.createElement('div', { style: { width: '100%' } }, _react2.default.createElement(_navbar2.default, { team: "Ryan's Team" }), _react2.default.createElement(_container2.default, null), _react2.default.createElement(_container4.default, null), _react2.default.createElement(_TeamMembers2.default, null)));
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
  paper: {
    marginTop: 120,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
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
  return props.status.length ? _react2.default.createElement(_Paper2.default, { style: style.paper }, _react2.default.createElement(_List.List, { style: style.list }, _react2.default.createElement(_Subheader2.default, null, 'Activity'), props.status.map(function (checkin) {
    return _react2.default.createElement(_CheckedInDisplay2.default, { key: checkin.id, checkin: checkin });
  }))) : _react2.default.createElement(_NoActivityMessage2.default, { style: style.paper });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvTm9BY3Rpdml0eU1lc3NhZ2UuanM/NWU3NjUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlci5qcz81ZTc2NTIxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vaW5kZXguanM/NWU3NjUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0LmpzPzVlNzY1MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25maWcuc2VjcmV0LmpzPzVlNzY1MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maXJlYmFzZS5qcz81ZTc2NTIxIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9yb290LmpzPzVlNzY1MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzPzVlNzY1MjEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NWU3NjUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzPzVlNzY1MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGF0ZVBpY2tlci9EYXRlUGlja2VyLmpzPzVlNzY1MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbU1lbWJlcnMvVGVhbU1lbWJlcnMuanM/NWU3NjUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL1RlYW1TdGF0dXMuanM/NWU3NjUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NoZWNraW4uanM/NWU3NjUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzPzVlNzY1MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jb250YWluZXIuanM/NWU3NjUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcz81ZTc2NTIxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvQ2hlY2tlZEluRGlzcGxheS5qcz81ZTc2NTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRIZWFkZXIsIENhcmRUZXh0IH0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcblxuY29uc3QgTm9BY3Rpdml0eU1lc3NhZ2UgPSBwcm9wcyA9PlxuICA8Q2FyZCBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiTm8gUmVjZW50IEFjdGl2aXR5XCIgc3VidGl0bGU9XCJDaGVja2luIHlvdXIgYWN0aXZpdHkhXCIgLz5cbiAgPC9DYXJkPjtcblxuY29uc3QgeyBudW1iZXIsIHN0cmluZyB9ID0gUHJvcFR5cGVzO1xuTm9BY3Rpdml0eU1lc3NhZ2UucHJvcFR5cGVzID0ge1xuICBzdHlsZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtYXJnaW5Ub3A6IG51bWJlci5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkaXNwbGF5OiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmbGV4RGlyZWN0aW9uOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBqdXN0aWZ5Q29udGVudDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWxpZ25JdGVtczogc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydCBkZWZhdWx0IE5vQWN0aXZpdHlNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9Ob0FjdGl2aXR5TWVzc2FnZS5qcyIsImltcG9ydCBjdWlkIGZyb20gJ2N1aWQnO1xuXG4vLyBjb25zdGFudHNcbmNvbnN0IENSRUFURV9URUFNID0gJ0NSRUFURV9URUFNJztcbmNvbnN0IFNFTEVDVF9URUFNID0gJ1NFTEVDVF9URUFNJztcbmNvbnN0IEFERF9DSEVDS0lOID0gJ0FERF9DSEVDS0lOJztcbmNvbnN0IEFERF9URUFNID0gJ0FERF9URUFNJztcblxuLy8gQWN0aW9uc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRlYW0gPSAobmFtZSA9ICcnLCBpZCA9IGN1aWQoKSkgPT4gKHtcbiAgdHlwZTogQ1JFQVRFX1RFQU0sXG4gIHBheWxvYWQ6IHtcbiAgICBuYW1lLFxuICAgIGlkXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VGVhbSA9IChpZCA9IGN1aWQoKSkgPT4gKHtcbiAgdHlwZTogU0VMRUNUX1RFQU0sXG4gIHBheWxvYWQ6IGlkXG59KTtcblxuLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIGFkZFRlYW0gYW5kIGNyZWF0ZVRlYW0/XG5leHBvcnQgY29uc3QgYWRkVGVhbSA9IChuYW1lID0gJycsIGlkID0gY3VpZCgpKSA9PiAoe1xuICB0eXBlOiBBRERfVEVBTSxcbiAgcGF5bG9hZDoge1xuICAgIG5hbWUsXG4gICAgaWRcbiAgfVxufSk7XG5cbi8vIEFkZCBkZWZhdWx0IHZhbHVlcyBmb3IgZGF0ZSwgdG9kYXksIHJlY2VudCwgYW5kIGJsb2NrZXJzXG5leHBvcnQgY29uc3QgYWRkQ2hlY2tJbiA9ICh7XG4gIGRhdGUgPSBEYXRlLm5vdygpLFxuICB0b2RheSA9ICcnLFxuICByZWNlbnRXb3JrID0gJycsXG4gIHF1ZXN0aW9ucyA9ICcnLFxuICBpZCA9IGN1aWQoKSxcbiAgdXNlcklEID0gY3VpZCgpXG59KSA9PiAoe1xuICB0eXBlOiBBRERfQ0hFQ0tJTixcbiAgcGF5bG9hZDoge1xuICAgIGRhdGUsXG4gICAgdG9kYXksXG4gICAgcmVjZW50V29yayxcbiAgICBxdWVzdGlvbnMsXG4gICAgaWQsXG4gICAgdXNlcklEXG4gIH1cbn0pO1xuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBnZXRUZWFtU3RhdHVzID0gc3RhdGUgPT5cbiAgT2JqZWN0LmtleXMoc3RhdGUpLm1hcChpZCA9PiBzdGF0ZVtpZF0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU9ySm9pblNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUudGVhbXMgfHwgW107XG5cbi8vIFJlZHVjZXJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGVhbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfQ0hFQ0tJTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuaWRdOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICBjYXNlIFNFTEVDVF9URUFNOiB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNhc2UgQ1JFQVRFX1RFQU06XG4gICAgICByZXR1cm4ge307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlVGVhbS9jcmVhdGVUZWFtLnJlZHVjZXIuanMiLCJleHBvcnQgY3JlYXRlVGVhbVJlZHVjZXIgZnJvbSAnLi9jcmVhdGVUZWFtLnJlZHVjZXInO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlVGVhbS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBNb2JpbGVUZWFyU2hlZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgbXVpVGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByZXBhcmVTdHlsZXMgfSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyNCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDI0LFxuICAgICAgICBtYXhXaWR0aDogMzYwLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjZDlkOWQ5JyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnbm9uZScsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgfSxcbiAgICAgIGJvdHRvbVRlYXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG1hcmdpblRvcDogLTEwLFxuICAgICAgICBtYXhXaWR0aDogMzYwXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtwcmVwYXJlU3R5bGVzKHN0eWxlcy5yb290KX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ByZXBhcmVTdHlsZXMoc3R5bGVzLmNvbnRhaW5lcil9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzdHlsZT17cHJlcGFyZVN0eWxlcyhzdHlsZXMuYm90dG9tVGVhcil9IHNyYz1cIi9zdGF0aWMvYm90dG9tdGVhci5zdmdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVUZWFyU2hlZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhcGlLZXk6ICdBSXphU3lEZzJwdUpidmRycXRfRXVvRVRGeVgyd25CR2t1WXVvRXcnLFxuICBhdXRoRG9tYWluOiAnc2NydW0tYm9hcmQtNGQyYzUuZmlyZWJhc2VhcHAuY29tJyxcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL3NjcnVtLWJvYXJkLTRkMmM1LmZpcmViYXNlaW8uY29tJyxcbiAgcHJvamVjdElkOiAnc2NydW0tYm9hcmQtNGQyYzUnLFxuICBzdG9yYWdlQnVja2V0OiAnc2NydW0tYm9hcmQtNGQyYzUuYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzMxODA3MzU4MzMxOCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2NvbmZpZy5zZWNyZXQuanMiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5zZWNyZXQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHRyeSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBTa2lwIHRoZSBcImFscmVhZHkgZXhpc3RzXCIgbWVzc2FnZSB3aGljaCBpcyBub3QgYW4gZXJyb3Igd2hlbiBob3QtcmVsb2FkaW5nXG4gICAgaWYgKCEvYWxyZWFkeSBleGlzdHMvLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRmlyZWJhc2UgaW5pdGlhbGl6YXRpb24gZXJyb3IgPT4gJHtlcnJ9YCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9maXJlYmFzZS5qcyIsImltcG9ydCB7IGZvcmssIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmZ1bmN0aW9uKiBwbGFjZWhvbGRlcigpIHtcbiAgeWllbGQgJ3BsYWNlaG9sZGVyJztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHBsYWNlaG9sZGVyKV0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhZ2FzL3Jvb3QuanMiLCJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcy9yb290JztcbmltcG9ydCBjb25maWd1cmVGaXJlYmFzZSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlVGVhbVJlZHVjZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVRlYW0nO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IGNyZWF0ZVRlYW1SZWR1Y2VyIH0pO1xuXG5jb25zdCBzYWdhcyA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FzKSxcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICYmIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpXG4gICAgOiBmID0+IGZcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuICBzYWdhcy5ydW4ocm9vdFNhZ2EpO1xuICBjb25maWd1cmVGaXJlYmFzZSgpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBmYWRlIH0gZnJvbSAnbWF0ZXJpYWwtdWkvdXRpbHMvY29sb3JNYW5pcHVsYXRvcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcic7XG5pbXBvcnQgQ2hlY2tpbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NvbnRhaW5lcic7XG5pbXBvcnQgVGVhbU1lbWJlcnMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGVhbU1lbWJlcnMvVGVhbU1lbWJlcnMnO1xuaW1wb3J0IFRlYW1TdGF0dXMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9jb250YWluZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3NyYy9zdG9yZS9pbmRleCc7XG5cbnRyeSB7XG4gIGluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG59IGNhdGNoIChlKSB7fVxuXG5jb25zdCBtdWlUaGVtZSA9IGdldE11aVRoZW1lKHtcbiAgdXNlckFnZW50OiBmYWxzZVxufSk7XG5jb25zdCBCb2FyZCA9ICgpID0+XG4gIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXttdWlUaGVtZX0+XG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPE5hdmJhciB0ZWFtPXtcIlJ5YW4ncyBUZWFtXCJ9IC8+XG4gICAgICA8Q2hlY2tpbiAvPlxuICAgICAgPFRlYW1TdGF0dXMgLz5cbiAgICAgIDxUZWFtTWVtYmVycyAvPlxuICAgIDwvZGl2PlxuICA8L011aVRoZW1lUHJvdmlkZXI+O1xuXG4vLyAvLyBjcmVhdGUgaGlnaGVyLW9yZGVyIHBhZ2UgY29tcG9uZW50LCB1c2luZyBjb21wb3NlKClcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4vLyAgIHdpdGhNdWlUaGVtZSh1aUFnZW50KSxcbi8vICAgd2l0aFJlZHV4KHN0b3JlIClcbi8vICkoY29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShCb2FyZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZsb2F0aW5nQWN0aW9uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uJztcbmltcG9ydCBDb250ZW50QWRkIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L2FkZCc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMjBcbn07XG5cbmNvbnN0IEFkZEJ1dHRvbiA9IHByb3BzID0+XG4gIDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiBzZWNvbmRhcnkgb25Ub3VjaFRhcD17cHJvcHMuYWN0aW9ufSBzdHlsZT17c3R5bGV9PlxuICAgIDxDb250ZW50QWRkIC8+XG4gIDwvRmxvYXRpbmdBY3Rpb25CdXR0b24+O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRCdXR0b247XG5cbkFkZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FkZEJ1dHRvbi9BZGRCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlcic7XG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9nby9jYWxlbmRhcic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICB1bmRlcmxpbmU6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyXG4gICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGVcIlxuICAgICAgYXV0b09rXG4gICAgICBmb3JtYXREYXRlPXtwcm9wcy5mb3JtYXREYXRlfVxuICAgICAgdW5kZXJsaW5lU2hvdz17ZmFsc2V9XG4gICAgICBzdHlsZT17c3R5bGUudW5kZXJsaW5lfVxuICAgICAgaGludFRleHQ9XCJTZWxlY3QgQ2hlY2tpbiBEYXRlXCJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cbiAgICAgIGljb249ezxDYWxlbmRhckljb24gLz59XG4gICAgLz5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0RhdGVQaWNrZXIvRGF0ZVBpY2tlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ21hdGVyaWFsLXVpL0RyYXdlcic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdtYXRlcmlhbC11aS9Ub2dnbGUnO1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ21hdGVyaWFsLXVpL0ZvbnRJY29uJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXZhdGFyJztcbmltcG9ydCBVc2VySWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdXNlcic7XG5pbXBvcnQgVG9nZ2xlT2ZmIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS90b2dnbGUtb2ZmJztcbmltcG9ydCBUb2dnbGVPbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdG9nZ2xlLW9uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzaWRlTmF2OiB7XG4gICAgbWFyZ2luVG9wOiA2MDBcbiAgfSxcbiAgdG9nZ2xlOiB7XG4gICAgYmxvY2s6IHtcbiAgICAgIG1heFdpZHRoOiAyNTBcbiAgICB9LFxuICAgIHRvZ2dsZToge1xuICAgICAgbWFyZ2luQm90dG9tOiAxNlxuICAgIH0sXG4gICAgdGh1bWJPZmY6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmNjY2MnXG4gICAgfSxcbiAgICB0cmFja09mZjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmOWQ5ZCdcbiAgICB9LFxuICAgIHRodW1iU3dpdGNoZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCdcbiAgICB9LFxuICAgIHRyYWNrU3dpdGNoZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZjlkOWQnXG4gICAgfSxcbiAgICBsYWJlbFN0eWxlOiB7XG4gICAgICBjb2xvcjogJ3JlZCdcbiAgICB9XG4gIH1cbn07XG5jb25zdCBOYW1lcyA9IFsnUnlhbicsICdFcmljJywgJ0pvaG4nLCAnTWlrZScsICdHZW9yZ2UnLCAnQ2FzZXknLCAnR3JlZyddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtTWVtYmVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XG4gICAgICAgIDxUb2dnbGVcbiAgICAgICAgICBkZWZhdWx0VG9nZ2xlZD17ISF0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIGljb249e1RvZ2dsZU9ufVxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Ub3A6ICcwJScsIGxlZnQ6ICcxMCUnIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxEcmF3ZXIgb3BlblNlY29uZGFyeSBzdHlsZT17c3R5bGVzLnNpZGVOYXZ9IG9wZW49e3RoaXMuc3RhdGUub3Blbn0gZG9ja2VkPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk1lbWJlcnM8L01lbnVJdGVtPlxuICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMudG9nZ2xlfVxuICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgICAgaWNvbj17VG9nZ2xlT259XG4gICAgICAgICAgICBkZWZhdWx0VG9nZ2xlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAge05hbWVzLm1hcChuYW1lID0+XG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTAgfX0+XG4gICAgICAgICAgICAgIDxBdmF0YXIgaWNvbj17PFVzZXJJY29uIC8+fSBzdHlsZT17eyBtYXJnaW46IDUgfX0gLz57bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5UZWFtTWVtYmVycy5kZWZhdWx0UHJvcHMgPSB7XG4gIHBob3RvVVJMOiA8Rm9udEljb24gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiAvPlxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1NZW1iZXJzL1RlYW1NZW1iZXJzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXZhdGFyJztcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xuaW1wb3J0IFN1YmhlYWRlciBmcm9tICdtYXRlcmlhbC11aS9TdWJoZWFkZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcic7XG5pbXBvcnQgQ29tbXVuaWNhdGlvbkNoYXRCdWJibGUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbW11bmljYXRpb24vY2hhdC1idWJibGUnO1xuaW1wb3J0IE1vYmlsZVRlYXJTaGVldCBmcm9tICcuLi9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0JztcbmltcG9ydCBDaGVja2VkSW5EaXNwbGF5IGZyb20gJy4vQ2hlY2tlZEluRGlzcGxheSc7XG5pbXBvcnQgTm9BY3Rpdml0eU1lc3NhZ2UgZnJvbSAnLi9Ob0FjdGl2aXR5TWVzc2FnZSc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogMTIwLFxuICAgIHdpZHRoOiA2MDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBsaXN0OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6IDMwMCxcbiAgICBtYXJnaW46IDUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9XG59O1xuXG5jb25zdCBUZWFtU3RhdHVzID0gcHJvcHMgPT5cbiAgcHJvcHMuc3RhdHVzLmxlbmd0aFxuICAgID8gPFBhcGVyIHN0eWxlPXtzdHlsZS5wYXBlcn0+XG4gICAgICA8TGlzdCBzdHlsZT17c3R5bGUubGlzdH0+XG4gICAgICAgIDxTdWJoZWFkZXI+QWN0aXZpdHk8L1N1YmhlYWRlcj5cbiAgICAgICAge3Byb3BzLnN0YXR1cy5tYXAoY2hlY2tpbiA9PiA8Q2hlY2tlZEluRGlzcGxheSBrZXk9e2NoZWNraW4uaWR9IGNoZWNraW49e2NoZWNraW59IC8+KX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L1BhcGVyPlxuICAgIDogPE5vQWN0aXZpdHlNZXNzYWdlIHN0eWxlPXtzdHlsZS5wYXBlcn0gLz47XG5leHBvcnQgZGVmYXVsdCBUZWFtU3RhdHVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9UZWFtU3RhdHVzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEFkZEJ1dHRvbiBmcm9tICcuLi9BZGRCdXR0b24vQWRkQnV0dG9uJztcbmltcG9ydCBEYXRlQ2hlY2tpblBpY2tlciBmcm9tICcuLi9EYXRlUGlja2VyL0RhdGVQaWNrZXInO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDIwLFxuICBjaGVja0luOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAxNTAsXG4gICAgcmlnaHQ6IDI1MFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja0luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfTtcbiAgZ2V0RGF0ZSA9IChlLCBkYXRlKSA9PiB7XG4gICAgY29uc3QgdG9kYXlzRGF0ZSA9IG1vbWVudChkYXRlKS5mb3JtYXQoJ2wnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja2luLFxuICAgICAgICBkYXRlOiB0b2RheXNEYXRlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGdldFRvZGF5ID0gZSA9PiB7XG4gICAgY29uc3QgdG9kYXlzV29yayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja0luLFxuICAgICAgICB0b2RheTogdG9kYXlzV29ya1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBnZXRSZWNlbnQgPSBlID0+IHtcbiAgICBjb25zdCByZWNlbnRXb3JrID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNrSW4sXG4gICAgICAgIHJlY2VudFdvcmtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZ2V0QmxvY2tlcnMgPSBlID0+IHtcbiAgICBjb25zdCBibG9ja2VycyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja0luLFxuICAgICAgICBxdWVzdGlvbnM6IGJsb2NrZXJzXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvcm1hdERhdGUgPSBkYXRlID0+IG1vbWVudChkYXRlKS5mb3JtYXQoJ2wnKTtcbiAgc3VibWl0Rm9ybSA9IGUgPT4ge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGRDaGVja0luKHRoaXMuc3RhdGUuY2hlY2tJbik7XG4gIH07XG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkNhbmNlbFwiIHByaW1hcnkgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0gLz4sXG4gICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIlN1Ym1pdFwiIHByaW1hcnkgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0gb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfSAvPlxuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNoZWNrSW59PlxuICAgICAgICA8QWRkQnV0dG9uIGFjdGlvbj17dGhpcy5oYW5kbGVPcGVufSBsYWJlbD17J0NoZWNrIEluJ30gLz5cbiAgICAgICAgPERpYWxvZyB0aXRsZT1cIkNoZWNrIEluIVwiIGFjdGlvbnM9e2FjdGlvbnN9IG1vZGFsIG9wZW49e3RoaXMuc3RhdGUub3Blbn0+XG4gICAgICAgICAgPERhdGVDaGVja2luUGlja2VyIGZvcm1hdERhdGU9e3RoaXMuZm9ybWF0RGF0ZX0gb25DaGFuZ2U9e3RoaXMuZ2V0RGF0ZX0gLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiWWVzdGVyZGF5L1JlY2VudCBXb3JrXCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHVuZGVybGluZVNob3c9e2ZhbHNlfVxuICAgICAgICAgICAgbXVsdGlMaW5lXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5nZXRSZWNlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldFRvZGF5fVxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJUb2RheVwiXG4gICAgICAgICAgICB1bmRlcmxpbmVTaG93PXtmYWxzZX1cbiAgICAgICAgICAgIG11bHRpTGluZVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5nZXRCbG9ja2Vyc31cbiAgICAgICAgICAgIG11bHRpTGluZVxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9eydRdWVzdGlvbnMvQmxvY2tlcnMnfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdW5kZXJsaW5lU2hvdz17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NoZWNraW4vY2hlY2tpbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMZWZ0TmF2LCBNZW51SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IE5hdmlnYXRpb25DbG9zZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jbG9zZSc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hUYXAoKSB7XG4gIGNvbnNvbGUubG9nKCdvblRvdWNoVGFwIHRyaWdnZXJlZCBvbiB0aGUgdGl0bGUgY29tcG9uZW50Jyk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGl0bGU6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBuYXY6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgekluZGV4OiAxMDAwMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGxlZnQ6IDBcbiAgfVxufTtcblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT5cbiAgPEFwcEJhclxuICAgIHN0eWxlPXtzdHlsZXMubmF2fVxuICAgIHNob3dNZW51SWNvbkJ1dHRvbj17ZmFsc2V9XG4gICAgdGl0bGU9ezxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PntgJHtwcm9wcy50ZWFtTmFtZX0gQm9hcmRgfTwvc3Bhbj59XG4gICAgb25UaXRsZVRvdWNoVGFwPXtoYW5kbGVUb3VjaFRhcH1cbiAgICBpY29uRWxlbWVudExlZnQ9ezxJY29uQnV0dG9uPjxOYXZpZ2F0aW9uQ2xvc2UgLz48L0ljb25CdXR0b24+fVxuICAgIGljb25FbGVtZW50UmlnaHQ9ezxGbGF0QnV0dG9uIGxhYmVsPVwiU2lnbiBPdXRcIiAvPn1cbiAgLz47XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBDaGVja0luIGZyb20gJy4vY2hlY2tpbic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL0NyZWF0ZVRlYW0vY3JlYXRlVGVhbS5yZWR1Y2VyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdGVhbXM6IGFjdGlvbnMuY3JlYXRlT3JKb2luU2VsZWN0b3Ioc3RhdGUpXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hlY2tJbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlcic7XG5pbXBvcnQgVGVhbVN0YXR1cyBmcm9tICcuL1RlYW1TdGF0dXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyBzdGF0dXM6IGFjdGlvbnMuZ2V0VGVhbVN0YXR1cyhzdGF0ZS5jcmVhdGVUZWFtUmVkdWNlcikgfSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoeyBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpIH0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVhbVN0YXR1cyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ21hdGVyaWFsLXVpL0xpc3QvTGlzdEl0ZW0nO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtYXRlcmlhbC11aS9BdmF0YXIvQXZhdGFyJztcbmltcG9ydCBVc2VySWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdXNlcic7XG5pbXBvcnQgeyBncmV5NDAwLCBkYXJrQmxhY2ssIGxpZ2h0QmxhY2sgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJztcblxuY29uc3QgQ2hlY2tlZEluRGlzcGxheSA9ICh7IGNoZWNraW4gfSkgPT5cbiAgPExpc3RJdGVtXG4gICAga2V5PXtjaGVja2luLmlkfVxuICAgIGxlZnRBdmF0YXI9ezxBdmF0YXIgaWNvbj17PFVzZXJJY29uIC8+fSAvPn1cbiAgICBwcmltYXJ5VGV4dD17Y2hlY2tpbi50b2RheX1cbiAgICBzZWNvbmRhcnlUZXh0PXtcbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogZGFya0JsYWNrIH19PntjaGVja2luLmRhdGUudG9TdHJpbmcoKX08L3NwYW4+IC0tXG4gICAgICAgIHtjaGVja2luLnJlY2VudFdvcmt9XG4gICAgICA8L3A+XG4gICAgfVxuICAgIHNlY29uZGFyeVRleHRMaW5lcz17Mn1cbiAgLz47XG5cbkNoZWNrZWRJbkRpc3BsYXkucHJvcFR5cGVzID0ge1xuICBjaGVja2luOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRvZGF5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmVjZW50V29yazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHF1ZXN0aW9uczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5leHBvcnQgZGVmYXVsdCBDaGVja2VkSW5EaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9DaGVja2VkSW5EaXNwbGF5LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ0E7QUFDQTtBQTNEQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBT0E7QUFBQTs7QUFFQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUZBO0FBUkE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUFBO0FBR0E7QUFMQTs7QUFPQTtBQUNBO0FBQUE7QUFLQTtBQVBBO0FBYkE7QUFDQTtBQW9CQTs7Ozs7O0FBbkNBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUFBO0FBc0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBUEE7OztBQWJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7QUFFQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBSUE7QUFGQTs7O0FBTUE7QUFGQTs7QUFLQTtBQUZBOztBQUtBO0FBRkE7O0FBS0E7QUFGQTs7QUFLQTtBQUZBOztBQUtBO0FBRkE7O0FBR0E7QUFBQTtBQW5CQTtBQUpBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUhBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUhBO0FBU0E7QUFDQTtBQUVBO0FBRUE7QUFMQTtBQU1BO0FBT0E7Ozs7OztBQWxDQTtBQUNBO0FBbUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBVEE7QUFDQTtBQWVBO0FBQ0E7QUFJQTtBQUFBO0FBTEE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFGQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBSUE7QUFIQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUhBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFIQTtBQUZBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FBR0E7QUFBQTtBQUtBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFOQTs7Ozs7O0FBaEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUdBOztBQUlBO0FBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBSkE7QUFDQTtBQVdBOztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUxBO0FBRkE7QUFDQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7QUFBQTtBQURBO0FBR0E7O0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQVRBO0FBRkE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        