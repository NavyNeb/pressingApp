export default function Counterkids(state = [0,0,0,0,0], action){
    switch (action.type) {
        case 'INCREMENT_KIDS':
           return state.map((value, i) => {
                if ( action.payload.index === i ) {
                    return value = value + 1
                }
                return value
            } )
        
        case 'DECREMENT_KIDS':
        console.log('decrese');
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
