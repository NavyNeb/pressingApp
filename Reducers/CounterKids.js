import { ADD_TO_CART, REMOVE_FROM_CART, MODIFY_TARIF, SAVE_MODIF } from "../Store/types";
const InitialState = {
    addedItems: [],
    total: 0

} 

export default function Counterkids(state = InitialState, action){
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.payload)
        //check if the action id exists in the addedItems
       let existed_item = state.addedItems.find(item => action.payload === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1
          addedItem.totalItem = addedItem.quantity * addedItem.price;
        
           return{
              ...state,
               total: state.total + addedItem.price
                }
      }
       else{
          addedItem.quantity = 1;
          addedItem.totalItem = addedItem.quantity * addedItem.price;
          //calculating the total
          let newTotal = state.total + addedItem.price
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  else if(action.type === REMOVE_FROM_CART){
    let addedItem = state.items.find(item=> item.id === action.payload)
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item=> action.payload === item.id)
    if (existed_item) {
       if ( addedItem.quantity > 0 ) {
           addedItem.quantity -= 1;
           addedItem.totalItem -= addedItem.price;
           return {
               ...state,
               total: state.total - addedItem.price
           }
           
       } else if (addedItem.quantity === 0 ) {
           
           return {
               addedItems: [ state.addedItems.filter(item => item.id != action.payload) ],
               ...state
           }
       }
    } else {
        return state
    }
  }

  else if( action.type === MODIFY_TARIF ) {
      state.items.map((item, id) => {
          if (item.id === action.id ) {
              item.name = action.tarif
              return {
                ...state
              }
          } else {
              return state
          }
      })
  } else {
      return state
  }

  }
    

