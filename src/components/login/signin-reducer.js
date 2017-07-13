import Ramda from 'ramda';
// import dsm from 'redux-dsm';
//
// const loginStates = [
//   ['initialize', 'idle',
//     ['login', 'loggingIn',
//       ['cancel', 'idle'],
//       ['report error', 'error',
//         ['handle error', 'idle']
//       ],
//       ['report success', 'success',
//         ['handle success', 'idle']
//       ]
//     ]
//   ]
// ];
//
// const login = dsm({
//   component: 'Login',
//   description: 'Login Flow',
//   actionStates: loginStates
// }); 

// Constants
const FETCH_LOGIN = 'FETCH_LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

// Action Creators
export const fetchLogin = () => ({
  type: FETCH_LOGIN,
});
export const loginSuccess = (user = '') => ({ type: LOGIN_SUCCESS, payload: user });
export const loginError = (error = '') => ({ type: LOGIN_ERROR, payload: error });

// Selector
export const getUserState = state => ({ ...state.userInfo });
export const getAuthState = state => state.isLoggedIn === true;

// Reducer
const initialState = {
  isFetchingLogin: false,
  isLoggedIn: false,
  userData: {},
  teams: [],
};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        isFetchingLogin: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: undefined,
        isFetchingLogin: false,
        userData: { ...action.payload },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetchingLogin: false,
      };
    default:
      return state;
  }
}
