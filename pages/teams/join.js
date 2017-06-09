import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withRedux from 'next-redux-wrapper';
import store from '../../src/store/index';
import Head from '../../src/components/head/head';
import TeamList from '../../src/components/TeamList/TeamList';

const muiTheme = getMuiTheme({
  userAgent: false
});
const JoinTeam = () =>
  <MuiThemeProvider theme={muiTheme}>
    <div>
      <h1>My Teams</h1>
      <TeamList />
    </div>
  </MuiThemeProvider>;

export default withRedux(store)(JoinTeam);
