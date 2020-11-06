import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import queryReducer from './queryReducer.js'
import resultsReducer from './resultsReducer'

const rootReducer = combineReducers({
    query: queryReducer,
    results: resultsReducer
})
console.log(rootReducer)

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer)
export default store