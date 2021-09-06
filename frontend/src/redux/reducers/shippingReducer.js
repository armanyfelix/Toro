import * as actionTypes from '../constants/shippingConstants';

export const shippingReducer = (state = { shipping: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_SHIPPING_SUCCESS:
            return {
                ...state,
                address: action.payload,
            }
        case actionTypes.GET_SHIPPING_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}


