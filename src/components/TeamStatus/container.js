import React from 'react';
import { connect } from 'react-redux';
import { getCheckinsSelector } from '../checkin/checkIns.reducer';
import TeamStatus from './TeamStatus';

const mapStateToProps = state => ({ checkins: getCheckinsSelector(state) });
export default connect(mapStateToProps)(TeamStatus);
