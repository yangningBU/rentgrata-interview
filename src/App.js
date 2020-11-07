import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './App.css';

import {UPDATE_QUERY} from './actions'
import {searchMovieBy} from './api'


const SelectPreviousResults = () => {
  const selectedQuery = useSelector(state => state.query)
  const previousResults = useSelector(state => state.results)
  const dispatch = useDispatch()
  const onSelect = () => dispatch({
    type: UPDATE_QUERY,
    query: selectedQuery
  })
  
  if (!selectedQuery) {
    return null
  }

  return (
    <form>
     <select name="previousResults">
      {Object.keys(previousResults).map(key => {
        return <option value={key} defaultValue={selectedQuery === key || null} onSelect={onSelect}>{key}</option>
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
      query
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
  return (
    <div className="container">
      {results.map(result => <MovieResult result={result} key={result.imdbID}/>)}
    </div>
  )
}

function App() {
  const lastQuery = useSelector(state => state.query)
  //const dropdownSelection = useSelector(state => state.dropdown)
  const results = useSelector(state => state.results)
  //const index = dropdownSelection || lastQuery
  const relatedResults = results[lastQuery] || []

  return (
    <div className="App">
      <h2>Search for movie info from OMDB:</h2>
      <SelectPreviousResults />
      <SearchBar />
      <Results results={relatedResults}/>
    </div>
  );
}

export default App;
