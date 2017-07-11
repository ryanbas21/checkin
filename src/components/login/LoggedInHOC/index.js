import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthState } from '../signin-reducer';
import ChooseTeam from '../../CreateOrJoin/Container';
import Login from '../container';

const CheckLogin = Component => ({ auth }) => {
  console.log('auth: ', auth);
  return (
    <div>
      {auth ? <Component /> : <Login />}
    </div>
  );
};

CheckLogin.propTypes = {
  auth: PropTypes.bool.isRequired
};

export default CheckLogin;
