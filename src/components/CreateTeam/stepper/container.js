import React from 'react';
import Paper from 'material-ui/Paper/Paper';
import Nav from '../../navbar/navbar';
import Stepper from './index';

const style = {
  display: 'flex',
  marginTop: 120,
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paper: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 800,
    height: 600
  }
};
export default props =>
  <div style={style}>
    <Paper style={style.paper} zDepth={4}>
      <Nav teamName={'Create Team'} />
      <Stepper />
    </Paper>
  </div>;
