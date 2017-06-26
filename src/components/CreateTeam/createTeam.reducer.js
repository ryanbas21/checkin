import cuid from 'cuid';
import moment from 'moment';
// constants
const CREATE_TEAM = 'CREATE_TEAM';
const SELECT_TEAM = 'SELECT_TEAM';
const ADD_CHECKIN = 'ADD_CHECKIN';
const ADD_TEAM = 'ADD_TEAM';

// Actions

export const selectTeam = (id = cuid()) => ({
  type: SELECT_TEAM,
  payload: id
});

// Difference between addTeam and createTeam?
export const addTeam = (name = '', teamID = cuid()) => ({
  type: ADD_TEAM,
  payload: {
    name,
    teamID
  }
});

// Add default values for date, today, recent, and blockers
export const addCheckIn = ({
  date = Date.now(),
  today = '',
  recentWork = '',
  questions = '',
  id = cuid(),
  userID = cuid(),
  teamID = cuid()
}) => ({
  type: ADD_CHECKIN,
  payload: {
    date,
    today,
    recentWork,
    questions,
    id,
    userID,
    teamID
  }
});

// Selectors
export const getCheckins = state => state.teams.map(team => team.checkIns);
export const getTeamStatus = state =>
  Object.keys(state).map(id => state[id]).sort((a, b) => moment(b.date).diff(moment(a.date)));
export const createOrJoinSelector = state => state.teams || [];
// Reducer
const initialState = {
  teams: []
};
export default function createTeamReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHECKIN:
      return {
        ...state,
        teams: state.teams.map(
          team =>
            team.teamID === action.payload.teamID
              ? { ...team, checkIns: [...team.checkIns, action.payload] }
              : team
        )
      };

    case SELECT_TEAM: {
      return {};
    }
    case ADD_TEAM: {
      return {
        ...state,
        teams: state.teams.concat(action.payload)
      };
    }
    default:
      return state;
  }
}
