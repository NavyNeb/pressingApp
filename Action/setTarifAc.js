import { SAVE_MODIF, MODIFY_TARIF } from "../Store/types";

export const modifyTarif = ( id, tarif, name ) => (dispatch) => {
    dispatch({
        type: MODIFY_TARIF,
        id: id,
        tarif: tarif,
        name: name
    })
}

export const saveModif = (dispatch) => {
    dispatch({
        type: SAVE_MODIF
    })
}