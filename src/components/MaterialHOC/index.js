import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import store from '../../store/index';
import { createTheme, withMuiTheme } from './withMUITheme';
import withAuth from '../login/LoggedInHOC/index';

// compose higher order Component
export default compose(withRedux(store), withMuiTheme(createTheme), withAuth);

export const withoutAuth = compose(withRedux(store), withMuiTheme(createTheme));
