import { useState } from 'react';
import { ArrowUp, Check } from 'lucide-react';
import './index.css';

function Placeholder() {
  return (
    <div className="p-4 text-gray-400">
      할 일이 없습니다.
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="w-100 border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
        {todos.length === 0 ? (
          <Placeholder />
        ) : (
        todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          className="flex items-stretch border-b hover:bg-gray-100/10 transition-colors cursor-pointer"
        >
          <span
            className= "flex items-center gap-2 px-4 py-3">
            <span className="w-5 h-5 flex items-center justify-center">
              {todo.completed && (
                <span className="w-5 h-5 bg-white border border-gray-300 rounded-md flex items-center justify-center">
                  <Check size={15} className="text-black" strokeWidth={3} />
                </span>
              )}
            </span>
            {todo.text}
          </span>
          <button
            className="ml-auto w-18 text-red-500 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}
          >
            삭제
          </button>
        </div>
      ))
        )}
      </div>
      {<div className='flex justify-center items-center gap-2 p-4 border-t'>
        <input
          className='w-80 h-15 border rounded-lg px-4 py-2 focus:outline-none focus:ring-0'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='할 일을 입력하세요...'
        />
        <button
          disabled={!input.trim()}
          onClick={() => {
            addTodo(input);
            setInput('');
          }}
          className={
            input.trim()
              ? 'w-8 h-8 bg-white rounded-full shadow flex items-center justify-center transition-opacity hover:bg-gray-200'
              : 'w-8 h-8 bg-white rounded-full shadow flex items-center justify-center opacity-40 cursor-not-allowed transition-opacity'
          }
        >
          <ArrowUp size={20} className="text-black" />
        </button>
      </div>}
    </div>
  );
}

export default App;
