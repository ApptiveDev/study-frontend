import { useState } from 'react';
import Placeholder from './components/placeholder';
import TodoInput from './components/todo-input';
import TodoItem from './components/todo-item';
import type { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    const newtodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    };

    setTodos((previous) => [...previous, newtodo]);
  }

  function toggleTodo(id: string) {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id: string) {
    setTodos((previous) => previous.filter((todo) => todo.id !== id));
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
