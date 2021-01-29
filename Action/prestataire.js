
import { useEffect } from "react";
import { FETCH_ERROR, FETCH_PRESTA, PRESTA_SUCCES } from '../Store/types'


export const fetchPresta = (users) => {
    console.log(users);
    return {
        type: FETCH_PRESTA,
        payload: users
    }
}

export const PrestaSuccess = () => {
    return {
        type: PRESTA_SUCCES
    }
}

export const fetchError = (error) => {
    return { 
        type: FETCH_ERROR,
        payload: error
     }
}


      


