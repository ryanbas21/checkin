import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import withMuiTheme from '../src/components/MaterialHOC/index';
import Navbar from '../src/components/navbar/navbar';
import Login from '../src/components/login/container';

const style = {
  width: '100%',
  marginTop: 120,
  display: 'flex',
  postion: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center'
};

export default withMuiTheme(props =>
  <div style={{ width: '100%' }}>
    <Navbar teamName={'Sign In to view'} />
    <div style={style}>
      <Login />
    </div>
  </div>
);
