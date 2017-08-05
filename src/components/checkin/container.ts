import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckIn from './checkin';
import { getCheckinsSelector, addCheckin } from './checkIns.reducer';
import { currentTeam } from '../CreateTeam/createTeam.reducer';
import { GlobalState } from '../../global-types/index';

const mapStateToProps = (state: GlobalState): ConnectedProps => ({
  teams: getCheckinsSelector(state),
});
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators({ addCheckin }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckIn) as React.ComponentClass<
  CheckinsProps
>;
