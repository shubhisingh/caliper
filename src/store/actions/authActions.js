import {authConstants} from '../constants';
import {checkLogin} from '../../services';

const doLogin = (username, password) => (dispatch) => {
	dispatch(loginStart());
	checkLogin(username, password)
	.then((success) => {
		if(success) {
			dispatch(loginSuccess(username));
		} else {
			dispatch(loginFailed(new Error('Login failed')));
		}
	})
	.catch((error) => {
		dispatch(loginFailed(error));
	});
};

const loginStart = () => ({
	type: authConstants.LOGIN_START
});

const loginSuccess = (username) => ({
	type: authConstants.LOGIN_SUCCESS,
	payload: username
});

const loginFailed = (error) => ({
	type: authConstants.LOGIN_FAILURE,
	payload: error
});

export const authActions = {
	doLogin,
};