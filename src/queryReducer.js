import {UPDATE_QUERY, SEARCH_STARTED, SEARCH_FAILED, SEARCH_RETURNED} from './actions'

const initialState = ""

const queryReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_QUERY:
			return action.query
		case SEARCH_FAILED:
			return 'NO_SELECTION'
		default:
			return state
	}
}

export default queryReducer