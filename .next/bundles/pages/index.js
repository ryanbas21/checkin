
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(639);

var _FlatButton = __webpack_require__(554);

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

/***/ 1001:
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

var _Avatar = __webpack_require__(574);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Dialog = __webpack_require__(566);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(554);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(602);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _List = __webpack_require__(645);

var _Paper = __webpack_require__(545);

var _Paper2 = _interopRequireDefault(_Paper);

var _Subheader = __webpack_require__(603);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = __webpack_require__(575);

var _Divider2 = _interopRequireDefault(_Divider);

var _chatBubble = __webpack_require__(964);

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _MobileTearSheet = __webpack_require__(997);

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

var _CheckedInDisplay = __webpack_require__(999);

var _CheckedInDisplay2 = _interopRequireDefault(_CheckedInDisplay);

var _NoActivityMessage = __webpack_require__(1000);

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

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(612);

var _redux = __webpack_require__(563);

var _createTeam = __webpack_require__(611);

var actions = _interopRequireWildcard(_createTeam);

var _TeamStatus = __webpack_require__(1001);

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

/***/ 1003:
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

var _Dialog = __webpack_require__(566);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Divider = __webpack_require__(575);

var _Divider2 = _interopRequireDefault(_Divider);

var _Paper = __webpack_require__(545);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(562);

var _TextField2 = _interopRequireDefault(_TextField);

var _moment = __webpack_require__(538);

var _moment2 = _interopRequireDefault(_moment);

var _FlatButton = __webpack_require__(554);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(602);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AddButton = __webpack_require__(992);

var _AddButton2 = _interopRequireDefault(_AddButton);

var _DatePicker = __webpack_require__(994);

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

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(612);

var _redux = __webpack_require__(563);

var _checkin = __webpack_require__(1003);

var _checkin2 = _interopRequireDefault(_checkin);

var _createTeam = __webpack_require__(611);

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

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(949);

var _AppBar = __webpack_require__(597);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__(556);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = __webpack_require__(973);

var _close2 = _interopRequireDefault(_close);

var _FlatButton = __webpack_require__(554);

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

/***/ 1006:
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

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(810);

var _firebase2 = _interopRequireDefault(_firebase);

var _config = __webpack_require__(1006);

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

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(66);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = _callee;

var _effects = __webpack_require__(793);

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

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(801);


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrJoinSelector = exports.getTeamStatus = exports.addCheckIn = exports.addTeam = exports.selectTeam = exports.createTeam = undefined;

var _defineProperty2 = __webpack_require__(570);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(96);

var _extends4 = _interopRequireDefault(_extends3);

var _keys = __webpack_require__(233);

var _keys2 = _interopRequireDefault(_keys);

exports.default = createTeamReducer;

var _cuid = __webpack_require__(804);

var _cuid2 = _interopRequireDefault(_cuid);

var _moment = __webpack_require__(538);

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

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(522);

var _reduxSaga = __webpack_require__(1037);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxDevtoolsExtension = __webpack_require__(1036);

var _redux = __webpack_require__(563);

var _root = __webpack_require__(1008);

var _root2 = _interopRequireDefault(_root);

var _firebase = __webpack_require__(1007);

var _firebase2 = _interopRequireDefault(_firebase);

var _CreateTeam = __webpack_require__(993);

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

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(782);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

var _reactTapEventPlugin = __webpack_require__(790);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = __webpack_require__(609);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _colorManipulator = __webpack_require__(552);

var _getMuiTheme = __webpack_require__(610);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = __webpack_require__(597);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _navbar = __webpack_require__(1005);

var _navbar2 = _interopRequireDefault(_navbar);

var _container = __webpack_require__(1004);

var _container2 = _interopRequireDefault(_container);

var _TeamMembers = __webpack_require__(998);

var _TeamMembers2 = _interopRequireDefault(_TeamMembers);

var _container3 = __webpack_require__(1002);

var _container4 = _interopRequireDefault(_container3);

var _index = __webpack_require__(783);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(995);

var _index4 = _interopRequireDefault(_index3);

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
  return _react2.default.createElement('div', null, _react2.default.createElement(_TeamMembers2.default, null), _react2.default.createElement(_navbar2.default, { team: "Ryan's Team" }), _react2.default.createElement(_container4.default, null), _react2.default.createElement(_container2.default, null));
};

exports.default = (0, _index4.default)(Board);

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

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FloatingActionButton = __webpack_require__(643);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = __webpack_require__(965);

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

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTeamReducer = undefined;

var _createTeam = __webpack_require__(611);

var _createTeam2 = _interopRequireDefault(_createTeam);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.createTeamReducer = _createTeam2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateTeam/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/CreateTeam/index.js"); } } })();

/***/ }),

/***/ 994:
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

var _DatePicker = __webpack_require__(640);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _calendar = __webpack_require__(1014);

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

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(563);

var _nextReduxWrapper = __webpack_require__(782);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _index = __webpack_require__(783);

var _index2 = _interopRequireDefault(_index);

var _withMUITheme = __webpack_require__(996);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// compose higher order Component
exports.default = (0, _redux.compose)((0, _withMUITheme.withMuiTheme)(_withMUITheme.userAgent), (0, _nextReduxWrapper2.default)(_index2.default));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MaterialHOC/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MaterialHOC/index.js"); } } })();

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMuiTheme = exports.userAgent = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _getMuiTheme = __webpack_require__(610);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(609);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = __webpack_require__(790);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

try {
  (0, _reactTapEventPlugin2.default)();
} catch (e) {}

var userAgent = exports.userAgent = (0, _getMuiTheme2.default)({ userAgent: false });
var withMuiTheme = exports.withMuiTheme = function withMuiTheme(userAgent) {
  return function (Component) {
    return function () {
      return _react2.default.createElement('div', null, _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: userAgent }, _react2.default.createElement(Component, null)));
    };
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MaterialHOC/withMUITheme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/checkin/src/components/MaterialHOC/withMUITheme.js"); } } })();

/***/ }),

/***/ 997:
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

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(570);

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

var _Drawer = __webpack_require__(641);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(579);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Toggle = __webpack_require__(658);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _FontIcon = __webpack_require__(576);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Avatar = __webpack_require__(574);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _user = __webpack_require__(785);

var _user2 = _interopRequireDefault(_user);

var _toggleOff = __webpack_require__(1012);

var _toggleOff2 = _interopRequireDefault(_toggleOff);

var _toggleOn = __webpack_require__(1013);

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

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItem = __webpack_require__(577);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Avatar = __webpack_require__(631);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _user = __webpack_require__(785);

var _user2 = _interopRequireDefault(_user);

var _colors = __webpack_require__(581);

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
    primaryText: checkin.date.toString() + ' : ' + checkin.today.split('').slice(0, 25).join('') + '...',
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, 'Recent Work: ' + checkin.recentWork.split('').slice(0, 10).join('') + '...'), ' ', '--', 'Click To View More'),
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

},[1049]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvTm9BY3Rpdml0eU1lc3NhZ2UuanM/MjVmMGIwZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL1RlYW1TdGF0dXMuanM/MjVmMGIwZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoZWNraW4vY2hlY2tpbi5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoZWNraW4vY29udGFpbmVyLmpzPzI1ZjBiMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9saWIvY29uZmlnLnNlY3JldC5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9saWIvZmlyZWJhc2UuanM/MjVmMGIwZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcm9vdC5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRlYW0vY3JlYXRlVGVhbS5yZWR1Y2VyLmpzPzI1ZjBiMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzPzI1ZjBiMGYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MjVmMGIwZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzPzI1ZjBiMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlVGVhbS9pbmRleC5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RhdGVQaWNrZXIvRGF0ZVBpY2tlci5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdGVyaWFsSE9DL2luZGV4LmpzPzI1ZjBiMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWF0ZXJpYWxIT0Mvd2l0aE1VSVRoZW1lLmpzPzI1ZjBiMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9iaWxlVGVhclNoZWV0L01vYmlsZVRlYXJTaGVldC5qcz8yNWYwYjBmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW1NZW1iZXJzL1RlYW1NZW1iZXJzLmpzPzI1ZjBiMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9DaGVja2VkSW5EaXNwbGF5LmpzPzI1ZjBiMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZEhlYWRlciwgQ2FyZFRleHQgfSBmcm9tICdtYXRlcmlhbC11aS9DYXJkJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuXG5jb25zdCBOb0FjdGl2aXR5TWVzc2FnZSA9IHByb3BzID0+XG4gIDxDYXJkIHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgPENhcmRIZWFkZXIgdGl0bGU9XCJObyBSZWNlbnQgQWN0aXZpdHlcIiBzdWJ0aXRsZT1cIkNoZWNrIEluIHlvdXIgYWN0aXZpdHkhXCIgLz5cbiAgPC9DYXJkPjtcblxuY29uc3QgeyBudW1iZXIsIHN0cmluZyB9ID0gUHJvcFR5cGVzO1xuTm9BY3Rpdml0eU1lc3NhZ2UucHJvcFR5cGVzID0ge1xuICBzdHlsZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB3aWR0aDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGlzcGxheTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAganVzdGlmeUNvbnRlbnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFsaWduSXRlbXM6IHN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5leHBvcnQgZGVmYXVsdCBOb0FjdGl2aXR5TWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvTm9BY3Rpdml0eU1lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtYXRlcmlhbC11aS9BdmF0YXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpL0xpc3QnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcbmltcG9ydCBTdWJoZWFkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvU3ViaGVhZGVyJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IENvbW11bmljYXRpb25DaGF0QnViYmxlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb21tdW5pY2F0aW9uL2NoYXQtYnViYmxlJztcbmltcG9ydCBNb2JpbGVUZWFyU2hlZXQgZnJvbSAnLi4vTW9iaWxlVGVhclNoZWV0L01vYmlsZVRlYXJTaGVldCc7XG5pbXBvcnQgQ2hlY2tlZEluRGlzcGxheSBmcm9tICcuL0NoZWNrZWRJbkRpc3BsYXknO1xuaW1wb3J0IE5vQWN0aXZpdHlNZXNzYWdlIGZyb20gJy4vTm9BY3Rpdml0eU1lc3NhZ2UnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgb3V0ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICB3aWR0aDogJzUwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBsaXN0OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6IDMwMCxcbiAgICBtYXJnaW46IDUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9XG59O1xuXG5jbGFzcyBUZWFtU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQ2xvc2VcIiBwcmltYXJ5IGtleWJvYXJkRm9jdXNlZCBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfSAvPlxuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLm91dGVyfT5cbiAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzLmxlbmd0aFxuICAgICAgICAgID8gPFBhcGVyIHN0eWxlPXtzdHlsZS5wYXBlcn0+XG4gICAgICAgICAgICA8TGlzdCBzdHlsZT17c3R5bGUubGlzdH0+XG4gICAgICAgICAgICAgIDxTdWJoZWFkZXI+QWN0aXZpdHk8L1N1YmhlYWRlcj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzLm1hcChjaGVja2luID0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxDaGVja2VkSW5EaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9wZW49e3RoaXMuaGFuZGxlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtjaGVja2luLmlkfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2luPXtjaGVja2lufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NoZWNraW4udG9kYXl9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHA+cmVjZW50IHdvcmsgOiB7Y2hlY2tpbi5yZWNlbnRXb3JrfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+VG9kYXlzIHdvcmsgOiB7Y2hlY2tpbi50b2RheX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPmJsb2NrZXJzIDoge2NoZWNraW4ucXVlc3Rpb25zfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA6IDxOb0FjdGl2aXR5TWVzc2FnZSBzdHlsZT17c3R5bGUucGFwZXJ9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGVhbVN0YXR1cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1TdGF0dXMvVGVhbVN0YXR1cy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlcic7XG5pbXBvcnQgVGVhbVN0YXR1cyBmcm9tICcuL1RlYW1TdGF0dXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyBzdGF0dXM6IGFjdGlvbnMuZ2V0VGVhbVN0YXR1cyhzdGF0ZS5jcmVhdGVUZWFtUmVkdWNlcikgfSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoeyBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpIH0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVhbVN0YXR1cyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL2NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBBZGRCdXR0b24gZnJvbSAnLi4vQWRkQnV0dG9uL0FkZEJ1dHRvbic7XG5pbXBvcnQgRGF0ZUNoZWNraW5QaWNrZXIgZnJvbSAnLi4vRGF0ZVBpY2tlci9EYXRlUGlja2VyJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAyMCxcbiAgY2hlY2tJbjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMzAsXG4gICAgcmlnaHQ6IDBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tJbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGNoZWNrSW46IHtcbiAgICAgIGRhdGU6IG1vbWVudCgpLmZvcm1hdCgnbCcpXG4gICAgfVxuICB9O1xuICBnZXREYXRlID0gKGUsIGRhdGUpID0+IHtcbiAgICBjb25zdCB0b2RheXNEYXRlID0gbW9tZW50KGRhdGUpLmZvcm1hdCgnbCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNraW4sXG4gICAgICAgIGRhdGU6IHRvZGF5c0RhdGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZ2V0VG9kYXkgPSBlID0+IHtcbiAgICBjb25zdCB0b2RheXNXb3JrID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNrSW4sXG4gICAgICAgIHRvZGF5OiB0b2RheXNXb3JrXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGdldFJlY2VudCA9IGUgPT4ge1xuICAgIGNvbnN0IHJlY2VudFdvcmsgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICBjaGVja0luOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuY2hlY2tJbixcbiAgICAgICAgcmVjZW50V29ya1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBnZXRCbG9ja2VycyA9IGUgPT4ge1xuICAgIGNvbnN0IGJsb2NrZXJzID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY2hlY2tJbjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNoZWNrSW4sXG4gICAgICAgIHF1ZXN0aW9uczogYmxvY2tlcnNcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9ybWF0RGF0ZSA9IGRhdGUgPT4gbW9tZW50KGRhdGUpLmZvcm1hdCgnbCcpO1xuICBzdWJtaXRGb3JtID0gZSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmFkZENoZWNrSW4odGhpcy5zdGF0ZS5jaGVja0luKTtcbiAgfTtcbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9O1xuICBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQ2FuY2VsXCIgcHJpbWFyeSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfSAvPixcbiAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiU3VibWl0XCIgcHJpbWFyeSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfSBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm19IC8+XG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY2hlY2tJbn0+XG4gICAgICAgIDxBZGRCdXR0b24gYWN0aW9uPXt0aGlzLmhhbmRsZU9wZW59IGxhYmVsPXsnQ2hlY2sgSW4nfSAvPlxuICAgICAgICA8RGlhbG9nIHRpdGxlPVwiQ2hlY2sgSW4hXCIgYWN0aW9ucz17YWN0aW9uc30gbW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufT5cbiAgICAgICAgICA8RGF0ZUNoZWNraW5QaWNrZXIgZm9ybWF0RGF0ZT17dGhpcy5mb3JtYXREYXRlfSBvbkNoYW5nZT17dGhpcy5nZXREYXRlfSAvPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJZZXN0ZXJkYXkvUmVjZW50IFdvcmtcIlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdW5kZXJsaW5lU2hvdz17ZmFsc2V9XG4gICAgICAgICAgICBtdWx0aUxpbmVcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldFJlY2VudH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZ2V0VG9kYXl9XG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlRvZGF5XCJcbiAgICAgICAgICAgIHVuZGVybGluZVNob3c9e2ZhbHNlfVxuICAgICAgICAgICAgbXVsdGlMaW5lXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldEJsb2NrZXJzfVxuICAgICAgICAgICAgbXVsdGlMaW5lXG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD17J1F1ZXN0aW9ucy9CbG9ja2Vycyd9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICB1bmRlcmxpbmVTaG93PXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jaGVja2luLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgQ2hlY2tJbiBmcm9tICcuL2NoZWNraW4nO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9DcmVhdGVUZWFtL2NyZWF0ZVRlYW0ucmVkdWNlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHRlYW1zOiBhY3Rpb25zLmNyZWF0ZU9ySm9pblNlbGVjdG9yKHN0YXRlKVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrSW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2hlY2tpbi9jb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGVmdE5hdiwgTWVudUl0ZW0gfSBmcm9tICdtYXRlcmlhbC11aSc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9JY29uQnV0dG9uJztcbmltcG9ydCBOYXZpZ2F0aW9uQ2xvc2UgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vY2xvc2UnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5cbmZ1bmN0aW9uIGhhbmRsZVRvdWNoVGFwKCkge1xuICBjb25zb2xlLmxvZygnb25Ub3VjaFRhcCB0cmlnZ2VyZWQgb24gdGhlIHRpdGxlIGNvbXBvbmVudCcpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRpdGxlOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgbmF2OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIHpJbmRleDogMTAwMDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBsZWZ0OiAwXG4gIH1cbn07XG5cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+XG4gIDxBcHBCYXJcbiAgICBzdHlsZT17c3R5bGVzLm5hdn1cbiAgICBzaG93TWVudUljb25CdXR0b249e2ZhbHNlfVxuICAgIHRpdGxlPXs8c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT57YCR7cHJvcHMudGVhbU5hbWV9IFNjcnVtIEJvYXJkYH08L3NwYW4+fVxuICAgIG9uVGl0bGVUb3VjaFRhcD17aGFuZGxlVG91Y2hUYXB9XG4gICAgaWNvbkVsZW1lbnRMZWZ0PXs8SWNvbkJ1dHRvbj48TmF2aWdhdGlvbkNsb3NlIC8+PC9JY29uQnV0dG9uPn1cbiAgICBpY29uRWxlbWVudFJpZ2h0PXs8RmxhdEJ1dHRvbiBsYWJlbD1cIlNpZ24gT3V0XCIgLz59XG4gIC8+O1xuXG5OYXZiYXIuZGVmYXVsdFByb3BzID0ge1xuICB0ZWFtTmFtZTogJ1VubmFtZWQgVGVhbSdcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhcGlLZXk6ICdBSXphU3lEZzJwdUpidmRycXRfRXVvRVRGeVgyd25CR2t1WXVvRXcnLFxuICBhdXRoRG9tYWluOiAnc2NydW0tYm9hcmQtNGQyYzUuZmlyZWJhc2VhcHAuY29tJyxcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL3NjcnVtLWJvYXJkLTRkMmM1LmZpcmViYXNlaW8uY29tJyxcbiAgcHJvamVjdElkOiAnc2NydW0tYm9hcmQtNGQyYzUnLFxuICBzdG9yYWdlQnVja2V0OiAnc2NydW0tYm9hcmQtNGQyYzUuYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzMxODA3MzU4MzMxOCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2NvbmZpZy5zZWNyZXQuanMiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5zZWNyZXQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHRyeSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBTa2lwIHRoZSBcImFscmVhZHkgZXhpc3RzXCIgbWVzc2FnZSB3aGljaCBpcyBub3QgYW4gZXJyb3Igd2hlbiBob3QtcmVsb2FkaW5nXG4gICAgaWYgKCEvYWxyZWFkeSBleGlzdHMvLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRmlyZWJhc2UgaW5pdGlhbGl6YXRpb24gZXJyb3IgPT4gJHtlcnJ9YCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9maXJlYmFzZS5qcyIsImltcG9ydCB7IGZvcmssIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmZ1bmN0aW9uKiBwbGFjZWhvbGRlcigpIHtcbiAgeWllbGQgJ3BsYWNlaG9sZGVyJztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHBsYWNlaG9sZGVyKV0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhZ2FzL3Jvb3QuanMiLCJpbXBvcnQgY3VpZCBmcm9tICdjdWlkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIGNvbnN0YW50c1xuY29uc3QgQ1JFQVRFX1RFQU0gPSAnQ1JFQVRFX1RFQU0nO1xuY29uc3QgU0VMRUNUX1RFQU0gPSAnU0VMRUNUX1RFQU0nO1xuY29uc3QgQUREX0NIRUNLSU4gPSAnQUREX0NIRUNLSU4nO1xuY29uc3QgQUREX1RFQU0gPSAnQUREX1RFQU0nO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgY29uc3QgY3JlYXRlVGVhbSA9IChuYW1lID0gJycsIGlkID0gY3VpZCgpKSA9PiAoe1xuICB0eXBlOiBDUkVBVEVfVEVBTSxcbiAgcGF5bG9hZDoge1xuICAgIG5hbWUsXG4gICAgaWRcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RUZWFtID0gKGlkID0gY3VpZCgpKSA9PiAoe1xuICB0eXBlOiBTRUxFQ1RfVEVBTSxcbiAgcGF5bG9hZDogaWRcbn0pO1xuXG4vLyBEaWZmZXJlbmNlIGJldHdlZW4gYWRkVGVhbSBhbmQgY3JlYXRlVGVhbT9cbmV4cG9ydCBjb25zdCBhZGRUZWFtID0gKG5hbWUgPSAnJywgaWQgPSBjdWlkKCkpID0+ICh7XG4gIHR5cGU6IEFERF9URUFNLFxuICBwYXlsb2FkOiB7XG4gICAgbmFtZSxcbiAgICBpZFxuICB9XG59KTtcblxuLy8gQWRkIGRlZmF1bHQgdmFsdWVzIGZvciBkYXRlLCB0b2RheSwgcmVjZW50LCBhbmQgYmxvY2tlcnNcbmV4cG9ydCBjb25zdCBhZGRDaGVja0luID0gKHtcbiAgZGF0ZSA9IERhdGUubm93KCksXG4gIHRvZGF5ID0gJycsXG4gIHJlY2VudFdvcmsgPSAnJyxcbiAgcXVlc3Rpb25zID0gJycsXG4gIGlkID0gY3VpZCgpLFxuICB1c2VySUQgPSBjdWlkKClcbn0pID0+ICh7XG4gIHR5cGU6IEFERF9DSEVDS0lOLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0ZSxcbiAgICB0b2RheSxcbiAgICByZWNlbnRXb3JrLFxuICAgIHF1ZXN0aW9ucyxcbiAgICBpZCxcbiAgICB1c2VySURcbiAgfVxufSk7XG5cbi8vIFNlbGVjdG9yc1xuZXhwb3J0IGNvbnN0IGdldFRlYW1TdGF0dXMgPSBzdGF0ZSA9PlxuICBPYmplY3Qua2V5cyhzdGF0ZSkubWFwKGlkID0+IHN0YXRlW2lkXSkuc29ydCgoYSwgYikgPT4gbW9tZW50KGIuZGF0ZSkuZGlmZihtb21lbnQoYS5kYXRlKSkpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU9ySm9pblNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUudGVhbXMgfHwgW107XG5cbi8vIFJlZHVjZXJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGVhbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfQ0hFQ0tJTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuaWRdOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICBjYXNlIFNFTEVDVF9URUFNOiB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNhc2UgQ1JFQVRFX1RFQU06XG4gICAgICByZXR1cm4ge307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlVGVhbS9jcmVhdGVUZWFtLnJlZHVjZXIuanMiLCJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcy9yb290JztcbmltcG9ydCBjb25maWd1cmVGaXJlYmFzZSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlVGVhbVJlZHVjZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVRlYW0nO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IGNyZWF0ZVRlYW1SZWR1Y2VyIH0pO1xuXG5jb25zdCBzYWdhcyA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FzKSxcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICYmIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpXG4gICAgOiBmID0+IGZcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuICBzYWdhcy5ydW4ocm9vdFNhZ2EpO1xuICBjb25maWd1cmVGaXJlYmFzZSgpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBmYWRlIH0gZnJvbSAnbWF0ZXJpYWwtdWkvdXRpbHMvY29sb3JNYW5pcHVsYXRvcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcic7XG5pbXBvcnQgQ2hlY2tpbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9jaGVja2luL2NvbnRhaW5lcic7XG5pbXBvcnQgVGVhbU1lbWJlcnMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGVhbU1lbWJlcnMvVGVhbU1lbWJlcnMnO1xuaW1wb3J0IFRlYW1TdGF0dXMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGVhbVN0YXR1cy9jb250YWluZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3NyYy9zdG9yZS9pbmRleCc7XG5pbXBvcnQgd2l0aE1VSVRoZW1lIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01hdGVyaWFsSE9DL2luZGV4JztcblxudHJ5IHtcbiAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoe1xuICB1c2VyQWdlbnQ6IGZhbHNlXG59KTtcbmNvbnN0IEJvYXJkID0gKCkgPT5cbiAgPGRpdj5cbiAgICA8VGVhbU1lbWJlcnMgLz5cbiAgICA8TmF2YmFyIHRlYW09e1wiUnlhbidzIFRlYW1cIn0gLz5cbiAgICA8VGVhbVN0YXR1cyAvPlxuICAgIDxDaGVja2luIC8+XG4gIDwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1VSVRoZW1lKEJvYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24nO1xuaW1wb3J0IENvbnRlbnRBZGQgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvYWRkJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAyMFxufTtcblxuY29uc3QgQWRkQnV0dG9uID0gcHJvcHMgPT5cbiAgPEZsb2F0aW5nQWN0aW9uQnV0dG9uIHNlY29uZGFyeSBvblRvdWNoVGFwPXtwcm9wcy5hY3Rpb259IHN0eWxlPXtzdHlsZX0+XG4gICAgPENvbnRlbnRBZGQgLz5cbiAgPC9GbG9hdGluZ0FjdGlvbkJ1dHRvbj47XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEJ1dHRvbjtcblxuQWRkQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQWRkQnV0dG9uL0FkZEJ1dHRvbi5qcyIsImV4cG9ydCBjcmVhdGVUZWFtUmVkdWNlciBmcm9tICcuL2NyZWF0ZVRlYW0ucmVkdWNlcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DcmVhdGVUZWFtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ21hdGVyaWFsLXVpL0RhdGVQaWNrZXInO1xuaW1wb3J0IENhbGVuZGFySWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZ28vY2FsZW5kYXInO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgdW5kZXJsaW5lOiB7XG4gICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RGF0ZVBpY2tlclxuICAgICAgZGVmYXVsdERhdGU9e3Byb3BzLmN1cnJlbnREYXRlfVxuICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJEYXRlXCJcbiAgICAgIGF1dG9Pa1xuICAgICAgZm9ybWF0RGF0ZT17cHJvcHMuZm9ybWF0RGF0ZX1cbiAgICAgIHVuZGVybGluZVNob3c9e2ZhbHNlfVxuICAgICAgc3R5bGU9e3N0eWxlLnVuZGVybGluZX1cbiAgICAgIGhpbnRUZXh0PVwiU2VsZWN0IENoZWNraW4gRGF0ZVwiXG4gICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICBpY29uPXs8Q2FsZW5kYXJJY29uIC8+fVxuICAgIC8+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9EYXRlUGlja2VyL0RhdGVQaWNrZXIuanMiLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IHVzZXJBZ2VudCwgd2l0aE11aVRoZW1lIH0gZnJvbSAnLi93aXRoTVVJVGhlbWUnO1xuXG4vLyBjb21wb3NlIGhpZ2hlciBvcmRlciBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aE11aVRoZW1lKHVzZXJBZ2VudCksIHdpdGhSZWR1eChzdG9yZSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWF0ZXJpYWxIT0MvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5cbnRyeSB7XG4gIGluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG59IGNhdGNoIChlKSB7fVxuXG5leHBvcnQgY29uc3QgdXNlckFnZW50ID0gZ2V0TXVpVGhlbWUoeyB1c2VyQWdlbnQ6IGZhbHNlIH0pO1xuZXhwb3J0IGNvbnN0IHdpdGhNdWlUaGVtZSA9IHVzZXJBZ2VudCA9PiBDb21wb25lbnQgPT4gKCkgPT5cbiAgPGRpdj5cbiAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17dXNlckFnZW50fT5cbiAgICAgIDxDb21wb25lbnQgLz5cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gIDwvZGl2PjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hdGVyaWFsSE9DL3dpdGhNVUlUaGVtZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBNb2JpbGVUZWFyU2hlZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgbXVpVGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByZXBhcmVTdHlsZXMgfSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyNCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDI0LFxuICAgICAgICBtYXhXaWR0aDogMzYwLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjZDlkOWQ5JyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnbm9uZScsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgfSxcbiAgICAgIGJvdHRvbVRlYXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG1hcmdpblRvcDogLTEwLFxuICAgICAgICBtYXhXaWR0aDogMzYwXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtwcmVwYXJlU3R5bGVzKHN0eWxlcy5yb290KX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ByZXBhcmVTdHlsZXMoc3R5bGVzLmNvbnRhaW5lcil9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzdHlsZT17cHJlcGFyZVN0eWxlcyhzdHlsZXMuYm90dG9tVGVhcil9IHNyYz1cIi9zdGF0aWMvYm90dG9tdGVhci5zdmdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVUZWFyU2hlZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVUZWFyU2hlZXQvTW9iaWxlVGVhclNoZWV0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJ21hdGVyaWFsLXVpL1RvZ2dsZSc7XG5pbXBvcnQgRm9udEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvRm9udEljb24nO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtYXRlcmlhbC11aS9BdmF0YXInO1xuaW1wb3J0IFVzZXJJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS91c2VyJztcbmltcG9ydCBUb2dnbGVPZmYgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3RvZ2dsZS1vZmYnO1xuaW1wb3J0IFRvZ2dsZU9uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS90b2dnbGUtb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRvZ2dsZToge1xuICAgIG1hcmdpblRvcDogODAsXG4gICAgcmlnaHQ6IDAsXG4gICAgekluZGV4OiAxMDAwMCxcbiAgICB0aHVtYk9mZjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmY2NjYydcbiAgICB9LFxuICAgIHRyYWNrT2ZmOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmY5ZDlkJ1xuICAgIH0sXG4gICAgdHJhY2tTd2l0Y2hlZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmOWQ5ZCdcbiAgICB9XG4gIH1cbn07XG5jb25zdCBOYW1lcyA9IFsnUnlhbicsICdFcmljJywgJ0pvaG4nLCAnTWlrZScsICdHZW9yZ2UnLCAnQ2FzZXknLCAnR3JlZyddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtTWVtYmVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUb2dnbGUgc3R5bGU9e3N0eWxlcy50b2dnbGV9IG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX0gaWNvbj17VG9nZ2xlT259IHggLz5cbiAgICAgICAgPERyYXdlciBvcGVuIGNvbnRhaW5lclN0eWxlPXt7IG1hcmdpblRvcDogNjUgfX0gb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBkb2NrZWQ+XG4gICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TWVtYmVyczwvTWVudUl0ZW0+XG4gICAgICAgICAge05hbWVzLm1hcChuYW1lID0+XG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTAgfX0+XG4gICAgICAgICAgICAgIDxBdmF0YXIgaWNvbj17PFVzZXJJY29uIC8+fSBzdHlsZT17eyBtYXJnaW46IDUgfX0gLz57bmFtZX1cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5UZWFtTWVtYmVycy5kZWZhdWx0UHJvcHMgPSB7XG4gIHBob3RvVVJMOiA8Rm9udEljb24gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiAvPlxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RlYW1NZW1iZXJzL1RlYW1NZW1iZXJzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdC9MaXN0SXRlbSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ21hdGVyaWFsLXVpL0F2YXRhci9BdmF0YXInO1xuaW1wb3J0IFVzZXJJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS91c2VyJztcbmltcG9ydCB7IGdyZXk0MDAsIGRhcmtCbGFjaywgbGlnaHRCbGFjayB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnO1xuXG5jb25zdCBDaGVja2VkSW5EaXNwbGF5ID0gKHsgaGFuZGxlT3BlbiwgY2hlY2tpbiB9KSA9PlxuICA8TGlzdEl0ZW1cbiAgICBvblRvdWNoVGFwPXtoYW5kbGVPcGVufVxuICAgIGtleT17Y2hlY2tpbi5pZH1cbiAgICBsZWZ0QXZhdGFyPXs8QXZhdGFyIGljb249ezxVc2VySWNvbiAvPn0gLz59XG4gICAgcHJpbWFyeVRleHQ9e2Ake2NoZWNraW4uZGF0ZS50b1N0cmluZygpfSA6ICR7Y2hlY2tpbi50b2RheS5zcGxpdCgnJykuc2xpY2UoMCwgMjUpLmpvaW4oJycpfS4uLmB9XG4gICAgc2Vjb25kYXJ5VGV4dD17XG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGRhcmtCbGFjayB9fT57YFJlY2VudCBXb3JrOiAke2NoZWNraW4ucmVjZW50V29ya1xuICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgICAgLmpvaW4oJycpfS4uLmB9PC9zcGFuPlxuICAgICAgICB7JyAnfS0tXG4gICAgICAgIHsnQ2xpY2sgVG8gVmlldyBNb3JlJ31cbiAgICAgIDwvcD5cbiAgICB9XG4gICAgc2Vjb25kYXJ5VGV4dExpbmVzPXsyfVxuICAvPjtcblxuQ2hlY2tlZEluRGlzcGxheS5wcm9wVHlwZXMgPSB7XG4gIGNoZWNraW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdG9kYXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZWNlbnRXb3JrOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcXVlc3Rpb25zOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrZWRJbkRpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtU3RhdHVzL0NoZWNrZWRJbkRpc3BsYXkuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBYkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFNQTtBQUVBO0FBQ0E7QUFHQTtBQUpBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBUkE7Ozs7OztBQTJCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUZBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOztBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFIQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUhBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBSEE7QUFGQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFLQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBRUE7QUFDQTtBQUVBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7Ozs7OztBQW5GQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUFBO0FBREE7QUFHQTs7QUFDQTtBQUFBO0FBREE7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUdBOztBQUlBO0FBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBSkE7QUFDQTtBQVdBOztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUxBO0FBRkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcURBO0FBQ0E7QUEzREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBOztBQUVBO0FBRkE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU9BO0FBQUE7O0FBRUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBOztBQUVBOztBQUVBO0FBRkE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFGQTtBQVJBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1NBOztBQUdBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQVJBOzs7QUFiQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7O0FBRUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFBQTtBQUdBO0FBTEE7O0FBT0E7QUFDQTtBQUFBO0FBS0E7QUFQQTtBQWJBO0FBQ0E7QUFvQkE7Ozs7OztBQW5DQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFBQTtBQXNDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUZBOztBQUtBO0FBRkE7O0FBR0E7QUFBQTtBQVZBO0FBREE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFIQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBT0E7Ozs7OztBQXRCQTtBQUNBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBZEE7QUFGQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        