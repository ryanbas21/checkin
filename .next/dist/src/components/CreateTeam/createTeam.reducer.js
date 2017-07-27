'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrJoinSelector = exports.currentTeam = exports.getTeamStatus = exports.getCheckins = exports.addTeam = exports.selectTeam = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createTeamReducer;

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _reducerHelpers = require('./reducer-helpers');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// constants
var CREATE_TEAM = 'CREATE_TEAM';
var ADD_TEAM = 'ADD_TEAM';
var SELECT_TEAM = 'SELECT_TEAM';

// Actions
var selectTeam = exports.selectTeam = function selectTeam(id) {
  return {
    type: SELECT_TEAM,
    payload: id
  };
};
var addTeam = exports.addTeam = function addTeam() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      _ref$teamID = _ref.teamID,
      teamID = _ref$teamID === undefined ? (0, _cuid2.default)() : _ref$teamID,
      _ref$uid = _ref.uid,
      uid = _ref$uid === undefined ? (0, _cuid2.default)() : _ref$uid;

  return {
    type: ADD_TEAM,
    payload: {
      name: name,
      teamID: teamID,
      uid: uid,
      checkIns: []
    }
  };
};

// Selectors
var getCheckins = exports.getCheckins = function getCheckins(state, id) {
  return _ramda2.default.find(function (team) {
    return team.teamID === id;
  }, state.data.teams).checkIns;
};
var getTeamStatus = exports.getTeamStatus = function getTeamStatus(state) {
  return _ramda2.default.map(function (id) {
    return _ramda2.default.sort(_reducerHelpers.sortByTime, state[id]);
  }, _ramda2.default.keys(state));
};
var currentTeam = exports.currentTeam = function currentTeam(state, id) {
  return _ramda2.default.find(function (team) {
    return team.teamID === id;
  }, state.data.teams);
};
var createOrJoinSelector = exports.createOrJoinSelector = function createOrJoinSelector(state) {
  return {
    teams: state.data.teams,
    uid: state.userInfo.userData.uid,
    current: state.data.currentTeam
  };
};

// Reducer
var initialState = {
  teams: []
};

function createTeamReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case SELECT_TEAM:
      {
        return (0, _extends3.default)({}, state, {
          currentTeam: _ramda2.default.compose(_ramda2.default.head, _ramda2.default.filter((0, _reducerHelpers.filterTeamsById)(action)))(state.teams)
        });
      }
    case ADD_TEAM:
      {
        var _action$payload = action.payload,
            name = _action$payload.name,
            teamID = _action$payload.teamID,
            checkIns = _action$payload.checkIns;

        return (0, _extends3.default)({}, state, {
          teams: _ramda2.default.concat(state.teams, [{ name: name, teamID: teamID, checkIns: checkIns }]),
          currentTeam: teamID
        });
      }
    default:
      return state;
  }
}