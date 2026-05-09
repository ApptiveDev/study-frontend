import { useState } from 'react';
import './index.css';

import TodoInput from './components/input';
import TodoItem from './components/item';
import Placeholder from './components/placeholder';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }  

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="w-100 border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
        {todos.length === 0 ? (
          <Placeholder />
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

      <TodoInput onAdd={addTodo} />
    </div>
  );
}

export default App;
