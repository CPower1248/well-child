import { FETCH_INITIAL_START, FETCH_INITIAL_SUCCESS, FETCH_INITIAL_FAIL } from "../actions"

export const initialState = {
    state: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}
