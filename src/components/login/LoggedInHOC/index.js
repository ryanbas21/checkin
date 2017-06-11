import React from 'react';
import ChooseTeam from '../../CreateOrJoin/Container';
import Login from '../container';
import store from '../../../store/index';

const checkLogin = state => Component => () =>
  state.userInfo.isLoggedIn ? <Component /> : <Login />;

const globalState = store().getState();
export default checkLogin(globalState);
