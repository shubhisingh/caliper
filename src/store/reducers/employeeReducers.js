import {employeeConstants} from '../constants';

const initState = {
	isDoingFetch: false,
	employees: []
};

const employeeReducers = (state=initState, action) => {
	switch(action.type) {
		case employeeConstants.EMPLOYEES_FETCH_START:
			return {
				...state,
				isDoingFetch: true
			};
		case employeeConstants.EMPLOYEES_FETCH_SUCCESS:
			return {
				...state,
				isDoingFetch: false,
				employees: action.payload
			};
		case employeeConstants.EMPLOYEES_FETCH_FAILURE:
			return {
				...state,
				isDoingFetch: false,
				fetchError: action.payload
			};
		default:
			return state;
	}
};

export { employeeReducers };
