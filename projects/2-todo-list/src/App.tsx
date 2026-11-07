import { useState } from 'react';
import type { Todo } from './types';

import TodoInput from './components/todo-input';
import TodoItem from './components/todo-item';
import Placeholder from './components/placeholder';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    // 여기에 코드를 작성해 주세요
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function toggleTodo(id: string) {
    // 여기에 코드를 작성해 주세요
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  }

  function deleteTodo(id: string) {
    // 여기에 코드를 작성해 주세요
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="w-100 bg-white border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
        {todos.length === 0 ? (
          <Placeholder />
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))
        )}
      </div>

      <TodoInput onAdd={addTodo} />
    </div>
  );
}

export default App;
