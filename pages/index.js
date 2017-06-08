import React from 'react';
import Head from 'next/head';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500,
  cyan700,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  red700,
  indigo700,
  deepOrange700,
  deepPurple700,
  white,
  darkBlack,
  fullBlack,
  purple700,
  lightBlue700
} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Navbar from '../src/components/navbar/navbar';
import Checkin from '../src/components/checkin/checkin';
import TeamMembers from '../src/components/TeamMembers/TeamMembers';
import TeamStatus from '../src/components/TeamStatus/TeamStatus';

try {
  injectTapEventPlugin();
} catch (e) {}

const muiTheme = getMuiTheme({
  userAgent: false
});
export default () =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={{ width: '100%' }}>
      <Navbar team={"Ryan's Team"} />
      <Checkin />
      <TeamStatus />
      <TeamMembers />
    </div>
  </MuiThemeProvider>;
