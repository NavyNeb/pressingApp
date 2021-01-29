import { FETCH_ERROR, FETCH_PRESTA, PRESTA_SUCCES } from '../Store/types'

const initialState = { 
    loading: false,
    presta: [],
    error:''
}

export default function PrestaReducer( state = initialState, action ){
    switch (action.type) {
        case PRESTA_SUCCES:
            return{
                ...state,
                loading: true
            }
        case FETCH_PRESTA:
            return{
                loading: false,
                presta: action.payload,
                error: ''
            }
        case FETCH_ERROR:
            return{
                loading: false,
                presta: [],
                error: action.payload
            }
        default:
           return state
    }
}