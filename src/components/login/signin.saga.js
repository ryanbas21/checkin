import { all, call, take, takeEvery, fork, put } from 'redux-saga/effects';
import * as actions from './signin-reducer';
import { getGithubLogin } from '../../lib/github';

// Workers
export function* callIsFetchingLogin(action) {
  try {
    yield put(actions.isFetchingLogin());
  } catch (error) {
    yield put(actions.loginError(error));
  }
}
export function* callGithubLogin(action) {
  try {
    const { user } = yield call(getGithubLogin);
    const userData = user.providerData[0];
    yield put(actions.loginSuccess(userData));
    yield put(actions.isLoggedIn());
  } catch (error) {
    yield put(actions.loginError(error));
  }
}
// Watchers
function* watchIsFetchingLogin() {
  yield take('START_LOGIN');
  yield fork(callIsFetchingLogin);
}
function* watchGithubLogin() {
  yield takeEvery('IS_FETCHING_LOGIN', callGithubLogin);
}
// root
export default function*() {
  yield all([fork(watchIsFetchingLogin), fork(watchGithubLogin)]);
}
