import { ADD_TO_MEN, REMOVE_FROM_MEN } from "../Store/types";

export const addMen = (id) => (dispatch) =>{
    console.log('pressed');
    dispatch({
        type: ADD_TO_MEN,
        payload: id
    })
}

export const removeMen = (id) => (dispatch) =>{
    dispatch({
        type: REMOVE_FROM_MEN,
        payload: id
    })
}