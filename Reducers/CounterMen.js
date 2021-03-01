import { INCREASE_MEN, DECREASE_MEN, REMOVE_MEN, ADD_MEN } from "../Store/types";
const InitialState = {articles:[]}
export default function CounterMen(state = InitialState, action){
    let nextState;
    switch (action.type) {
        case INCREASE_MEN:
        //     nextState = {
        //         ...state,
        //         articles: state.articles.map((value, i) => {
        //             if ( action.payload === i ) {
        //              console.log(value);
        //             }
        //             return nextState;
        //         } )
        //     }
        //     console.log("state",state);
        //    return nextState;
        let itemExists = false;
        nextState = state.articles.map(item => {
        const newItem = { ...item };
        if (newItem.item.id === payload.id) {
            itemExists = true;
            newItem.item.quantity = item.quantity + 1;
        }
        return newItem;
        });

        if (!itemExists) newState.push(payload);

        return nextState;
        
        case REMOVE_MEN:
            nextState = {
                ...state,
                articles: state.articles.filter(i => i.id != action.payload)
            }
           return nextState;
        case DECREASE_MEN:
           
        case ADD_MEN:
            let item = { name: action.payload.name, id: action.payload.id, quantity: action.payload.quantity, totalItem: action.payload.totalItem  }
            nextState = {
                ...state,
                articles:  [...state.articles, item]
            }
            return nextState;
        default:
            return state;
    }       

    
}

