
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvTm9BY3Rpdml0eU1lc3NhZ2UuanM/NWU3YTYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlci5qcz81ZTdhNjA3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vaW5kZXguanM/NWU3YTYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0LmpzPzVlN2E2MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25maWcuc2VjcmV0LmpzPzVlN2E2MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maXJlYmFzZS5qcz81ZTdhNjA3Iiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9yb290LmpzPzVlN2E2MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzPzVlN2E2MDciLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NWU3YTYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzPzVlN2E2MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGF0ZVBpY2tlci9EYXRlUGlja2VyLmpzPzVlN2E2MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbU1lbWJlcnMvVGVhbU1lbWJlcnMuanM/NWU3YTYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL1RlYW1TdGF0dXMuanM/NWU3YTYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NoZWNraW4uanM/NWU3YTYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzPzVlN2E2MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jb250YWluZXIuanM/NWU3YTYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcz81ZTdhNjA3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvQ2hlY2tlZEluRGlzcGxheS5qcz81ZTdhNjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRIZWFkZXIsIENhcmRUZXh0IH0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcblxuY29uc3QgTm9BY3Rpdml0eU1lc3NhZ2UgPSBwcm9wcyA9PlxuICA8Q2FyZCBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiTm8gUmVjZW50IEFjdGl2aXR5XCIgc3VidGl0bGU9XCJDaGVjayBJbiB5b3VyIGFjdGl2aXR5IVwiIC8+XG4gIDwvQ2FyZD47XG5cbmNvbnN0IHsgbnVtYmVyLCBzdHJpbmcgfSA9IFByb3BUeXBlcztcbk5vQWN0aXZpdHlNZXNzYWdlLnByb3BUeXBlcyA9IHtcbiAgc3R5bGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgd2lkdGg6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpc3BsYXk6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGp1c3RpZnlDb250ZW50OiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhbGlnbkl0ZW1zOiBzdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0IGRlZmF1bHQgTm9BY3Rpdml0eU1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL05vQWN0aXZpdHlNZXNzYWdlLmpzIiwiaW1wb3J0IGN1aWQgZnJvbSAnY3VpZCc7XG5cbi8vIGNvbnN0YW50c1xuY29uc3QgQ1JFQVRFX1RFQU0gPSAnQ1JFQVRFX1RFQU0nO1xuY29uc3QgU0VMRUNUX1RFQU0gPSAnU0VMRUNUX1RFQU0nO1xuY29uc3QgQUREX0NIRUNLSU4gPSAnQUREX0NIRUNLSU4nO1xuY29uc3QgQUREX1RFQU0gPSAnQUREX1RFQU0nO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgY29uc3QgY3JlYXRlVGVhbSA9IChuYW1lID0gJycsIGlkID0gY3VpZCgpKSA9PiAoe1xuICB0eXBlOiBDUkVBVEVfVEVBTSxcbiAgcGF5bG9hZDoge1xuICAgIG5hbWUsXG4gICAgaWRcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RUZWFtID0gKGlkID0gY3VpZCgpKSA9PiAoe1xuICB0eXBlOiBTRUxFQ1RfVEVBTSxcbiAgcGF5bG9hZDogaWRcbn0pO1xuXG4vLyBEaWZmZXJlbmNlIGJldHdlZW4gYWRkVGVhbSBhbmQgY3JlYXRlVGVhbT9cbmV4cG9ydCBjb25zdCBhZGRUZWFtID0gKG5hbWUgPSAnJywgaWQgPSBjdWlkKCkpID0+ICh7XG4gIHR5cGU6IEFERF9URUFNLFxuICBwYXlsb2FkOiB7XG4gICAgbmFtZSxcbiAgICBpZFxuICB9XG59KTtcblxuLy8gQWRkIGRlZmF1bHQgdmFsdWVzIGZvciBkYXRlLCB0b2RheSwgcmVjZW50LCBhbmQgYmxvY2tlcnNcbmV4cG9ydCBjb25zdCBhZGRDaGVja0luID0gKHtcbiAgZGF0ZSA9IERhdGUubm93KCksXG4gIHRvZGF5ID0gJycsXG4gIHJlY2VudFdvcmsgPSAnJyxcbiAgcXVlc3Rpb25zID0gJycsXG4gIGlkID0gY3VpZCgpLFxuICB1c2VySUQgPSBjdWlkKClcbn0pID0+ICh7XG4gIHR5cGU6IEFERF9DSEVDS0lOLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0ZSxcbiAgICB0b2RheSxcbiAgICByZWNlbnRXb3JrLFxuICAgIHF1ZXN0aW9ucyxcbiAgICBpZCxcbiAgICB1c2VySURcbiAgfVxufSk7XG5cbi8vIFNlbGVjdG9yc1xuZXhwb3J0IGNvbnN0IGdldFRlYW1TdGF0dXMgPSBzdGF0ZSA9PlxuICBPYmplY3Qua2V5cyhzdGF0ZSkubWFwKGlkID0+IHN0YXRlW2lkXSk7XG5leHBvcnQgY29uc3QgY3JlYXRlT3JKb2luU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS50ZWFtcyB8fCBbXTtcblxuLy8gUmVkdWNlclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUZWFtUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9DSEVDS0lOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5pZF06IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgIGNhc2UgU0VMRUNUX1RFQU06IHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY2FzZSBDUkVBVEVfVEVBTTpcbiAgICAgIHJldHVybiB7fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlci5qcyIsImV4cG9ydCBjcmVhdGVUZWFtUmVkdWNlciBmcm9tICcuL2NyZWF0ZVRlYW0ucmVkdWNlcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DcmVhdGVUZWFtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIE1vYmlsZVRlYXJTaGVldCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBtdWlUaGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJlcGFyZVN0eWxlcyB9ID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDI0LFxuICAgICAgICBtYXJnaW5SaWdodDogMjQsXG4gICAgICAgIG1heFdpZHRoOiAzNjAsXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgIH0sXG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4ICNkOWQ5ZDknLFxuICAgICAgICBib3JkZXJCb3R0b206ICdub25lJyxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9LFxuICAgICAgYm90dG9tVGVhcjoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgbWFyZ2luVG9wOiAtMTAsXG4gICAgICAgIG1heFdpZHRoOiAzNjBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3ByZXBhcmVTdHlsZXMoc3R5bGVzLnJvb3QpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17cHJlcGFyZVN0eWxlcyhzdHlsZXMuY29udGFpbmVyKX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIHN0eWxlPXtwcmVwYXJlU3R5bGVzKHN0eWxlcy5ib3R0b21UZWFyKX0gc3JjPVwiL3N0YXRpYy9ib3R0b210ZWFyLnN2Z1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVRlYXJTaGVldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01vYmlsZVRlYXJTaGVldC9Nb2JpbGVUZWFyU2hlZXQuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFwaUtleTogJ0FJemFTeURnMnB1SmJ2ZHJxdF9FdW9FVEZ5WDJ3bkJHa3VZdW9FdycsXG4gIGF1dGhEb21haW46ICdzY3J1bS1ib2FyZC00ZDJjNS5maXJlYmFzZWFwcC5jb20nLFxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vc2NydW0tYm9hcmQtNGQyYzUuZmlyZWJhc2Vpby5jb20nLFxuICBwcm9qZWN0SWQ6ICdzY3J1bS1ib2FyZC00ZDJjNScsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdzY3J1bS1ib2FyZC00ZDJjNS5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnMzE4MDczNTgzMzE4J1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvY29uZmlnLnNlY3JldC5qcyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLnNlY3JldCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFNraXAgdGhlIFwiYWxyZWFkeSBleGlzdHNcIiBtZXNzYWdlIHdoaWNoIGlzIG5vdCBhbiBlcnJvciB3aGVuIGhvdC1yZWxvYWRpbmdcbiAgICBpZiAoIS9hbHJlYWR5IGV4aXN0cy8udGVzdChlcnIubWVzc2FnZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBGaXJlYmFzZSBpbml0aWFsaXphdGlvbiBlcnJvciA9PiAke2Vycn1gKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2ZpcmViYXNlLmpzIiwiaW1wb3J0IHsgZm9yaywgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuZnVuY3Rpb24qIHBsYWNlaG9sZGVyKCkge1xuICB5aWVsZCAncGxhY2Vob2xkZXInO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCkge1xuICB5aWVsZCBhbGwoW2ZvcmsocGxhY2Vob2xkZXIpXSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2FnYXMvcm9vdC5qcyIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzL3Jvb3QnO1xuaW1wb3J0IGNvbmZpZ3VyZUZpcmViYXNlIGZyb20gJy4uL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVUZWFtUmVkdWNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlVGVhbSc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHsgY3JlYXRlVGVhbVJlZHVjZXIgfSk7XG5cbmNvbnN0IHNhZ2FzID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxuY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlKFxuICBhcHBseU1pZGRsZXdhcmUoc2FnYXMpLFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gJiYgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKClcbiAgICA6IGYgPT4gZlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG4gIHNhZ2FzLnJ1bihyb290U2FnYSk7XG4gIGNvbmZpZ3VyZUZpcmViYXNlKCk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdtYXRlcmlhbC11aS91dGlscy9jb2xvck1hbmlwdWxhdG9yJztcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdtYXRlcmlhbC11aS9BcHBCYXInO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyJztcbmltcG9ydCBDaGVja2luIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2NoZWNraW4vY29udGFpbmVyJztcbmltcG9ydCBUZWFtTWVtYmVycyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UZWFtTWVtYmVycy9UZWFtTWVtYmVycyc7XG5pbXBvcnQgVGVhbVN0YXR1cyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3JjL3N0b3JlL2luZGV4JztcblxudHJ5IHtcbiAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoe1xuICB1c2VyQWdlbnQ6IGZhbHNlXG59KTtcbmNvbnN0IEJvYXJkID0gKCkgPT5cbiAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cbiAgICA8ZGl2PlxuICAgICAgPFRlYW1NZW1iZXJzIC8+XG4gICAgICA8TmF2YmFyIHRlYW09e1wiUnlhbidzIFRlYW1cIn0gLz5cbiAgICAgIDxUZWFtU3RhdHVzIC8+XG4gICAgICA8Q2hlY2tpbiAvPlxuICAgIDwvZGl2PlxuICA8L011aVRoZW1lUHJvdmlkZXI+O1xuXG4vLyAvLyBjcmVhdGUgaGlnaGVyLW9yZGVyIHBhZ2UgY29tcG9uZW50LCB1c2luZyBjb21wb3NlKClcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4vLyAgIHdpdGhNdWlUaGVtZSh1aUFnZW50KSxcbi8vICAgd2l0aFJlZHV4KHN0b3JlIClcbi8vICkoY29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShCb2FyZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZsb2F0aW5nQWN0aW9uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uJztcbmltcG9ydCBDb250ZW50QWRkIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L2FkZCc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMjBcbn07XG5cbmNvbnN0IEFkZEJ1dHRvbiA9IHByb3BzID0+XG4gIDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiBzZWNvbmRhcnkgb25Ub3VjaFRhcD17cHJvcHMuYWN0aW9ufSBzdHlsZT17c3R5bGV9PlxuICAgIDxDb250ZW50QWRkIC8+XG4gIDwvRmxvYXRpbmdBY3Rpb25CdXR0b24+O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRCdXR0b247XG5cbkFkZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FkZEJ1dHRvbi9BZGRCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGF0ZVBpY2tlcic7XG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9nby9jYWxlbmRhcic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICB1bmRlcmxpbmU6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyXG4gICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGVcIlxuICAgICAgYXV0b09rXG4gICAgICBmb3JtYXREYXRlPXtwcm9wcy5mb3JtYXREYXRlfVxuICAgICAgdW5kZXJsaW5lU2hvdz17ZmFsc2V9XG4gICAgICBzdHlsZT17c3R5bGUudW5kZXJsaW5lfVxuICAgICAgaGludFRleHQ9XCJTZWxlY3QgQ2hlY2tpbiBEYXRlXCJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cbiAgICAgIGljb249ezxDYWxlbmRhckljb24gLz59XG4gICAgLz5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0RhdGVQaWNrZXIvRGF0ZVBpY2tlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ21hdGVyaWFsLXVpL0RyYXdlcic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdtYXRlcmlhbC11aS9Ub2dnbGUnO1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ21hdGVyaWFsLXVpL0ZvbnRJY29uJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXZhdGFyJztcbmltcG9ydCBVc2VySWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdXNlcic7XG5pbXBvcnQgVG9nZ2xlT2ZmIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS90b2dnbGUtb2ZmJztcbmltcG9ydCBUb2dnbGVPbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdG9nZ2xlLW9uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB0b2dnbGU6IHtcbiAgICBtYXJnaW5Ub3A6IDgwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogMTAwMDAsXG4gICAgdGh1bWJPZmY6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmNjY2MnXG4gICAgfSxcbiAgICB0cmFja09mZjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmOWQ5ZCdcbiAgICB9LFxuICAgIHRyYWNrU3dpdGNoZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZjlkOWQnXG4gICAgfVxuICB9XG59O1xuY29uc3QgTmFtZXMgPSBbJ1J5YW4nLCAnRXJpYycsICdKb2huJywgJ01pa2UnLCAnR2VvcmdlJywgJ0Nhc2V5JywgJ0dyZWcnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbU1lbWJlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VG9nZ2xlIHN0eWxlPXtzdHlsZXMudG9nZ2xlfSBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9IGljb249e1RvZ2dsZU9ufSB4IC8+XG4gICAgICAgIDxEcmF3ZXIgb3BlbiBjb250YWluZXJTdHlsZT17eyBtYXJnaW5Ub3A6IDY1IH19IG9wZW49e3RoaXMuc3RhdGUub3Blbn0gZG9ja2VkPlxuICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk1lbWJlcnM8L01lbnVJdGVtPlxuICAgICAgICAgIHtOYW1lcy5tYXAobmFtZSA9PlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bmFtZX0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDEwIH19PlxuICAgICAgICAgICAgICA8QXZhdGFyIGljb249ezxVc2VySWNvbiAvPn0gc3R5bGU9e3sgbWFyZ2luOiA1IH19IC8+e25hbWV9XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVGVhbU1lbWJlcnMuZGVmYXVsdFByb3BzID0ge1xuICBwaG90b1VSTDogPEZvbnRJY29uIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgLz5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtTWVtYmVycy9UZWFtTWVtYmVycy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ21hdGVyaWFsLXVpL0F2YXRhcic7XG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpL0xpc3QnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcbmltcG9ydCBTdWJoZWFkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvU3ViaGVhZGVyJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IENvbW11bmljYXRpb25DaGF0QnViYmxlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb21tdW5pY2F0aW9uL2NoYXQtYnViYmxlJztcbmltcG9ydCBNb2JpbGVUZWFyU2hlZXQgZnJvbSAnLi4vTW9iaWxlVGVhclNoZWV0L01vYmlsZVRlYXJTaGVldCc7XG5pbXBvcnQgQ2hlY2tlZEluRGlzcGxheSBmcm9tICcuL0NoZWNrZWRJbkRpc3BsYXknO1xuaW1wb3J0IE5vQWN0aXZpdHlNZXNzYWdlIGZyb20gJy4vTm9BY3Rpdml0eU1lc3NhZ2UnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgb3V0ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICB3aWR0aDogJzUwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBsaXN0OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6IDMwMCxcbiAgICBtYXJnaW46IDUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9XG59O1xuXG5jb25zdCBUZWFtU3RhdHVzID0gcHJvcHMgPT5cbiAgPGRpdiBzdHlsZT17c3R5bGUub3V0ZXJ9PlxuICAgIHtwcm9wcy5zdGF0dXMubGVuZ3RoXG4gICAgICA/IDxQYXBlciBzdHlsZT17c3R5bGUucGFwZXJ9PlxuICAgICAgICA8TGlzdCBzdHlsZT17c3R5bGUubGlzdH0+XG4gICAgICAgICAgPFN1YmhlYWRlcj5BY3Rpdml0eTwvU3ViaGVhZGVyPlxuICAgICAgICAgIHtwcm9wcy5zdGF0dXMubWFwKGNoZWNraW4gPT4gPENoZWNrZWRJbkRpc3BsYXkga2V5PXtjaGVja2luLmlkfSBjaGVja2luPXtjaGVja2lufSAvPil9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvUGFwZXI+XG4gICAgICA6IDxOb0FjdGl2aXR5TWVzc2FnZSBzdHlsZT17c3R5bGUucGFwZXJ9IC8+fVxuICA8L2Rpdj47XG5leHBvcnQgZGVmYXVsdCBUZWFtU3RhdHVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9UZWFtU3RhdHVzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEFkZEJ1dHRvbiBmcm9tICcuLi9BZGRCdXR0b24vQWRkQnV0dG9uJztcbmltcG9ydCBEYXRlQ2hlY2tpblBpY2tlciBmcm9tICcuLi9EYXRlUGlja2VyL0RhdGVQaWNrZXInO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDIwLFxuICBjaGVja0luOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAzMCxcbiAgICByaWdodDogMFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja0luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfTtcbiAgZ2V0RGF0ZSA9IChlLCBkYXRlKSA9PiB7XG4gICAgY29uc3QgdG9kYXlzRGF0ZSA9IG1vbWVudChkYXRlKS5mb3JtYXQoJ2wnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja2luLFxuICAgICAgICBkYXRlOiB0b2RheXNEYXRlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGdldFRvZGF5ID0gZSA9PiB7XG4gICAgY29uc3QgdG9kYXlzV29yayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja0luLFxuICAgICAgICB0b2RheTogdG9kYXlzV29ya1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBnZXRSZWNlbnQgPSBlID0+IHtcbiAgICBjb25zdCByZWNlbnRXb3JrID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNrSW4sXG4gICAgICAgIHJlY2VudFdvcmtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZ2V0QmxvY2tlcnMgPSBlID0+IHtcbiAgICBjb25zdCBibG9ja2VycyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIGNoZWNrSW46IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jaGVja0luLFxuICAgICAgICBxdWVzdGlvbnM6IGJsb2NrZXJzXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvcm1hdERhdGUgPSBkYXRlID0+IG1vbWVudChkYXRlKS5mb3JtYXQoJ2wnKTtcbiAgc3VibWl0Rm9ybSA9IGUgPT4ge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGRDaGVja0luKHRoaXMuc3RhdGUuY2hlY2tJbik7XG4gIH07XG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkNhbmNlbFwiIHByaW1hcnkgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0gLz4sXG4gICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIlN1Ym1pdFwiIHByaW1hcnkgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVDbG9zZX0gb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfSAvPlxuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNoZWNrSW59PlxuICAgICAgICA8QWRkQnV0dG9uIGFjdGlvbj17dGhpcy5oYW5kbGVPcGVufSBsYWJlbD17J0NoZWNrIEluJ30gLz5cbiAgICAgICAgPERpYWxvZyB0aXRsZT1cIkNoZWNrIEluIVwiIGFjdGlvbnM9e2FjdGlvbnN9IG1vZGFsIG9wZW49e3RoaXMuc3RhdGUub3Blbn0+XG4gICAgICAgICAgPERhdGVDaGVja2luUGlja2VyIGZvcm1hdERhdGU9e3RoaXMuZm9ybWF0RGF0ZX0gb25DaGFuZ2U9e3RoaXMuZ2V0RGF0ZX0gLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiWWVzdGVyZGF5L1JlY2VudCBXb3JrXCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHVuZGVybGluZVNob3c9e2ZhbHNlfVxuICAgICAgICAgICAgbXVsdGlMaW5lXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5nZXRSZWNlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldFRvZGF5fVxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJUb2RheVwiXG4gICAgICAgICAgICB1bmRlcmxpbmVTaG93PXtmYWxzZX1cbiAgICAgICAgICAgIG11bHRpTGluZVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5nZXRCbG9ja2Vyc31cbiAgICAgICAgICAgIG11bHRpTGluZVxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9eydRdWVzdGlvbnMvQmxvY2tlcnMnfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdW5kZXJsaW5lU2hvdz17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NoZWNraW4vY2hlY2tpbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMZWZ0TmF2LCBNZW51SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IE5hdmlnYXRpb25DbG9zZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jbG9zZSc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hUYXAoKSB7XG4gIGNvbnNvbGUubG9nKCdvblRvdWNoVGFwIHRyaWdnZXJlZCBvbiB0aGUgdGl0bGUgY29tcG9uZW50Jyk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGl0bGU6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBuYXY6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgekluZGV4OiAxMDAwMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGxlZnQ6IDBcbiAgfVxufTtcblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT5cbiAgPEFwcEJhclxuICAgIHN0eWxlPXtzdHlsZXMubmF2fVxuICAgIHNob3dNZW51SWNvbkJ1dHRvbj17ZmFsc2V9XG4gICAgdGl0bGU9ezxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PntgJHtwcm9wcy50ZWFtTmFtZX0gQm9hcmRgfTwvc3Bhbj59XG4gICAgb25UaXRsZVRvdWNoVGFwPXtoYW5kbGVUb3VjaFRhcH1cbiAgICBpY29uRWxlbWVudExlZnQ9ezxJY29uQnV0dG9uPjxOYXZpZ2F0aW9uQ2xvc2UgLz48L0ljb25CdXR0b24+fVxuICAgIGljb25FbGVtZW50UmlnaHQ9ezxGbGF0QnV0dG9uIGxhYmVsPVwiU2lnbiBPdXRcIiAvPn1cbiAgLz47XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBDaGVja0luIGZyb20gJy4vY2hlY2tpbic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL0NyZWF0ZVRlYW0vY3JlYXRlVGVhbS5yZWR1Y2VyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdGVhbXM6IGFjdGlvbnMuY3JlYXRlT3JKb2luU2VsZWN0b3Ioc3RhdGUpXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hlY2tJbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlcic7XG5pbXBvcnQgVGVhbVN0YXR1cyBmcm9tICcuL1RlYW1TdGF0dXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyBzdGF0dXM6IGFjdGlvbnMuZ2V0VGVhbVN0YXR1cyhzdGF0ZS5jcmVhdGVUZWFtUmVkdWNlcikgfSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoeyBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpIH0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVhbVN0YXR1cyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ21hdGVyaWFsLXVpL0xpc3QvTGlzdEl0ZW0nO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtYXRlcmlhbC11aS9BdmF0YXIvQXZhdGFyJztcbmltcG9ydCBVc2VySWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvdXNlcic7XG5pbXBvcnQgeyBncmV5NDAwLCBkYXJrQmxhY2ssIGxpZ2h0QmxhY2sgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJztcblxuY29uc3QgQ2hlY2tlZEluRGlzcGxheSA9ICh7IGNoZWNraW4gfSkgPT5cbiAgPExpc3RJdGVtXG4gICAga2V5PXtjaGVja2luLmlkfVxuICAgIGxlZnRBdmF0YXI9ezxBdmF0YXIgaWNvbj17PFVzZXJJY29uIC8+fSAvPn1cbiAgICBwcmltYXJ5VGV4dD17Y2hlY2tpbi50b2RheX1cbiAgICBzZWNvbmRhcnlUZXh0PXtcbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogZGFya0JsYWNrIH19PntjaGVja2luLmRhdGUudG9TdHJpbmcoKX08L3NwYW4+IC0tXG4gICAgICAgIHtjaGVja2luLnJlY2VudFdvcmt9XG4gICAgICA8L3A+XG4gICAgfVxuICAgIHNlY29uZGFyeVRleHRMaW5lcz17Mn1cbiAgLz47XG5cbkNoZWNrZWRJbkRpc3BsYXkucHJvcFR5cGVzID0ge1xuICBjaGVja2luOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRvZGF5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmVjZW50V29yazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHF1ZXN0aW9uczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5leHBvcnQgZGVmYXVsdCBDaGVja2VkSW5EaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9DaGVja2VkSW5EaXNwbGF5LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NDQTtBQUNBO0FBM0RBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTtBQUZBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7QUFPQTtBQUFBOztBQUVBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTtBQUZBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBRkE7QUFSQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQUE7QUFHQTtBQUxBOztBQU9BO0FBQ0E7QUFBQTtBQUtBO0FBUEE7QUFiQTtBQUNBO0FBb0JBOzs7Ozs7QUFuQ0E7QUFFQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQUE7QUFzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFQQTs7O0FBYkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOztBQUVBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBRkE7O0FBS0E7QUFGQTs7QUFHQTtBQUFBO0FBVkE7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUhBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFPQTs7Ozs7O0FBdEJBO0FBQ0E7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBYkE7QUFDQTtBQW1CQTtBQUNBO0FBS0E7QUFBQTtBQU5BO0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBRkE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFIQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUhBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFLQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBRUE7QUFDQTtBQUVBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7Ozs7OztBQWhGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFHQTs7QUFJQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUpBO0FBQ0E7QUFXQTs7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFMQTtBQUZBO0FBQ0E7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBO0FBQUE7QUFEQTtBQUdBOztBQUNBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFUQTtBQUZBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        