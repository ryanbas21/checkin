import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import store from '../../store/index';
import { createTheme, withMuiTheme } from './withMUITheme';
import authCheck from './LoggedInHOC';
import TeamHoc from './TeamHOC';

// authedPageWrapper:: Component -> AuthedComponent || Login -> withMUI -> withRedux
export default compose(withRedux(store), withMuiTheme(createTheme), authCheck, TeamHoc);

// f(g(x))
export const withoutAuth = compose(withRedux(store), withMuiTheme(createTheme));
