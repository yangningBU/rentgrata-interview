import {SEARCH_RETURNED} from './actions'

const initialState = {}

const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_RETURNED:
            const newResults = {
                ...state,
                [action.query]: action.payload
            }
            return newResults
        default:
            return state
    }
}

export default resultsReducer