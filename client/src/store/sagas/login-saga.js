import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/login-actions';
import { actions as invActions } from '../actions/inventory-actions';
import { login, createUser } from '../api/login-api';
import { createInventory } from '../api/inventory-api';
import { createInventoryItem } from '../api/inventoryItem-api';
import { bambooRod } from '../assets/fishingRods';
import { worms } from '../assets/baits';

function* loginUser(action) {
	try {
		const credentials = {
			username: action.payload.username,
			password: action.payload.password
		}
		const user = yield call(login, credentials);
		if (user !== null) {
			yield put({type: actions.LOGIN_SUCCESS, payload: user});
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
			lakeId: action.payload.lakeid
		}
		const user = yield call(createUser, credentials);
		if (user !== null) {
			yield put ({type: actions.CREATE_USER_SUCCESS, payload: user});
			const inventory = yield call(createInventory, user);
			const firstRod = bambooRod;
			const firstBait = worms;
			firstRod.category = "equipedRod";
			firstBait.category = "equipedBait";
			firstRod.id = inventory.id;
			firstBait.id = inventory.id;
			const fishingRod = yield call(createInventoryItem, firstRod);
			const bait = yield call(createInventoryItem, firstBait);
			if (inventory !== null) {
				yield put ({type: invActions.CREATE_INVENTORY_SUCCESS, payload: {inv: inventory, rod: fishingRod, bait: bait}});
			} else {
				yield put ({type: invActions.CREATE_INVENTORY_FAILURE, payload: "create inventory"});
			}
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