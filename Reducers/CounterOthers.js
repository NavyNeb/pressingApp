export default function CounterOther(state = [0,0,0,0,0], action){
    switch (action.type) {
        case 'INCREMENT_OTHERS':
           return state.map((value, i) => {
                if ( action.payload.index === i ) {
                    return value = value + 1
                }
                return value
            } )
        
        case 'DECREMENT_OTHERS':
            return state.map((value, i) => {
                if ( action.payload.index === i ) {
                    if (value > 0) {
                        return value = value - 1
                    }
                }
                return value
            } )
            
        default:
            return state
    }       

    
}

