import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthState } from '../signin-reducer';
import ChooseTeam from '../../CreateOrJoin/Container';
import Login from '../container';

const CheckLogin = Component => ({ store }) =>
  getAuthState(store.getState()) ? <Component /> : <Login />;

CheckLogin.propTypes = {
  store: PropTypes.func.isRequired
};

export default CheckLogin;
