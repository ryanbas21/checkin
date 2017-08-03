import cuid from 'cuid';
import moment from 'moment';
import R from 'ramda';
import { sortByTime, filterTeamsById } from './reducer-helpers';

// constants
const CREATE_TEAM = 'CREATE_TEAM';
const ADD_TEAM = 'ADD_TEAM';
const SELECT_TEAM = 'SELECT_TEAM';

// Actions
export const selectTeam = id => ({
  type: SELECT_TEAM,
  payload: id,
});

export const addTeam = ({ name = 'Unnamed team', teamID = cuid(), uid = cuid() } = {}) => ({
  type: ADD_TEAM,
  payload: {
    name,
    teamID,
    uid,
    checkIns: [],
  },
});

export const addTeamClick = (
  { name = 'unnamed team', teamID = cuid(), uid = cuid(), checkins = [] } = {},
) => ({
  type: 'ADD_TEAM_CLICK',
  payload: {
    name,
    teamID,
    uid,
    checkins,
  },
});
// Selectors

export const getCheckins = (state, id) =>
  R.find(team => team.teamID === id, state.board.teams).checkIns;

export const getTeamStatus = state => R.map(id => R.sort(sortByTime, state[id]), R.keys(state));

export const currentTeam = (state, id) => R.find(team => team.teamID === id, state.board.teams);
export const createOrJoinSelector = state => ({
  teams: state.board.teams,
  uid: state.userInfo.userData.uid,
  current: state.board.currentTeam,
});

// Reducer
const initialState = {
  teams: [],
};

export default function createTeamReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TEAM: {
      return {
        ...state,
        currentTeam: R.compose(R.head, R.filter(filterTeamsById(action)))(state.teams),
      };
    }
    case ADD_TEAM: {
      const { name, teamID, checkIns } = action.payload;
      return {
        ...state,
        teams: R.concat(state.teams, [{ name, teamID, checkIns }]),
        currentTeam: teamID,
      };
    }
    default:
      return state;
  }
}
