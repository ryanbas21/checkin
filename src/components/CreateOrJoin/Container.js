import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateOrJoin from './CreateOrJoin';
import { addTeam, createOrJoinSelector } from '../CreateTeam/createTeam.reducer';

const mapStateToProps = state => ({
  teams: createOrJoinSelector(state),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addTeam }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateOrJoin);
