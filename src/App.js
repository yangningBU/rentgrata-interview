import {useSelector} from 'react-redux'

import SearchBar from './components/SearchBar'
import SelectPreviousResults from './components/SelectPreviousResults'
import Results from './components/Results'

import './App.css';

function App() {
  const lastQuery = useSelector(state => state.query)
  const results = useSelector(state => state.results)
  const relatedResults = results[lastQuery] || []

  return (
    <div className="App">
      <div className="container">
        <h2>Search for a movie title from OMDB:</h2>
        <SearchBar />
        <br/>
        <SelectPreviousResults />
      </div>
      <Results results={relatedResults}/>
    </div>
  );
}

export default App;
