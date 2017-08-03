import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedIn, fetchLogin, error, getAuthState } from './signin-reducer';
import Login from './login';

const mapStateToProps = state => ({
  isLoggedIn: getAuthState(state),
  error: state.error,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ isLoggedIn, fetchLogin, error }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
