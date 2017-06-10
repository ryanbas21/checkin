import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import LoginButton from './signin-button/index';

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

export default props =>
  <Paper style={login} zDepth={5}>
    <Card>
      <CardHeader
        style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}
        title={'Sign In With Github'}
        showExpandableButton={false}
      />
      <CardText style={card}>
        <FlatButton target="_blank" icon={<LoginButton />} />
      </CardText>
    </Card>
  </Paper>;
