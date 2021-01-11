export default function CounterKids(state = [0,0,0], action){
    switch (action.type) {
        case 'INCREMENT_KIDS':
            return state.map((value, i)=>{
                if (action.type.payload === i) {
                    return value = value + 1
                }
                return value
            })
        case 'DECREMENT_KIDS':
            return state.map((value, i) => {
                if (action.type.payload === i) {
                    if ( value > 0 ) {
                        return value -= 1
                    }
                }

                return value
            })

        default:
            return state
            
    }
}