import { combineReducers } from 'redux';
import LakesReducer from './lake-reducer';
import LoginReducer from './login-reducer';
import UsersReducer from './user-reducer';
const rootReducer = combineReducers({
    LakesReducer,
    LoginReducer,
    UsersReducer
});

export default rootReducer;