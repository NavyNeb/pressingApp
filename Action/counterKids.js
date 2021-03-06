import { ADD_KIDS, REMOVE_KIDS, INCREASE_KIDS, DECREASE_KIDS, } from "../Store/types";

export const addKids = (id, price, name, totalItem, quantity, category, tarif) => (dispatch) =>{
    console.log('pressed');
    dispatch({
        type: ADD_KIDS,
        payload: {
            id: id,
            price: price,
            name: name,
            totalItem: totalItem,
            quantity: quantity,
            category: category,
            tarif: tarif
        }
    })
    console.log(name, totalItem, quantity);
}

export const removeKids = (id) => (dispatch) =>{
    console.log("reduced");
    dispatch({
        type: REMOVE_KIDS,
        payload: id
    })
}

export const increase_kids = (id) => (dispatch) => {
    dispatch({
        type: INCREASE_KIDS,
        payload: id
    })
}

export const decrease_kids = (id) => (dispatch) => {
    dispatch({
        type: DECREASE_KIDS,
        payload: id
    })
}