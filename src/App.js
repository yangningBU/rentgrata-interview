import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './App.css';

import {UPDATE_QUERY} from './actions'
import {searchMovieBy} from './api'


const SelectPreviousResults = () => {
  const selectedQuery = useSelector(state => state.query)
  const previousResults = useSelector(state => state.results)
  const dispatch = useDispatch()
  const selectPrevious = (e) => {
    const value = e.target.value
    if (value) {
      dispatch({
        type: UPDATE_QUERY,
        query: value
      })
    }
  }
  
  if (!selectedQuery) {
    return null
  }

  return (
    <form>
     <select name="previousResults" onChange={(e) => selectPrevious(e)}>
      <option value="NO_SELECTION" selected={selectedQuery === "" || null}>--</option>
      {Object.keys(previousResults).map(key => {
        return <option value={key} key={key} selected={selectedQuery === key || null}>{key}</option>
      })}
     </select>
    </form>
  )
}



/* ------ */

const MovieResult = ({result}) => {
  const title = result.Title || "Unknown"
  const poster = result.Poster
  const year = result.Year
  return (
    <div>
      <img src={poster} width="100px"/>
      <p>{title} ({year})</p>
    </div>
  )
}


const SearchBar = () => {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch({
      type: UPDATE_QUERY,
      query: query.toLowerCase().trim() || 'NO_SELECTION'
    })
    dispatch(searchMovieBy(query))
  }

  return (
    <form onSubmit={(e) => submitSearch(e)}>
      <input onChange={(e) => setQuery(e.target.value)} autoComplete="true"/>
      <button type="button" onClick={submitSearch}>Search</button>
    </form>
  )
}

const Results = ({results}) => {
  if (!results || results.length === 0) {
    return <div className="container results center"><h4>No Results</h4></div>
  }

  return (
    <div className="container results">
      {results.map(result => <MovieResult result={result} key={result.imdbID}/>)}
    </div>
  )
}

function App() {
  const lastQuery = useSelector(state => state.query)
  const results = useSelector(state => state.results)
  const relatedResults = results[lastQuery] || []

  return (
    <div className="App">
      <div className="container">
        <h2>Search for movie from OMDB:</h2>
        <SearchBar />
        <br/>
        <SelectPreviousResults />
      </div>
      <Results results={relatedResults}/>
    </div>
  );
}

export default App;
