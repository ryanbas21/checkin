import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckIn from './checkin';
import { addCheckIn, createOrJoinSelector } from '../CreateTeam/createTeam.reducer';

const mapStateToProps = state => ({
  teams: createOrJoinSelector(state),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addCheckIn }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
