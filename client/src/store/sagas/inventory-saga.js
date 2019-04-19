import { call, put, takeLatest } from 'redux-saga/effects';
import { getInventory } from '../api/inventory-api';
import { getInventoryItems, getFishItems } from '../api/inventoryItem-api';
import { actions } from '../actions/inventory-actions';

function* getInv(action) {
	try {
		const inventory = yield call(getInventory, action.payload);
		const items = yield call(getInventoryItems, inventory.id);
		const fish = yield call(getFishItems, inventory.id);
		const allItems = items.concat(fish);
		if (items !== null) {
			yield put({type: actions.GET_INVENTORY_SUCCESS, payload: {inventory, allItems}});
		}
	} catch (e) {
		yield put({type: actions.GET_INVENTORY_FAILURE, payload: e.message});
	}
}

function* inventorySaga() {
	yield takeLatest(actions.GET_INVENTORY, getInv);
}

export default inventorySaga;