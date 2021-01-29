import { GET_SERVICE_ID } from "../Store/types";

export const getServiceId = (index) => (dispatch) =>{
    console.log('hello');
    dispatch(
        {
            type: GET_SERVICE_ID,
            payload: index
        }
    )
}

