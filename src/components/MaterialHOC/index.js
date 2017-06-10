import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import store from '../../store/index';
import { userAgent, withMuiTheme } from './withMUITheme';

// compose higher order Component
export default compose(withMuiTheme(userAgent), withRedux(store));
