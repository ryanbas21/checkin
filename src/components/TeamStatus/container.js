import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../CreateTeam/createTeam.reducer';
import TeamStatus from './TeamStatus';

const mapStateToProps = state => ({ status: actions.getTeamStatus(state.createTeamReducer) });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(TeamStatus);
