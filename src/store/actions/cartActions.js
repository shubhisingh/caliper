import {cartConstants} from '../constants';
import {productActions} from './productActions';
import {addProductToCartService, getCartProductsService} from '../../services';

const addProductToCart = (product) => (dispatch) => {
	addProductToCartService(product)
	.then((isSuccess) => {
		if(isSuccess) {
			dispatch(addProductToCartSuccess(product));
			dispatch(productActions.productAddedToCart(product));
		} else {
			dispatch(addProductToCartFailure(new Error('Failed to add product to cart')));
		}
	})
	.catch((error) => {
		dispatch(addProductToCartFailure(error));
	});
};

const fetchCartProducts = () => (dispatch, getState) => {
	let state = getState();
    getCartProductsService()
    .then(isSuccess => {
        dispatch(fetchCartProductsSuccess(state.cartReducers.products));
    })
    .catch(error => {
        dispatch(fetchCartProductsFailure(error));
    })
};

const fetchCartProductsSuccess = (products) => ({
    type: cartConstants.CART_FETCH_SUCCESS,
    payload: products
});

const fetchCartProductsFailure = (error) => ({
    type: cartConstants.CART_FETCH_FAILURE,
    payload: error
});

const addProductToCartSuccess = (product) => ({
    type: cartConstants.CART_ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductToCartFailure = () => ({
    type: cartConstants.CART_ADD_PRODUCT_FAILURE
});

export const cartActions = {
	addProductToCart,
	fetchCartProducts
};
