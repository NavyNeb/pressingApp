import { GET_CLIENT, GET_PRESTA } from "../Store/types";

export const getCLient = (client) => (dispatch) => {
   dispatch({
    type: GET_CLIENT,
    payload: client
   })
}

export const getPresta = (presta) => (dispatch) => {
   dispatch({
    type: GET_PRESTA,
    payload: presta
   })
}