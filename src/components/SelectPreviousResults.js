import {useSelector, useDispatch} from 'react-redux'
import {UPDATE_QUERY, NO_SELECTION} from '../constants'

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
      <p>or select from previous searches:</p>
     <select name="previousResults" onChange={(e) => selectPrevious(e)}>
      <option value={NO_SELECTION} selected={selectedQuery === "" || null}>--</option>
      {Object.keys(previousResults).map(key => {
        return <option value={key} key={key} selected={selectedQuery === key || null}>{key}</option>
      })}
     </select>
    </form>
  )
}

export default SelectPreviousResults