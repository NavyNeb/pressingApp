import { DLV_CITY, DLV_DESC, DLV_QUARTER } from '../Store/types'
export const getCity = (town) => (dispatch) => {
    dispatch(
        {
            type: DLV_CITY,
            payload: town
        }
    )
}

export const getQuarters = (quarter) => (dispatch) => {
    dispatch(
        {
            type: DLV_QUARTER,
            payload: quarter
        }
    )
}

export const getDesc = (desc) => (dispatch) => {
    dispatch(
        {
            type: DLV_DESC,
            payload: desc
        }
    )
}