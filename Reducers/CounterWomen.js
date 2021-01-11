export default function CounterWomen( state = [0,0,0], action ) {
    switch (action.type) {
        case 'INCREMENT_WOMEN':
            return state.map((value, i)=>{
                if (action.payload.index === i) {
                    return value = value + 1
                }

                return value
            })
        case 'DECREMENT_WOMEN':
            return state.map((value, i)=> {
                if (action.payload.index === i){
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