import { ADD_TO_CART, REMOVE_FROM_CART } from "../Store/types";

export const getKids = (id) => (dispatch) =>{

    dispatch({
        type: ADD_TO_CART,
        payload: id
    })
}

export const removeKids = (id) => (dispatch) =>{
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}