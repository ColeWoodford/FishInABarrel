import { call, put, takeLatest } from 'redux-saga/effects';
import { getInventory } from '../api/inventory-api';
import { actions } from '../actions/inventory-actions';

function* getInv(action) {
	try {
		const inventory = yield call(getInventory, action.payload);
		yield put({type: actions.GET_INVENTORY_SUCCESS, payload: inventory});
	} catch (e) {
		yield put({type: actions.GET_INVENTORY_FAILURE, payload: e.message});
	}
}

function* inventorySaga() {
	yield takeLatest(actions.GET_INVENTORY, getInv);
}

export default inventorySaga;