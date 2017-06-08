import cuid from 'cuid';

// constants
const CREATE_TEAM = 'CREATE_TEAM';
const SELECT_TEAM = 'SELECT_TEAM';

export const createTeam = name => ({
  type: CREATE_TEAM,
  payload: name
});
export const selectTeam = name => ({
  type: SELECT_TEAM,
  payload: name
});
export const addTeam = () => {};

const initialState = {};
export const createOrJoinSelector = state => state.teams || [];
export default function createTeamReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TEAM: {
      console.log(action);
      return {};
    }
    case CREATE_TEAM:
      return {};
    default:
      return state;
  }
}
