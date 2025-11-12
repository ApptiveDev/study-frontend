import { useState } from 'react';
import './index.css';
import Placeholder from './components/placeholder';

function InputForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-t p-4">
      <div className="w-5 h-5 mr-4"></div>

      <input
        type="text"
        className="flex-grow outline-none bg-transparent"
        placeholder="새로운 할 일을 입력하세요..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="text-red-500 hover:text-red-700 font-bold ml-4 px-2 py-1"
      >
        추가
      </button>
    </form>
  );
}

function TodoList({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-400 transition-colors">
      <input
        type="checkbox"
        className="mr-4 w-5 h-5 accent-blue-500"
        checked={todo.complete}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        className={`flex-grow text-white ${
          todo.complete ? 'line-through text-blue-400' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 font-bold ml-4 px-2 py-1 transition-colors"
      >
        삭제
      </button>
    </div>
  );
}

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
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
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
            <TodoList
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>

      <InputForm addTodo={addTodo} />
    </div>
  );
}

export default App;
