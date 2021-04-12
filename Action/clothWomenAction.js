import { ADD_WOMEN, REMOVE_WOMEN, INCREASE_WOMEN, DECREASE_WOMEN, } from "../Store/types";

export const addWomen = (id, price, name, totalItem, quantity,category, tarif) => (dispatch) =>{
    console.log('pressed');
    dispatch({
        type: ADD_WOMEN,
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

export const removeWomen = (id) => (dispatch) =>{
    console.log("reduced");
    dispatch({
        type: REMOVE_WOMEN,
        payload: id
    })
}

export const increase_women = (id) => (dispatch) => {
    dispatch({
        type: INCREASE_WOMEN,
        payload: id
    })
}

export const decrease_women = (id) => (dispatch) => {
    dispatch({
        type: DECREASE_WOMEN,
        payload: id
    })
}