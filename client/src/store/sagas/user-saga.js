import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/user-actions';
import { getAllUsers, destroyUser } from '../api/user-api';
import { getInventory, destroyInventory } from '../api/inventory-api';

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
		const deletedUser = yield call(destroyUser, action.payload.username);
		const deletedInv = yield call(destroyInventory, action.payload.id);
		yield put({type: actions.DELETE_USER_SUCCESS, payload: deletedUser});
	} catch (e) {
		yield put({type: actions.DELETE_USER_FAILURE, payload: e.message});
	}
}

function* getUserInfo(action) {
	try{
		const inventory = yield call(getInventory, action.payload);
		console.log("SAGA:",JSON.stringify(inventory,null,4));
		yield put({type: actions.GET_USER_INFO_SUCCESS, payload: inventory})
	} catch (e) {
		yield put({type: actions.GET_USER_INFO_FAILURE, payload: e.message});
	}
}

function* userSaga() {
	yield takeLatest(actions.GET_USERS, getUsers);
	yield takeLatest(actions.DELETE_USER, deleteUser);
	yield takeLatest(actions.GET_USER_INFO, getUserInfo);
}

export default userSaga;