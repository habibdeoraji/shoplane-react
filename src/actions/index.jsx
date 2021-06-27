import {
    SET_PRODUCT_LIST,
    ADD_TO_CART,
} from "../actionTypes";


export const setProductList = (payload) => ({
    type: SET_PRODUCT_LIST,
    payload,
});

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});

