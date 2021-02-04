import { DLV_CITY, DLV_DESC, DLV_QUARTER } from '../Store/types'

InitialState = {
    city: '',
    quarter: '',
    desc: ''
}

export default function GetDeliveryAddress(state = InitialState, action){
    switch(action.type){
        case DLV_CITY:
            return {
                ...state,
                city: action.payload
            }
        case DLV_QUARTER:
            return{
                ...state,
                quarter: action.payload
            }
        case DLV_DESC:
            return{
                ...state,
                desc: action.payload
            }
        default:
            return state
    }
}