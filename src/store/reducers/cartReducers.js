import {cartConstants} from '../constants';

const initState = {
	products: [],
	productsCount: 0
};

const cartReducers = (state=initState, action) => {
	switch(action.type) {
		case cartConstants.CART_ADD_PRODUCT_SUCCESS:
			let products = state.products.concat(action.payload);
			let productsCount = products.length
			return {
				products,
				productsCount
			};
		case cartConstants.CART_ADD_PRODUCT_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case cartConstants.CART_FETCH_SUCCESS:
			return {
				...state,
				products: action.payload
			};
		case cartConstants.CART_FETCH_FAILURE:
				return {
					...state
				};
		default:
			return state;
	}
};

export { cartReducers };
