import { all, call, take, takeEvery, fork, put } from 'redux-saga/effects';
import Router from 'next/router';
import * as actions from './signin-reducer';
import { getGithubLogin } from '../../lib/github';

// workers
export function* callGithubLogin(action) {
  try {
    const { user } = yield call(getGithubLogin);
    const userData = user.providerData[0];
    yield put(actions.loginSuccess(userData));
  } catch (error) {
    yield put(actions.loginError(error));
  }
}
// Watchers
function* watchGithubLogin() {
  yield takeEvery('FETCH_LOGIN', callGithubLogin);
}
// root
export default function*() {
  yield all([fork(watchGithubLogin)]);
}
