import { PICK_CITY, PICK_DESC, PICK_QUARTER } from '../Store/types'

InitialState = {
    city: '',
    quarter: '',
    desc: ''
}

export default function GetPickAddress(state = InitialState, action){
    switch(action.type){
        case PICK_CITY:
            return {
                ...state,
                city: action.payload
            }
        case PICK_QUARTER:
            return{
                ...state,
                quarter: action.payload
            }
        case PICK_DESC:
            return{
                ...state,
                desc: action.payload
            }
        default:
            return state
    }
}