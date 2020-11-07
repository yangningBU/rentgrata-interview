import MovieResult from './MovieResult'

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

export default Results