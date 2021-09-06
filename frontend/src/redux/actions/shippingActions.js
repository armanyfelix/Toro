import * as actionTypes from '../constants/shippingConstants';
import axios from 'axios';

export const getShipping = () => async (dispatch) => {
    try {
        const { data } = await axios.get('api/checkout');

        dispatch({
            type: actionTypes.GET_SHIPPING_SUCCESS,
            payload: {
                firtName: data.firtName,
                lastName: data.lastName,
                number: data.number,
                email: data.email,
                address1: data.address1,
                address2: data.address2,
                city: data.city,
                state: data.state,
                postalCode: data.postalCode,
            },
        });

    } catch (error) {
        dispatch({
            type: actionTypes.GET_SHIPPING_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })

    }


};