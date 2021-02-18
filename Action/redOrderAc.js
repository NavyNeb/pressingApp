import { SUBMIT_COMMANDE } from "../Store/types";

export const reqOrder = (commande) => (dispatch) => {
    console.log('did It');
    dispatch({
        type: SUBMIT_COMMANDE,
        payload: commande
    })
}