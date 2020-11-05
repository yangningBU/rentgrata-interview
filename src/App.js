import {useSelector, useDispatch} from 'react-redux'

import logo from './logo.svg';
import './App.css';
import {UPDATE_QUERY} from './actions'


const SearchBar = () => {
  const dispatch = useDispatch()
  const dispatchSearch = (value) => {
    dispatch({
      type: UPDATE_QUERY,
      query: value
    })
  }
  return (
    <div>
      <input onChange={(e) => dispatchSearch(e.target.value)}/>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <p>Current search: {useSelector(state => state.query)}</p>
      </header>
    </div>
  );
}

export default App;
