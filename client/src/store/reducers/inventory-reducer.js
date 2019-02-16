import { actions } from '../actions/inventory-actions';

const initialState = {
  size: 0,
  money: 0
	}

function InventoryReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_INVENTORY_SUCCESS:
			return {...state, size: action.payload.size, money: action.payload.money};
		case actions.GET_INVENTORY_FAILURE:
			console.log("Failed to get Inventory: ",action.payload);
			return state;
		case actions.CREATE_INVENTORY_SUCCESS:
			return {...state, size: action.payload.size, money: action.payload.money};
		case actions.CREATE_INVENTORY_FAILURE:
			console.log("Failed ", action.payload);
			return state;
		default:		
			return state
	}
}

export default InventoryReducer;
