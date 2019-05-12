import { actions } from '../actions/inventory-actions';

const initialState = {
  size: 0,
	money: 0,
	items: []
	}

function InventoryReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_INVENTORY_SUCCESS:
			return {
				...state,
				size: action.payload.inventory.size,
				money: action.payload.inventory.money,
				items: action.payload.items
			};
		case actions.GET_INVENTORY_FAILURE:
			console.log("Failed to get Inventory: ",action.payload);
			return state;
		case actions.CREATE_INVENTORY_SUCCESS:
			return {
				...state,
				size: action.payload.inv.size,
				money: action.payload.inv.money,
				items: [...state.items, action.payload.rod, action.payload.bait]
			};
		case actions.CREATE_INVENTORY_FAILURE:
			console.log("Failed to create inventory: ", action.payload);
			return state;
		case actions.SELL_ITEM_SUCCESS:
			return {
				...state,
				money: action.payload.money,
				items: state.items.filter(item => item.id != action.payload.item.id)
			};
		case actions.SELL_ITEM_FAILURE:
			console.log("Failed to sell item: ",action.payload);
		case actions.BUY_ITEM_SUCCESS:
			return {
				...state,
				money: action.payload.money,
				items: [...state.items, action.payload.item]
			}
		case actions.BUY_ITEM_FAILURE:
			console.log("Failed to buy item: ",action.payload);
		default:		
			return state
	}
}

export default InventoryReducer;
