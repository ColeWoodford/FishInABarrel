export const actions = {
	GET_INVENTORY: 'GET_INVENTORY',
	GET_INVENTORY_SUCCESS: 'GET_INVENTORY_SUCCESS',
	GET_INVENTORY_FAILURE: 'GET_INVENTORY_FAILURE',
	CREATE_INVENTORY_SUCCESS: 'CREATE_INVENTORY_SUCCESS',
	CREATE_INVENTORY_FAILURE: 'CREATE_INVENTORY_FAILURE',
	SELL_ITEM: 'SELL_ITEM',
	SELL_ITEM_SUCCESS: 'SELL_ITEM_SUCCESS',
	SELL_ITEM_FAILURE: 'SELL_ITEM_FAILURE',
	BUY_ITEM: 'BUY_ITEM',
	BUY_ITEM_SUCCESS: 'BUY_ITEM_SUCCESS',
	BUY_ITEM_FAILURE: 'BUY_ITEM_FAILURE',
}

export const getInventory = (userId) => ({
	type: actions.GET_INVENTORY,
	payload: userId,
});

export const sellItem = (itemId) => ({
	type: actions.SELL_ITEM,
	payload: itemId,
});

export const buyItem = (itemName) => ({
	type: actions.BUY_ITEM,
	payload: itemName
})