import { actions } from '../actions/lake-actions';

const initialState = {
		lakes: [],
	}

function LakesReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_LAKES_SUCCESS:
			return Object.assign({}, state, {
				lakes: action.payload
			})
		case actions.GET_LAKES_FAILURE:
			console.log("Failed ",action.payload);
			return state
		default:		
			return state
	}
}

export default LakesReducer;
