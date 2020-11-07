import {SEARCH_RETURNED, SEARCH_STARTED, SEARCH_FAILED} from './actions'

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=d0bc3438"

export function searchMovieBy(query) {
    return async function fetchMovieResults(dispatch, getState) {
        if (query) {
            const sourceURL = API_ENDPOINT + "&s=" + encodeURI(query)
            dispatch({type: SEARCH_STARTED})
            const response = await fetch(sourceURL)
                .then(response => response.json())
                .then(data => {
                    if (data && data.Search) {
                        dispatch({type: SEARCH_RETURNED, payload: data.Search, query: query})
                    } else {
                        console.log("No search results: ", data)
                        dispatch({type: SEARCH_FAILED})
                    }
                })
                .catch((error) => {
                    console.error('Error:', error)
                    dispatch({type: SEARCH_FAILED})
                })
        }
    }
}