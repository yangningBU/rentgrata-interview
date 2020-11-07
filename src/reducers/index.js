import { combineReducers } from 'redux'

import queryReducer from './queryReducer'
import resultsReducer from './resultsReducer'

const rootReducer = combineReducers({
    query: queryReducer,
    results: resultsReducer
})

export default rootReducer