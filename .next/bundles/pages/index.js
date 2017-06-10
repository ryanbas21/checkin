
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
  return _react2.default.createElement(_Card.Card, { style: props.style }, _react2.default.createElement(_Card.CardHeader, { title: 'No Recent Activity', subtitle: 'Check In your activity!' }));
};

var number = _propTypes2.default.number,
    string = _propTypes2.default.string;

NoActivityMessage.propTypes = {
  style: _propTypes2.default.shape({
    width: string.isRequired,
    display: string.isRequired,
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

var _moment = __webpack_require__(955);

var _moment2 = _interopRequireDefault(_moment);

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
  }).sort(function (a, b) {
    return (0, _moment2.default)(b.date).diff((0, _moment2.default)(a.date));
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
  return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme }, _react2.default.createElement('div', null, _react2.default.createElement(_TeamMembers2.default, null), _react2.default.createElement(_navbar2.default, { team: "Ryan's Team" }), _react2.default.createElement(_container4.default, null), _react2.default.createElement(_container2.default, null)));
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
    defaultDate: props.currentDate,
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

var _defineProperty2 = __webpack_require__(795);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
    marginTop: 80,
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
      var _React$createElement;

      return _react2.default.createElement('div', null, _react2.default.createElement(_Toggle2.default, { style: styles.toggle, onToggle: this.handleToggle, icon: _toggleOn2.default, x: true }), _react2.default.createElement(_Drawer2.default, (_React$createElement = { open: true, containerStyle: { marginTop: 65 } }, (0, _defineProperty3.default)(_React$createElement, 'open', this.state.open), (0, _defineProperty3.default)(_React$createElement, 'docked', true), _React$createElement), _react2.default.createElement(_MenuItem2.default, { style: { textAlign: 'center' } }, 'Members'), Names.map(function (name) {
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

var _Avatar = __webpack_require__(781);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Dialog = __webpack_require__(782);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(776);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(790);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

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
    title: _react2.default.createElement('span', { style: styles.title }, props.teamName + ' Scrum Board'),
    onTitleTouchTap: handleTouchTap,
    iconElementLeft: _react2.default.createElement(_IconButton2.default, null, _react2.default.createElement(_close2.default, null)),
    iconElementRight: _react2.default.createElement(_FlatButton2.default, { label: 'Sign Out' })
  });
};

Navbar.defaultProps = {
  teamName: 'Unnamed Team'
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
  var handleOpen = _ref.handleOpen,
      checkin = _ref.checkin;
  return _react2.default.createElement(_ListItem2.default, {
    onTouchTap: handleOpen,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvTm9BY3Rpdml0eU1lc3NhZ2UuanM/MzJiMTc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlci5qcz8zMmIxNzY4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vaW5kZXguanM/MzJiMTc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0LmpzPzMyYjE3NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25maWcuc2VjcmV0LmpzPzMyYjE3NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maXJlYmFzZS5qcz8zMmIxNzY4Iiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9yb290LmpzPzMyYjE3NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzPzMyYjE3NjgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzJiMTc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzPzMyYjE3NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGF0ZVBpY2tlci9EYXRlUGlja2VyLmpzPzMyYjE3NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbU1lbWJlcnMvVGVhbU1lbWJlcnMuanM/MzJiMTc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL1RlYW1TdGF0dXMuanM/MzJiMTc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NoZWNraW4uanM/MzJiMTc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzPzMyYjE3NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jb250YWluZXIuanM/MzJiMTc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcz8zMmIxNzY4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvQ2hlY2tlZEluRGlzcGxheS5qcz8zMmIxNzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRIZWFkZXIsIENhcmRUZXh0IH0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcblxuY29uc3QgTm9BY3Rpdml0eU1lc3NhZ2UgPSBwcm9wcyA9PlxuICA8Q2FyZCBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiTm8gUmVjZW50IEFjdGl2aXR5XCIgc3VidGl0bGU9XCJDaGVjayBJbiB5b3VyIGFjdGl2aXR5IVwiIC8+XG4gIDwvQ2FyZD47XG5cbmNvbnN0IHsgbnVtYmVyLCBzdHJpbmcgfSA9IFByb3BUeXBlcztcbk5vQWN0aXZpdHlNZXNzYWdlLnByb3BUeXBlcyA9IHtcbiAgc3R5bGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgd2lkdGg6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpc3BsYXk6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGp1c3RpZnlDb250ZW50OiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhbGlnbkl0ZW1zOiBzdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0IGRlZmF1bHQgTm9BY3Rpdml0eU1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL05vQWN0aXZpdHlNZXNzYWdlLmpzIiwiaW1wb3J0IGN1aWQgZnJvbSAnY3VpZCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyBjb25zdGFudHNcbmNvbnN0IENSRUFURV9URUFNID0gJ0NSRUFURV9URUFNJztcbmNvbnN0IFNFTEVDVF9URUFNID0gJ1NFTEVDVF9URUFNJztcbmNvbnN0IEFERF9DSEVDS0lOID0gJ0FERF9DSEVDS0lOJztcbmNvbnN0IEFERF9URUFNID0gJ0FERF9URUFNJztcblxuLy8gQWN0aW9uc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRlYW0gPSAobmFtZSA9ICcnLCBpZCA9IGN1aWQoKSkgPT4gKHtcbiAgdHlwZTogQ1JFQVRFX1RFQU0sXG4gIHBheWxvYWQ6IHtcbiAgICBuYW1lLFxuICAgIGlkXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VGVhbSA9IChpZCA9IGN1aWQoKSkgPT4gKHtcbiAgdHlwZTogU0VMRUNUX1RFQU0sXG4gIHBheWxvYWQ6IGlkXG59KTtcblxuLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIGFkZFRlYW0gYW5kIGNyZWF0ZVRlYW0/XG5leHBvcnQgY29uc3QgYWRkVGVhbSA9IChuYW1lID0gJycsIGlkID0gY3VpZCgpKSA9PiAoe1xuICB0eXBlOiBBRERfVEVBTSxcbiAgcGF5bG9hZDoge1xuICAgIG5hbWUsXG4gICAgaWRcbiAgfVxufSk7XG5cbi8vIEFkZCBkZWZhdWx0IHZhbHVlcyBmb3IgZGF0ZSwgdG9kYXksIHJlY2VudCwgYW5kIGJsb2NrZXJzXG5leHBvcnQgY29uc3QgYWRkQ2hlY2tJbiA9ICh7XG4gIGRhdGUgPSBEYXRlLm5vdygpLFxuICB0b2RheSA9ICcnLFxuICByZWNlbnRXb3JrID0gJycsXG4gIHF1ZXN0aW9ucyA9ICcnLFxuICBpZCA9IGN1aWQoKSxcbiAgdXNlcklEID0gY3VpZCgpXG59KSA9PiAoe1xuICB0eXBlOiBBRERfQ0hFQ0tJTixcbiAgcGF5bG9hZDoge1xuICAgIGRhdGUsXG4gICAgdG9kYXksXG4gICAgcmVjZW50V29yayxcbiAgICBxdWVzdGlvbnMsXG4gICAgaWQsXG4gICAgdXNlcklEXG4gIH1cbn0pO1xuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBnZXRUZWFtU3RhdHVzID0gc3RhdGUgPT5cbiAgT2JqZWN0LmtleXMoc3RhdGUpLm1hcChpZCA9PiBzdGF0ZVtpZF0pLnNvcnQoKGEsIGIpID0+IG1vbWVudChiLmRhdGUpLmRpZmYobW9tZW50KGEuZGF0ZSkpKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVPckpvaW5TZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnRlYW1zIHx8IFtdO1xuXG4vLyBSZWR1Y2VyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRlYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX0NIRUNLSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgY2FzZSBTRUxFQ1RfVEVBTToge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjYXNlIENSRUFURV9URUFNOlxuICAgICAgcmV0dXJuIHt9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vY3JlYXRlVGVhbS5yZWR1Y2VyLmpzIiwiZXhwb3J0IGNyZWF0ZVRlYW1SZWR1Y2VyIGZyb20gJy4vY3JlYXRlVGVhbS5yZWR1Y2VyJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTW9iaWxlVGVhclNoZWV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG11aVRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmVwYXJlU3R5bGVzIH0gPSB0aGlzLmNvbnRleHQubXVpVGhlbWU7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAyNCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggI2Q5ZDlkOScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJ25vbmUnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0sXG4gICAgICBib3R0b21UZWFyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBtYXJnaW5Ub3A6IC0xMCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MFxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17cHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtwcmVwYXJlU3R5bGVzKHN0eWxlcy5jb250YWluZXIpfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3R5bGU9e3ByZXBhcmVTdHlsZXMoc3R5bGVzLmJvdHRvbVRlYXIpfSBzcmM9XCIvc3RhdGljL2JvdHRvbXRlYXIuc3ZnXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlVGVhclNoZWV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTW9iaWxlVGVhclNoZWV0L01vYmlsZVRlYXJTaGVldC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpS2V5OiAnQUl6YVN5RGcycHVKYnZkcnF0X0V1b0VURnlYMnduQkdrdVl1b0V3JyxcbiAgYXV0aERvbWFpbjogJ3NjcnVtLWJvYXJkLTRkMmM1LmZpcmViYXNlYXBwLmNvbScsXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zY3J1bS1ib2FyZC00ZDJjNS5maXJlYmFzZWlvLmNvbScsXG4gIHByb2plY3RJZDogJ3NjcnVtLWJvYXJkLTRkMmM1JyxcbiAgc3RvcmFnZUJ1Y2tldDogJ3NjcnVtLWJvYXJkLTRkMmM1LmFwcHNwb3QuY29tJyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICczMTgwNzM1ODMzMTgnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9jb25maWcuc2VjcmV0LmpzIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuc2VjcmV0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICB0cnkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gU2tpcCB0aGUgXCJhbHJlYWR5IGV4aXN0c1wiIG1lc3NhZ2Ugd2hpY2ggaXMgbm90IGFuIGVycm9yIHdoZW4gaG90LXJlbG9hZGluZ1xuICAgIGlmICghL2FscmVhZHkgZXhpc3RzLy50ZXN0KGVyci5tZXNzYWdlKSkge1xuICAgICAgY29uc29sZS5sb2coYEZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yID0+ICR7ZXJyfWApO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZmlyZWJhc2UuanMiLCJpbXBvcnQgeyBmb3JrLCBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5mdW5jdGlvbiogcGxhY2Vob2xkZXIoKSB7XG4gIHlpZWxkICdwbGFjZWhvbGRlcic7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gIHlpZWxkIGFsbChbZm9yayhwbGFjZWhvbGRlcildKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYWdhcy9yb290LmpzIiwiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMvcm9vdCc7XG5pbXBvcnQgY29uZmlndXJlRmlyZWJhc2UgZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7IGNyZWF0ZVRlYW1SZWR1Y2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVUZWFtJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoeyBjcmVhdGVUZWFtUmVkdWNlciB9KTtcblxuY29uc3Qgc2FnYXMgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZShzYWdhcyksXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAmJiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKVxuICAgIDogZiA9PiBmXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcbiAgc2FnYXMucnVuKHJvb3RTYWdhKTtcbiAgY29uZmlndXJlRmlyZWJhc2UoKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJ21hdGVyaWFsLXVpL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXInO1xuaW1wb3J0IENoZWNraW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jb250YWluZXInO1xuaW1wb3J0IFRlYW1NZW1iZXJzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RlYW1NZW1iZXJzL1RlYW1NZW1iZXJzJztcbmltcG9ydCBUZWFtU3RhdHVzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvY29udGFpbmVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zcmMvc3RvcmUvaW5kZXgnO1xuXG50cnkge1xuICBpbmplY3RUYXBFdmVudFBsdWdpbigpO1xufSBjYXRjaCAoZSkge31cblxuY29uc3QgbXVpVGhlbWUgPSBnZXRNdWlUaGVtZSh7XG4gIHVzZXJBZ2VudDogZmFsc2Vcbn0pO1xuY29uc3QgQm9hcmQgPSAoKSA9PlxuICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuICAgIDxkaXY+XG4gICAgICA8VGVhbU1lbWJlcnMgLz5cbiAgICAgIDxOYXZiYXIgdGVhbT17XCJSeWFuJ3MgVGVhbVwifSAvPlxuICAgICAgPFRlYW1TdGF0dXMgLz5cbiAgICAgIDxDaGVja2luIC8+XG4gICAgPC9kaXY+XG4gIDwvTXVpVGhlbWVQcm92aWRlcj47XG5cbi8vIC8vIGNyZWF0ZSBoaWdoZXItb3JkZXIgcGFnZSBjb21wb25lbnQsIHVzaW5nIGNvbXBvc2UoKVxuLy8gZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbi8vICAgd2l0aE11aVRoZW1lKHVpQWdlbnQpLFxuLy8gICB3aXRoUmVkdXgoc3RvcmUgKVxuLy8gKShjb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEJvYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24nO1xuaW1wb3J0IENvbnRlbnRBZGQgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvYWRkJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAyMFxufTtcblxuY29uc3QgQWRkQnV0dG9uID0gcHJvcHMgPT5cbiAgPEZsb2F0aW5nQWN0aW9uQnV0dG9uIHNlY29uZGFyeSBvblRvdWNoVGFwPXtwcm9wcy5hY3Rpb259IHN0eWxlPXtzdHlsZX0+XG4gICAgPENvbnRlbnRBZGQgLz5cbiAgPC9GbG9hdGluZ0FjdGlvbkJ1dHRvbj47XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEJ1dHRvbjtcblxuQWRkQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQWRkQnV0dG9uL0FkZEJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdtYXRlcmlhbC11aS9EYXRlUGlja2VyJztcbmltcG9ydCBDYWxlbmRhckljb24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2dvL2NhbGVuZGFyJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHVuZGVybGluZToge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXJcbiAgICAgIGRlZmF1bHREYXRlPXtwcm9wcy5jdXJyZW50RGF0ZX1cbiAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiRGF0ZVwiXG4gICAgICBhdXRvT2tcbiAgICAgIGZvcm1hdERhdGU9e3Byb3BzLmZvcm1hdERhdGV9XG4gICAgICB1bmRlcmxpbmVTaG93PXtmYWxzZX1cbiAgICAgIHN0eWxlPXtzdHlsZS51bmRlcmxpbmV9XG4gICAgICBoaW50VGV4dD1cIlNlbGVjdCBDaGVja2luIERhdGVcIlxuICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxuICAgICAgaWNvbj17PENhbGVuZGFySWNvbiAvPn1cbiAgICAvPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRGF0ZVBpY2tlci9EYXRlUGlja2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJ21hdGVyaWFsLXVpL1RvZ2dsZSc7XG5pbXBvcnQgRm9udEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvRm9udEljb24nO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtYXRlcmlhbC11aS9BdmF0YXInO1xuaW1wb3J0IFVzZXJJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS91c2VyJztcbmltcG9ydCBUb2dnbGVPZmYgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3RvZ2dsZS1vZmYnO1xuaW1wb3J0IFRvZ2dsZU9uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS90b2dnbGUtb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRvZ2dsZToge1xuICAgIG1hcmdpblRvcDogODAsXG4gICAgcmlnaHQ6IDAsXG4gICAgekluZGV4OiAxMDAwMCxcbiAgICB0aHVtYk9mZjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmY2NjYydcbiAgICB9LFxuICAgIHRyYWNrT2ZmOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmY5ZDlkJ1xuICAgIH0sXG4gICAgdHJhY2tTd2l0Y2hlZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmOWQ5ZCdcbiAgICB9XG4gIH1cbn07XG5jb25zdCBOYW1lcyA9IFsnUnlhbicsICdFcmljJywgJ0pvaG4nLCAnTWlrZScsICdHZW9yZ2UnLCAnQ2FzZXknLCAnR3JlZyddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtTWVtYmVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUb2dnbGUgc3R5bGU9e3N0eWxlcy50b2dnbGV9IG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX0gaWNvbj17VG9nZ2xlT259IHggLz5cbiAgICAgICAgPERyYXdlciBvcGVuIGNvbnRhaW5lclN0eWxlPXt7IG1hcmdpblRvcDogNjUgfX0gb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBkb2NrZWQ+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TWVtYmVyczwvTWVudUl0ZW0+XG4gICAgICAgICAge05hbWVzLm1hcChuYW1lID0+XG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTAgfX0+XG4gICAgICAgICAgICAgIDxBdmF0YXIgaWNvbj17PFVzZXJJY29uIC8+fSBzdHlsZT17eyBtYXJnaW46IDUgfX0gLz57bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5UZWFtTWVtYmVycy5kZWZhdWx0UHJvcHMgPSB7XG4gIHBob3RvVVJMOiA8Rm9udEljb24gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiAvPlxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1NZW1iZXJzL1RlYW1NZW1iZXJzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXZhdGFyJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tICdtYXRlcmlhbC11aS9MaXN0JztcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XG5pbXBvcnQgU3ViaGVhZGVyIGZyb20gJ21hdGVyaWFsLXVpL1N1YmhlYWRlcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcbmltcG9ydCBDb21tdW5pY2F0aW9uQ2hhdEJ1YmJsZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvY29tbXVuaWNhdGlvbi9jaGF0LWJ1YmJsZSc7XG5pbXBvcnQgTW9iaWxlVGVhclNoZWV0IGZyb20gJy4uL01vYmlsZVRlYXJTaGVldC9Nb2JpbGVUZWFyU2hlZXQnO1xuaW1wb3J0IENoZWNrZWRJbkRpc3BsYXkgZnJvbSAnLi9DaGVja2VkSW5EaXNwbGF5JztcbmltcG9ydCBOb0FjdGl2aXR5TWVzc2FnZSBmcm9tICcuL05vQWN0aXZpdHlNZXNzYWdlJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG91dGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgd2lkdGg6ICc1MCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgbGlzdDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHdpZHRoOiAzMDAsXG4gICAgbWFyZ2luOiA1LFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfVxufTtcblxuY2xhc3MgVGVhbVN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkNsb3NlXCIgcHJpbWFyeSBrZXlib2FyZEZvY3VzZWQgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0gLz5cbiAgICBdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5vdXRlcn0+XG4gICAgICAgIHt0aGlzLnByb3BzLnN0YXR1cy5sZW5ndGhcbiAgICAgICAgICA/IDxQYXBlciBzdHlsZT17c3R5bGUucGFwZXJ9PlxuICAgICAgICAgICAgPExpc3Qgc3R5bGU9e3N0eWxlLmxpc3R9PlxuICAgICAgICAgICAgICA8U3ViaGVhZGVyPkFjdGl2aXR5PC9TdWJoZWFkZXI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0YXR1cy5tYXAoY2hlY2tpbiA9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tlZEluRGlzcGxheVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPcGVuPXt0aGlzLmhhbmRsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2hlY2tpbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tpbj17Y2hlY2tpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjaGVja2luLnRvZGF5fVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBtb2RhbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwPnJlY2VudCB3b3JrIDoge2NoZWNraW4ucmVjZW50V29ya308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlRvZGF5cyB3b3JrIDoge2NoZWNraW4udG9kYXl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ibG9ja2VycyA6IHtjaGVja2luLnF1ZXN0aW9uc308L3A+XG4gICAgICAgICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgOiA8Tm9BY3Rpdml0eU1lc3NhZ2Ugc3R5bGU9e3N0eWxlLnBhcGVyfSAvPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRlYW1TdGF0dXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL1RlYW1TdGF0dXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgQWRkQnV0dG9uIGZyb20gJy4uL0FkZEJ1dHRvbi9BZGRCdXR0b24nO1xuaW1wb3J0IERhdGVDaGVja2luUGlja2VyIGZyb20gJy4uL0RhdGVQaWNrZXIvRGF0ZVBpY2tlcic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMjAsXG4gIGNoZWNrSW46IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDMwLFxuICAgIHJpZ2h0OiAwXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrSW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBjaGVja0luOiB7XG4gICAgICBkYXRlOiBtb21lbnQoKS5mb3JtYXQoJ2wnKVxuICAgIH1cbiAgfTtcbiAgZ2V0RGF0ZSA9IChlLCBkYXRlKSA9PiB7XG4gICAgY29uc3QgdG9kYXlzRGF0ZSA9IG1vbWVudChkYXRlKS5mb3JtYXQoJ2wnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja2luLFxuICAgICAgICBkYXRlOiB0b2RheXNEYXRlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGdldFRvZGF5ID0gZSA9PiB7XG4gICAgY29uc3QgdG9kYXlzV29yayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja0luLFxuICAgICAgICB0b2RheTogdG9kYXlzV29ya1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBnZXRSZWNlbnQgPSBlID0+IHtcbiAgICBjb25zdCByZWNlbnRXb3JrID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNrSW4sXG4gICAgICAgIHJlY2VudFdvcmtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZ2V0QmxvY2tlcnMgPSBlID0+IHtcbiAgICBjb25zdCBibG9ja2VycyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja0luLFxuICAgICAgICBxdWVzdGlvbnM6IGJsb2NrZXJzXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvcm1hdERhdGUgPSBkYXRlID0+IG1vbWVudChkYXRlKS5mb3JtYXQoJ2wnKTtcbiAgc3VibWl0Rm9ybSA9IGUgPT4ge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGRDaGVja0luKHRoaXMuc3RhdGUuY2hlY2tJbik7XG4gIH07XG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkNhbmNlbFwiIHByaW1hcnkgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0gLz4sXG4gICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIlN1Ym1pdFwiIHByaW1hcnkgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0gb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfSAvPlxuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNoZWNrSW59PlxuICAgICAgICA8QWRkQnV0dG9uIGFjdGlvbj17dGhpcy5oYW5kbGVPcGVufSBsYWJlbD17J0NoZWNrIEluJ30gLz5cbiAgICAgICAgPERpYWxvZyB0aXRsZT1cIkNoZWNrIEluIVwiIGFjdGlvbnM9e2FjdGlvbnN9IG1vZGFsIG9wZW49e3RoaXMuc3RhdGUub3Blbn0+XG4gICAgICAgICAgPERhdGVDaGVja2luUGlja2VyIGZvcm1hdERhdGU9e3RoaXMuZm9ybWF0RGF0ZX0gb25DaGFuZ2U9e3RoaXMuZ2V0RGF0ZX0gLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiWWVzdGVyZGF5L1JlY2VudCBXb3JrXCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHVuZGVybGluZVNob3c9e2ZhbHNlfVxuICAgICAgICAgICAgbXVsdGlMaW5lXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5nZXRSZWNlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldFRvZGF5fVxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJUb2RheVwiXG4gICAgICAgICAgICB1bmRlcmxpbmVTaG93PXtmYWxzZX1cbiAgICAgICAgICAgIG11bHRpTGluZVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5nZXRCbG9ja2Vyc31cbiAgICAgICAgICAgIG11bHRpTGluZVxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9eydRdWVzdGlvbnMvQmxvY2tlcnMnfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdW5kZXJsaW5lU2hvdz17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NoZWNraW4vY2hlY2tpbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMZWZ0TmF2LCBNZW51SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IE5hdmlnYXRpb25DbG9zZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jbG9zZSc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hUYXAoKSB7XG4gIGNvbnNvbGUubG9nKCdvblRvdWNoVGFwIHRyaWdnZXJlZCBvbiB0aGUgdGl0bGUgY29tcG9uZW50Jyk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGl0bGU6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBuYXY6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgekluZGV4OiAxMDAwMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGxlZnQ6IDBcbiAgfVxufTtcblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT5cbiAgPEFwcEJhclxuICAgIHN0eWxlPXtzdHlsZXMubmF2fVxuICAgIHNob3dNZW51SWNvbkJ1dHRvbj17ZmFsc2V9XG4gICAgdGl0bGU9ezxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PntgJHtwcm9wcy50ZWFtTmFtZX0gU2NydW0gQm9hcmRgfTwvc3Bhbj59XG4gICAgb25UaXRsZVRvdWNoVGFwPXtoYW5kbGVUb3VjaFRhcH1cbiAgICBpY29uRWxlbWVudExlZnQ9ezxJY29uQnV0dG9uPjxOYXZpZ2F0aW9uQ2xvc2UgLz48L0ljb25CdXR0b24+fVxuICAgIGljb25FbGVtZW50UmlnaHQ9ezxGbGF0QnV0dG9uIGxhYmVsPVwiU2lnbiBPdXRcIiAvPn1cbiAgLz47XG5cbk5hdmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRlYW1OYW1lOiAnVW5uYW1lZCBUZWFtJ1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBDaGVja0luIGZyb20gJy4vY2hlY2tpbic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL0NyZWF0ZVRlYW0vY3JlYXRlVGVhbS5yZWR1Y2VyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdGVhbXM6IGFjdGlvbnMuY3JlYXRlT3JKb2luU2VsZWN0b3Ioc3RhdGUpXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hlY2tJbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlcic7XG5pbXBvcnQgVGVhbVN0YXR1cyBmcm9tICcuL1RlYW1TdGF0dXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyBzdGF0dXM6IGFjdGlvbnMuZ2V0VGVhbVN0YXR1cyhzdGF0ZS5jcmVhdGVUZWFtUmVkdWNlcikgfSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoeyBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpIH0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVhbVN0YXR1cyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ21hdGVyaWFsLXVpL0xpc3QvTGlzdEl0ZW0nO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtYXRlcmlhbC11aS9BdmF0YXIvQXZhdGFyJztcbmltcG9ydCBVc2VySWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdXNlcic7XG5pbXBvcnQgeyBncmV5NDAwLCBkYXJrQmxhY2ssIGxpZ2h0QmxhY2sgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJztcblxuY29uc3QgQ2hlY2tlZEluRGlzcGxheSA9ICh7IGhhbmRsZU9wZW4sIGNoZWNraW4gfSkgPT5cbiAgPExpc3RJdGVtXG4gICAgb25Ub3VjaFRhcD17aGFuZGxlT3Blbn1cbiAgICBrZXk9e2NoZWNraW4uaWR9XG4gICAgbGVmdEF2YXRhcj17PEF2YXRhciBpY29uPXs8VXNlckljb24gLz59IC8+fVxuICAgIHByaW1hcnlUZXh0PXtjaGVja2luLnRvZGF5fVxuICAgIHNlY29uZGFyeVRleHQ9e1xuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBkYXJrQmxhY2sgfX0+e2NoZWNraW4uZGF0ZS50b1N0cmluZygpfTwvc3Bhbj4gLS1cbiAgICAgICAge2NoZWNraW4ucmVjZW50V29ya31cbiAgICAgIDwvcD5cbiAgICB9XG4gICAgc2Vjb25kYXJ5VGV4dExpbmVzPXsyfVxuICAvPjtcblxuQ2hlY2tlZEluRGlzcGxheS5wcm9wVHlwZXMgPSB7XG4gIGNoZWNraW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdG9kYXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZWNlbnRXb3JrOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcXVlc3Rpb25zOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrZWRJbkRpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL0NoZWNrZWRJbkRpc3BsYXkuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0NBO0FBQ0E7QUEzREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBOztBQUVBO0FBRkE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU9BO0FBQUE7O0FBRUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBOztBQUVBOztBQUVBO0FBRkE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFGQTtBQVJBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQUE7QUFHQTtBQUxBOztBQU9BO0FBQ0E7QUFBQTtBQUtBO0FBUEE7QUFiQTtBQUNBO0FBb0JBOzs7Ozs7QUFuQ0E7QUFFQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQUE7QUFzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUdBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQVJBOzs7QUFiQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBRUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFGQTs7QUFLQTtBQUZBOztBQUdBO0FBQUE7QUFWQTtBQURBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBSEE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQU9BOzs7Ozs7QUF0QkE7QUFDQTtBQXVCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQWJBO0FBQ0E7QUFtQkE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFHQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBTUE7QUFFQTtBQUNBO0FBR0E7QUFKQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQVJBOzs7Ozs7QUEyQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBRkE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7O0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBSUE7QUFIQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUhBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFIQTtBQUZBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FBR0E7QUFBQTtBQUtBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFOQTs7Ozs7O0FBbkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUdBOztBQUlBO0FBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBSkE7QUFDQTtBQVdBOztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUxBO0FBRkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7QUFBQTtBQURBO0FBR0E7O0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFWQTtBQUZBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        