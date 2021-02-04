import { PICK_CITY, PICK_DESC,  PICK_QUARTER } from '../Store/types'
export const getCity = (town) => (dispatch) => {
    dispatch(
        {
            type: PICK_CITY,
            payload: town
        }
    )
}

export const getQuarters = (quarter) => (dispatch) => {
    dispatch(
        {
            type: PICK_QUARTER,
            payload: quarter
        }
    )
}

export const getDesc = (desc) => (dispatch) => {
    dispatch(
        {
            type: PICK_DESC,
            payload: desc
        }
    )
}