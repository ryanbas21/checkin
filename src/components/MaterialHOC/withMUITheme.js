import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

try {
  injectTapEventPlugin();
} catch (e) {}

export const userAgent = getMuiTheme({ userAgent: false });
export const withMuiTheme = userAgent => Component => () =>
  <div>
    <MuiThemeProvider muiTheme={userAgent}>
      <Component />
    </MuiThemeProvider>
  </div>;
