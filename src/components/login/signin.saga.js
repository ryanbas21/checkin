import { all, call, take, takeEvery, fork, put } from 'redux-saga/effects';
import * as actions from './signin-reducer';
import { getGithubLogin } from '../../lib/github';

// Workers
export function* callIsFetchingLogin(action) {
  yield put(actions.isFetchingLogin());
  const user = yield call(getGithubLogin);
  console.log(user);
}

// Watchers
function* watchIsFetchingLogin() {
  yield take('START_LOGIN');
  yield fork(callIsFetchingLogin);
}
// root
export default function*() {
  yield all([fork(watchIsFetchingLogin())]);
}
