import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthState } from '../../login/signin.saga';
import ChooseTeam from '../../CreateOrJoin/Container';
import Login from '../../login/container';

// state is not accessible
const CheckLogin = Component => props =>
  <div>
    {props.auth ? <Component /> : <Login />}
  </div>;

CheckLogin.propTypes = {
  state: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(state => ({
  auth: getAuthState(state),
}))(CheckLogin);
