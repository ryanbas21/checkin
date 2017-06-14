import React from 'react';
import { connect } from 'react-redux';
import { getAuthState } from '../signin-reducer';
import ChooseTeam from '../../CreateOrJoin/Container';
import Login from '../container';
import store from '../../../store/index';

const mapStateToProps = state => ({
  auth: getAuthState(state)
});

const CheckLogin = Component => {
  const Guard = props => (props.auth ? <Component /> : <Login />);
  return connect(mapStateToProps)(Guard);
};

export default CheckLogin;
