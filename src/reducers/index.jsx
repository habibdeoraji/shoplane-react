import { SET_PRODUCT_LIST, ADD_TO_CART } from "../actionTypes"

const initialState = {
    productList: [{ name: "hello" }],
    productById: [],
    cart: [],
}

const reducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCT_LIST:
            return { ...state, productList: [...payload] }
        case ADD_TO_CART:
            return { ...state, cart: [...payload] }
        default:
            return state
    }
}


export default reducers