import {UPDATE_QUERY} from './actions'

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