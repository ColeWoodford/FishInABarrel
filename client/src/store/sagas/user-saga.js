import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/user-actions';
import { getAllUsers } from '../api/user-api';

function* getUsers(action) {
	try {
		const users = yield call(getAllUsers, action.payload);
		yield put({type: actions.GET_USERS_SUCCESS, payload: users});
	} catch (e) {
		yield put({type: actions.GET_USERS_FAILURE, payload: e.message});
	}
}

function* userSaga() {
	yield takeLatest(actions.GET_USERS, getUsers);
}

export default userSaga;