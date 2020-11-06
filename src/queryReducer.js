import {UPDATE_QUERY, SEARCH_STARTED, SEARCH_FAILED, SEARCH_RETURNED} from './actions'

const initialState = null

const queryReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_QUERY:
			return action.query
		default:
			return state
	}
}

export default queryReducer