import {SEARCH_RETURNED} from './actions'

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=d0bc3438"

export async function fetchMovieResults(dispatch, getState) {
  const sampleURL = API_ENDPOINT + "&i=tt3896198"
  console.log("about to call fetch")
  const response = await fetch(sampleURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        dispatch({ type: SEARCH_RETURNED, payload: data, query: "tt3896198" }) // .Search
    })
    .catch((error) => {
        // Dispatch error response
        console.error('Error:', error);
    });
}