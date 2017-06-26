'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrJoinSelector = exports.getTeamStatus = exports.getCheckins = exports.addCheckIn = exports.addTeam = exports.selectTeam = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = createTeamReducer;

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _moment = require('moment');

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
  var teamID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _cuid2.default)();
  return {
    type: ADD_TEAM,
    payload: {
      name: name,
      teamID: teamID
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
  return state.checkIns;
};
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
var initialState = {
  teams: []
};
function createTeamReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ADD_CHECKIN:
      return (0, _extends3.default)({}, state, {
        teams: state.teams.map(function (team) {
          return team.teamID === action.payload.teamID ? (0, _extends3.default)({}, team, { checkIns: [].concat((0, _toConsumableArray3.default)(team.checkIns), [action.payload]) }) : team;
        })
      });

    case SELECT_TEAM:
      {
        return {};
      }
    case ADD_TEAM:
      {
        return (0, _extends3.default)({}, state, {
          teams: state.teams.concat(action.payload)
        });
      }
    default:
      return state;
  }
}