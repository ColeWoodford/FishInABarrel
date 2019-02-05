import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/login-actions';
import { login, createUser } from '../api/login-api';

function* loginUser(action) {
	try {
		const credentials = {
			username: action.payload.username,
			password: action.payload.password
		}
		const user = yield call(login, credentials);
		if (user !== null) {
			yield put({type: actions.LOGIN_SUCCESS, payload: user.username});
		} else {
			yield put({type: actions.LOGIN_BAD, payload: user});
		}
	} catch (e) {
		yield put({type: actions.LOGIN_FAILURE, payload: e.message});
	}
}

function* createNewUser(action) {
	try {
		const credentials = {
			username: action.payload.username,
			password: action.payload.password,
			lake_id: action.payload.lakeid
		}
		const user = yield call(createUser, credentials);
		if (user !== null) {
			yield put ({type: actions.CREATE_USER_SUCCESS, payload: user.username});
		} else {
			yield put ({type: actions.CREATE_USER_FAILURE, payload: user});
		}
	} catch (e) {
		yield put({type: actions.CREATE_USER_FAILURE, payload: e.message});
	}
}

function* loginSaga() {
	yield takeLatest(actions.LOGIN, loginUser);
	yield takeLatest(actions.CREATE_USER, createNewUser);
}

export default loginSaga;