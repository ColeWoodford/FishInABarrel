import { combineReducers } from 'redux';
import LakesReducer from './lake-reducer';
import LoginReducer from './login-reducer';
import UsersReducer from './user-reducer';
import InventoryReducer from './inventory-reducer';
const rootReducer = combineReducers({
    LakesReducer,
    LoginReducer,
    UsersReducer,
    InventoryReducer
});

export default rootReducer;