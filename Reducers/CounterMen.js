import { INCREASE_MEN, DECREASE_MEN, REMOVE_MEN, ADD_MEN } from "../Store/types";
const InitialState = {articles:[],
    Total: 0
}
export default function CounterMen(state = InitialState, action){
    let nextState;
    switch (action.type) {
        case INCREASE_MEN:
            let itemToIncrement = state.articles.find( item => item.id === action.payload )
            if (itemToIncrement) {
                itemToIncrement.quantity += 1
                itemToIncrement.totalItem = itemToIncrement.quantity * itemToIncrement.price
                return {
                    ...state,
                    Total: state.Total + itemToIncrement.price,
                }
            }
            return state
        case REMOVE_MEN:
           let itemToBeRemoved = state.articles.find( item => item.id === action.payload )
           if (itemToBeRemoved) {
                itemToBeRemoved.quantity = 0
                itemToBeRemoved.totalItem = 0
               nextState = state.articles.filter( item => item.id !== itemToBeRemoved.id )
               return {
                   ...state,
                   articles: nextState,
               }
           }
           return state 
        case DECREASE_MEN:
            let itemToDecrement = state.articles.find( item => item.id === action.payload )
            if (itemToDecrement) {
                itemToDecrement.quantity -= 1 
                itemToDecrement.totalItem -= itemToDecrement.price
                return {                   
                    ...state,
                    Total: state.Total - itemToDecrement.price,
                }
                
            }
            return state
        case ADD_MEN:
            let item = { name: action.payload.name, id: action.payload.id, quantity: 1, totalItem: action.payload.price, price:  action.payload.price, category: action.payload.category, tarif: action.payload.tarif  }
            nextState = {
                ...state,
                articles:  [...state.articles, item],
            }
            return nextState;
        default:
            return state;
    }       

    
}

