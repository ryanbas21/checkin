import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateOrJoin from './CreateOrJoin';
import * as actions from '../CreateTeam/createTeam.reducer';

const mapStateToProps = state => ({
  teams: actions.createOrJoinSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: {
    createTeam: () => dispatch(actions.createTeam()),
    selectTeam: () => dispatch(actions.selectTeam())
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateOrJoin);
