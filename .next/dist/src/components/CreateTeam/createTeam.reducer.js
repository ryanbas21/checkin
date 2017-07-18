'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTeam = exports.createOrJoinSelector = exports.getTeamStatus = exports.getCheckins = exports.addCheckIn = exports.addTeam = exports.selectTeam = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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
var ADD_CHECKIN = 'ADD_CHECKIN';

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
var addCheckIn = exports.addCheckIn = function addCheckIn(_ref2) {
  var _ref2$date = _ref2.date,
      date = _ref2$date === undefined ? Date.now() : _ref2$date,
      _ref2$today = _ref2.today,
      today = _ref2$today === undefined ? '' : _ref2$today,
      _ref2$recentWork = _ref2.recentWork,
      recentWork = _ref2$recentWork === undefined ? '' : _ref2$recentWork,
      _ref2$questions = _ref2.questions,
      questions = _ref2$questions === undefined ? '' : _ref2$questions,
      _ref2$id = _ref2.id,
      id = _ref2$id === undefined ? (0, _cuid2.default)() : _ref2$id,
      _ref2$userID = _ref2.userID,
      userID = _ref2$userID === undefined ? (0, _cuid2.default)() : _ref2$userID,
      _ref2$teamID = _ref2.teamID,
      teamID = _ref2$teamID === undefined ? (0, _cuid2.default)() : _ref2$teamID;
  return {
    type: ADD_CHECKIN,
    payload: {
      date: date,
      today: today,
      recentWork: recentWork,
      questions: questions,
      id: id,
      userID: userID,
      teamID: teamID
    }
  };
};

// Selectors
var getCheckins = exports.getCheckins = function getCheckins(state) {
  return _ramda2.default.map(function (team) {
    return team.checkIns;
  }, state.teams);
};
var getTeamStatus = exports.getTeamStatus = function getTeamStatus(state) {
  return _ramda2.default.map(function (id) {
    return _ramda2.default.sort(_reducerHelpers.sortByTime, state[id]);
  }, _ramda2.default.keys(state));
};
var createOrJoinSelector = exports.createOrJoinSelector = function createOrJoinSelector(state) {
  return {
    teams: state.teams || [],
    uid: state.userInfo.uid
  };
};
var getCurrentTeam = exports.getCurrentTeam = function getCurrentTeam(state, id) {
  return _ramda2.default.find(function (team) {
    return team.id === id;
  }, state.teams);
};

// Reducer
var initialState = {
  teams: []
};
function createTeamReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ADD_CHECKIN:
      return (0, _extends3.default)({}, state, {
        teams: _ramda2.default.map(function (team) {
          return team.teamID === action.payload.teamID ? (0, _extends3.default)({}, team, { checkIns: [].concat((0, _toConsumableArray3.default)(team.checkIns), [action.payload]) }) : team;
        }, state.teams)
      });
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