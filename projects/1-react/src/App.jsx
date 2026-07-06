import { useState } from 'react';
import './index.css';
import Placeholder from './components/placeholder'; // Placeholder 컴포넌트 임포트 (경로 확인 필요)
import Item from './components/item';               // Item 컴포넌트 임포트 (경로 확인 필요)
import Input from './components/input';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    if (!text.trim()) return; // 빈 값 입력 방지
    const newTodo = {
      id : Date.now(), // 고유 ID 생성
      text : text,
      completed : false,
    };
    setTodos([...todos, newTodo]) // 스프레드 연산자로 새 배열 생성
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="w-100 border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
        {todos.length === 0 ? (<Placeholder />) : (todos.map(todo => (<Item key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />)))
        }
      </div>

      <Input onAdd={addTodo} />
    </div>
  );
}

export default App;