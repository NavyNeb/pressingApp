import { GET_SERVICE_ID } from "../Store/types";

export const getServiceId = (index) => (dispatch) =>{
  
    dispatch(
        {
            type: GET_SERVICE_ID,
            payload: index
        }
    )
}

