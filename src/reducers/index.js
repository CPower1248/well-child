import { FETCH_CONTENT_START, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FAIL } from "../actions"

export const initialState = {
    isFetching: false,
    error: "",
    content: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CONTENT_START:
            return({
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
        default:
            return state
    }
}
