// Constants
const IS_FETCHING_LOGIN = 'IS_FETCHING_LOGIN';

// Action Creators
export const isFetchingLogin = () => ({
  type: IS_FETCHING_LOGIN
});

// Selector
export const getUserState = state => ({ ...state.user });
// Reducer
const initialState = {};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
