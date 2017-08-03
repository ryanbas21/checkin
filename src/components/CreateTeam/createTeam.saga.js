import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import { saveTeam } from './lib';
import { addTeamClick, addTeam } from './createTeam.reducer';

// workers
export function* callAddTeamClick(action) {
  try {
    yield put(addTeam(action.payload));
    // yield call(saveTeam, action.payload);
  } catch (error) {
    // yield put(reportAddTeamError, error);
  }
}

// watcher
function* watchAddTeamClick() {
  yield takeEvery(addTeamClick.type, callAddTeamClick);
}

export default function*() {
  yield all([fork(watchAddTeamClick)]);
}
