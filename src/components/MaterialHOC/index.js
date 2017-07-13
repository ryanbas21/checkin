import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import store from '../../store/index';
import { createTheme, withMuiTheme } from './withMUITheme';
import withAuth from './LoggedInHOC';

// authedPageWrapper:: Component -> AuthedComponent || Login -> withMUI -> withRedux
export default compose(withRedux(store), withMuiTheme(createTheme), withAuth);

// f(g(x))
export const withoutAuth = compose(withRedux(store), withMuiTheme(createTheme));
