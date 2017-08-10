import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedIn, fetchLogin, error, getAuthState } from './signin-reducer';
import Login from './login';
import { Dispatch, GlobalState } from '../../global-types/index.ts';

export interface ConnectedProps {
  isLoggedIn: boolean;
  error: string;
}

const mapStateToProps = (state : GlobalState ) => ({
  isLoggedIn: getAuthState(state),
  error: state.error,
});

export interface ConnectedDispatch{
  actions: {
   isLoggedIn: boolean;
   fetchLogin: () => void;
   error: string;
  }
}
const mapDispatchToProps : ConnectedDispatch= (dispatch: Dispatch) => ({
  actions: bindActionCreators({ isLoggedIn, fetchLogin, error }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

