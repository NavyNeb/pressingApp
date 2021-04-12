import { SET_DEV_ID } from "../Store/types";

const InitialState = { 
    id: 0
 }

 export default function devIdFunction(state= InitialState, action){
     switch (action.type) {
         case SET_DEV_ID:
           return {
               ...state,
               id: action.payload
           }
         default:
             return state;
     }
 }