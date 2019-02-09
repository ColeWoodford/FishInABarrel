import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/user-actions';
import { getAllUsers, destroyUser } from '../api/user-api';

function* getUsers(action) {
	try {
		const users = yield call(getAllUsers, action.payload);
		yield put({type: actions.GET_USERS_SUCCESS, payload: users});
	} catch (e) {
		yield put({type: actions.GET_USERS_FAILURE, payload: e.message});
	}
}

function* deleteUser(action) {
	try{
		const deletedUser = yield call(destroyUser, action.payload);
		yield put({type: actions.DELETE_USER_SUCCESS, payload: deletedUser});
	} catch (e) {
		yield put({type: actions.DELETE_USER_FAILURE, payload: e.message});
	}
}

function* userSaga() {
	yield takeLatest(actions.GET_USERS, getUsers);
	yield takeLatest(actions.DELETE_USER, deleteUser);
}

export default userSaga;