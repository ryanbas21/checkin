'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('regenerator-runtime/runtime');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _redux = require('redux');

var _root = require('../sagas/root');

var _root2 = _interopRequireDefault(_root);

var _firebase = require('../lib/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _CreateTeam = require('../components/CreateTeam');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var rootReducer = (0, _redux.combineReducers)({ createTeamReducer: _CreateTeam.createTeamReducer });

var sagas = (0, _reduxSaga2.default)();

var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(sagas), typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' ? window.devToolsExtension && window.devToolsExtension() : function (f) {
  return f;
});

exports.default = function (initialState) {
  var store = (0, _redux.createStore)(rootReducer, initialState, enhancer);
  sagas.run(_root2.default);
  (0, _firebase2.default)();
  return store;
};