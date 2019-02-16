import { fork } from 'redux-saga/effects';
import lakeSaga from './lake-saga';
import loginSaga from './login-saga';
import userSaga from './user-saga';
import inventorySaga from './inventory-saga';

export default function* rootSaga() {
  yield[
    fork(lakeSaga),
    fork(loginSaga),
    fork(userSaga),
    fork(inventorySaga)
  ]
}
