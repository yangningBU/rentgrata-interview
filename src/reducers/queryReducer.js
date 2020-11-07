import {UPDATE_QUERY, SEARCH_FAILED, NO_SELECTION} from '../constants'

const initialState = ""

const queryReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_QUERY:
			return action.query.toLowerCase().trim()
		case SEARCH_FAILED:
			return NO_SELECTION
		default:
			return state
	}
}

export default queryReducer