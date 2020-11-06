import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './App.css';

import {UPDATE_QUERY} from './actions'
import {searchMovieBy} from './api'


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
      <input onChange={(e) => setQuery(e.target.value)}/>
      <button type="button" onClick={submitSearch}>Search</button>
    </form>
  )
}

const Results = () => {
  const lastQuery = useSelector(state => state.query)
  const results = useSelector(state => state.results)
  const relatedResults = results[lastQuery] || []

  return (
    <ul>
      {relatedResults.map(result => <li>{JSON.stringify(result)}</li>)}
    </ul>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Search for movie info from OMDB:</h2>
        <SearchBar />
        <Results />
      </header>
    </div>
  );
}

export default App;
