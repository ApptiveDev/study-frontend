import { useState, useEffect } from 'react'

function Content(props) {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, { text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddTodo()
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const remainingCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="todo-container">

      <div className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
        />
      </div>

        <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
            <li key={index}>
            <span onClick={() => toggleTodo(index)}>
                {todo.completed ? '☑' : '☐'}
            </span>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
            <button onClick={() => deleteTodo(index)}>⨉</button>
            </li>
        ))}
        </ul>

        {todos.length > 0 && (
        <div className="footer">
            <span>{remainingCount} items left</span>

            <div className="filters">
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            </div>

            <div className="clearCompleted">
            <button onClick={clearCompleted}>Clear completed</button>
            </div>
        </div>
        )}
    </div>
  );
}

export default Content