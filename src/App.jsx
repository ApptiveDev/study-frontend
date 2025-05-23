import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const addTodo = (e) => {
    if (e.key === 'Enter' && newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const allCompleted = todos.length > 0 && todos.every(todo => todo.completed);
  const toggleAll = () => {
    const updated = todos.map(todo => ({ ...todo, completed: !allCompleted }));
    setTodos(updated);
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <div className="input-wrapper">
            <button
  className={`toggle-all ${allCompleted ? 'active' : ''}`}
  onClick={toggleAll}
>
  ❯
</button>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={addTodo}
              autoFocus
            />
          </div>
        </header>

        {todos.length > 0 && (
          <section className="main">
            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <label>{todo.title}</label>
                    <button className="destroy" onClick={() => deleteTodo(todo.id)} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {todos.length > 0 && (
          <footer className="footer">
            <span className="todo-count">
              <strong>{todos.filter((t) => !t.completed).length}</strong> item left
            </span>
            <ul className="filters">
              <li><a href="#/" onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>All</a></li>
              <li><a href="#/active" onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Active</a></li>
              <li><a href="#/completed" onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Completed</a></li>
            </ul>
            <button
              className="clear-completed"
              style={{ visibility: todos.some(todo => todo.completed) ? 'visible' : 'hidden' }}
              onClick={clearCompleted}
            >
              Clear completed
            </button>
          </footer>
        )}
      </section>

      <p className="info">
        Double-click to edit a todo<br />
        Created by <a href="https://github.com/remojansen/">Remo H. Jansen</a><br />
        Part of <a href="https://todomvc.com/">TodoMVC</a>
      </p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);