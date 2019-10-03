import {authConstants} from '../constants';
import {user} from '../../services';

const initState = {
	isLoggedIn: false,
	isDoingLogin: false,
	userName: null,
	loginError: null
};

const authReducers = (state=initState, action) => {
	switch(action.type) {
		case authConstants.LOGIN_START:
			return {
				...state,
				isDoingLogin: true
			};
		case authConstants.LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				isDoingLogin: false,
				userName: action.payload
			};
		case authConstants.LOGIN_FAILURE:
			return {
				...state,
				isDoingLogin: false,
				userName: null,
				loginError: action.payload
			};
		default:
			return state;
	}
};

export { authReducers };
