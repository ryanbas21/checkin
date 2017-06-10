import React from 'react';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Navbar from '../src/components/navbar/navbar';
import Checkin from '../src/components/checkin/container';
import TeamMembers from '../src/components/TeamMembers/TeamMembers';
import TeamStatus from '../src/components/TeamStatus/container';
import store from '../src/store/index';

try {
  injectTapEventPlugin();
} catch (e) {}

const muiTheme = getMuiTheme({
  userAgent: false
});
const Board = () =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <TeamMembers />
      <Navbar team={"Ryan's Team"} />
      <TeamStatus />
      <Checkin />
    </div>
  </MuiThemeProvider>;

// // create higher-order page component, using compose()
// export default compose(
//   withMuiTheme(uiAgent),
//   withRedux(store )
// )(component);

export default withRedux(store)(Board);
