import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateOrJoin from './CreateOrJoin';
import {
  addTeam,
  TeamData,
  CreateTeamActions,
  createOrJoinSelector,
} from '../CreateTeam/createTeam.reducer.ts';
import { Dispatch, Team, GlobalState } from '../../global-types/index.ts';

interface ConnectedState {
  teams: Team,
}
interface ConnectedDispatch {
  actions: {
    addTeam: TeamData => CreateTeamActions.AddTeam,
  },
}
const mapStateToProps = (state: GlobalState): ConnectedState => ({
  teams: createOrJoinSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): ConnectedDispatch => ({
  actions: bindActionCreators({ addTeam }, dispatch),
});

type CombinedTypes = ConnectedState | ConnectedDispatch;

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrJoin);
