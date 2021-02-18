import React from "react";
import { SUBMIT_COMMANDE } from "../Store/types";

export default function reqOrders(state = [], action){
    switch (action.type) {
        case SUBMIT_COMMANDE:
          return state = [
            ...state,
            action.payload
          ]
        default:
           return state
    }
}