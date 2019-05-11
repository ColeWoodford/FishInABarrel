import { call, put, takeLatest } from 'redux-saga/effects';
import { getInventory, getInventoryById, addMoney } from '../api/inventory-api';
import { getInventoryItems, getFishItems, getItemById, destroyInventoryItem } from '../api/inventoryItem-api';
import { actions } from '../actions/inventory-actions';
import { actions as lakeActions } from '../actions/lake-actions';

function* getInv(action) {
	try {
		const inventory = yield call(getInventory, action.payload);
		const items = yield call(getInventoryItems, inventory.id);
		let fish = yield call(getFishItems, inventory.id);
		if (items !== null) {
			yield put({type: actions.GET_INVENTORY_SUCCESS, payload: {inventory, items}});
		}
		if (fish !== null) {
			yield put({type: lakeActions.GET_FISH_SUCCESS, payload: fish});
		}
	} catch (e) {
		yield put({type: actions.GET_INVENTORY_FAILURE, payload: e.message});
	}
}

function* sellInvItem(action) {
	try {
		const itemToSell = yield call(getItemById, action.payload);
		console.log("Item: ", JSON.stringify(itemToSell,null,4));
		const inventoryId = itemToSell[0].inventoryId;
		const valueGained = itemToSell[0].value;
		console.log("values: ", inventoryId,":", valueGained);
		const inventory = yield call(getInventoryById, inventoryId);
		console.log("inventory: ", JSON.stringify(inventory,null,4));
		const newMoneyValue = inventory[0].money + valueGained;
		const newInventory = yield call(addMoney, {invId: inventoryId, value: newMoneyValue});
		console.log("New inv: ", JSON.stringify(newInventory,null,4));
		const destroyedItem = yield call(destroyInventoryItem, action.payload);
		console.log("Des Item: ", JSON.stringify(destroyedItem,null,4));
		yield put({type: actions.SELL_ITEM_SUCCESS, payload: destroyedItem})
	} catch (e) {
		yield put({type: actions.SELL_ITEM_FAILURE, payload: e.message});
	}
}

function* inventorySaga() {
	yield takeLatest(actions.GET_INVENTORY, getInv);
	yield takeLatest(actions.SELL_ITEM, sellInvItem);
}

export default inventorySaga;