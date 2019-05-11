import { actions } from '../actions/lake-actions';
import { strictEqual } from 'assert';

const initialState = {
		lakes: [],
		currentLake: "",
		caughtFish: []
	}

function LakesReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_LAKES_SUCCESS:
			return Object.assign({}, state, {
				lakes: action.payload
			});
		case actions.GET_LAKES_FAILURE:
			console.log("Failed to get lakes: ",action.payload);
			return state;
		case actions.NEW_LAKE_SUCCESS:
			return {
				...state,
				currentLake: action.payload,
				lakes: [...state.lakes, action.payload]
			}
		case actions.NEW_LAKE_FAILURE:
			console.log("Failed to create new lake: ", action.payload);
			return state;
		case actions.CATCH_FISH_SUCCESS:
			window.alert(action.payload.msg);
			return {
				...state,
				caughtFish: [...state.caughtFish, action.payload.fish]
			};
			case actions.GET_FISH_SUCCESS:
			return {
				...state,
				caughtFish: action.payload
			};
			case actions.SELL_FISH_SUCCESS:
			return {
				...state,
				caughtFish: state.caughtFish.filter(item => item.id != action.payload.id)
				}
		default:		
			return state
	}
}

export default LakesReducer;
