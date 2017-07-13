import React, { Component } from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthState, getFetchingState } from '../../login/signin-reducer';
import Login from '../../login/container';
import Loading from '../../loading-icon/index';

// state is not accessible
const withAuth = Component => props => (props.auth ? <Component /> : <Login />);

export default Component =>
  connect(state => ({
    auth: getAuthState(state),
    fetching: getFetchingState(state),
  }))(withAuth(Component));
