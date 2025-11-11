import { useState } from 'react';
import './index.css';
import Placeholder from './components/placeholder';
import TodoInput from './components/input';
import TodoItem from './components/item';

// 여기에 코드를 작성하세요

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    // 여기에 코드를 작성하세요
    todos.push({ id: Date.now(), text, completed: false });
    setTodos([...todos]);
  }

  function toggleTodo(id) {
    // 여기에 코드를 작성하세요
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos([...todos]);
  }

  function deleteTodo(id) {
    // 여기에 코드를 작성하세요
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="w-100 border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
        <TodoInput onAdd={addTodo} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
      {todos.length === 0 && <Placeholder />}
    </div>
  );
}

export default App;
