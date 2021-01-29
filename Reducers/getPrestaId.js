import { GET_PRESTA_ID, GET_SERVICE_ID } from "../Store/types";

const InitialStata = {
    value: 0,
}
export default function GetPrestaId(state = InitialStata , action){
    switch (action.type) {
        case GET_PRESTA_ID:
            return {
                ...state,
                value: action.payload
              }
       
        default:
            return state
    }
}