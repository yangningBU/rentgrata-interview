import {SEARCH_RETURNED} from './actions'

const initialState = {}

const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_RETURNED:
            return {
                ...state.results,
                [action.query]: action.payload
            }
        default:
            return state
    }
}

export default resultsReducer