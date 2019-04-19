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
			// window.alert(action.payload.msg);
			console.log(action.payload.msg);
			console.log("REDUCER FISH: ", JSON.stringify(action.payload.fish,null,4));
			return {
				...state,
				caughtFish: [...state.caughtFish, action.payload.fish]
			};
		default:		
			return state
	}
}

export default LakesReducer;
