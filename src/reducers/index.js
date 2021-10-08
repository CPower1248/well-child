import { 
    FETCH_GET_PATHNAME,
    FETCH_CONTENT_START,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_FAIL,
    TOGGLE_MODAL
} from "../actions"

export const initialState = {
    isFetching: false,
    error: "",
    content: [],
    pathname: "",
    modal: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GET_PATHNAME:
            return ({
                ...state,
                pathname: action.payload
            })
        case FETCH_CONTENT_START:
            return ({
                ...state,
                isFetching: true,
                error: ""
            })
        case FETCH_CONTENT_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                content: action.payload
            })
        case FETCH_CONTENT_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        case TOGGLE_MODAL:
            return ({
                ...state,
                modal: action.payload
            })
        default:
            return state
    }
}
