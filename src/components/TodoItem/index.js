// Write your code here
import './index.css'

const TodoItem = props => {
  const {tit, details, onDeleteItem} = props

  const {id} = details

  const onDelItem = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="listItems">
        <p className="para">{tit}</p>

        <button type="button" className="button" onClick={onDelItem}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
