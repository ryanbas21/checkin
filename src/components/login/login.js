import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Router from 'next/router';
import FlatButton from 'material-ui/FlatButton';
import LoginButton from './signin-button/index';
import Loading from '../loading-icon';

const login = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: 500,
  height: 500
};
const card = {
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

const Login = props =>
  // !props.user.isLoggedin
  // ? Router.replace('/login')
  // :
  <Paper style={login} zDepth={5}>
    {props.user.isFetchingLogin
      ? <Loading />
      : <Card>
        <CardHeader
          style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}
          title={'Sign In With Github'}
          showExpandableButton={false}
        />
        <CardText style={card}>
          {props.user.error ? <div>{props.user.error}</div> : <div />}
          <FlatButton target="_blank" onClick={props.actions.startLogin} icon={<LoginButton />} />
        </CardText>
      </Card>}
  </Paper>;

Login.propTypes = {
  user: PropTypes.shape({
    error: PropTypes.string.isRequired,
    isFetchingLogin: PropTypes.bool.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    startLogin: PropTypes.func.isRequired
  }).isRequired
};
export default Login;
