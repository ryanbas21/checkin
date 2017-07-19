import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startLogin, isLoggedIn, fetchLogin, error, getAuthState } from './signin-reducer';
import Login from './login';

const mapStateToProps = state => ({
  isLoggedIn: getAuthState(state),
  fetching: state.fetching === true,
  error: state.error,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ startLogin, isLoggedIn, fetchLogin, error }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
