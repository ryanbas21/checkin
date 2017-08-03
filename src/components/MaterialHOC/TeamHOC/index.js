import React from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currentTeam } from '../../CreateTeam/createTeam.reducer';
import CreateOrJoin from '../../../features/teams';
// state is not accessible
const teamHOC = Component => props => (props.teamID ? <Component /> : <CreateOrJoin />);

export default Component =>
  connect(state => ({
    teamID: currentTeam(state),
  }))(teamHOC(Component));
