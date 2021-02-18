import { ADD_COMMANDE } from "../Store/types";
export const orderActions = (order, total) => (dispatch) =>{
    console.log('pressed');
    dispatch({
        type: ADD_COMMANDE,
        payload: {
            total: total,
            order: order
        }
    })
}