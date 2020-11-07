import {useState} from 'react'
import {useDispatch} from 'react-redux'

import {searchMovieBy} from '../api'
import {UPDATE_QUERY, NO_SELECTION} from '../constants'

const SearchBar = () => {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch({
      type: UPDATE_QUERY,
      query: query.toLowerCase().trim() || NO_SELECTION
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

export default SearchBar