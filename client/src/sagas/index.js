import { fork } from 'redux-saga/effects';
import lakeSaga from './lake-saga';
import loginSaga from './login-saga';

export default function* rootSaga() {
  yield[
    fork(lakeSaga),
    fork(loginSaga)
  ]
}
