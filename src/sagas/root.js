import { fork, all } from 'redux-saga/effects';
import LoginSaga from '../components/login/signin.saga';
import TeamSaga from '../components/CreateTeam/createTeam.saga';

export default function*() {
  yield all([fork(LoginSaga), fork(TeamSaga)]);
}
