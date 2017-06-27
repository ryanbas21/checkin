import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

try {
  injectTapEventPlugin();
} catch (e) {
  console.log(e);
}

export const createTheme = getMuiTheme({ userAgent: false });

export const withMuiTheme = theme => Component => () =>
  <div>
    <MuiThemeProvider muiTheme={theme}>
      <Component />
    </MuiThemeProvider>
  </div>;
