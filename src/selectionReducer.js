import {UPDATE_SELECTION, SEARCH_RETURNED, SEARCH_FAILED} from './actions'

const initialState = ""

const selectionReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SELECTION:
            return action.selection
        case SEARCH_RETURNED:
            return action.query
        case SEARCH_FAILED:
            return initialState
        default:
            return state
    }
}

export default selectionReducer