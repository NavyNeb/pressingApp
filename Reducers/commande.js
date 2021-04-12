import { GET_PRESTA, GET_CLIENT } from "../Store/types";
const InitialState = {
    client: 0,
    prestataire: 0,
    pickAddress: {
        city: '',
        quarters: '',
        desc: ''
    },
    deliveryAddress: {
        city: '',
        quarters: '',
        desc: ''
    },
    commande: {
        orderItem: [],
        payment: {
            amountGiven: 0,
            leftOver: 0,
            total: 0,
            orderStatus: '',
            paymentMethod: '',
            paymentStatus: ''
        }
       
    }
}


export default function Commande(state = InitialState, action){
    let nextState 
    switch (action.type) {
        case GET_CLIENT:
            nextState = {
               ...state,
              client: action.payload
           }
           return nextState
        case GET_PRESTA:
            nextState = {
                ...state,
                prestataire: action.payload
            }
            return nextState
        default:
            return state
    }
} 