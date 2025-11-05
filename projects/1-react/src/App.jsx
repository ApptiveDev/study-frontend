import { useState } from 'react';
import TodoInput from './components/input.jsx';
import TodoItem from './components/item.jsx';
import './index.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 공부하기', completed: false },
    { id: 2, text: 'TODO List 만들기', completed: true },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1 className="title">📝 Todo List</h1>

        <div className="stats">
          <span>전체: {todos.length}</span>
          <span>남은 할 일: {activeTodos}</span>
          <span>완료: {todos.length - activeTodos}</span>
        </div>

        <TodoInput onAdd={addTodo} />

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">할 일이 없습니다! 🎉</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
