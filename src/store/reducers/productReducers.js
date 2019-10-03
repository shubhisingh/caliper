import {productConstants} from '../constants';

const initState = {
	products: [],
	productDetails: {}
};

const productReducers = (state=initState, action) => {
	switch(action.type) {
		case productConstants.PRODUCT_LIST_FETCH_SUCCESS:
			return {
				...state,
				products: action.payload
			};
		case productConstants.PRODUCT_LIST_FETCH_FAILURE:
			return {
				...state,
				products: []
			};
		case productConstants.PRODUCT_DETAILS_FETCH_SUCCESS:
			return {
				...state,
				productDetails: action.payload
			};
		case productConstants.PRODUCT_DETAILS_FETCH_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case productConstants.PRODUCT_ADDED_TO_CART:
			let product = state.productDetails;
			product.isAddedToCart = true;
			return {
				...state,
				productDetails: {...product}
			};
		default:
			return state;
	}
};

export { productReducers };
