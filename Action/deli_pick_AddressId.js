import { SET_DEV_ID, SET_PIK_ID } from "../Store/types";

export const getDeliveryId = (id) => (dispatch) => {
    dispatch({
        type: SET_DEV_ID,
        payload: id
    })
} 

export const getPickId = (id) => (dispatch) => {
    dispatch({
        type: SET_PIK_ID,
        payload: id
    })
} 