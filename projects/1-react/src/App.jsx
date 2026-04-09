import { useState } from 'react';
import './index.css';

import TodoInput from './components/input';
import TodoItem from './components/item';
import Placeholder from './components/placeholder';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const incompleteTodo = todos.filter((todo) => !todo.complete).length;

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function filterTodo(todos, filter) {
    if (filter === 'completed') {
      return todos.filter((todo) => todo.complete);
    } else if (filter === 'incomplete') {
      return todos.filter((todo) => !todo.complete);
    } else {
      return todos;
    }
  }

  const filterTodos = filterTodo(todos, filter);

  return (
    <div className="w-100 border rounded-xl overflow-hidden">
      <div className="text-sm text-white p-2 border-b text-center">
        남은 할 일:{' '}
        <span className="text-red-400 font-semibold">{incompleteTodo}</span>개
      </div>
      <div className="flex justify-center gap-6 border-b p-2 text-sm">
        <button
          onClick={() => setFilter('incomplete')}
          className={`${
            filter === 'incomplete'
              ? 'text-blue-400 font-bold underline underline-offset-4'
              : 'text-gray-400'
          }`}
        >
          미완료
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`${
            filter === 'completed'
              ? 'text-blue-400 font-bold underline underline-offset-4'
              : 'text-gray-400'
          }`}
        >
          완료
        </button>
      </div>

      <div className="max-h-100 overflow-y-auto">
        {todos.length === 0 ? (
          <Placeholder />
        ) : (
          filterTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>

      <TodoInput onAdd ={addTodo} />
    </div>
  );
}

export default App;
