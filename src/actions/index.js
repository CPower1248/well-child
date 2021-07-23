import axios from "axios"

export const FETCH_INITIAL_START = "FETCH_INITIAL_START"
export const FETCH_INITIAL_SUCCESS = "FETCH_INITIAL_SUCCESS"
export const FETCH_INITIAL_FAIL = "FETCH_INITIAL_FAIL"

export const getInitial = () => dispatch => {
    dispatch({type: FETCH_INITIAL_START})

    axios.get()
        .then(res => {
            dispatch({type: FETCH_INITIAL_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_INITIAL_FAIL, payload: err.message})
        })
}
