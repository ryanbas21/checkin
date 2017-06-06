import { fork, all } from 'redux-saga/effects';

function* placeholder() {
  yield 'placeholder';
}
export default function*() {
  yield all([fork(placeholder)]);
}
