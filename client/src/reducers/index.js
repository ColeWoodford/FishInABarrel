import { combineReducers } from 'redux';
import LakesReducer from './lake-reducer';
const rootReducer = combineReducers({
    LakesReducer,
});

export default rootReducer;