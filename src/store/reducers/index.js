import {combineReducers} from 'redux';
import { authReducers } from './authReducers';
import { employeeReducers } from './employeeReducers';
import { cartReducers } from './cartReducers';
import { productReducers } from './productReducers';

const rootReducer = combineReducers({
    authReducers,
	employeeReducers,
	cartReducers,
	productReducers
});

export default rootReducer;
