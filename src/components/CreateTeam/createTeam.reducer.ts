import * as cuid from 'cuid';
import { Checkins, GlobalState, Team } from '../../global-types/index';
import * as moment from 'moment';
import * as R from 'ramda';
import { sortByTime, filterTeamsById } from './reducer-helpers';

// constants
type ADD_TEAM_CLICK = 'ADD_TEAM_CLICK';
const ADD_TEAM_CLICK: ADD_TEAM_CLICK = 'ADD_TEAM_CLICK';

type ADD_TEAM = 'ADD_TEAM';
const ADD_TEAM: ADD_TEAM = 'ADD_TEAM';

type SELECT_TEAM = 'SELECT_TEAM';
const SELECT_TEAM: SELECT_TEAM = 'SELECT_TEAM';

export interface TeamData {
  name: string;
  teamID: string;
  uid: string;
  checkins: Checkins[];
}
//CreateTeamActions
namespace CreateTeamActions {
  export interface SelectTeam {
    type: SELECT_TEAM;
    payload: string;
  }
  export interface AddTeam {
    type: ADD_TEAM;
    payload: TeamData;
  }
  export interface AddTeamClick {
    type: ADD_TEAM_CLICK;
    payload: TeamData;
  }
}

export const selectTeam = (id: string): CreateTeamActions.SelectTeam => ({
  type: SELECT_TEAM,
  payload: id,
});

export const addTeam = (
  { name = 'Unnamed team', teamID = cuid(), uid = cuid() } = {},
): CreateTeamActions.AddTeam => ({
  type: ADD_TEAM,
  payload: {
    name,
    teamID,
    uid,
    checkins: [],
  },
});

export const addTeamClick = (teamData: TeamData): CreateTeamActions.AddTeamClick => ({
  type: 'ADD_TEAM_CLICK',
  payload: teamData,
});

// Selectors
export const getCheckins = (state: GlobalState, id: string): Checkins =>
  R.find(team => team.teamID === id, state.board.teams).checkins;

export const getTeamStatus = (state: GlobalState) =>
  R.map((id: string) => R.sort(sortByTime, state[id]), R.keys(state));

export const currentTeam = (state: GlobalState, id: string): Team =>
  R.find(team => team.teamID === id, state.board.teams);

interface CreateOrJoinSelector {
  teams: Team[];
  uid: string;
  current: string;
}
export const createOrJoinSelector = (state: GlobalState): CreateOrJoinSelector => ({
  teams: state.board.teams,
  uid: state.userInfo.userData.uid,
  current: state.board.currentTeam,
});

// Reducer
interface TeamState {
  teams: Team[];
}
const initialState: TeamState = {
  teams: [],
};
type Actions =
  | CreateTeamActions.SelectTeam
  | CreateTeamActions.AddTeam
  | CreateTeamActions.SelectTeam;

export default function createTeamReducer(state = initialState, action: Actions) {
  switch (action.type) {
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
        currentTeam: action.payload.teamID,
      };
    }
    default:
      return state;
  }
}
