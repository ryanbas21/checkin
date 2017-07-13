'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrJoinSelector = exports.getTeamStatus = exports.getCheckins = exports.addCheckIn = exports.addTeam = exports.selectTeam = undefined;

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
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var teamID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _cuid2.default)();
  return {
    type: ADD_TEAM,
    payload: {
      name: name,
      teamID: teamID
    }
  };
};
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
      userID = _ref$userID === undefined ? (0, _cuid2.default)() : _ref$userID,
      _ref$teamID = _ref.teamID,
      teamID = _ref$teamID === undefined ? (0, _cuid2.default)() : _ref$teamID;
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
  return state.teams || [];
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
        teams: _ramda2.default.map((0, _reducerHelpers.addCheckinCallback)(action), state.teams)
      });
    case SELECT_TEAM:
      {
        return (0, _extends3.default)({}, state, {
          currentTeam: _ramda2.default.compose(_ramda2.default.head, _ramda2.default.filter((0, _reducerHelpers.filterTeamsById)(action)))(state.teams)
        });
      }
    case ADD_TEAM:
      {
        return (0, _extends3.default)({}, state, {
          teams: _ramda2.default.concat(state.teams, [action.payload])
        });
      }
    default:
      return state;
  }
}