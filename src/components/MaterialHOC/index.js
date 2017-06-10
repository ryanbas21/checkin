import { compose } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withRedux from 'next-redux-wrapper';


export default compose(
  getMuiTheme({userAgent: false})
  withRedux(store))
