import cuid from 'cuid';
import moment from 'moment';
import R from 'ramda';
import { sortByTime, addCheckinCallback, filterTeamsById } from './reducer-helpers';

// constants
const CREATE_TEAM = 'CREATE_TEAM';
const ADD_TEAM = 'ADD_TEAM';
const SELECT_TEAM = 'SELECT_TEAM';
const ADD_CHECKIN = 'ADD_CHECKIN';

// Actions
export const selectTeam = id => ({
  type: SELECT_TEAM,
  payload: id,
});
export const addTeam = (name = '', teamID = cuid()) => ({
  type: ADD_TEAM,
  payload: {
    name,
    teamID,
  },
});
export const addCheckIn = ({
  date = Date.now(),
  today = '',
  recentWork = '',
  questions = '',
  id = cuid(),
  userID = cuid(),
  teamID = cuid(),
}) => ({
  type: ADD_CHECKIN,
  payload: {
    date,
    today,
    recentWork,
    questions,
    id,
    userID,
    teamID,
  },
});

// Selectors
export const getCheckins = state => R.map(team => team.checkIns, state.teams);
export const getTeamStatus = state => R.map(id => R.sort(sortByTime, state[id]), R.keys(state));
export const createOrJoinSelector = state => state.teams || [];

// Reducer
const initialState = {
  teams: [],
};
export default function createTeamReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHECKIN:
      return {
        ...state,
        teams: R.map(addCheckinCallback(action), state.teams),
      };
    case SELECT_TEAM: {
      return {
        ...state,
        currentTeam: R.compose(R.head, R.filter(filterTeamsById(action)))(state.teams),
      };
    }
    case ADD_TEAM: {
      return {
        ...state,
        teams: R.concat(state.teams, [action.payload]),
      };
    }
    default:
      return state;
  }
}
