import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {listItems: initialTodosList}

  onDeleteItem = id => {
    const {listItems} = this.state

    const filteredList = listItems.filter(eachUser => eachUser.id !== id)
    this.setState({listItems: filteredList})
    console.log('onDeleteItem() is triggered')
  }

  render() {
    const {listItems} = this.state

    return (
      <div className="bg1">
        <div className="bg2">
          <h1 className="heading">Simple Todos</h1>
          <ul className="list">
            {listItems.map(eachTodo => (
              <TodoItem
                tit={eachTodo.title}
                details={eachTodo}
                onDeleteItem={this.onDeleteItem}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
