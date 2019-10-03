import {productConstants} from '../constants';
import {getProductDetailsService, getProductListService} from '../../services';

const fetchProductList = () => (dispatch) => {
    getProductListService()
    .then(products => {
        dispatch(fetchProductListSuccess(products));
    })
    .catch(error => {
        dispatch(fetchProductListFailure(error));
    });
};

const fetchProductDetails = (productId) => (dispatch) => {
    getProductDetailsService(productId)
    .then(product => {
        dispatch(fetchProductDetailsSuccess(product));
    })
    .catch(error => {
        dispatch(fetchProductDetailsFailure(error));
    });
};

const productAddedToCart = (productId) => ({
	type: productConstants.PRODUCT_ADDED_TO_CART,
	payload: productId
});

const fetchProductListSuccess = (products) => ({
    type: productConstants.PRODUCT_LIST_FETCH_SUCCESS,
    payload: products
});

const fetchProductListFailure = (error) => ({
    type: productConstants.PRODUCT_LIST_FETCH_FAILURE,
    payload: error
});

const fetchProductDetailsSuccess = (product) => ({
    type: productConstants.PRODUCT_DETAILS_FETCH_SUCCESS,
    payload: product
});

const fetchProductDetailsFailure = (error) => ({
    type: productConstants.PRODUCT_DETAILS_FETCH_FAILURE,
    payload: error
});

export const productActions = {
	fetchProductList,
	fetchProductDetails,
	productAddedToCart
};
