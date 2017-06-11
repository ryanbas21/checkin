import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './signin-reducer';
import Login from './login';

const mapStateToProps = state => ({
  user: actions.getUserState(state)
});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Login);
