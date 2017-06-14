// Constants
const IS_FETCHING_LOGIN = 'IS_FETCHING_LOGIN';
const START_LOGIN = 'START_LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const IS_LOGGED_IN = 'IS_LOGGED_IN';

// Action Creators
export const isFetchingLogin = () => ({
  type: IS_FETCHING_LOGIN
});
export const loginSuccess = (user = '') => ({ type: LOGIN_SUCCESS, payload: user });
export const loginError = (error = '') => ({ type: LOGIN_ERROR, payload: error });
export const startLogin = () => ({ type: START_LOGIN });
export const isLoggedIn = () => ({ type: IS_LOGGED_IN });

// Selector
export const getUserState = state => ({ ...state.userInfo });
export const getAuthState = state => state.isLoggedIn === true;
// Reducer
const initialState = {
  isFetchingLogin: false,
  isLoggedIn: false,
  userData: {},
  teams: []
};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING_LOGIN:
      return {
        ...state,
        isFetchingLogin: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: undefined,
        isFetchingLogin: false,
        userData: { ...action.payload }
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetchingLogin: false
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        error: undefined,
        isLoggedIn: true
      };
    default:
      return state;
  }
}
