import {UPDATE_QUERY} from './actions'

const initialState = {
	query: null
}

const queryReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_QUERY:
			return {
				...state,
				query: action.query
			}
		default:
			return state
	}
}

export default queryReducer