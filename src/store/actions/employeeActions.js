import {employeeConstants} from '../constants';
import {getEmployees} from '../../services';

const fetchEmployees = () => (dispatch) => {
	dispatch(employeesFetchStart());
	getEmployees()
	.then((employees) => {
		dispatch(employeesFetchSuccess(employees));
	})
	.catch((error) => {
		dispatch(employeesFetchFailed(error));
	});
};

const employeesFetchStart = () => ({
	type: employeeConstants.EMPLOYEES_FETCH_START
});

const employeesFetchSuccess = (employees) => ({
	type: employeeConstants.EMPLOYEES_FETCH_SUCCESS,
	payload: employees
});

const employeesFetchFailed = (error) => ({
	type: employeeConstants.EMPLOYEES_FETCH_FAILURE,
	payload: error
});

export const employeeActions = {
	fetchEmployees,
};