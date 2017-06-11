import { fork, all } from 'redux-saga/effects';
import LoginSaga from '../components/login/signin.saga';

export default function*() {
  yield all([fork(LoginSaga)]);
}
