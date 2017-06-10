import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import LogoGithub from 'react-icons/lib/go/mark-github';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import withRedux from 'next-redux-wrapper';
import Head from '../src/components/head/head';

try {
  injectTapEventPlugin();
} catch (e) {}

const muiTheme = getMuiTheme({ userAgent: false });
const style = {
  width: 120,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  verticalAlign: 'center'
};
export default props =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Paper style={style} zDepth={3}>
        <FlatButton target="_blank" label="Sign In" icon={<LogoGithub />} />
      </Paper>
    </div>
  </MuiThemeProvider>;
