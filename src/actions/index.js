import axios from "axios"

export const FETCH_INITIAL_START = "FETCH_INITIAL_START"
export const FETCH_INITIAL_SUCCESS = "FETCH_INITIAL_SUCCESS"
export const FETCH_INITIAL_FAIL = "FETCH_INITIAL_FAIL"

export const FETCH_GET_PATHNAME = "FETCH_GET_PATHNAME"

export const FETCH_CONTENT_START = "FETCH_CONTENT_START"
export const FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS"
export const FETCH_CONTENT_FAIL = "FETCH_CONTENT_FAIL"

export const TOGGLE_MODAL = "TOGGLE_MODAL"

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

export const getPathname = (pathname) => dispatch => {
    dispatch({type: FETCH_GET_PATHNAME, payload: pathname})
}

export const getContent = (pathname) => dispatch => {
    dispatch({type: FETCH_CONTENT_START})

    axios.get(`https://well-child-be.herokuapp.com/api${pathname}`)
        .then(res => {
            dispatch({type: FETCH_CONTENT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_CONTENT_FAIL, payload: err.message})
        })
}

export const toggleModal = (modal) => dispatch => {
    dispatch({type: TOGGLE_MODAL, payload: !modal})
}
