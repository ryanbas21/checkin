import { all, fork, takeEvery, call } from 'redux-saga/effects';
import { saveTeam } from './lib';

// workers
function* callAddTeam(action) {
  try {
    yield call(saveTeam, action.payload);
  } catch (error) {
    yield error;
  }
}

// watcher
function* watchAddTeam() {
  try {
    yield takeEvery('ADD_TEAM', callAddTeam);
  } catch (error) {
    yield error;
  }
}

export default function*() {
  yield all([fork(watchAddTeam)]);
}
