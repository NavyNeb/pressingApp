import { ADD_ORDER_ITEM } from "../Store/types";
const InitialState = {
    client: {
        id: 2,
        name: 'Samuel T',
        tel: '6991749634',
        mail: 'samuelT@gmail.com',
        address: {
            city: 'Douale',
            quarters: 'bonaberi',
            desc: '4etage washington, depot Guinness'
        },
    },
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
        orderItem: [{

        }],
        payment: {
            total: 0,
            orderStatus: 'PENDING',
            paymentMethod: 'CASH',
            paymentStatus: 'COMPLETED'
        }
       
    }
}


export default function Commande(state = InitialState, action){
    switch (action.type) {
        case ADD_ORDER_ITEM:
           return {
               ...state,
               orderItem: action.payload.order,
               total: action.payload.total
           }
        default:
            return state
    }
} 