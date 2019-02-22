import { actions } from '../actions/lake-actions';

const initialState = {
		lakes: [],
		currentLake: "",
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
			return Object.assign({}, state, {
				currentLake: action.payload,
				lakes: [...state.lakes, action.payload]
			});
		case actions.NEW_LAKE_FAILURE:
			console.log("Failed ", action.payload);
			return state;
		default:		
			return state
	}
}

export default LakesReducer;
