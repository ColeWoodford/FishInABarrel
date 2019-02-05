import { combineReducers } from 'redux';
import LakesReducer from './lake-reducer';
import LoginReducer from './login-reducer';
const rootReducer = combineReducers({
    LakesReducer,
    LoginReducer
});

export default rootReducer;