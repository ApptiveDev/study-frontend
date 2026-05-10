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
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="w-100 border rounded-xl overflow-hidden">
        
        {/* 할일 히스트 영역 */}
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
        
        {/* 입력 영역 */}
        <TodoInput onAdd={addTodo} />
      </div>

    </div>
  );
}

export default App;
