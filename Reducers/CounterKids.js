import { ADD_TO_CART, REMOVE_FROM_CART } from "../Store/types";
const InitialState = {
    items: [
        {name: 'Sweaters', id: 0,  price: 450, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/sweaters_Kids.png') },
        {name: 'Sweaters', id: 1, price: 550, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/4250836_ALT_kids.png') },
        {name: 'Sweaters', id: 2, price: 650, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/kids_ALT.png') },
        {name: 'Sweaters', id: 3, price: 750, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/kids_Black.png') },
        {name: 'Sweaters', id: 4, price: 850, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/kids_Black_Plaid.png') },
        {name: 'Sweaters', id: 5, price: 950, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/kids_Cherry_Berry_Red.png') },
        {name: 'Sweaters', id: 6, price: 1050, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/kids_Girl_Ballerina_Pink.png') },
        {name: 'Sweaters', id: 7, price: 1150, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/kids_Girl_Fairisle_Gray.png') },
        {name: 'Sweaters', id: 8, price: 1250, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/kids_Girl_Pink_Dye.png') },
        {name: 'Sweaters', id: 9, price: 1350, category: 'Kids', quantity: 0, totalItem: 0, Image: require('../assets/clothes/Kids/pullover_White.png') },

    ], 
    addedItems: [],
    total: 0

} 

export default function Counterkids(state = InitialState, action){
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.payload)
        //check if the action id exists in the addedItems
       let existed_item = state.addedItems.find(item=> action.payload === item.id)
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

  else {
      return state
  }

  }
    

