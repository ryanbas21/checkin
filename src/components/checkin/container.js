import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckIn from './checkin';
import * as actions from '../CreateTeam/createTeam.reducer';

const mapStateToProps = state => ({
  teams: actions.createOrJoinSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
