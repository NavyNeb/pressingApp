import { ADD_MEN, REMOVE_MEN, INCREASE_MEN, DECREASE_MEN, } from "../Store/types";

export const addMen = (id, price, name, totalItem, quantity) => (dispatch) =>{
    console.log('pressed');
    dispatch({
        type: ADD_MEN,
        payload: {
            id: id,
            price: price,
            name: name,
            totalItem: totalItem,
            quantity: quantity
        }
    })
    console.log(name, totalItem, quantity);
}

export const removeMen = (id) => (dispatch) =>{
    console.log("reduced");
    dispatch({
        type: REMOVE_MEN,
        payload: id
    })
}

export const increase_men = (id) => (dispatch) => {
    dispatch({
        type: INCREASE_MEN,
        payload: id
    })
}

export const decrease_men = (id) => (dispatch) => {
    dispatch({
        type: DECREASE_MEN,
        payload: id
    })
}