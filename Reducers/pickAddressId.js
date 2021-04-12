import { SET_PIK_ID } from "../Store/types";

const InitialState = { 
    id: 0
 }

 export default function pickIdFunction(state= InitialState, action){
     switch (action.type) {
         case SET_PIK_ID:
           return {
               ...state,
               id: action.payload
           }
         default:
             return state;
     }
 }