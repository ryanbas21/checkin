import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import withRedux from 'next-redux-wrapper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Head from '../../src/components/head/head';
import store from '../../src/store/index';
import CreateOrJoin from '../../src/components/CreateOrJoin/Container';

try {
  injectTapEventPlugin();
} catch (e) {}

const muiTheme = getMuiTheme({ userAgent: false });

const Teams = props =>
  <MuiThemeProvider theme={muiTheme}>
    <CreateOrJoin />
  </MuiThemeProvider>;

export default withRedux(store)(Teams);
