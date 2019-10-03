import {userData, employeesData, productsData} from './data';
const DUMMY_API_REQ_DELAY = 2000;

let productsDataStore = [...productsData];

export const checkLogin = (username, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(userData.username === username && userData.password === password) {
				resolve(true);
			} else if(userData.username !== username) {
				reject(new Error('Username is not valid'));
			} else {
				reject(new Error('Password does not match'));
			}
		}, DUMMY_API_REQ_DELAY);
	});
};

export const getEmployees = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(employeesData);
		}, DUMMY_API_REQ_DELAY);
	});
};

export const getProductListService = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(productsData);
		}, DUMMY_API_REQ_DELAY);
	});
};

export const getProductDetailsService = (productId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('productsData', productsData);
			let productDetails = productsData.find((product) => product.id === productId);
			resolve(productDetails);
		}, DUMMY_API_REQ_DELAY);
	});
};

export const addProductToCartService = (product) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, DUMMY_API_REQ_DELAY);
	});
};

export const getCartProductsService = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, DUMMY_API_REQ_DELAY);
	});
};
