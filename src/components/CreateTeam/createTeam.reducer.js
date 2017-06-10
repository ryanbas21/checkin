import cuid from 'cuid';
import moment from 'moment';
// constants
const CREATE_TEAM = 'CREATE_TEAM';
const SELECT_TEAM = 'SELECT_TEAM';
const ADD_CHECKIN = 'ADD_CHECKIN';
const ADD_TEAM = 'ADD_TEAM';

// Actions
export const createTeam = (name = '', id = cuid()) => ({
  type: CREATE_TEAM,
  payload: {
    name,
    id
  }
});

export const selectTeam = (id = cuid()) => ({
  type: SELECT_TEAM,
  payload: id
});

// Difference between addTeam and createTeam?
export const addTeam = (name = '', id = cuid()) => ({
  type: ADD_TEAM,
  payload: {
    name,
    id
  }
});

// Add default values for date, today, recent, and blockers
export const addCheckIn = ({
  date = Date.now(),
  today = '',
  recentWork = '',
  questions = '',
  id = cuid(),
  userID = cuid()
}) => ({
  type: ADD_CHECKIN,
  payload: {
    date,
    today,
    recentWork,
    questions,
    id,
    userID
  }
});

// Selectors
export const getTeamStatus = state =>
  Object.keys(state).map(id => state[id]).sort((a, b) => moment(b.date).diff(moment(a.date)));
export const createOrJoinSelector = state => state.teams || [];

// Reducer
const initialState = {};
export default function createTeamReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHECKIN:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case SELECT_TEAM: {
      return {};
    }
    case CREATE_TEAM:
      return {};
    default:
      return state;
  }
}
