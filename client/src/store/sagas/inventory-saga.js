import { call, put, takeLatest } from 'redux-saga/effects';
import { getInventory, getInventoryById, addMoney } from '../api/inventory-api';
import { getInventoryItems, getFishItems, getItemById, getFishById, sellFish, destroyInventoryItem, createInventoryItem } from '../api/inventoryItem-api';
import { itemsForSale } from '../assets/itemsForSale';
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
		let isFish = 0;
		let itemToSell = yield call(getItemById, action.payload);
		//item is not an inventory item so it must be a fish
		if (!itemToSell.length) {
			isFish = 1;
			itemToSell = yield call(getFishById, action.payload);
		}
		const inventoryId = itemToSell[0].inventoryId;
		const valueGained = parseInt(itemToSell[0].value);
		const inventory = yield call(getInventoryById, inventoryId);
		const newMoneyValue = inventory.money + valueGained;
		const newInventory = yield call(addMoney, {invId: inventoryId, value: newMoneyValue});
		let destroyedItem;
		if (isFish) {
			//destroy fish
			destroyedItem = yield call(sellFish, action.payload);
		} else {
			destroyedItem = yield call(destroyInventoryItem, action.payload);
		}
		yield put({type: actions.SELL_ITEM_SUCCESS, payload: {money: newMoneyValue, item: itemToSell[0]}});
		if (isFish) {
			yield put({type: lakeActions.SELL_FISH_SUCCESS, payload: itemToSell[0]});
		}
	} catch (e) {
		yield put({type: actions.SELL_ITEM_FAILURE, payload: e.message});
	}
}

function* buyInvItem(action) {
	try {
		const {itemName, userId} = action.payload;
		console.log("going to buy", itemName, " for ", userId);
		const inventory = yield call(getInventory, userId);
		const inventoryId = inventory.id;
		console.log("inv id: ", inventoryId);
		const itemToBuy = itemsForSale.filter(item => item.name == itemName);
		itemToBuy[0].id = inventoryId;
		console.log("item to buy: ",JSON.stringify(itemToBuy[0],null,4));
		const valueLost = parseInt(itemToBuy[0].value);
		const newMoneyValue = inventory.money - valueLost;
		const newInventory = yield call(addMoney, {invId: inventoryId, value: newMoneyValue});
		console.log("new inv: ",JSON.stringify(newInventory,null,4));
		const boughtItem = yield call(createInventoryItem, itemToBuy[0]);
		console.log("bought item: ",JSON.stringify(boughtItem,null,4));
		yield put({type: actions.BUY_ITEM_SUCCESS, payload: {money: newMoneyValue, item: boughtItem}});
	} catch (e) {
		yield put({type: actions.BUY_ITEM_FAILURE, payload: e.message});
	}
}

function* inventorySaga() {
	yield takeLatest(actions.GET_INVENTORY, getInv);
	yield takeLatest(actions.SELL_ITEM, sellInvItem);
	yield takeLatest(actions.BUY_ITEM, buyInvItem);
}

export default inventorySaga;