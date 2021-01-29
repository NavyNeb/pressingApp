import { GET_SERVICE_ID } from "../Store/types";

const InitialStata = {
    value: 0,
}
export default function GetServiceId(state = InitialStata , action){
    switch (action.type) {
        case GET_SERVICE_ID:
            return {
                ...state,
                value: action.payload
              }
       
        default:
            return state
    }
}