const MovieResult = ({result}) => {
  const title = result.Title || "Unknown"
  const poster = result.Poster
  const year = result.Year
  return (
    <div>
      <img src={poster} width="100px" alt={title}/>
      <p>{title} ({year})</p>
    </div>
  )
}

export default MovieResult