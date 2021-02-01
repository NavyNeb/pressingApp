import { GET_PRESTA_ID } from "../Store/types";

export const getPrestaId = (id) => (dispatch) => {
    dispatch(
        {
            type: GET_PRESTA_ID,
            payload: id
        }
    )
}



