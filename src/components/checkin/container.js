import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckIn from './checkin';
import { getCheckinsSelector, addCheckin } from './checkIns.reducer';
import { currentTeam } from '../CreateTeam/createTeam.reducer';

const mapStateToProps = state => ({
  teams: getCheckinsSelector(state),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addCheckin }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
