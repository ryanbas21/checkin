import React, { Component } from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthState, getFetchingState } from '../../login/signin-reducer';
import Login from '../../login/container';
import Loading from '../../loading-icon/index';

const AuthComponent = props => (props.auth ? <Component /> : <Login />);
const withAuth = Component => <AuthComponent />;

export default Component =>
  connect(state => ({
    auth: getAuthState(state),
    fetching: getFetchingState(state),
  }))(withAuth(Component));

AuthComponent.propTypes = {
  auth: PropTypes.bool.isRequired,
};
