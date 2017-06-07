import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../src/store/index';
import Head from '../src/components/head/head';
import CreateOrJoin from '../src/components/CreateOrJoin/CreateOrJoin';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

try {
  injectTapEventPlugin();
} catch (e) {}
const muiTheme = getMuiTheme({ userAgent: false });

const Teams = props =>
  <MuiThemeProvider theme={muiTheme}>
    <CreateOrJoin />
  </MuiThemeProvider>;

export default Teams;
